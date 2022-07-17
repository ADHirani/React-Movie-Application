import React from "react";
import { useState } from "react";
import axios from "axios";
import Moviecomp from "./Moviecomp";
import './Moviecomp.css'
import DetailedMovie from "./DetailedMovie";
import Navbar from "./Navbar";

export const apikey = '10918e'
const searchDiv={
    width: '440px',
    display: 'flex',
    justifyContent: 'end',
    backgroundColor: 'white',
    padding:'0px',
    borderRadius: '10px',
    marginTop: '20px',
}
const imgStyle = {
  width: "25px",
  margin: "8px",
  alignItem: "center",
  backgroundColor: 'white',
}
const searchInput ={
    margin: '0%',
    border: '0px',
    width: '400px',
    height: '35px',
    marginTop: '3px',
    marginRight: '5px',
}

const Movies = () => {
    const [searchMovie, setsearchMovie] = useState()
    const [timeoutID, settimeoutID] = useState()
    const [movieList, setmovieList] = useState()
    const [selected, setselected] = useState()

    const changeSearchBox=(e)=>{
      clearTimeout(timeoutID);
      setsearchMovie(e.target.value)
      settimeoutID(setTimeout(()=>{
          fetchdata(e.target.value)
      },700))
  }

    const fetchdata=async (searchString)=>{
        const responce=await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${searchString}`)
        setmovieList(responce.data.Search)
        console.log(responce);
    }
  return (
    <>
    <Navbar />
      <div style={searchDiv} className='container'>
        <img src="/search.png" alt="Search" style={imgStyle} />
        <input
          style={searchInput}
          value={searchMovie}
          onChange={changeSearchBox}
          type="textbox"
          className="inputBox"
          placeholder="Search movie here"
        />
      </div>
      {selected && <DetailedMovie selected={selected} />}
      <div className="container d-flex my-4 ManageDiv">
        {
           movieList?.length ? movieList.map((mov, ind)=><Moviecomp key={ind} movie={mov} setselected={setselected} />) : <div className="text-secondary" style={{width:'auto', margin: 'auto'}}>No movie searched</div>
        }
        </div>
    </>
  );
};

export default Movies;
