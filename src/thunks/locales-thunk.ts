import { Dispatch } from 'redux';
import { localeActions } from '../slices/locale-slice';
import { Locale } from '../constants/locales.constants';

const { setCurrent } = localeActions;

//Current
export const updateCurrent = (locale: Locale | null) => async (dispatch: Dispatch<any>) => {
  dispatch(setCurrent(locale));
};
