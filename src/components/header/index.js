import React from 'react'
import { Link } from "gatsby"

import './index.css'

export const Header = () => (
    <div className='header'>
    <Link
    to={`/tags`}
    className='tag_header'
  >
    <span>
      TAG
    </span>
  </Link>
    {/* <Link
    to={`/tags`}
    className='tag_header'
  >
    <span>
      LIGHT
    </span>
  </Link> */}
    </div>
)