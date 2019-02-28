const vueNews = {
  namespaced: true,
  state: {
    sources: [],
    articles: []
  },
  getters: {
    getSources: (state: any) => {
      return state.sources
    },
    getArticles: (state: any) => {
      return state.articles
    }
  },
  mutations: {
    SET_SOURCES: (state: any, payload: any) => {
      state.sources = payload
    },
    SET_ARTICLES: (state: any, payload: any) => {
      let currentArticles = state.articles
      state.articles = currentArticles.concat(payload)
    }
  },
  actions: {
    SET_SOURCES: (context: any, payload: any) => {
      context.commit('SET_SOURCES', payload)
    },
    SET_ARTICLES: (context: any, payload: any) => {
      context.commit('SET_ARTICLES', payload)
    }
  }
}
export default vueNews
