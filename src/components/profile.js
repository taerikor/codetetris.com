import { Link } from 'gatsby'
import React from 'react'

export default function Profile({ author }) {
    console.log()
    return (
        <div>
        <span>개발 공부 정리 노트</span>
        <br />
        <span>By <Link to='/about'>{author}</Link> </span>
        </div>
    )
  }
