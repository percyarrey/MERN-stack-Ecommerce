import { createSlice } from "@reduxjs/toolkit";
var data = sessionStorage.getItem('userData')
data = JSON.parse(data)
const initialState= {
    user :data || {}
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loginRedux:(state,action)=>{
            state.user = action.payload
            var data = JSON.stringify(action.payload)
            console.log(data)
            sessionStorage.setItem('userData',data)
        },
        logoutRedux:(state,action)=>{
            state.user = {}
            sessionStorage.clear()
        }
    }
})

export default userSlice.reducer
export const {loginRedux, logoutRedux} = userSlice.actions