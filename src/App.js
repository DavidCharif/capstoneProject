/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import { AppContext } from './Context/Context'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'

function App () {
  return (
    <AppContext>
      <Header>
        <Nav/>
      </Header>
      <Main/>
      <Footer/>
    </AppContext>
  )
}

export default App
