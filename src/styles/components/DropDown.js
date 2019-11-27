import styled from 'styled-components'

export const DropDown = styled.div`
  border-top: 1px solid #ebecf1;
  padding-top: 2rem;
`
export const DropDownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  text-decoration: none;
  color: #4f4f4f;
  width: 50px;
  height: 50px;
  &:hover {
    background-color: #ebecf1;
  }
`

export const ItemAvatar = styled.div`
  border-radius: 100%;
  border: 2px solid #ebecf1;
  display: block;
`

export const ItemUsername = styled.div`
  margin-left: 2rem;
  text-decoration: none;
`
