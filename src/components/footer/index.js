import React from 'react'
import PropTypes from 'prop-types'


import './index.css'

export const Footer = ({gitUrl}) => {
    console.log(`${gitUrl}`)
    return (
    <div
    className='footer_container'
    >
        <a href={`${gitUrl}`} 
           target="_blank" 
           rel="noopener noreferrer"
        >
            Github
        </a>
    </div>
)}

Footer.propTypes = {
    gitUrl: PropTypes.string.isRequired,
}