
import React from 'react';

import booking from '../../../assest/images/lowdiposite.png'
import thumb from '../../../assest/images/thumb.png'
import pay from '../../../assest/images/pay.png'
import time from '../../../assest/images/switch.png'
import offer from '../../../assest/images/percentage_65.png'
import flexible from '../../../assest/images/flexible.png'
import refund from '../../../assest/images/refund.png'
import hotels from '../../../assest/images/hotel_34.png'

function Booking() {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className=' col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                            <h1 className='why_book'>Why Book With Us?</h1>
                            <p className='service_our'>Discover why our personalised service, expert planning, and unbeatable service<br></br> value make every trip extraordinary.</p>
                        </div>
                    </div>

                    <div className='row row_12'>
                        <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3'>
                            <div className='background'>
                                <div className='low_diposit-2'>
                                    <div>
                                        <img className='booking_img' src={booking} />
                                        <h5 className='easy_1'>Low Diposit</h5>
                                        <p className='easy_2'>Block Holiday $60 Per Person</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3'>
                            <div className='background_2'>
                                <div className='low_diposit-2'>
                                    <div>
                                        <img className='booking_img' src={thumb} />
                                        <h5 className='easy_1'>Best Price</h5>
                                        <p className='easy_2'>Cheaper Elsewhere Holiday</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3'>
                            <div className='background_3'>
                                <div className='low_diposit-2'>
                                    <div>
                                        <img className='booking_img' src={pay} />
                                        <h5 className='easy_1'>Easy Pay</h5>
                                        <p className='easy_2'>Paying In The Instalments</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3'>
                            <div className='background_4'>
                                <div className='low_diposit-2'>
                                    <div>
                                        <img className='booking_img' src={time} />
                                        <h5 className='easy_1'>Switch Anytime</h5>
                                        <p className='easy_2'>28 Days Before Departure</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3'>
                            <div className='background_5'>
                                <div className='low_diposit-3'>
                                    <div>
                                        <img className='booking_img' src={offer} />
                                        <h5 className='easy_1'>Offer & Discounts</h5>
                                        <p className='easy_2'>Limit Lass Offers And Discount</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3'>
                            <div className='background_6'>
                                <div className='low_diposit-3'>
                                    <div>
                                        <img className='booking_img' src={flexible} />
                                        <h5 className='easy_1'>Flexible Flight</h5>
                                        <p className='easy_2'>28 Days Before Departure</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3'>
                            <div className='background_7'>
                                <div className='low_diposit-3'>
                                    <div>
                                        <img className='booking_img' src={refund} />
                                        <h5 className='easy_1'>Refund Guarantee</h5>
                                        <p className='easy_2'>Cancel Up To 60 Days Before</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3'>
                            <div className='background_8'>
                                <div className='low_diposit-3'>
                                    <div>
                                        <img className='booking_img' src={hotels} />
                                        <h5 className='easy_1'>1000 Of Hotels</h5>
                                        <p className='easy_2'>Discover Your Best Choose</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Booking
