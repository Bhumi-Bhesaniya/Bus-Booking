import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Home from './screen/Home/Home';

import Booking from './screen/Home/HomeComponent/Booking.jsx';
import Package from './screen/Home/HomeComponent/Package.jsx'
import Budget from './screen/Home/HomeComponent/Budget.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';





function App() {
  return (
    <>
      <Header />
      <Home />
      <Booking/>
      <Package />
      <Budget />
      <Footer />
    </>
  );
}

export default App;
