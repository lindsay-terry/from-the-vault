import { Outlet } from 'react-router-dom';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
// import './App.css'

function App() {

  return (
    <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default App
