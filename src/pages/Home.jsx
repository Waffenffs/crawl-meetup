import React from 'react'
import { useState } from 'react'
import MeetupCard from '../components/MeetupCard'

export function Home(props) {

    const meetupElements = props.meetups.map((meetup, index) => {
        return(
            <MeetupCard 
                id={index}
                urlToImage={meetup.urlToImage}
                title={meetup.title}
                author={meetup.author}
                description={meetup.description}
                handleClick={props.handleClick}
            />
        )
    })

    return(
        <div className="content">
            {meetupElements}
        </div>
    )
}