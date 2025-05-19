
import flite from '../../assest/images/plan.png'
import umbrella from '../../assest/images/umbrella_2.png'
import hotel from '../../assest/images/hotel.png'
import car from '../../assest/images/car.png'
import swap from '../../assest/images/arrow.png'
import search from '../../assest/images/search.png'
import searchicon from '../../assest/images/search_img.png'


function Home() {
    return (
        <>

            {/* Banner Section */}
            
            <section>
                <div className='container'>
                    <div className='row discover_233'>
                        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                            <div className='air_plane'>
                                <h1 className='discover_million'>Discover Millions Of Affordable Flights</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            {/* Booking Details Section */}

            <section>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-sm-10 col-md-10 col-lg-10 col-xl-10  section_4'>
                            <div className='flight_5 packages_home'>
                                <div className='flight_52'>
                                    <img className="flite_sec_2" src={flite} />
                                    <p className='flight_home_2'>Flight</p>
                                </div>

                                <div className='flight_5'>
                                    <img className='umbrella' src={umbrella} />
                                    <p className='flight_home'>Packages</p>
                                </div>

                                <div className='flight_5'>
                                    <img className="hotel" src={hotel} />
                                    <p className='flight_home'>Hotels</p>
                                </div>

                                <div className='flight_5'>
                                    <img className="car" src={car} />
                                    <p className='flight_home'> Cars</p>
                                </div>
                            </div>


                            <div className='input_round'>
                                <label className='input_round_text one_way'>
                                    <input type='radio' name='value' value="1" />
                                    <p className='one_way'> Round Trip</p>
                                </label>

                                <label className='input_round_text one_way'>
                                    <input type='radio' name='value' value="2" />
                                    <p className='one_way'>One Way</p>
                                </label>

                                <label className='input_round_text one_way'>
                                    <input type='radio' name='value' value="3" />
                                    <p className='one_way'> Multi-City</p>
                                </label>
                            </div>

                            <div className='nav_nav'>
                                <div className='posi_tion'>
                                    <nav className='input_text'>
                                        <form className="container-fluid input_text">
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1" >DAC</span>
                                                <input type="text" className="form-control place_holder" placeholder="Dhaka" />
                                            </div>
                                        </form>
                                    </nav>

                                    <nav>
                                        <form className="container-fluid">
                                            <div className="input-group">
                                                <span className="input-group-text" id="basic-addon1" >CXB</span>
                                                <input type="text" className="form-control  place_holder" placeholder="Cox,S Bazar" aria-describedby="basic-addon1" />
                                            </div>
                                        </form>
                                    </nav>

                                    <div className='swap'>
                                        <img className='svg_svg' src={swap} />
                                    </div>
                                </div>

                                <nav>
                                    <form className="container-fluid">
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon1" >09</span>
                                            <input type="text" className="form-control place_holder" placeholder="September" aria-describedby="basic-addon1" />
                                        </div>
                                    </form>
                                </nav>
                                <nav>
                                    <form className="container-fluid">
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon1" >11</span>
                                            <input type="text" color='black' className="form-control place_holder" placeholder="September" aria-describedby="basic-addon1" />
                                        </div>
                                    </form>
                                </nav>
                                <img className='svg_svg_2' src={search} />
                            </div>

                            <div className='next_sec_2'>
                                <div className='label_checkbox'>
                                    <div className='label_checkbox_3'>
                                        <img className='svg_svg_3' src={searchicon} />
                                        <p className='label_checkbox'>Search Preferred Airline</p>
                                    </div>

                                    <label className='label_checkbox_2'>
                                        <input type='checkbox' name='value' value="Roundtrip"  />
                                        <p className='label_checkbox_4'>Return To Or From Another City/Aiport?</p>
                                    </label>

                                    <label className='label_checkbox_2'>
                                        <input type='checkbox' name='value' value="Roundtrip" />
                                        <p className='label_checkbox_4'>Direct Flights</p>
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
