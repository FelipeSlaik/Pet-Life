import Nav from './components/Nav/index.jsx'
import ContentArea from './components/ContentArea/index.jsx'
import FoodArea from './components/FoodArea/index.jsx'
import BestService from './components/BestServices/index.jsx'
import AboutService from './components/AboutService/index.jsx'
import Cards from './components/Cards/index.jsx'

function App() {
  return (
    <div className="App">
      <Nav />
      <ContentArea />
      <FoodArea />
      <BestService />
      <AboutService />
      <Cards />
    </div>
  )
}

export default App
