import axios from "axios";
import React,{useEffect,useState} from "react";
import { apikey } from "./Movies";
const DetailedMovie = (props) => {

  const [movieinfo, setmovieinfo] = useState()
  const {selected} = props;

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=${apikey}&i=${selected}`)
    .then((responce)=>{
      setmovieinfo(responce.data)
    })
  }, [selected])
  

  const mainDiv = {
    width: '70%',
    backgroundColor: 'white',
    boxShadow: '2px 3px 4px 0px grey',
    borderRadius: '10px',
    margin: 'auto',
    marginTop: '50px',
    transition: '0.5s',
    padding: '15px',
  }

  const imgDiv ={
    width: "250px",
    height: "270px",
    marginBottom: '0px',
    marginLeft: '10px',
    marginRight: '10px',
    boxShadow: '2px 3px 4px 0px #aaa',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
  }

  const desDiv = {
    marginLeft: '10px',
    display: 'block',
    fontSize: '14px',
  }

  const imgStyle = {
    width: "180px",
    height: "250px",
    margin: 'auto',
    marginBottom: '0px',

  };
  

  return (
    <>
    <div className="container d-flex" style={mainDiv}>
    <div style={imgDiv}><img src={movieinfo?.Poster} style={imgStyle} alt='MoviePoster' /></div><div style={desDiv}>
      <h4>{movieinfo?.Title}</h4>
      <div><b>Actors : </b><span className="text-secondary">{movieinfo?.Actors}</span></div>
      <div><b>Director : </b><span className="text-secondary">{movieinfo?.Director}</span></div>
      <div><b>Writer : </b><span className="text-secondary">{movieinfo?.Writer}</span></div>
      <div><b>Country : </b><span className="text-secondary">{movieinfo?.Country}</span></div>
      <div><b>Release : </b><span className="text-secondary">{movieinfo?.Released}</span></div>
      <div><b>IMDB-Rating : </b><span className="text-secondary">{movieinfo?.imdbRating + "/10"}</span></div>
      <div><b>Movie-Type : </b><span className="text-secondary">{movieinfo?.Genre}</span></div>
      <div><b>BoxOffice-Collection : </b><span className="text-secondary">{movieinfo?.BoxOffice}</span></div>
      <div><b>Runtime : </b><span className="text-secondary">{movieinfo?.Runtime}</span></div>
      <div><b>Description : </b><span className="text-secondary">{movieinfo?.Plot}</span></div>
    </div>
    </div>  
    </>
  );
};

export default DetailedMovie;
