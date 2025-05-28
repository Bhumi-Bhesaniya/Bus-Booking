import React from 'react';

import booking from '../../../assest/images/lowdiposite.png';
import thumb from '../../../assest/images/thumb.png';
import pay from '../../../assest/images/pay.png';
import time from '../../../assest/images/switch.png';
import offer from '../../../assest/images/percentage_65.png';
import flexible from '../../../assest/images/flexible.png';
import refund from '../../../assest/images/refund.png';
import hotels from '../../../assest/images/hotel_34.png';

function Booking() {
    // Array of booking features
    const bookingFeatures = [
        {
            id: 1,
            image: booking,
            title: 'Low Deposit',
            description: 'Block Holiday $60 Per Person',
            className: 'background'
        },
        {
            id: 2,
            image: thumb,
            title: 'Best Price',
            description: 'Cheaper Elsewhere Holiday',
            className: 'background_2'
        },
        {
            id: 3,
            image: pay,
            title: 'Easy Pay',
            description: 'Paying In The Instalments',
            className: 'background_3'
        },
        {
            id: 4,
            image: time,
            title: 'Switch Anytime',
            description: '28 Days Before Departure',
            className: 'background_4'
        },
        {
            id: 5,
            image: offer,
            title: 'Offer & Discounts',
            description: 'Limit Less Offers And Discount',
            className: 'background_5'
        },
        {
            id: 6,
            image: flexible,
            title: 'Flexible Flight',
            description: '28 Days Before Departure',
            className: 'background_6'
        },
        {
            id: 7,
            image: refund,
            title: 'Refund Guarantee',
            description: 'Cancel Up To 60 Days Before',
            className: 'background_7'
        },
        {
            id: 8,
            image: hotels,
            title: '1000 Of Hotels',
            description: 'Discover Your Best Choose',
            className: 'background_8'
        },
    ];

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
                        {bookingFeatures.map(feature => (
                            <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3' key={feature.id}>
                                <div className={feature.className}>
                                    <div className='low_diposit-2'> {/* This class seems consistent, so keeping it */}
                                        <div>
                                            <img className='booking_img' src={feature.image} alt={feature.title} />
                                            <h5 className='easy_1'>{feature.title}</h5>
                                            <p className='easy_2'>{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Booking;