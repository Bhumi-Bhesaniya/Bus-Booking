

import easy from '../../assest/images/easy.webp'
import flite from '../../assest/images/flite.jpg'
import umbrella from '../../assest/images/umbrella.png'
import hotel from '../../assest/images/5star.jpg'
import lines from '../../assest/images/3-lines.jpeg'
import men from '../../assest/images/men.jpg'
import car from '../../assest/images/car.jpg'

function Header() {
    return (
        <>
            <header>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-md-12 text_test" >
                            <p>HOLIDAYS TRAVEL UP TO OCT 25 SAVE UP TO $200 ON HOLIDAYS , TRAVEL UP TO OCT 25 SAVE UP TO $200 ON HOLIDAYS , TRAVEL UP TO OCT 25 SAVE UP TO $200 ON HOLIDAY.</p>
                        </div>
                    </div>
                </div>
                <div className='container-xxl'>
                    <div className='row '>
                        <div className='col-md-8'>
                            <img className="easy" src={easy} />
                            holidays

                            <img className="flite" src={flite} />
                            Flight

                            <img className='umbrella' src={umbrella} />
                            Packages

                            <img className="hotel" src={hotel} />
                            Hotels

                            <img className="car" src={car} />
                            cars
                        </div>

                        <div className='col-md-4 header_text'>
                            <img className='lines_lines' src={lines} />

                            <img className='men' src={men} />
                            <select>
                                <option>English</option>
                                <option>Gujarati</option>
                            </select>
                        </div>
                    </div>
               </div>
            </header>



        </>
    );
}

export default Header;
