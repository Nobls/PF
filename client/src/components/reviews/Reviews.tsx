import React from 'react';
import {reviews} from "../../data/data";
import s from "./reviews.module.scss";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Slider from "react-slick";

const Reviews = () => {

    const settings = {
        arrows: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (
        <div className={s.reviewWrapper}>

            <h3 className={s.reviewTitle}>Отзывы</h3>

            <Slider {...settings}>
                {
                    reviews.map(m => {
                            return (
                                <div className={s.reviewInner} key={m.id}>
                                    <div className={s.reviewElements}>
                                        <div>
                                            <img className={s.reviewUserImage} src={m.image} alt={m.alt}/>
                                        </div>
                                        <div className={s.reviewUser}>
                                            <div className={s.reviewUserName}>
                                                {m.userName}
                                            </div>
                                            <div className={s.reviewDate}>
                                                {m.date}
                                            </div>
                                            <div className={s.reviewRating}>
                                                {m.rating}
                                            </div>
                                            <p className={s.reviewText}>{m.text}</p>
                                        </div>
                                        {/*<div className={s.reviewRating}>
                                            {m.rating}
                                        </div>
                                        <p>{m.text}</p>*/}
                                    </div>
                                    {/*<p>{m.text}</p>*/}
                                </div>
                            )
                        }
                    )
                }
            </Slider>
        </div>
    );
};

export default Reviews;