import React from 'react'
import {GenericStyles, AppWrapper, MainWrapper, MainTitle} from './styles'
import GithubSearchUsers from './GithubSearchUsers'

function App() {
  return (
    <AppWrapper>
      <GenericStyles />
      <MainTitle>Search For GitHub Users</MainTitle>
      <MainWrapper>
        <GithubSearchUsers />
      </MainWrapper>
    </AppWrapper>
  )
}

export default App
