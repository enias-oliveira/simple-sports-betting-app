import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EventType, SelectionType } from "../../types";
import { RootState } from "..";

export interface SelectionsState {
  value: SelectionType[];
}

const initialState: SelectionsState = {
  value: [],
};

export const selectionsSlice = createSlice({
  name: "selections",
  initialState,
  reducers: {
    addSelection: (state, action: PayloadAction<SelectionType>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addSelection } = selectionsSlice.actions;

export const selectSelections = (state: RootState) => state.selections.value;

export default selectionsSlice.reducer;
