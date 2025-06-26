import React, { useRef } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import comma from '../../../assest/images/comma.png';
import women from '../../../assest/images/women_1.jpg';
import star from '../../../assest/images/star.png';
import previous from '../../../assest/images/previousicon.png'
import next from '../../../assest/images/nexticon.png'



const CustomerReview = () => {

    const carouselRef = useRef(null);
    const options = {
        loop: false,
        nav: false,
        dots: false,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            3000: {
                items: 3
            }
        }
    }
    const goToPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };

    const goToNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const customerReviews = [
        {
            id: 1,
            review: "Amazing Service! Our Trip Was Perfectly Organized, And Every Detail Was Taken Care Of. Highly Recommend!",
            name: "Sentu Mia",
            country: "Bangladesh",
            image: women,
        },
        {
            id: 2,
            review: "Amazing Service! Our Trip Was Perfectly Organized, And Every Detail Was Taken Care Of. Highly Recommend!",
            name: "Sentu Mia",
            country: "Bamgladesh",
            image: women,
            backgroundColor: '#f2f7fd'
        },
        {
            id: 3,
            review: "Amazing Service! Our Trip Was Perfectly Organized, And Every Detail Was Taken Care Of. Highly Recommend!",
            name: "Sentu Mia",
            country: "Bangladesh",
            image: women,
            backgroundColor: '#f4f9f3'
        },
        {
            id: 4,
            review: "Amazing Service! Our Trip Was Perfectly Organized, And Every Detail Was Taken Care Of. Highly Recommend!",
            name: "Sentu Mia",
            country: "Bangladesh",
            image: women,
            backgroundColor: '#ececfe'
        },
        {
            id: 5,
            review: "Amazing Service! Our Trip Was Perfectly Organized, And Every Detail Was Taken Care Of. Highly Recommend!",
            name: "Sentu Mia",
            country: "Bangladesh",
            image: women,
            backgroundColor: '#f7e6ec'
        },
    ];


    return (
        <>
            <section>
                <div className='container your_next_23'>
                    <div className='row our_customer_row'>

                        <div className=' col-3  trip_22'>
                            <div className=''>
                                <div>
                                    <h1 className='our_customer'>Our Customers Love US</h1>
                                </div>
                                <div className='average_view'>
                                    <img className='star_23' src={star} />
                                    <p className='star_4'>4.9</p>
                                    <p className='average_78'>Average reviews</p>
                                </div>
                                <div className="carousel-nav-buttons  " style={{ marginTop: '20px' }}>
                                    <button className='owl_carousel_btn' onClick={goToPrev}>
                                        <img src={previous}/>
                                    </button>
                                    <button className='owl_carousel_btn_2' onClick={goToNext}>
                                       <img src={next}/>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className=' col-9 '>
                            <div className="row">
                                <OwlCarousel className='owl-theme my-custom-carousel' {...options} ref={carouselRef}>
                                    {customerReviews.map((review) => (
                                        <div className='col-sm-12  trip_22' key={review.id}>
                                            <div className='gap_65' style={{ backgroundColor: review.backgroundColor }}>
                                                <p className='amazing_service'>{review?.review || "-"}</p>
                                                <div className='comma_67'>
                                                    <img className='comma' src={comma} />
                                                </div>
                                                <div className='women_div'>
                                                    <img className='women_12' src={women} />
                                                    <p className='santu_mia'>{review?.name}</p>
                                                </div>
                                                <p className='bangla_45'>{review?.country}</p>
                                            </div>
                                        </div>
                                    ))}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='row your_next_24'>
                        <div className='col-md-12'>
                            <div className='expertly_12'>
                                {/* <img src={frame4}/> */}
                                <h1 className='your_next'>Your Next Adventure Awaits. Join Us And Make Memories Around The Globe!</h1>
                                <p className='expertly_trips'>Expertly crafted trips tailored for you. From hidden gems to iconic landmarksm, we'll handle everything while you create unforgettable memories.</p>
                                <button className='join_btn'>Join With Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CustomerReview