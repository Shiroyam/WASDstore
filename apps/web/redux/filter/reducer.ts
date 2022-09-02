import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  brandName: string;
  brandFlag: boolean;
}

const initialState: IState = {
  brandName: '',
  brandFlag: false,
};

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    onClickBrand(state: IState, action: PayloadAction<string>) {
      state.brandFlag = true;
      state.brandName = action.payload;
    },
    onClickClear(state: IState) {
      state.brandFlag = false;
      state.brandName = '';
    },
  },
});

export const { onClickBrand, onClickClear } = FilterSlice.actions;
export default FilterSlice.reducer;
