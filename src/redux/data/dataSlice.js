import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const apiKey = "c8b5a16b9c0fae2f8fa63a6b3fa94adf"
const url = 'https://financialmodelingprep.com/api/v3/fx?apikey=c8b5a16b9c0fae2f8fa63a6b3fa94adf';

const initialState = {
  data: [],
  search: [],
  isLoading: true,
  selected: null,
};

export const fetchData = createAsyncThunk(
  'fetch data',
  async () => {
    const res = fetch(url);
    const response = (await res).json();

    return response;
  },
);

const dataSlice = createSlice({
  name: 'data slice',
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;
      localStorage.setItem('selected', action.payload);
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      console.log('u called api');
      state.isLoading = false;
      state.data = action.payload;
      state.search = action.payload;
    });
  },
});

export default dataSlice.reducer;
export const { setSelected, setSearch } = dataSlice.actions;
