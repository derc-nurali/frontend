import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface initialStateProps {
  languageLinks: Record<string, any>;
}

const initialState: initialStateProps = {
  languageLinks: {},
};

export const { actions: languageLinksActions, reducer: languageLinksReducer } = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguageLinks: (state, { payload }: PayloadAction<any>) => {
      return {
        ...state,
        languageLinks: payload,
      };
    },
  },
});
