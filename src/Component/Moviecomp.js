import React from "react";
import "./Moviecomp.css";

const Moviecomp = (props) => {
  const imgStyle = {
    width: "150px",
    height: "200px",
    margin: 'auto',
    marginBottom: '0px',
  };
  const {Poster,Title,Year,Type,imdbID} = props.movie;
  return (
    <>
    
      <div className="card MainCont" onClick={()=>props.setselected(imdbID)}>
        <img
          src={Poster}
          style={imgStyle}
          className="card-img-top"
          alt="MoviePoster"
        />
          <div className="MovieDes">
            <span><b>{Title}</b></span>
            <span>{Year}</span>
            <span>{Type}</span>
          </div>
      </div>
    </>
  );
};

export default Moviecomp;
