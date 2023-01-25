import MeetupCard from '../components/MeetupCard'
import React from 'react'

export function Favorites(props){

    const favoriteMeetups = props.favorites.map((favorite, index) => {
        return <MeetupCard 
            id={index}
            urlToImage={favorite.urlToImage}
            title={favorite.title}
            author={favorite.author}
            description={favorite.description}
            handleClick={favorite.handleClick}
        />
    })

    const emptyPage = (
        <h1>No Favorites....</h1>
    )

    const favoritesFound = (
        <>
            <h1>My Favorites</h1>
            {favoriteMeetups}
        </>
    )

    // if favorites.length is 0, then show no favorites. else show favoritemeetups

    return(
        <div className="favoriteContent">
            {props.favorites.length === 0 ? emptyPage : favoritesFound}
        </div>
    )
}