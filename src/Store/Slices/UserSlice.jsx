import { createSlice } from "@reduxjs/toolkit"

const initialState={
    data:[]
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers : {
        addProduct:(state,action)=>{
            state.data=action.payload;
        },
        removeProduct(state,action){},
        deleteProduct(state,action){},
    },
});

console.log(userSlice.actions)

export default userSlice.reducer;
export const {addProduct } = userSlice.actions