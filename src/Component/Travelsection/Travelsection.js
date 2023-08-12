import React, { useContext } from 'react';
import {Mycontext} from '../../App';
import {touristPlaces} from '../../Travelinfo';
import Travelarea from '../TravelArea/Travelarea';
import './Travelsection.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Travelsection = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
      };

    const [showarea, setShowarea] = useContext(Mycontext);
    return (
        <div className='travelsection'>
            <div className='img-description'>
                <div className='description w-50'>
                    <h1>{showarea.title}</h1>
                    <h5>{showarea.description}</h5>
                    <div className='booking'><Link>Booking <AiOutlineArrowRight /></Link></div>
                </div>
                <div className='img w-50 '>
                    <Slider {...settings}>                    {
                        touristPlaces.map((place) => {
                         return <Travelarea key={place.id} place={place}></Travelarea>
                        })
                    }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Travelsection;