import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'

const App = () => {
  return (
    <>
    <Navbar />
    <Body text='Texto1' />
    <Body text='Texto2' />
    <Body text='Texto3' />
    </>
  )
}

export default App;