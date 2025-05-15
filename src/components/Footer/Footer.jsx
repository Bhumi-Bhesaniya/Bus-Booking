import easy from '../../assest/images/easy.webp'
import facebook from '../../assest/images/facebook.png'
import insta from '../../assest/images/insta.png'
import twitter from '../../assest/images/twitter.png'
import images from '../../assest/images/In.png'
import youtube from '../../assest/images/youtube.png'



function Footer() {
    return (
        <>
            <footer className='footer_footer'>
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4">
                            <div>
                                <div className='flight_2'>
                                    <img className="easy_90" src={easy} />
                                    <h4 className='holidays_64'>holidays</h4>
                                </div>
                                <div>
                                    <p className='adventure_12'>Affordable adventures, unforgettable memories to explore with ease to the easy.</p>
                                    <p className='follow_78'>FOLLOW US ON HERE:</p>
                                </div>
                                <div>
                                    <img className='facebook' src={facebook} />
                                    <img className='insta' src={insta} />
                                    <img className='twitter' src={twitter} />
                                    <img className='in_image' src={images} />
                                    <img className='youtube_98' src={youtube} />
                                </div>
                            </div>
                        </div>

                        <div className='col-md-2'>
                            <div>
                                <h4 className='helpful_links'>HELPFUL LINKS</h4>
                                <p className='help_center_2'>Help Center</p>
                                <p className='help_center'>Special Assistance</p>
                                <p className='help_center'>Download The App</p>
                                <p className='help_center'>Booking Consitions</p>
                            </div>
                        </div>

                        <div className='col-md-2'>
                            <div>
                                <h4 className='helpful_links'>ABOUT US</h4>
                                <p className='help_center_2'>Media Center</p>
                                <p className='help_center'>Investors</p>
                                <p className='help_center'>Modern Slavery Act</p>
                                <p className='help_center'>Team Of Use</p>
                            </div>
                        </div>

                        <div className='col-md-2'>
                            <div>
                                <h4 className='helpful_links'>KEEPING SAFE</h4>
                                <p className='help_center_2'>ATOL Protected</p>
                                <p className='help_center'>Travel Aware</p>
                                <p className='help_center'>FCDO Travel Advice</p>
                                <p className='help_center'>ABTA</p>
                            </div>
                        </div>

                        <div className='col-md-2'>
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