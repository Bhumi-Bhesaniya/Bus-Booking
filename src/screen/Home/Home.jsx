
import flite from '../../assest/images/plan.png'
import umbrella from '../../assest/images/umbrella_2.png'
import hotel from '../../assest/images/hotel.png'
import car from '../../assest/images/car.png'

function Home() {
    return (
        <>
       
            <section>
                <div className='container'>
                    <div className='row discover_233'>
                        <div className='col-sm-12'>
                            <div className='air_plane'>
                                <h1 className='discover_million'>Discover Millions Of Affordable Flights</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-md-10  section_4'>
                            <div className='flight_2 packages_home'>
                                <img className="flite" src={flite} />
                                <p className='flight_home'>Flight</p>

                                <img className='umbrella' src={umbrella} />
                                <p className='flight_home'>Packages</p>

                                <img className="hotel" src={hotel} />
                                <p className='flight_home'>Hotels</p>

                                <img className="car" src={car} />
                                <p className='flight_home'> cars</p>
                            </div>

                            <div className='input_round'>
                                <label className='input_round'>
                                    <input type='radio' name='value' value="Roundtrip" />
                                    <p className='one_way'> Roundtrip</p>
                                </label>

                                <label className='input_round'>
                                    <input type='radio' name='value' value="One Way" /> 
                                    <p className='one_way'>One Way</p>
                                </label>

                                <label className='input_round'>
                                    <input type='radio' name='value' value="Multi-city" />
                                    <p className='one_way'> Multi-city</p>
                                </label>
                            </div>

                            <div className='nav_nav'>
                                <div className='posi_tion'>
                                    <nav>
                                        <form className="container-fluid">
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1" >DAC</span>
                                                <input type="text" className="form-control" placeholder="Dhaka" aria-describedby="basic-addon1" />
                                            </div>
                                        </form>
                                    </nav>

                                    <div className='swap'>
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3" />
                                        </svg>
                                    </div>

                                    <nav>
                                        <form className="container-fluid">
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1" >CXB</span>
                                                <input type="text" className="form-control" placeholder="Cox,S Bazar" aria-describedby="basic-addon1" />
                                            </div>
                                        </form>
                                    </nav>
                                </div>

                                <nav>
                                    <form className="container-fluid">
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon1" >09</span>
                                            <input type="text" className="form-control" placeholder="September" aria-describedby="basic-addon1" />
                                        </div>
                                    </form>
                                </nav>
                                <nav>
                                    <form className="container-fluid">
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon1" >11</span>
                                            <input type="text" color='black' className="form-control" placeholder="September" aria-describedby="basic-addon1" />
                                        </div>
                                    </form>
                                </nav>

                                <svg className="svg_svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>

                            <div>
                                <div>
                                    <svg className='stroke-width' width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_645_899)">
                                            <path d="M21 21L17.5 17.5M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#E16A26" />
                                        </g>
                                    </svg>Search Preferred Airline

                                    <label>
                                        <input type='checkbox' name='value' value="Roundtrip" /> Return To Or From Another City/Aiport
                                    </label>

                                    <label>
                                        <input type='checkbox' name='value' value="Roundtrip" /> Direct Flights
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}

export default Home;
