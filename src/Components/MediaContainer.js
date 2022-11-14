import React from 'react'


function MediaContainer({title, url, media_type, explanation, date} ){
    return <div className='image-container'>
        <h1>{title}</h1>
        <p>Date of capture: {date}</p>

        {/*Checks media type to ensure the proper html element is returned*/}
        {media_type === 'image' ?
            (<img className='image' src={url} alt={title}/>) :

            (<video className='video' controls autoPlay>
                    <source src={url} type='video/mp4'></source>
                    Video playback isn't supported in your browser.
            </video>)
        }
        <p>{explanation}</p>
    </div>

}

export default MediaContainer;