import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { servicesFetchPlayers } from "./services";

const initialState = {
  is_loading: false,
  players: [],
  selected_players: [],
};

export const fetchPlayers = createAsyncThunk(
  "players/fetchPlayers",
  async () => {
    const response = await servicesFetchPlayers();
    return response.data;
  }
);

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    selectPlayers: (state, action) => {
      state.selected_players = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayers.pending, (state) => {
        state.is_loading = true;
      })
      .addCase(fetchPlayers.fulfilled, (state, action) => {
        state.is_loading = false;
        state.players = action.payload;
      });
  },
});

export const getState = (state) => state.players;
export const getSelectedPlayers = (state) => state.players.selected_players;
export const { selectPlayers } = playersSlice.actions;
export default playersSlice.reducer;
