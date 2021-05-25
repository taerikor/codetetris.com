import React from 'react'
import { rhythm } from '../../utils/typography'

import './index.css'

export const Footer = ({title}) => (
    <div
    className='footer_container'
    style={{
        paddingTop: rhythm(5),
    }}
    >
        ©{title} All rights reserved
    </div>
)