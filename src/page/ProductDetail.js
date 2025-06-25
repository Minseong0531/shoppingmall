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
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    return(
        <div className="product-detail">
            
        </div>
    )
}

export default ProductDetail;