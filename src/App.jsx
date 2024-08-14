import Nav from './components/Nav/index.jsx'
import ContentArea from './components/ContentArea/index.jsx'
import Food from './components/Food/index.jsx'
import BestService from './components/BestServices/index.jsx'
import AboutService from './components/AboutService/index.jsx'
import Cards from './components/Cards/index.jsx'
import Offers from './components/Offers/index.jsx'
import Footer from './components/Footer/index.jsx'

function App() {
  return (
    <div className="App">
      <Nav />
      <ContentArea />
      <Food />
      <BestService />
      <AboutService />
      <Cards />
      <Offers />
      <Footer />
    </div>
  )
}

export default App
