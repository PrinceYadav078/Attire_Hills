import React from 'react'
import { mainCarouselData } from './MainCarouselData'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from 'react-router-dom';
const handleDragStart = (e) => e.preventDefault();
const MainCarousel = () => {
  const navigate = useNavigate();

    const items= mainCarouselData.map((item)=>( 
    <img 
    onClick={() => navigate(item.path)}
    onDragStart={handleDragStart}
    className='cursor-pointer'  
    src={item.image} 
    alt=''
    />))

  return (
    <div>
       <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
    />
    </div>
  )
}

export default MainCarousel
