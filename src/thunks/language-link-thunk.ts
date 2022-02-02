import { Dispatch } from 'redux';
import { languageLinksActions } from '../slices/language-link-slice';

const { setLanguageLinks } = languageLinksActions;

//Update
export const updateLanguageLinks =
  (links: Record<string, any> | null) => async (dispatch: Dispatch<any>) => {
    dispatch(setLanguageLinks(links));
  };
