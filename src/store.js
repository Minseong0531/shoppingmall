import { configureStore, createReducer } from "@reduxjs/toolkit"; //스토어 생성
import counterReducer from './createSlice' // 리듀서(state변경규칙) 호출 (임의 이름)

const store=configureStore({ //스토어 생성 후 counter 슬라이스 등록
    reducer:{
        counter:counterReducer // state.counter로 접근 가능하게
    }
})

export default store;