import React, {useState} from 'react'
import {
  SearchStyle,
  DropDown,
  DropDownItem,
  ItemAvatar,
  ItemUsername,
  DropDownTitle,
} from '../styles'

import {getGithubUsers} from '../utils'
import useDebouncer from './useDebounce'

const PLACEHOLDER = 'Search for users'

function GithubSearchUsers() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(false)
  // 1. Make custom hook
  // 2. Never send empty input
  // 3. provide loading, error & results hook
  // 4. refactor to use Reducer

  const debouncedQuery = useDebouncer(searchQuery)

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
          <DropDownItem>Something is Wrong</DropDownItem>
        </DropDown>
      )}

      {loading && (
        <DropDown>
          <DropDownTitle>Loading...</DropDownTitle>
        </DropDown>
      )}
      {users.length !== 0 && (
        <DropDown>
          <DropDownTitle>Users</DropDownTitle>
          {users.map(user => {
            return (
              <DropDownItem
                key={user.id}
                target="_blank"
                rel="noopener noreferrer"
                href={`https://github.com/${user.login}`}
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
