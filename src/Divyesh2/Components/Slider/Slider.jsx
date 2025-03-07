// Slider.jsx
import './Slider.css'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../../Assets/Images/img1.png'
import img2 from '../../Assets/Images/img2.png'
import img3 from '../../Assets/Images/img3.png'
import { BsBorderStyle } from 'react-icons/bs';


const Slider = () => {
return (
<div className='slider-main'>
<Carousel
additionalTransfrom={0}
arrows
autoPlaySpeed={3000}
centerMode={false}
className=""
containerClass="container-with-dots"
dotListClass=""
draggable
focusOnSelect={false}
infinite
itemClass=""
keyBoardControl
minimumTouchDrag={80}
pauseOnHover
renderArrowsWhenDisabled={false}
renderButtonGroupOutside={false}
renderDotsOutside={false}
responsive={{
desktop: {
breakpoint: {
max: 3000,
min: 1024
},
items: 3,
partialVisibilityGutter: 40
},
mobile: {
breakpoint: {
max: 464,
min: 0
},
items: 1,
partialVisibilityGutter: 30
},
tablet: {
breakpoint: {
max: 1024,
min: 464
},
items: 2,
partialVisibilityGutter: 30
}
}}
rewind={false}
rewindWithAnimation={false}
rtl={false}
shouldResetAutoplay
showDots={false}
sliderClass=""
slidesToSlide={1}
swipeable
>

 
<img src={img1} alt='img1' />
<img src={img2} alt='img1' />
<img src={img3} alt='img1' />

</Carousel>
</div>
)
}

export default Slider