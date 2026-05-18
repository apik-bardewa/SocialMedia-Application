import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name:"user",
    initialState:{   //for initial state like in useState
        userData:null,
        profileData:null,
        suggestUserData:null
    },
    reducers:{   //for method to update userdata lik method in usestate
        setUserData:(state,action)=>{
          state.userData = action.payload //updating userData=null value
        },
        setprofileData:(state,action)=>{
            state.profileData = action.payload
        },
        setSuggestData:(state,action)=>{
            state.suggestUserData = action.payload
        }
    }
})

export const {setUserData} = userSlice.actions
export const {setprofileData} = userSlice.actions
export const {setSuggestData}= userSlice.actions
export default userSlice.reducer