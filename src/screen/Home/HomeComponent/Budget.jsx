import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




import moon from '../../../assest/images/moon.jpg';
import sunlight from '../../../assest/images/sunlight.jpg';
import tree from '../../../assest/images/trees.jpg';
import bird from '../../../assest/images/bird.jpg';
import star from '../../../assest/images/star.png';
import percentage from '../../../assest/images/percentage_12.png';
import comma from '../../../assest/images/comma.png';
import women from '../../../assest/images/women_1.jpg';



// Sample data for budget-friendly packages
// const budgetPackages = [
//     {
//         id: 1,
//         image: sunlight,
//         discount: 10, // Percentage discount
//         discountCode: 'TAKLAMURAD',
//         title: 'Desert Rose Resort',
//         rating: 4.9,
//         price: 560,
//         duration: 7,
//     },
//     {
//         id: 2,
//         image: tree,
//         discount: 15,
//         discountCode: 'TAKLAMURAD',
//         title: 'Desert Rose Resort',
//         rating: 4.7,
//         price: 560,
//         duration: 7,
//     },
//     {
//         id: 3,
//         image: bird,
//         discount: 12,
//         discountCode: 'TAKLAMURAD',
//         title: 'Desert Rose Resort',
//         rating: 4.5,
//         price: 560,
//         duration: 7,
//     },
//     {
//         id: 4,
//         image: moon,
//         discount: 20,
//         discountCode: 'TAKLAMURAD',
//         title: 'Desert Rose Resort',
//         rating: 4.8,
//         price: 560,
//         duration: 7,
//     },
// ];

    const Budget = () => {
        const options = {
            loop: false,
            nav: true,
            dots: false,

            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 4
                },
                3000: {
                    items: 4
                }
            }
        };

    return (
        <>
            <section>
                <div className='container'>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <h1 className='budget_text_45'>Budget Friendly Packages</h1>
                            <p className='enjoy_text_89'>Enjoy incredible experiences with our budget-friendly packages <br></br>tailored for every traveler.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 div_div'>
                            <div className='sunlight_border'>
                                <div class="card card_sunlight">
                                    <img className='sunlight_12' src={sunlight} />
                                    <div className='text_text-13'>
                                        <img className='percentage_23 save_btn' src={percentage} />
                                        <p className='save_btn_2'>Save $100 use code : TAKLAMURAD</p>
                                    </div>
                                    <div className='text_15'>
                                        <h4 className='text_56'>Desert Rose Resort</h4>
                                        <div className='text_15'>
                                            <img className='star_60' src={star} />
                                            <p className='star_61'>4.9</p>
                                        </div>
                                    </div>
                                    <div className='text_night'>
                                        <p>$560</p>
                                        <p className='night_text22'>7 Night</p>
                                    </div>
                                    <button className='btn_view_2'>View Package Detail</button>
                                </div>
                            </div>
                            <div className='card_sunlight_2'>
                                <div class="card card_sunlight">
                                    <img className='sunlight_12' src={tree} />
                                    <div className='text_text-13'>
                                        <img className='percentage_23 save_btn' src={percentage} />
                                        <p className='save_btn_2'>Save $100 use code : TAKLAMURAD</p>
                                    </div>
                                    <div className='text_15'>
                                        <h4 className='text_56'>Desert Rose Resort</h4>
                                        <div className='text_15'>
                                            <img className='star_60' src={star} />
                                            <p className='star_61'>4.9</p>
                                        </div>
                                    </div>
                                    <div className='text_night'>
                                        <p>$560</p>
                                        <p className='night_text22'>7 Night</p>
                                    </div>
                                    <button className='btn_view_3'>View Package Detail</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                            <div className="row">
                                <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 bird_bird'>
                                    <div class="card border_card">
                                        <img className='sunlight_13' src={bird} />
                                        <div className='text_text-12'>
                                            <img className='percentage_23 save_btn' src={percentage} />
                                            <p className='save_btn_2'>Save $100 use code : TAKLAMURAD</p>
                                        </div>
                                        <div className='text_15'>
                                            <h4 className='text_44'>Desert Rose Resort</h4>
                                            <div className='text_15'>
                                                <img className='star_52' src={star} />
                                                <p className='star_51'>4.9</p>
                                            </div>
                                        </div>
                                        <div className='text_night_2'>
                                            <p>$560</p>
                                            <p className='night_text_22'>7 Night</p>
                                        </div>
                                        <button className='btn_view'>View Package Detail</button>
                                    </div>
                                </div>

                                <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 bird_bird'>
                                    <div class="card border_card">
                                        <img className='sunlight_13' src={moon} />
                                        <div className='text_text-12'>
                                            <img className='percentage_23 save_btn' src={percentage} />
                                            <p className='save_btn_2'>Save $100 use code : TAKLAMURAD</p>
                                        </div>
                                        <div className='text_15'>
                                            <h4 className='text_44'>Desert Rose Resort</h4>
                                            <div className='text_15'>
                                                <img className='star_52' src={star} />
                                                <p className='star_51'>4.9</p>
                                            </div>
                                        </div>
                                        <div className='text_night_2'>
                                            <p>$560</p>
                                            <p className='night_text_22'>7 Night</p>
                                        </div>
                                        <button className='btn_view'>View Package Detail</button>
                                    </div>
                                </div>
                               
                                <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                    <div className='budget_23'>
                                        <div>
                                            <button className='explore_btn'>EXPLORE MORE PACKAGE</button>
                                            <h1 className='choose_text'>Choose Your Budget Friendly Packages From $200 To $1200</h1>
                                        </div>
                                        <div>
                                            <button className='btn_view_btn'>View More Packages</button>
                                            <button className='btn_btn_2'>Discount Coupon</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section>
                <div className='container your_next_23'>
                    <div className='row'>
                        <OwlCarousel className='owl-theme my-custom-carousel' {...options}>
                            <div className='col-sm-2 col-md-2 col-lg-2 col-xl-2 trip_22'>
                                <div className=''>
                                    <h1 className='our_customer'>Our Customers Love US</h1>
                                    <div className='average_view'>
                                        <img className='star_23' src={star} />
                                        <p className='star_4'>4.9</p>
                                        <p className='average_78'>Average reviews</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-2 col-md-2 col-lg-2 col-xl-2 trip_22'>
                                <div className='gap_65'>
                                    <p className='amazing_service'>Amazing Service! Our Trip Was Perfectly Organized, And Every Detail Was Taken Care Of. Highly Recommand!</p>
                                    <img className='comma_67' src={comma} />
                                    <div className='women_div'>
                                        <img className='women_12' src={women} />
                                        <p className='santu_mia'>Sentu Mia</p>
                                    </div>
                                    <p className='bangla_45'>Bangladesh</p>
                                </div>
                            </div>
                            <div className='col-sm-2 col-md-2 col-lg-2 col-xl-2 trip_22 '>
                                <div className='gap_66'>
                                    <p className='amazing_service'>Amazing Service! Our Trip Was Perfectly Organized, And Every Detail Was Taken Care Of. Highly Recommand!</p>
                                    <img className='comma_67' src={comma} />
                                    <div className='women_div'>
                                        <img className='women_12' src={women} />
                                        <p className='santu_mia'>Sentu Mia</p>
                                    </div>
                                    <p className='bangla_45'>Bangladesh</p>
                                </div>
                            </div>
                            <div className='col-sm-2 col-md-2 col-lg-2 col-xl-2 trip_22 '>
                                <div className='gap_67'>
                                    <p className='amazing_service'>Amazing Service! Our Trip Was Perfectly Organized, And Every Detail Was Taken Care Of. Highly Recommand!</p>
                                    <img className='comma_67' src={comma} />
                                    <div className='women_div'>
                                        <img className='women_12' src={women} />
                                        <p className='santu_mia'>Sentu Mia</p>
                                    </div>
                                    <p className='bangla_45'>Bangladesh</p>
                                </div>
                            </div>
                            <div className='col-sm-2 col-md-2 col-lg-2 col-xl-2 trip_22 '>
                                <div className='gap_68'>
                                    <p className='amazing_service'>Amazing Service! Our Trip Was Perfectly Organized, And Every Detail Was Taken Care Of. Highly Recommand!</p>
                                    <img className='comma_67' src={comma} />
                                    <div className='women_div'>
                                        <img className='women_12' src={women} />
                                        <p className='santu_mia'>Sentu Mia</p>
                                    </div>
                                    <p className='bangla_45'>Bangladesh</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>



            <section>
                <div className='container your_next_23'>
                    <div className='row your_next_23'>
                        <div className='col-md-12'>
                            <div className='expertly_12'>
                                {/* <img src={frame4}/> */}
                                <h1 className='your_next'>Your Next Adventure Awaits. Join Us And Make Memories Around The Globe!</h1>
                                <p className='expertly_trips'>Expertly crafted trips tailored for you.From hidden gems to iconic landmarksm, we'll handle everything while you create unforgettable memories.</p>
                                <button className='join_btn'>Join With Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Budget;