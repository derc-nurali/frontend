export const API_ENDPOINTS = {
  LANGUAGE_LINKS: {
    FIND_ALL: '/api/v1/language-links/:entity/:id',
  },
  ACTIVITIES: {
    FIND_ALL: '/api/v1/activities',
    FIND_ONE: '/api/v1/activities/:id',
  },
  ACHIEVEMENTS: {
    FIND_ALL: '/api/v1/achievements',
    FIND_ONE: '/api/v1/achievements/:id',
  },
  DOCUMENTS: {
    FIND_ALL: '/api/v1/documents',
  },
  FEEDBACK: {
    CREATE_ONE: '/api/v1/feedback',
  },
  POSTS: {
    FIND_ALL: '/api/v1/posts',
    FIND_ONE: '/api/v1/posts/:id',
  },
  SERVICES: {
    FIND_ALL: '/api/v1/services',
    FIND_ONE: '/api/v1/services/:id',
  },
  STAFF: {
    FIND_ALL: '/api/v1/staff',
    FIND_ONE: '/api/v1/staff/:id',
  },
  SUBDIVISIONS: {
    FIND_ALL: '/api/v1/subdivision',
    FIND_ONE: '/api/v1/subdivision/:id',
  },
  VACANCIES: {
    FIND_ALL: '/api/v1/vacancies',
    FIND_ONE: '/api/v1/vacancies/:id',
    POST_VACANCY: '/api/v1/vacancies/application',
    SUBSCRIBE_EMAIL: '/api/v1/vacancies/subscribe',
  },
};
