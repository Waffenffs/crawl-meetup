import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Link, } from 'react-router-dom'
import React from 'react'
import { Home } from './pages/Home'
import { CreateMeetUp } from './pages/CreateMeetup'
import { Favorites } from './pages/Favorites'
import './App.css'
import './index.css'

export default function App(){
  // only thing left to do is add {remove from favorites} function

  // handle meetups state
  const [meetups, setMeetups] = useState([
    {
        urlToImage: 'https://www.cccc.edu/studentlife/images/headerImages/studentOrgs.jpg',
        title: 'Student Fall Party 2023',
        author: 'OCT Student Organizations',
        description: `It's the time of the year again! Come and join us, this event is open for everyone!`,
        favorite: false,
    },
    {
        urlToImage: 'https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png',
        title: 'National Rick-Rollers Day',
        author: 'R.R. Association',
        description: `Celebrate the legendary Rick Roll with other Rick Rollers!`,
        favorite: false,
    }
  ])

  // store favorite meetups
  const [favorites, setFavorites] = useState([])

  function handleClick(id) {
    const favoriteMeetup = meetups.filter((meetup, index) => index === id)
    setFavorites(prevFavorites => [...prevFavorites, favoriteMeetup[0]])

  }

  // handle the data that comes in from createmeetup
  function createMeetup(data) {
    setMeetups(prevMeetups => [...prevMeetups, data])
  }

  return(
    <main>
      <nav>
        <Link to="/" className='link' id='title'>Crawl</Link>
        <Link to="/" className='link'>All Meetups</Link>
        <Link to="/create-meetup" className='link'>Create Meetup</Link>
        <Link to="/favorites" className='link'>Favorites</Link>
      </nav>
      <Routes>
        <Route path="/" element={ <Home 
          meetups={meetups} 
          handleClick={handleClick}
        /> } />
        <Route path="/create-meetup" element={ <CreateMeetUp 
          createMeetup={createMeetup}
        /> } />
        <Route path="/favorites" element={ <Favorites 
          favorites={favorites}
        /> } />
        <Route path ="/*" element={<h1>Error 404 : Page not Found</h1>} />
      </Routes>
    </main>
  )
}