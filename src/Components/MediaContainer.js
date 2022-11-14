import React from 'react'
import './MediaContainer.css'
import Typewriter from "typewriter-effect";


function MediaContainer({title, url, media_type, explanation, date} ){
    return <div className='media-container'>
        <div className='media-title'>
            {/* check title load before rendering */}
            { title != null ?
            <Typewriter
                onInit={(typewriter)=> {
                    typewriter
                        .typeString("Astronomy Media of the Day")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString(title)
                        .start();
                }}
            />: <></> }
       </div>
       <div className='media-information'>
           <p><strong>Date:</strong> {date}</p>
           <p><strong>Explanation:</strong> {explanation}</p>
       </div>

        {/*Checks media type to ensure the proper html element is returned*/}
        {media_type === 'image' ?
            (<img className='media-image' src={url} alt={title}/>) :

            (<video className='media-video' controls autoPlay>
                    <source src={url} type='video/mp4'></source>
                    Video playback isn't supported in your browser.
            </video>)
        }

    </div>

}

export default MediaContainer;