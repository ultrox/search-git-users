import React from 'react'
import {
  SearchStyle,
  DropDown,
  DropDownItem,
  ItemAvatar,
  ItemUsername,
} from '../styles'

const PLACEHOLDER = 'Search for users'

function GithubSearchUsers() {
  return (
    <>
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
      <DropDown>
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
