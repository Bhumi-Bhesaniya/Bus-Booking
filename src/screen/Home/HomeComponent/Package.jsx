import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import flite from '../../../assest/images/plan.png';
import hotel from '../../../assest/images/hotel.png';
import nature from '../../../assest/images/nature.jpg';
import butterfly from '../../../assest/images/Butterfly.jpg'
import plane from '../../../assest/images/plane.jpeg';
import horse from '../../../assest/images/Horse.jpg';
import bag from '../../../assest/images/bag.png';
import car from '../../../assest/images/car.png';
import trip from '../../../assest/images/Holiday.webp'
import natural from '../../../assest/images/women_work_2.jpg'
import nature2 from '../../../assest/images/man_work.jpg'


const MyCarousel = () => {
    const options = {
        loop: false,
        nav: true,
        dots: false,

        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            990: {
                items:3
            },
            3000: {
                items: 3
            }
        }
    };

    

    const holidayPackages = [
        {
            image: nature,
            discount: 'Save 20%',
            title: 'Last Minute Holiday',
            flightImage: flite,
            hotelImage: hotel,
            baggage: '25kg',
            transport: 'Transit',
            price: '450',
            // viewHolidayLink: '/nature-getaway'
        },
        {
            image: plane,
            discount: 'Save 20%',
            title: 'Last Minute Holiday',
            flightImage: flite,
            hotelImage: hotel,
            baggage: '25kg',
            transport: 'Transit',
            price: '589',
            // viewHolidayLink: '/city-adventure'
        },
        {
            image: horse,
            discount: 'Save 20%',
            title: 'Last Minute Holiday',
            flightImage: flite,
            hotelImage: hotel,
            baggage: '25kg',
            transport: 'Transit',
            price: '399',
            // viewHolidayLink: '/country-escape'
        },
        {
            image: trip,
            discount: 'Save 20%',
            title: 'Last Minute Holiday',
            flightImage: flite,
            hotelImage: hotel,
            baggage: '25kg',
            transport: 'Transit',
            price: '450',
            // viewHolidayLink: '/nature-getaway'
        },
        {
            image: butterfly,
            discount: 'Save 20%',
            title: 'Last Minute Holiday',
            flightImage: flite,
            hotelImage: hotel,
            baggage: '25kg',
            transport: 'Transit',
            price: '450',
            // viewHolidayLink: '/nature-getaway'
        }]

    return (
        <>
            <section>
                <div className='container your_next_23'>
                    <div className="row">
                        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                            <h2 className='popular_98'>Popular Package For Your Holidays</h2>
                            <p className='ppopular_exp_77'>Explore our top vacation packages designed to offer unforgettable experiences and unbeatable value.</p>
                        </div>
                    </div>

                    <div className='row'>
                        <OwlCarousel className='owl-theme' {...options}>
                            {holidayPackages.map((pack, index) => (
                                <div className='col-xl-4 col-lg-4 col-md-6  col-sm-12   card_55 item  card_card_89' key={index}>
                                    <div className="card" id='card_card'>
                                        <img src={pack.image} className="nature" alt={pack.title} />
                                        {pack.discount && <button className='button_btn'>{pack.discount}</button>}

                                        <div className="card-body  card_body_2">
                                            <h4 className="card-title  title_title">{pack.title}</h4>
                                            <div className='flight_2 title_2_title'>
                                                <div className='flite_98 '>
                                                    <img src={pack.flightImage} alt="Flight" />
                                                    <p className='hotel_hotel_34'>Flights</p>
                                                </div>
                                                <div className='flight_2'>
                                                    <img className="hotel_98" src={pack.hotelImage} alt="Hotel" />
                                                    <p className='hotel_hotel_34'>Hotel</p>
                                                </div>
                                                <div className='flight_2'>
                                                    <img className="bag" src={bag} alt="Baggage" />
                                                    <p className='hotel_hotel_34'>{pack.baggage}</p>
                                                </div>
                                                <div className='flight_2'>
                                                    <img className="car_98" src={car} alt="Transport" />
                                                    <p className='hotel_hotel_34'>{pack.transport}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="footer_person">
                                            <p className='from_per_person'>from <span className='dolor_509'>$509</span>/per person </p>
                                            <button className='viewholiday_2'>View Holiday</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </section>



            <section>
                <div id="carouselExampleIndicators" className="container carousel slide ">
                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    {/* <img src={tigger} className="slider" alt="..." /> */}
                                    <div className='tigger'>
                                        <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 lorem_p'>
                                            <h1 className='paragraph_22'> Akureyri Iceland </h1>
                                            <p className='paragraph_23'>
                                                Discover Akureyri in North Iceland , located just below the Arctic Circle you'll surrounded by snow-capped mountains , majestic fjords and breathtaking waterfalls.
                                            </p>
                                            <button className='paragraph_24'>Find Out More</button>
                                        </div>
                                        <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={nature2} className="slider" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={natural} className="slider" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default MyCarousel;
