import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Tab} from 'react-bootstrap';
import pic1 from '@/images/gallery/pic1.jpg'
import pic2 from '@/images/gallery/pic2.jpg'
import pic3 from '@/images/gallery/pic3.jpg'
import pic4 from '@/images/gallery/pic4.jpg'
import pic5 from '@/images/gallery/pic5.jpg'
import pic6 from '@/images/gallery/pic6.jpg'
import pic7 from '@/images/gallery/pic7.jpg'
import pic8 from '@/images/gallery/pic8.jpg'
import pic9 from '@/images/gallery/pic9.jpg'
import logo1 from '@/images/logo/logo/logo1.png'
import logo2 from '@/images/logo/logo/logo2.png'
import logo3 from '@/images/logo/logo/logo3.png'
import logo4 from '@/images/logo/logo/logo4.png'

const imgBlog1 = [
    {image: pic1, image2: logo1},
    {image: pic2, image2: logo2},
    {image: pic3, image2: logo3},
    {image: pic4, image2: logo4},
    {image: pic5, image2: logo3},
    {image: pic6, image2: logo2},
    {image: pic7, image2: logo4},
    {image: pic8, image2: logo1},
    {image: pic9, image2: logo3},
    {image: pic1, image2: logo2},
    {image: pic2, image2: logo1},
    {image: pic3, image2: logo4},
]
const imgBlog2 = [
    {image: pic1, image2: logo1},
    {image: pic2, image2: logo2},
    {image: pic3, image2: logo3},
    {image: pic4, image2: logo4},
]
const imgBlog3 = [
    {image: pic2, image2: logo2},
    {image: pic3, image2: logo3},
]
const imgBlog4 = [
    {image: pic3, image2: logo3},
    {image: pic2, image2: logo2},
]
const imgBlog5 = [
    {image: pic4, image2: logo4},
    {image: pic3, image2: logo3},
]
const imgBlog6 = [
    {image: pic6, image2: logo2},
    {image: pic7, image2: logo2},
]
const imgBlog7 = [
    {image: pic1, image2: logo1},
    {image: pic2, image2: logo2},
    {image: pic3, image2: logo3},
    {image: pic4, image2: logo4},
    {image: pic5, image2: logo3},
    {image: pic6, image2: logo2},
    {image: pic7, image2: logo4},
    {image: pic8, image2: logo1},
    {image: pic9, image2: logo3},
    {image: pic1, image2: logo2},
    {image: pic2, image2: logo1},
    {image: pic3, image2: logo4},
]
const imgBlog8 = [
    {image: pic1, image2: logo1},
    {image: pic2, image2: logo2},
    {image: pic3, image2: logo3},
    {image: pic4, image2: logo4},
]
const imgBlog9 = [
    {image: pic2, image2: logo2},
    {image: pic3, image2: logo3},
]
const imgBlog10 = [
    {image: pic4, image2: logo4},
    {image: pic5, image2: logo1},
]
const imgBlog11 = [
    {image: pic3, image2: logo3},
    {image: pic2, image2: logo4},
]
const imgBlog12 = [
    {image: pic6, image2: logo2},
    {image: pic7, image2: logo2},
]
const imgBlog13 = [
    {image: pic1, image2: logo1},
    {image: pic2, image2: logo2},
    {image: pic3, image2: logo3},
    {image: pic4, image2: logo4},
    {image: pic5, image2: logo3},
    {image: pic6, image2: logo2},
    {image: pic7, image2: logo4},
    {image: pic8, image2: logo1},
    {image: pic9, image2: logo3},
    {image: pic1, image2: logo2},
    {image: pic2, image2: logo1},
    {image: pic3, image2: logo4},
]
const imgBlog14 = [
    {image: pic1, image2: logo1},
    {image: pic2, image2: logo2},
    {image: pic3, image2: logo3},
    {image: pic4, image2: logo4},
]
const imgBlog15 = [
    {image: pic2, image2: logo2},
    {image: pic3, image2: logo3},
]
const imgBlog16 = [
    {image: pic3, image2: logo3},
    {image: pic2, image2: logo2},
]
const imgBlog17 = [
    {image: pic4, image2: logo4},
    {image: pic3, image2: logo3},
]
const imgBlog18 = [
    {image: pic6, image2: logo2},
    {image: pic7, image2: logo2},
]
const imgBlog19 = [
    {image: pic1, image2: logo1},
    {image: pic2, image2: logo2},
    {image: pic3, image2: logo3},
    {image: pic4, image2: logo4},
    {image: pic5, image2: logo3},
    {image: pic6, image2: logo2},
    {image: pic7, image2: logo4},
    {image: pic8, image2: logo1},
    {image: pic9, image2: logo3},
    {image: pic1, image2: logo2},
    {image: pic2, image2: logo1},
    {image: pic3, image2: logo4},
]
const imgBlog20 = [
    {image: pic1, image2: logo1},
    {image: pic2, image2: logo2},
    {image: pic3, image2: logo3},
    {image: pic4, image2: logo4},
]
const imgBlog21 = [
    {image: pic2, image2: logo2},
    {image: pic3, image2: logo3},
]
const imgBlog22 = [
    {image: pic3, image2: logo3},
    {image: pic2, image2: logo2},
]
const imgBlog23 = [
    {image: pic4, image2: logo4},
    {image: pic3, image2: logo3},
]
const imgBlog24 = [
    {image: pic6, image2: logo2},
    {image: pic7, image2: logo2},
]
const imgBlog25 = [
    {image: pic1, image2: logo1},
    {image: pic2, image2: logo2},
    {image: pic3, image2: logo3},
    {image: pic4, image2: logo4},
]
const imgBlog26 = [
    {image: pic2, image2: logo2},
    {image: pic3, image2: logo3},
]


const Tab2 = () => {
    return (
        <div>
            <Tab.Container defaultActiveKey="All">
                <div tabs="true">

                    <div className="site-filters clearfix center  m-b40">
                        <Nav as="ul" className="filters">
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="All"
                                          className="site-button-secondry radius-sm"><span>A</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="B"
                                          className="site-button-secondry radius-sm"><span>B</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="C"
                                          className="site-button-secondry radius-sm"><span>C</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="D"
                                          className="site-button-secondry radius-sm"><span>D</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="E"
                                          className="site-button-secondry radius-sm"><span>E</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="F"
                                          className="site-button-secondry radius-sm"><span>F</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="G"
                                          className="site-button-secondry radius-sm"><span>G</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="H"
                                          className="site-button-secondry radius-sm"><span>H</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="I"
                                          className="site-button-secondry radius-sm"><span>I</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="J"
                                          className="site-button-secondry radius-sm"><span>J</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="K"
                                          className="site-button-secondry radius-sm"><span>K</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="L"
                                          className="site-button-secondry radius-sm"><span>L</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="M"
                                          className="site-button-secondry radius-sm"><span>M</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="N"
                                          className="site-button-secondry radius-sm"><span>N</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="O"
                                          className="site-button-secondry radius-sm"><span>O</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="P"
                                          className="site-button-secondry radius-sm"><span>P</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="Q"
                                          className="site-button-secondry radius-sm"><span>Q</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="R"
                                          className="site-button-secondry radius-sm"><span>R</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="S"
                                          className="site-button-secondry radius-sm"><span>S</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="T"
                                          className="site-button-secondry radius-sm"><span>T</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="U"
                                          className="site-button-secondry radius-sm"><span>U</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="V"
                                          className="site-button-secondry radius-sm"><span>V</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="W"
                                          className="site-button-secondry radius-sm"><span>W</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="X"
                                          className="site-button-secondry radius-sm"><span>X</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="Y"
                                          className="site-button-secondry radius-sm"><span>Y</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li" className="">
                                <input type="radio"/>
                                <Nav.Link to={'#'} eventKey="Z"
                                          className="site-button-secondry radius-sm"><span>Z</span></Nav.Link>
                            </Nav.Item>
                        </Nav>

                    </div>
                </div>
                <Tab.Content>
                    <Tab.Pane eventKey="All">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog1.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}

                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="B">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog2.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="C">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog3.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="D">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog4.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="E">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog5.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="F">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog6.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="G">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog7.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="H">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog8.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="I">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog9.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="J">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog10.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="K">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog11.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="L">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog12.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="M">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog13.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="N">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog14.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="O">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog15.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="P">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog16.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Q">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog17.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="R">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog18.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="S">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog19.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="T">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog20.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="U">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog21.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="V">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog22.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="W">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog23.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="X">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog24.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Y">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog25.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Z">
                        <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                            {imgBlog26.map((item, index) => (
                                <li className="web card-container col-lg-3 col-md-4 col-sm-4" key={index}>
                                    <div className="dez-gallery-box">
                                        <div className="dez-media overlay-black-light">
                                            <Link to={'#'}> <img src={item.image} alt=""/> </Link>
                                            <div className="overlay-icon overlay-logo">
                                                <img src={item.image2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    );
}
export default Tab2;	
				