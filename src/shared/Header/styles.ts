import styled, { css } from 'styled-components'

interface IProsStyle {
  active: boolean
}

export const Container = styled.div`
  height: 50px;
  background-color: #2c2e57;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const Top = styled.span<IProsStyle>`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;

  ${(props) =>
    props.active &&
    css`
      background: #6a16ad;
      color: #fff;
    `}

  :hover {
    background: #782db5;
    color: #fff;
  }

  :last-child {
    margin-right: 50px;
  }
`

export const ImgContainer = styled.div`
  img {
    width: 150px;
    height: 80px;
    margin-left: 50px;
  }
`

export const Content = styled.div`
  display: flex;
  height: 100%;
  column-gap: 20px;
`
