/**
 * @file app store
 * @author
 */

import http from '@/api';
import queryString from 'query-string';

export default {
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
    getTableData(context, params, config = {}) {
      // eslint-disable-next-line no-undef
      return http.get(`/table?&${queryString.stringify(params)}`, params, config);
    },
    getMagicTableData(context, params, config = {}) {
      // eslint-disable-next-line no-undef
      return http.get(`/magic/table?&${queryString.stringify(params)}`, params, config);
    },
  },
};
