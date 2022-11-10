import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Store } from './pages/Store'
import  Forms  from './pages/Forms'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Store />} />
          <Route path='/store' element={<Store />} />
          <Route path='/form' element={<Forms />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
