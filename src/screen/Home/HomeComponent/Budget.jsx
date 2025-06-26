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

const Budget = () => {


    const Budgets = [
        {
            id: 1,
            mainImage: sunlight,
            percentageImage: percentage,
            review: "Save $100 use code: TAKLAMURAD",
            title: "Desert Rose Resort",
            imageUrl: { star },
            rating: "4.9",
            text: "$560",
            night: "7 Night",
            showSaveButton: "View Package Detail",
        },
        {
            id: 2,
            mainImage: bird,
            imageUrl: percentage,
            review: "Save $100 use code: TAKLAMURAD",
            title: "Desert Rose Resort",
            imageUrl: { star },
            rating: "4.9",
            text: "$560",
            night: "7 Night",
            showSaveButton: "View Package Detail",
        },
        {
            id: 3,
            mainImage: tree,
            imageUrl: percentage,
            review: "Save $100 use code: TAKLAMURAD",
            title: "Desert Rose Resort",
            imageUrl: { star },
            rating: "4.9",
            text: "$560",
            night: "7 Night",
            showSaveButton: "View Package Detail",
        },
        {
            id: 4,
            mainImage: moon,
            imageUrl: percentage,
            review: "Save $100 use code: TAKLAMURAD",
            title: "Desert Rose Resort",
            imageUrl: { star },
            rating: "4.9",
            text: "$560",
            night: "7 Night",
            showSaveButton: "View Package Detail",
        },
    ]

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
                    <div className="row row_budget">
                        {Budgets.map((review) => (
                            <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 div_div' key={review.id}>
                                <div className='sunlight_border'>
                                    <div className="card card_sunlight">
                                        <img className='sunlight_12' src={review?.mainImage || sunlight} />
                                        <div className='text_text-13'>
                                            <img className='percentage_23 save_btn' src={review?.percentageImage || percentage} />
                                            <p className='save_btn_2'>{review?.review || "-"}</p>
                                        </div>
                                        <div className='text_15'>
                                            <h4 className='text_56'>{review?.title || "-"}</h4>
                                            <div className='text_15'>
                                                <img className='star_60' src={star} />
                                                <p className='star_61'>{review?.rating || "-"}</p>
                                            </div>
                                        </div>
                                        <div className='text_night'>
                                            <p>{review?.text || "-"}</p>
                                            <p className='night_text22'>{review?.night || "-"}</p>
                                        </div>
                                        <button className='btn_view_2'>{review?.showSaveButton || "-"}</button>
                                    </div>
                                </div>
                            </div>
                        ))}


                        <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                            <div className="row budget_gradient">
                                <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                    <div className='budget_23'>
                                        <div>
                                            <button className='explore_btn'>EXPLORE MORE PACKAGES</button>
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
        </>
    );
}

export default Budget;