import { useRef, useState } from "react";
import "./slider.scss";
import SliderItem from "../sliderItem/SliderItem.jsx";
import Arrow from "../../images/arrow.png";
const Slider = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoverd, setIsMoved] = useState(false);

  const sliderRef = useRef();
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = sliderRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      sliderRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if(direction === "right" && slideNumber < 2){
      setSlideNumber(slideNumber + 1);
      sliderRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="slider">
      <span className="sliderTitle">What would you like to watch</span>
      <div className="wrapper">
        <div className="sliderArrow left" onClick={() => handleClick("left")} style={{display: !isMoverd && 'none'}}>
          <img src={Arrow} alt="" />
        </div>
        <div className="container" ref={sliderRef}>
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
        </div>
        <div className="sliderArrow right" onClick={() => handleClick("right")}>
          <img src={Arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
