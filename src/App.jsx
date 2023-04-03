import Boda from './components/Boda/Boda'
import MainPage from './components/MainPage/MainPage'
import Navbar from './components/Navbar/Navbar'
import Nosotros from './components/Nosotros/Nosotros'
import SecondImage from './components/Parallax/SecondImage'
import ThirdImage from './components/Parallax/ThirdImage'
import Mapa from './components/Mapa/Mapa'
import Registro from './components/Registro/Registro'
import Regalo from './components/Regalo/Regalo'

function App() {
  return (
    <div>
      <Navbar />
      <MainPage />
      <Nosotros />
      <SecondImage />
      <Boda/>
      <Mapa/>
      <ThirdImage/>
      <Registro />
      {/* <Regalo/> */}
    </div>
  )
}

export default App
