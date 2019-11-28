import React, {useState} from 'react'
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

function GithubSearchUsers() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [activeUserIndex, setActiveUserIndex] = useState(-1)
  // 1. Make custom hook
  // 2. Never send empty input
  // 3. provide loading, error & results hook
  // 4. refactor to use Reducer

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
    // make sure searchQuery exists
    if (debouncedQuery.length > 2) {
      setError(null)
      setLoading(true)
      getGithubUsers(debouncedQuery)
        .then(users => {
          setUsers(users.items)
          setLoading(false)
        })
        .catch(error => {
          setError(error)
          setLoading(false)
          setUsers([])
        })
    } else {
      setUsers([])
    }
  }, [debouncedQuery])

  return (
    <>
      <SearchStyle>
        <input
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
      {users.length !== 0 && (
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
