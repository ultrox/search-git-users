import React from 'react'
import {GenericStyles, AppWrapper, MainWrapper} from './styles'
import GithubSearchUsers from './GithubSearchUsers'

function App() {
  return (
    <AppWrapper>
      <GenericStyles />
      <MainWrapper>
        <GithubSearchUsers />
      </MainWrapper>
    </AppWrapper>
  )
}

export default App
