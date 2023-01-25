import React from 'react'
import '../App.css'
import '../index.css'

export default function MeetupCard(props) {

    return(
        <article>
            <div className="imageContainer">
                <img src={props.urlToImage} alt='invalid image' />
            </div>
            <div className="content">
                <h1 className='title'>{props.title}</h1>
                <h3 className='author'>{props.author}</h3>
                <p className='description'>{props.description}</p>
                <button className='favoriteButton' onClick={() => props.handleClick(props.id)}>To Favorites</button>
            </div>
        </article>
    )
}