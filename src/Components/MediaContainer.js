import React from 'react'
import './MediaContainer.css'


function MediaContainer({title, url, media_type, explanation, date} ){
    return <div className='media-container'>
        <h1>{title}</h1>
        <p>Date of capture: {date}</p>

        {/*Checks media type to ensure the proper html element is returned*/}
        {media_type === 'image' ?
            (<img className='media-image' src={url} alt={title}/>) :

            (<video className='media-video' controls autoPlay>
                    <source src={url} type='video/mp4'></source>
                    Video playback isn't supported in your browser.
            </video>)
        }
        <p>{explanation}</p>
    </div>

}

export default MediaContainer;