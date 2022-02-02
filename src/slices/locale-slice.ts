import { createSlice } from '@reduxjs/toolkit';
import { Locale } from '../constants/locales.constants';

interface InitialStateProps {
  current: Locale | null;
}

const initialState: InitialStateProps = {
  current: null,
};

export const { actions: localeActions, reducer: localeReducer } = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    //Current
    setCurrent: (state, { payload }) => {
      state.current = payload;
    },
  },
});
