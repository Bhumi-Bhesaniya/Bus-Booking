
import easy from '../../assest/images/easy.webp'
import flite from '../../assest/images/plan.png'
import umbrella from '../../assest/images/umbrella_2.png'
import hotel from '../../assest/images/hotel.png'
import lines from '../../assest/images/3lines.png'
import men from '../../assest/images/men.png'
import car from '../../assest/images/car.png'

function Header() {
    return (
        <>
            <header>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text_test" >
                            <p className='travel_holiday'>HOLIDAYS TRAVEL UP TO OCT 25 SAVE UP TO $200 ON HOLIDAYS , TRAVEL UP TO OCT 25 SAVE UP TO $200 ON HOLIDAYS , TRAVEL UP TO OCT 25 SAVE UP TO $200 ON HOLIDAY HOLIDAYS TRAVEL UP.</p>
                        </div>
                    </div>
                </div>

                <section className='header_section'>
                    <div className='container'>
                        <div className='row row_row_23'>
                            <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
                                <div className='flight_2'>
                                    <img className="easy" src={easy} />
                                    <p className='easy_holidays'>holidays</p>
                                </div>
                            </div>
                            <div className='col-md-5 col-xl-5'>
                                <div className='flight_2 header_h'>
                                    <div className='flight_2'>
                                        <img className="flite" src={flite} />
                                        <p className='flight_hotel'>Flight</p>
                                    </div>
                                    <div className='flight_2'>
                                        <img className='umbrella' src={umbrella} />
                                        <p className='flight_hotel'>Packages</p>
                                    </div>
                                    <div className='flight_2'>
                                        <img className="hotel" src={hotel} />
                                        <p className='flight_hotel'>Hotels</p>
                                    </div>
                                    <div className='flight_2'>
                                        <img className="car" src={car} />
                                        <p className='flight_hotel'>Cars</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-xl-4 header_text'>
                                <div className='flight_2'>
                                    <div>
                                        <img className='lines_lines' src={lines} />
                                    </div>
                                    <div>
                                        <img className='men' src={men} />
                                    </div>
                                    <select className='guj_english'>
                                        <option className='en_guj'>EN</option>
                                        <option>Guj</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>



        </>
    );
}

export default Header;
