import React, {useState, useRef} from 'react'
import {
  SearchStyle,
  DropDown,
  DropDownItem,
  ItemAvatar,
  ItemUsername,
  DropDownTitle,
} from '../styles'

import {getGithubUsers, keepInRange, genGitProfileUrl} from '../utils'
import useDebouncer from './useDebounce'

const PLACEHOLDER = 'Search for users'
const ERROR_MESSAGE = 'Please try again later!!'
const LOADING_MESSAGE = 'Loading..'

/**
 * Number String → Boolean
 */

function canShowDropdown(userLength, input) {
  return userLength > 0 && input
}

function GithubSearchUsers() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [activeUserIndex, setActiveUserIndex] = useState(-1)

  const inputRef = useRef()
  const debouncedQuery = useDebouncer(searchQuery)

  function handleKeyboardControles(e) {
    const keyMap = {13: 'Enter', 40: 'DOWN', 38: 'UP'}
    const maxRangeKeysGo = users.length - 1
    // preventing anoying cursor movment when UP/DOWN
    if (keyMap[e.keyCode]) {
      e.preventDefault()
    }
    // down
    if (e.keyCode === 40) {
      const val = keepInRange(activeUserIndex + 1, maxRangeKeysGo)
      setActiveUserIndex(val)
    }
    // down
    if (e.keyCode === 38) {
      const val = keepInRange(activeUserIndex - 1, maxRangeKeysGo)
      setActiveUserIndex(val)
    }
    if (e.keyCode === 13) {
      const {login} = users[activeUserIndex]
      window.location.href = genGitProfileUrl(login)
    }
  }

  React.useEffect(() => {
    inputRef.current.focus()
  }, [])

  React.useEffect(() => {
    // make sure searchQuery exists
    if (debouncedQuery) {
      setError(null)
      setLoading(true)
      getGithubUsers(debouncedQuery)
        .then(users => {
          setUsers(users.items)
        })
        .catch(error => {
          setError(error)
          setUsers([])
          console.error(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [debouncedQuery])

  return (
    <>
      <SearchStyle>
        <input
          ref={inputRef}
          value={searchQuery}
          onKeyDown={e => handleKeyboardControles(e)}
          onChange={e => setSearchQuery(e.target.value)}
          type="search"
          spellCheck="false"
          autocapitalization="none"
          autoComplete="off"
          autoCorrect="off"
          placeholder={PLACEHOLDER}
        />
      </SearchStyle>
      {error && (
        <DropDown>
          <DropDownItem error>{ERROR_MESSAGE}</DropDownItem>
        </DropDown>
      )}

      {loading && (
        <DropDown>
          <DropDownTitle>{LOADING_MESSAGE}</DropDownTitle>
        </DropDown>
      )}
      {canShowDropdown(users.length, searchQuery) && (
        <DropDown>
          <DropDownTitle>Users</DropDownTitle>
          {users.map((user, index) => {
            return (
              <DropDownItem
                highlighted={index === activeUserIndex}
                key={user.id}
                href={genGitProfileUrl(user.login)}
              >
                <ItemAvatar src={user.avatar_url} />
                <ItemUsername>{user.login}</ItemUsername>
              </DropDownItem>
            )
          })}
        </DropDown>
      )}
    </>
  )
}

export default GithubSearchUsers
