import styled from 'styled-components'
import MdIcon from '../src/shared/Mdicon'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  position: relative;
  margin-top: 50px;
`

export const TimerContainer = styled.div`
  width: 100%;
  display: flex;
  img {
    width: 100%;
  }
`
export const BoxContainerWithButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 325px;
  right: 100px;
`

export const InviteButton = styled.button`
  margin-top: 35px;
  width: 200px;
  height: 50px;
  color: #ffffff;
  font-size: 18px;
  background-color: #6a16ad;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: #5f139b;
  }
`

export const TimerBox = styled.div``

export const Box = styled.div`
  width: 100%;
  display: flex;
  column-gap: 20px;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;

    span {
      font-size: 22px;
      color: #fff;
      font-weight: bold;
    }
  }
`

export const BoxContainer = styled.div`
  width: 140px;
  height: 100px;
  border: 4px solid #6a16ad;
  border-radius: 10px;
  font-size: 60px;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  img {
    width: 100%;
  }
`
export const FormContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  border: 4px solid #6a16ad;
  background-color: #6a16ad;
  border-radius: 10px;
  width: 550px;
  top: 90px;
  right: 50px;
  padding: 20px 20px 40px 20px;
  box-shadow: rgba(106, 22, 173, 0.4) 5px 5px, rgba(106, 22, 173, 0.3) 10px 10px,
    rgba(106, 22, 173, 0.2) 15px 15px, rgba(106, 22, 173, 0.1) 20px 20px,
    rgba(106, 22, 173, 0.05) 25px 25px;

  button {
    width: 200px;
    height: 50px;
    color: #6a16ad;
    font-size: 18px;
    background-color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    :hover {
      background-color: #f4f4f4;
    }
  }
`

export const InputContent = styled.div`
  display: flex;
  row-gap: 20px;
  align-items: center;
  justify-content: center;
  column-gap: 25px;
  flex-wrap: wrap;
`

export const Title = styled.h1`
  color: #fff;
  font-weight: bold;
  line-height: 25px;
  text-align: center;
  font-size: 24px;
  margin: 0;
  padding: 0 30px;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`

export const Label = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  margin: 10px 0;
  /* identical to box height, or 100% */

  text-align: center;

  color: #fff;
`

export const TermContainer = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: center;
  align-items: center;
`

export const Text = styled.span`
  color: #fff;
`

export const Term = styled.span`
  color: #0000ee;
  cursor: pointer;
`

export const StyledIcon = styled(MdIcon)``

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #2c2e57;
  height: 100px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  div {
    display: flex;
    column-gap: 10px;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 150px;
    height: 80px;
  }

  span {
    color: #fff;
    font-size: 18px;
    font-weight: 20px;
  }
`
