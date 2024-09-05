import About from "./component/About/About"
import Banner from "./component/Banner/Banner"
import Card from "./component/Card/Card"
import Footer from "./component/Footer/Footer"
import Gallary from "./component/Gallary/Gallary"
import Header from "./component/Header/Header"
import Menu from "./component/Menu/Menu"
import ReviewCarosol from "./component/ReviewCarosol/ReviewCarosol"
import Reviews from "./component/Reviews/Reviews"
import Service from "./component/Service/Service"
// import ReviewsCarosol from "./component/Reviews/ReviewsCarosol"


function App() {


  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Menu></Menu>
      {/* <Gallary></Gallary> */}

      <Card></Card>

      <Service></Service>

      <Reviews></Reviews>
      {/* <ReviewsCarosol></ReviewsCarosol> */}
      <ReviewCarosol></ReviewCarosol>
      <Footer></Footer>
    </>
  )
}

export default App
