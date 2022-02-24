import React from 'react'
import { Container, Top, ImgContainer, Content } from './styles'
import logo from '../../asset/Img/LOGO.png'

export const Header: React.FC = () => {
  return (
    <Container>
      <ImgContainer>
        <img id="logo" alt="logo" src={`${logo}`} />
      </ImgContainer>
      <Content>
        <Top
          active={window.location.href === '/#first'}
          onClick={() => (window.location.href = '#first')}
        >
          LANÇAMENTO
        </Top>
        <Top
          active={window.location.href === '/#second'}
          onClick={() => (window.location.href = '#second')}
        >
          GANHE
        </Top>
        <Top
          active={window.location.href === '/#thirty'}
          onClick={() => (window.location.href = '#thirty')}
        >
          CONHEÇA
        </Top>
        <Top
          active={window.location.href === '/#fourty'}
          onClick={() => (window.location.href = '#fourty')}
        >
          TIME
        </Top>
        <Top
          active={window.location.href === '/#five'}
          onClick={() => (window.location.href = '#five')}
        >
          CADASTRO
        </Top>
      </Content>
    </Container>
  )
}
