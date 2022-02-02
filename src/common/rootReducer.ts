import { combineReducers } from '@reduxjs/toolkit';
import { localeReducer as locale } from '../slices/locale-slice';
import { languageLinksReducer as languageLinks } from '../slices/language-link-slice';

export const rootReducer = combineReducers({
  locale,
  languageLinks,
});
