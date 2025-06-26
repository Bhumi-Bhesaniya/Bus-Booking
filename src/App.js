import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './assest/responsive/responsive.css'
import Home from './screen/Home/Home';
import Booking from './screen/Home/HomeComponent/Booking.jsx';
import Budget from './screen/Home/HomeComponent/Budget.jsx';
import CustomerReview from './screen/Home/HomeComponent/CustomerReview.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import MyCarousel from './screen/Home/HomeComponent/Package.jsx';



function App() {
  return (
    <>
      <Header />
      <Home />
      <Booking/>
      <MyCarousel />
      <Budget />
      <CustomerReview />
      <Footer />
    </>
  );
}

export default App;
