import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './ImgSlider.css';
import Card from "./Card";
const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>

      <div className="slider" >
         <Card name="Dr .Irene" img="/images/d1.png" desc="General Physician" />
      </div>

      <div className="slider" name="Dr .Nihal">
         <Card name="Dr .Nihal" img="/images/d2.png"  desc="Cardiac Surgeons"/>
      </div>

      <div className="slider" name="Dr .Samay">
         <Card name="Dr .Samay" img="/images/d3.png" desc="paediatrician"/>
      </div>
    </Slider>
  );
};


export default ImgSlider;