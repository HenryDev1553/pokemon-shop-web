import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    quantity: 0,
    card_array: []
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: initialState,
    reducers: {
        addItem(state, action) { 
            if (state.card_array.length === 0) {
                state.card_array.push(action.payload)
                state.quantity++
            } else {
                const index =state.card_array.findIndex((item) => 
                    item.name === action.payload.name
                )
                if (index < 0) {
                    state.card_array.push(action.payload)
                    state.quantity++
                } else {
                    const temp_arr = [...state.card_array]
                    temp_arr[index].sl++
                    console.log('temp_arr[index].sl',temp_arr[index].sl)
                    state.card_array = [...temp_arr]
                    state.quantity++
                }
            }
          
            
        },
        removeItem(state, action){},
    }
})

export default cartSlice.reducer
export const {addItem} = cartSlice.actions