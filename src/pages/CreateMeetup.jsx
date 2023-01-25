import { useState } from 'react'
import '../App.css'

export function CreateMeetUp({createMeetup}) {

    const [formData, setFormData] = useState({
        title: '',
        image: '',
        author: '',
        description: '',
        favorite: false,
    })

    function handleSubmit(e){
        e.preventDefault()
        const meetupData = {
            urlToImage: formData.image,
            title: formData.title,
            author: formData.author,
            description: formData.description,
        }
        createMeetup(meetupData)

        setFormData({
            title: '',
            image: '',
            author: '',
            description: '',
        })
    }

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevData => ({...prevData, [name]: value}))
    }

    return(
        <div className="formWrapper">
            <div className="formContent">
                <div>
                    <h1 className='formTitle'>Add New Meetup</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <h1 className="meetupTitle">Meetup Title</h1>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                    <h1 className="meetupImage">Meetup Image (URL) </h1>
                    <input type="text" name="image" value={formData.image} onChange={handleChange} />
                    <h1 className="meetupAuthor">Meetup Author</h1>
                    <input type="text" name="author" value={formData.author} onChange={handleChange} />
                    <h1 className="meetupDescription">Meetup Description</h1>
                    <input className='inputDesc' type="text" name="description" value={formData.description} onChange={handleChange} />
                    <div className="buttonContainer">
                        <button className='addButton'>Add Meetup</button>
                    </div>
                </form>
            </div>
        </div>
    )
}