import { Autoplay, EffectFade } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react'


function MainBanner(){
    const mainbanners = [
        {src:'/images/temp_topbanner01.jpg', alt:'main topbanner1'},
        {src:'/images/temp_topbanner02.jpg', alt:'main topbanner2'},
        {src:'/images/temp_topbanner03.jpg', alt:'main topbanner3'}
       ]
    return(
        <section className="main-banner">
            <Swiper modules={[EffectFade, Autoplay]}
                    effect='fade'
                    fadeEffect={{corssFade:true}}
                    autoplay={{delay:5000, disableOnInteraction:false}}
                    loop={true}
                    className="mySwiper2"
            >
                {
                    mainbanners.map((banner,index)=>(
                        <SwiperSlide key={banner.id}>
                            <img src={banner.src} alt='banner.alt' className='mainbanner-img' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default MainBanner;