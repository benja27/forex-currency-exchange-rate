import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"

const apiKey = "c8b5a16b9c0fae2f8fa63a6b3fa94adf"
const url  = "https://financialmodelingprep.com/api/v3/fx?apikey=c8b5a16b9c0fae2f8fa63a6b3fa94adf"

const initialState = {
  data: [],
  isLoading: true
}

export const fetchData = createAsyncThunk("fetch data", 
  async ()=>{
    const res = fetch(url)
    const response = (await res).json()
    
    console.log(response)
    return response

  }
)



const dataSlice = createSlice({
    name: "data slice",
    initialState,
    reducers : {

    },
    extraReducers : (builder)=>{
      builder.addCase(fetchData.fulfilled, (state, action)=> {
        state.data = action.payload
      })
    }
})

export default dataSlice.reducer
