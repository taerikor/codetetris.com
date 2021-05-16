import React from 'react'
import { css } from "@emotion/react"
import _ from 'lodash'
import { Link } from "gatsby"

const Tag = ({name}) => {
    return (
    <div 
    css={css`
    display:inline-block;
    margin-right: 20px;
    `}
    >
        <Link to={`/tag/${_.kebabCase(name)}/`}>{name}</Link>
    </div>
    )
    }

export default Tag;