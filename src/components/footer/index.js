import React from 'react'
import { rhythm } from '../../utils/typography'
import PropTypes from 'prop-types'

import './index.css'

export const Footer = ({title}) => (
    <div
    className='footer_container'
    >
        ©{title} All rights reserved
    </div>
)

Footer.propTypes = {
    title: PropTypes.string.isRequired,
}