const {REACT_APP_GITHUB_TOKEN} = process.env
const PER_PAGE = 8
/**
 * String → Promise
 * asyncronously get data from github
 */
function fetchFromGithub(endpoint) {
  const NO_TOKEN_ERR = 'There is no GITHUB TOKEN!'
  const RESPONSE_NOT_OK = 'Fetching from Github faild!'

  if (!REACT_APP_GITHUB_TOKEN) {
    return Promise.reject(new Error(NO_TOKEN_ERR))
  }
  return fetch(endpoint, {
    headers: {
      Authorization: `token ${REACT_APP_GITHUB_TOKEN}`,
    },
  }).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      return Promise.reject(new Error(RESPONSE_NOT_OK))
    }
  })
}

/**
 * String Intager → Promise
 * makes query to github to fetch user based on q
 * ASSUME: q must be login name of user
 */

function getGithubUsers(q, per_page = PER_PAGE) {
  function genFetchUserQuery(query) {
    const BASE_URL = 'https://api.github.com/search/users'
    const QUERY = `?q=${query}+in:login&type=User`
    const OTHER = `?page=1&per_page=${per_page}`

    return BASE_URL + QUERY + OTHER
  }
  return fetchFromGithub(genFetchUserQuery(q))
}

/**
 * Number Number → Number
 */

function keepInRange(n, max) {
  if (n >= max) {
    return max
  }
  if (n <= 0) {
    return 0
  }
  return n
}

/**
 * String → String
 * given `username` returns properly formated github profile
 */
function genGitProfileUrl(username) {
  return `https://github.com/${username}`
}

export {fetchFromGithub, getGithubUsers, keepInRange, genGitProfileUrl}
