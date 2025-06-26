import easy from '../../assest/images/easy.webp'
import facebook from '../../assest/images/facebook.png'
import insta from '../../assest/images/instagram.png'
import twitter from '../../assest/images/twitter.png'
import images from '../../assest/images/linkedin.png'
import youtube from '../../assest/images/youtube.png'



function Footer() {
    return (
        <>
            <footer className='footer_footer'>
                <div className="container">
                    <div className="row ">
                        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <div>
                                <div className='flight_2'>
                                    <img className="easy_90" src={easy} />
                                    <h4 className='holidays_64'>holidays</h4>
                                </div>
                                <div>
                                    <p className='adventure_12'>Affordable adventures, unforgettable memories-explore with ease.</p>
                                    <p className='follow_78'>FOLLOW US ON HERE:</p>
                                </div>
                                <div className='footer_facebook'>
                                    <div className='facebook_ancker'>
                                        <a href='https://www.facebook.com/makemytrip/'>
                                            <img className='facebook' src={facebook} />
                                        </a>
                                    </div>
                                    <div className='facebook_ancker'>
                                        <a href="https://www.instagram.com/">
                                            <img className='insta' src={insta} />
                                        </a>
                                    </div>
                                    <div className='facebook_ancker'>
                                        <a href="https://x.com/?lang=en">
                                            <img className='twitter' src={twitter} />
                                        </a>
                                    </div>
                                    <div className='facebook_ancker'>
                                        <a href="https://in.linkedin.com/">
                                            <img className='in_image' src={images} />
                                        </a>
                                    </div>
                                    <div className='facebook_ancker'>
                                        <a href="https://www.youtube.com/">
                                            <img className='youtube_98' src={youtube} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                            <div>
                                <h4 className='helpful_links'>HELPFUL LINKS</h4>
                                <p className='help_center_2'>Help Center</p>
                                <p className='help_center'>Special Assistance</p>
                                <p className='help_center'>Download The App</p>
                                <p className='help_center'>Booking Conditions</p>
                            </div>
                        </div>

                        <div className='col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                            <div>
                                <h4 className='helpful_links'>ABOUT US</h4>
                                <p className='help_center_2'>Media Center</p>
                                <p className='help_center'>Investors</p>
                                <p className='help_center'>Modern Slavery Act</p>
                                <p className='help_center'>Team Of Use</p>
                            </div>
                        </div>

                        <div className='col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                            <div>
                                <h4 className='helpful_links'>KEEPING SAFE</h4>
                                <p className='help_center_2'>ATOL Protected</p>
                                <p className='help_center'>Travel Aware</p>
                                <p className='help_center'>FCDO Travel Advice</p>
                                <p className='help_center'>ABTA</p>
                            </div>
                        </div>

                        <div className='col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                            <div>
                                <h4 className='helpful_links'>FIND US</h4>
                                <p className='help_center_2'>Contact Us</p>
                                <p className='help_center'>Group Cookie Notice</p>
                                <p className='help_center'>Privacy And Policy</p>
                                <p className='help_center'>Sitemap</p>
                            </div>
                        </div>

                        <div className='million_89'>
                            <div>
                                <p className='explore_more'>Explore More Holidays And Flights</p>
                            </div>
                            <div>
                                <select className='select_option'>
                                    <option>Holiday Type</option>
                                </select>

                                <select className='option_select-12'>
                                    <option>Holiday Deals</option>
                                </select>

                                <select className='option_select-12'>
                                    <option>Popular Counters</option>
                                </select>

                                <select className='option_select-12'>
                                    <option>Flight Only</option>
                                </select>

                                <select className='option_select-12'>
                                    <option>Top Hotels</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer