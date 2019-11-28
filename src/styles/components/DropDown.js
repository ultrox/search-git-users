import styled from 'styled-components'
import {colors} from '../settings'

const DropDown = styled.div`
  border-top: 1px solid #ebecf1;
  padding-top: 2rem;
`

const DropDownItem = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  text-decoration: none;
  color: ${colors.gray[600]};
  &:hover {
    background-color: #ebecf1;
  }
`

const ItemAvatar = styled.img`
  border-radius: 100%;
  border: 2px solid #ebecf1;
  width: 5rem;
  height: 5rem;
  display: block;
`

const ItemUsername = styled.p`
  margin-left: 2rem;
  text-decoration: none;
`
const DropDownTitle = styled.h2`
  margin: 0;
  padding: 0 1rem 0.5rem;
  text-transform: uppercase;
  font-size: 1.3rem;
  color: ${colors.gray['500']};
`
export {DropDownTitle, DropDown, DropDownItem, ItemAvatar, ItemUsername}
