import { configureStore, createReducer } from "@reduxjs/toolkit"; //스토어 생성
import cartReducer from './features/cartSlice' // 리듀서(state변경규칙) 호출 (임의 이름)

const store=configureStore({ //스토어 생성 후 슬라이스 등록
    reducer:{
        cart:cartReducer,
    }
})

export default store;