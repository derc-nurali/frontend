import { isEmpty, keyBy, reduce } from 'lodash';
import { get } from 'lodash';
import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toUrl } from '../common/utils/format-utils';
import { updateLanguageLinks } from '../thunks/language-link-thunk';
import router from 'next/router';
import { ApiLanguageLinks } from '../http';
import { LOCALES } from '../constants/locales.constants';

export const useLanguageLinks = ({ entity, id, route, api }: Record<string, any>) => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    ApiLanguageLinks.fetchAll({ entity, id, exclude: 'shortDescription,description' }).then(
      (res) => {
        const links = get(res, 'links', {});
        const ids = Object.values(links);

        if (isEmpty(ids)) return;

        api.fetchAll({ ids: ids.join(','), language: i18n.language }).then(({ hits }: any) => {
          const keyByLanguageCode = keyBy(hits, 'language');

          const translatedLinks = reduce(
            LOCALES,
            (acc, lang) => {
              const hit = get(keyByLanguageCode, [lang]);
              const url = hit ? toUrl(route, hit) : route;

              return { ...acc, [lang]: url };
            },
            {}
          );

          dispatch(updateLanguageLinks(translatedLinks));
        });

        const handleRouteChange = () => {
          dispatch(updateLanguageLinks({}));
        };

        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
          router.events.off('routeChangeStart', handleRouteChange);
        };
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entity, id]);
};
