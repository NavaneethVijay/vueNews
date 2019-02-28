import store from '@/store'
import axios from 'axios'
const sourcesEndpoint = store.state.clientConfig.newsApi.sources_endpoint
const articlesEndpoint = store.state.clientConfig.newsApi.articles_endpoint
// //get the data
const sources = {
  methods: {
    getSources() {
      if (!localStorage.sources) {
        axios.get(sourcesEndpoint).then(res => {
          localStorage.sources = JSON.stringify(res.data.sources)
          this.$store.dispatch('vueNews/SET_SOURCES', res.data.sources)
          console.log('From api call')
          // return res.data.sources
        })
      } else {
        console.log('From Cache')
        this.$store.dispatch(
          'vueNews/SET_SOURCES',
          JSON.parse(localStorage.sources)
        )
        return JSON.parse(localStorage.sources)
      }
    },
    async getArticlesBySource(source) {
      await axios
        .get(articlesEndpoint, {
          params: {
            sources: source
          }
        })
        .then(res => {
          this.$store.dispatch('vueNews/SET_ARTICLES', res.data)
        })
      console.log('Articles from Api')
    }
  }
}
export default sources
