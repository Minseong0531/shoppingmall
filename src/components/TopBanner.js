import {Swiper,SwiperSlide} from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';


function TopBanner(){
   const topbanners = [
    {src:'/images/topbanner1.jpg', alt:'topbanner alt1'},
    {src:'/images/topbanner2.jpg', alt:'topbanner alt2'},
    {src:'/images/topbanner5.jpg', alt:'topbanner alt5'},
   ]
    return(
        <div className="top-banner">
            <Swiper modules={[EffectFade, Autoplay]}
                effect="fade"
                fadeEffect={{crossFade:true}}
                autoplay={{delay:3000, disableOnInteraction:false}}
                loop={true}
                className="mySwiper"
            >
                {
                    topbanners.map((item,idx)=>(
                        <SwiperSlide key={idx}>
                            <img src={item.src} alt={item.alt} className='topbanner-img' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default TopBanner;