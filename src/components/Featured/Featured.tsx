import React from 'react'
import { MainButton, SecondaryButton } from '../common/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import './Featured.css'


interface props {
    imageURL:string
    title:string
    description:string
}

const Featured:React.FC<props> = ({imageURL, title, description}) => {
    return (
        <div className='featured'>
            <div className='image-container'>
                <img src={imageURL} alt={title} />
            </div>
            <div className='caption'>
                <h1 className='title'>{title}</h1>
                <p className='description'>{description}</p>
                <div className='functions'>
                    <MainButton handler={() => alert("PLAY")}>
                        <FontAwesomeIcon icon={faPlay} color='black'/>
                        Play
                    </MainButton>
                    <SecondaryButton handler={() => alert("INFO")}>
                        <FontAwesomeIcon icon={faCircleInfo} color='white'/>
                        More info
                    </SecondaryButton>
                </div>
            </div>
        </div>
    );
}

export default Featured