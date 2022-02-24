import React, { useState } from 'react'
import {
  Container,
  TimerContainer,
  BoxContainer,
  TimerBox,
  Box,
  BoxContainerWithButton,
  InviteButton,
  FormContainer,
  Label,
  InputContainer,
  InputContent,
  FormContent,
  Title,
  TermContainer,
  Term,
  Text,
  StyledIcon,
  Footer
} from './styles'
import Timer from 'react-compound-timer'
import firstBoxImg from '../src/asset/Img/topLadingPageLeed.png'
import secondBoxImg from '../src/asset/Img/4LadingPageLeed.png'
import thirtyBoxImg from '../src/asset/Img/SecondLadingPageLeed.png'
import fourtyBoxImg from '../src/asset/Img/3LadingPageLeed.png'
import FiveBoxImg from '../src/asset/Img/5LadingPageLeed.png'
import logo from '../src/asset/Img/LOGO.png'
import './App.css'
import { useFormik } from 'formik'
import { Input } from '../src/shared/Input'
import { Modal } from '../src/shared/Modal'
import { Header } from '../src/shared/Header'
import { mdiFacebook, mdiInstagram, mdiWhatsapp } from '@mdi/js'

function App() {
  const date = new Date('2021-09-15T10:00:00')
  const today = new Date()
  const dif = date.getTime() - today.getTime()
  const dateResult = dif
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      gameId: '',
      email: '',
      birthDate: '',
      document: '',
      plataform: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <div className="App">
      <Header />
      <Container>
        <TimerContainer id="first">
          <img alt="1" src={`${firstBoxImg}`} />
          <BoxContainerWithButton>
            <TimerBox>
              <Timer initialTime={dateResult} direction="backward">
                {() => (
                  <Box>
                    <div>
                      <BoxContainer>
                        <Timer.Days />
                      </BoxContainer>
                      <span>Dias</span>
                    </div>
                    <div>
                      <BoxContainer>
                        <Timer.Hours />
                      </BoxContainer>
                      <span>Horas</span>
                    </div>
                    <div>
                      <BoxContainer>
                        <Timer.Minutes />
                      </BoxContainer>
                      <span>Minutos</span>
                    </div>
                    <div>
                      <BoxContainer>
                        <Timer.Seconds />
                      </BoxContainer>
                      <span>Segundos</span>
                    </div>
                  </Box>
                )}
              </Timer>
            </TimerBox>
            <InviteButton
              type="button"
              onClick={() => (window.location.href = '#five')}
            >
              Se inscrever
            </InviteButton>
          </BoxContainerWithButton>
        </TimerContainer>
        <img id="second" alt="2" src={`${secondBoxImg}`} />
        <img id="thirty" alt="3" src={`${thirtyBoxImg}`} />
        <img id="fourty" alt="4" src={`${fourtyBoxImg}`} />
        <FormContainer onSubmit={formik.handleSubmit}>
          <FormContent>
            <Title>Faça o seu pré-cadastro para ter acesso ao BETA:</Title>

            <InputContent>
              <InputContainer>
                <Label>Nome</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nome Completo"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </InputContainer>
              <InputContainer>
                <Label>E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="E-mail"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </InputContainer>
              <InputContainer>
                <Label>Data de nascimento</Label>
                <Input
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  onChange={formik.handleChange}
                  value={formik.values.birthDate}
                />
              </InputContainer>
              <InputContainer>
                <Label>CPF</Label>
                <Input
                  id="document"
                  name="document"
                  type="text"
                  placeholder="CPF"
                  onChange={formik.handleChange}
                  value={formik.values.document}
                />
              </InputContainer>
              <InputContainer>
                <Label>Game ID</Label>
                <Input
                  id="gameId"
                  name="gameId"
                  type="text"
                  placeholder="Game ID (Activision)"
                  onChange={formik.handleChange}
                  value={formik.values.gameId}
                />
              </InputContainer>
              <InputContainer>
                <Label>Plataforma</Label>
                <Input
                  id="plataform"
                  name="plataform"
                  type="text"
                  placeholder="Plataforma"
                  onChange={formik.handleChange}
                  value={formik.values.plataform}
                />
              </InputContainer>
            </InputContent>
            <TermContainer>
              <input type="checkbox" className="regular-checkbox" />
              <Text>
                Eu aceito o{' '}
                <Term onClick={() => setModalIsOpen(true)}>
                  Termo de Privacidade
                </Term>
              </Text>
            </TermContainer>
            <button type="submit">Cadastrar</button>
          </FormContent>
          <img id="five" alt="5" src={`${FiveBoxImg}`} />
        </FormContainer>
        <Modal
          isOpen={modalIsOpen}
          view
          onClose={() => setModalIsOpen(false)}
        />
        <Footer>
          <div>
            <StyledIcon
              onClick={() =>
                (window.location.href =
                  'https://www.facebook.com/RoomMadeLeague/')
              }
              size={2}
              color="#fff"
              icon={mdiFacebook}
            />
            <StyledIcon
              onClick={() =>
                (window.location.href =
                  'https://www.instagram.com/roommadeleague/')
              }
              size={2}
              color="#fff"
              icon={mdiInstagram}
            />
          </div>
          <div>
            <img id="logo" alt="logo" src={`${logo}`} />
          </div>
          <div>
            <StyledIcon size={2} color="#fff" icon={mdiWhatsapp} />
            <span>(11) 93025-5768</span>
          </div>
        </Footer>
      </Container>
    </div>
  )
}

export default App
