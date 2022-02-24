import styled, { css } from 'styled-components'

interface IStyledInput {
  active?: boolean
}

export const Container = styled.div`
  flex: 1;
  display: flex;
  position: relative;
`

export const StyledInput = styled.input<IStyledInput>`
  width: 250px;
  height: 60px;
  border-radius: 2px;
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
  box-sizing: border-box;
  transition: all ease 0.2s;
  padding: 0 20px;
  padding-left: 20px;
  ${(props) =>
    props.active &&
    css`
      border: 1px solid #fff;
    `};

    ::placeholder {
      color: #fff;
    }
`
