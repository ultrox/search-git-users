import React, {useState} from 'react'
import {
  SearchStyle,
  DropDown,
  DropDownItem,
  ItemAvatar,
  ItemUsername,
  DropDownTitle,
} from '../styles'

const PLACEHOLDER = 'Search for users'

function GithubSearchUsers() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <>
      <SearchStyle>
        <input
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          type="search"
          spellCheck="false"
          autocapitalization="none"
          autoComplete="off"
          autoCorrect="off"
          placeholder={PLACEHOLDER}
        />
      </SearchStyle>
      <DropDown>
        <DropDownTitle>Users</DropDownTitle>
        <DropDownItem
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ultrox"
        >
          <ItemAvatar src="https://api.adorable.io/avatars/79/abott1@adorable.png" />
          <ItemUsername>marko</ItemUsername>
        </DropDownItem>
        <DropDownItem
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ultrox"
        >
          <ItemAvatar src="https://api.adorable.io/avatars/79/abott6@adorable.png" />
          <ItemUsername>marko</ItemUsername>
        </DropDownItem>
      </DropDown>
    </>
  )
}

export default GithubSearchUsers
