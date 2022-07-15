import React from 'react'
import Feature from './Feature'
import Navbar from './Navbar'
const About = () => {
  return (
    <>
    <Navbar />
    <Feature feature_itself='Features' title='All The Movies' description='This application shows all the movies which is made till the date of today. You can search Latest movie released.' />
    <Feature title='IMDB Rating' description='Each movie has their imdb rating and you can see all detail about imdb rating by click on Movie which you want to know imdb rating.' />
    <Feature title='All Actors' description='There is a Name of all actors who worked on that movie on you click.' />
    <Feature title='Movie Type' description='Also you can see the type of movie like Dramma movie, Action movie or Science friction etc.' />
    <Feature title='Release Date/Runtime' description='This application shows Date of Release of movie and runtime of movie which mean you can find the length of movie.' />
    <Feature title='Not Only Movie' description='It not only shows Movies also shows Series, Music or other things also like recreated movies etc.' />
    <Feature title='Box-Office Collection' description='You can see box office collection also in this website or application.' />
    </>
  )
}

export default About;