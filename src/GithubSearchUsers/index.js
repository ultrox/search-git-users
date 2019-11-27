import React from 'react'
import {SearchStyle} from '../styles'

const PLACEHOLDER = 'Search for users'

function GithubSearchUsers() {
  return (
    <SearchStyle>
      <input
        type="search"
        spellCheck="false"
        autocapitalization="none"
        autoComplete="off"
        autoCorrect="off"
        placeholder={PLACEHOLDER}
      />
    </SearchStyle>
  )
}

export default GithubSearchUsers
