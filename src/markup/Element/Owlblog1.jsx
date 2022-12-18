import React, {Component} from 'react';

import pic1 from '@/images/testimonials/pic1.jpg'
import pic2 from '@/images/testimonials/pic2.jpg'
import pic3 from '@/images/testimonials/pic3.jpg'

const postBlog = [
    {image: pic1},
    {image: pic2},
    {image: pic3},
    {image: pic2}
]


class owltestimonial extends Component {
    render() {
        var settings = {
            slidesToShow: 3,
            arrows: false,
            infinite: true,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };
        return (

            <div className="blog-carousel-center owl-carousel owl-none " {...settings}>
                {postBlog.map((item, index) => (
                    <div className="item p-3" key={index}>
                        <div className="testimonial-5">
                            <div className="testimonial-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry.</p>
                            </div>
                            <div className="testimonial-detail clearfix">
                                <div className="testimonial-pic radius shadow">
                                    <img src={item.image} width="100" height="100" alt=""/>
                                </div>
                                <strong className="testimonial-name">David Matin</strong>
                                <span className="testimonial-position">Student</span>
                            </div>
                        </div>
                    </div>
                ))}

            </div>


        )

    }

}

export default owltestimonial;