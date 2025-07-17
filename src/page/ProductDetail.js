import { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Thumbs} from 'swiper/modules';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { calculateItemTotal, validateCartItem } from "../utils/cartUtils";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs'


function ProductDetail(){
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    //상품 데이터 저장
    const [product, setProduct] = useState(null);

    useEffect(()=>{
        if( location.state && location.state.product){
            setProduct(location.state.product);
        }else{
            console.log('제품 데이터 가져오는 중...')
        }
    },[location, id])

    const handleColorChange = useCallback((color)=>{
        setSelectedColor(color);
    },[]);

    const handleSizeChange = useCallback((size)=>{
        setSelectedSize(size);
    },[]);

    const handleQuantityChange = useCallback((change)=>{
        setQuantity(prevquantity=> Math.max(1, prevquantity+change));
    },[]);
    const totalPrice = useMemo(()=>{
        return product ? calculateItemTotal({...product, quantity}) : 0
    },[product, quantity])

    const handleAddCart = useCallback(()=>{
        if(!product){return}
        //장바구니에 전달할 아이템 객체 생성
        const cartItem = {
            id: id,
            name: product.name,
            price: product.discountPrice || product.price,
            quantity:quantity,
            selectedColor:selectedColor,
            selectedSize:selectedSize,
            image:product.images[0]
        }
        //redux dispatch로 cartpage에 action(addToCart) 전달
        try{
            validateCartItem(cartItem); // 유효성 검사
            dispatch(addToCart(cartItem)); //redux store에 장바구니 추가 액션 요청
            alert('제품정보를 장바구니에 전달 성공');
            navigate('/cart'); // 페이지 이동
        }catch(err){
            console.error('유효성 검사 에러', err.message);

        }
    },[dispatch, product, id, selectedColor, selectedSize, quantity, navigate]);


    if(!product){
        return <div> 제품 데이터 없음</div>
    }

    return(
        <div className="product-detail">
            <div className="product-images">
                {/* 스와이퍼 이미지 */}
                <Swiper
                    style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper:null }}
                    modules={[Navigation, Thumbs]}
                    className="main-swiper"
                >
                    {
                        product.images.map((img,index)=>(
                            <SwiperSlide key={index}>
                                <img src={img} alt={index+1} />
                            </SwiperSlide>
                        ))
                    }
                    
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[Navigation, Thumbs]}
                    className="mySwiper"
                >
                     {
                        product.images.map((img,index)=>(
                            <SwiperSlide key={index}>
                                <img src={img} alt={index+1} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="product-info">
                {/* 상품명 */}
                <h2>{product.name}</h2>
                {/* 가격정보 */}
                <h2>가격</h2>
                <div className="price">
                    <span className="original-price">{product.price.toLocaleString()}원</span>
                    <span className="discount-price">
                        {product.discountPrice ? product.discountPrice.toLocaleString() : product.price.toLocaleString()}원
                    </span>
                </div>
                {/* 색상선택 */}
                <h2>색상</h2>
                <div className="color-selection">
                    {
                        product.colors?.map((color)=>(
                            <button key={color} onClick={()=>{handleColorChange(color)}} className={selectedColor === color ? 'selected':''}>{color}</button>
                        ))
                    }
                </div>
                {/* 사이즈선택 */}
                <h2>사이즈</h2>
                <div className="size-selection">
                    {
                        product.sizes?.map((size)=>(
                            <button key={size} onClick={()=>{handleSizeChange(size)}} className={selectedSize === size ? 'selected':''}>{size}</button>
                        ))
                    }
                </div>
                {/* 수량선택 */}
                <div className="quantity-selection">
                    <h3>수량선택</h3>
                    <p>
                        <button onClick={()=>{
                            handleQuantityChange(-1);
                        }}> - </button>
                        <span>{ quantity }</span>
                        <button onClick={()=>{
                            handleQuantityChange(1);
                        }}> + </button>
                    </p>
                </div>
                {/* 총가격 */}
                <div className="total-price">
                    <h3>TOTAL</h3> : <span>{totalPrice.toLocaleString()}원</span>
                </div>
                {/* 버튼 */}
                <div className="action-buttons">
                    <button className="buy-now">즉시 구매</button>
                    <button className="add-to-cart" onClick={handleAddCart}>장바구니 담기</button>
                    <button className="wishlist">위시리스트</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;