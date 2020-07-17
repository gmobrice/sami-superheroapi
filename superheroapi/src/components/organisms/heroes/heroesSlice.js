import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const heroesState = {
  search: "",
  loading: false,
  error: "",
  order: "id",
  heroes: [],
};

export const getHeroes = createAsyncThunk("heroes/getHeroes", (arg) => {
  let apiUrl = "https://superheroapi.com/api/3230957646968378/";

  if (isNaN(parseInt(arg))) {
    apiUrl += `search/${arg}`;
  } else {
    apiUrl += arg;
  }

  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((json) => json);
});

const heroesSlice = createSlice({
  name: "heroes",
  initialState: heroesState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
  },
  extraReducers: {
    [getHeroes.pending]: (state) => {
      state.loading = true;
    },
    [getHeroes.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getHeroes.fulfilled]: (state, action) => {
      if (action.payload.hasOwnProperty("error")) {
        state.loading = false;
        state.error = action.payload.error;
        state.heroes = [];
      } else {
        state.loading = false;
        state.error = "";

        const heroes = action.payload.hasOwnProperty("results")
          ? action.payload.results
          : action.payload;
        state.heroes = [].concat(heroes);
      }
    },
  },
});

export const { setSearch, setOrder } = heroesSlice.actions;
const heroesReducer = heroesSlice.reducer;
export default heroesReducer;
