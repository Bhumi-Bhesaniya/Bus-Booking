


import flite from '../../assest/images/flite.jpg'
import umbrella from '../../assest/images/umbrella.png'
import hotel from '../../assest/images/5star.jpg'
import car from '../../assest/images/car.jpg'
import Header from '../../components/Header/Header'

function Home() {
    return (
        <>
            <Header />
            
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='air_plane'>
                                <h1>Discover Millions Of Affordable Flights</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9 section_4'>

                            <img className="flite" src={flite} />
                            Flight

                            <img className='umbrella' src={umbrella} />
                            Packages

                            <img className="hotel" src={hotel} />
                            Hotels

                            <img className="car" src={car} />
                            cars

                            <div>
                                <label>
                                    <input type='radio' name='value' value="Roundtrip" /> Roundtrip
                                </label>

                                <label>
                                    <input type='radio' name='value' value="One Way" /> One Way
                                </label>

                                <label>
                                    <input type='radio' name='value' value="Multi-city" /> Multi-city
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
                            </div>

                            {/* <div className='tish_uttu'>
                <div>
                  DAC
                </div>
                <div>
                  <p>Dhaka</p>
                  <p>gjsdhfikjioejfvo</p>
                </div> 
              </div>*/}
                        </div>
                    </div>
                </div>



            </section>


        </>
    );
}

export default Home;
