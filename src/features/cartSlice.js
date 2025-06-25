import { createSlice } from "@reduxjs/toolkit";
import { validateCartItem } from "../utils/cartUtils";

const loadCartItems=()=>{
    try{ // 로컬스토리지에서 'cartItems' 키로 저장된 데이터 호출 시도
        const serializedCart = localStorage.getItem('cartItems')
        if( serializedCart === null ){ // 데이터 없다면 빈배열 반환
            return [];
        }
        return JSON.parse(serializedCart); //JSON문자열 javascript객체로 변환
    } catch(err) {
        console.error('Error loading Cart items data', err);
        return [];
    }
}
const saveCartItems=(items)=>{
    try{
        //자바스크립트 객체를 JSON문자열로 변환
        const serializedCart = JSON.stringify(items)
        //로컬스토리지에 저장
        localStorage.setItem('cartItems',serializedCart);
    } catch (err) {
        console.error('Error Saving Car Items', err)
    }
}
const cartSlice=createSlice({
    name:'cart', //슬라이스 이름
    initialState:{items:loadCartItems()}, //초기상태를 로컬스토리지에서 호출한 데이터로
    reducers:{ // 상태변경 리듀서함수들 정의
        addToCart:(state,action)=>{
            const newItem = action.payload;
            try{
                validateCartItem(newItem); // 제품 정보 유효성 검사
                //동일상품 체크(찾아서 있는 경우 수량증가, 없다면 새 배열에 정보 추가)
                const existingItemIndex = state.items.findIndex( item=> 
                    item.id===newItem.id && 
                    item.selectedColor === newItem.selectedColor &&
                    item.selectedSize===newItem.selectedSize
                )
                if(existingItemIndex !== -1){
                    state.items[existingItemIndex].quantity += newItem.quantity;
                }else{
                    state.items.push(newItem);
                }
                saveCartItems(state.items);
            } catch (err){
                console.error('장바구니 제품추가 오류 : ', err.message)
            }
        },
        removeFromCart:(state,action)=>{
            state.items=state.items.filter(item=> item.id!==action.payload); //전달받은 id와 다른 상품들만 필터링해서 새 배열 생성
            saveCartItems(state.items);
        },
        updateQuantity:(state,action)=>{
            const {productId, quantity} = action.payload; //id와 수량을 가져와서 
            const item = state.items.find(item=>item.id===productId) //해당 상품 찾기
            if(item){
                item.quantity = quantity; // 새로운 개수를 수량에 정의
                saveCartItems(state.items);
            }
        }
    }
})

//액션 내보내기
export const {addToCart, removeFromCart, updateQuantity} = cartSlice.actions;

//리듀서 내보내기 -- 스토어 설정
export default cartSlice.reducer;
