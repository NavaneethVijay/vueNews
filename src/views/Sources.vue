<template>
  <div class="source-news">
    <header>
      <h1>Top Headlines</h1>
    </header>
    <div class="articles">
      <div class="article-card" v-for="(article, i) in getArticles" :key="i">
        <div class="article-left">
          <div class="title">
            <h3>{{ article.title }}</h3>
          </div>
          <div class="description">
            <p>
              {{ article.description }}
            </p>
          </div>
          <div class="left-footer">
            <strong>
              <span>
                {{ article.author }}
              </span>
            </strong>
          </div>
        </div>
        <div class="article-right">
          <div class="image">
            <img :src="article.urlToImage" :alt="article.title" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sources from '../mixins/sources.js'
import { mapGetters } from 'vuex'

export default {
  name: 'sources',
  mixins: [sources],
  data() {
    return {
      sourceId: this.$route.params.source,
      articles: []
    }
  },
  computed: {
    ...mapGetters({
      availableArticles: 'vueNews/getArticles'
    }),
    getArticles() {
      let articles = this.availableArticles
      return articles.filter(article => article.source.id == this.sourceId)
    }
  },
  beforeMount() {
    this.getArticlesBySource(this.sourceId)
  }
}
</script>
<style lang="scss" scoped>
.source-news {
  background: #eef0f3;
  overflow: hidden;
  .articles {
    max-width: 1400px;
    margin: auto;
    .article-card {
      display: flex;
      max-height: 280px;
      min-height: 280px;
      max-width: 70%;
      background: #fff;
      margin: 50px auto;
      transform: skewX(5deg);
      transition: all 0.3s ease-in-out;
      border-radius: 10px 0 0 10px;
      cursor: pointer;
      &:hover {
        box-shadow: 0 2px 43px -4px rgba(0, 0, 0, 0.19);
      }
      .article-left,
      .article-right {
        width: 50%;
      }
      .article-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        padding: 0 10px;
        transform: skewX(-5deg);
      }
      .article-right {
        transform: translateX(20px) translateY(-20px);
        box-shadow: 0 2px 43px -4px rgba(0, 0, 0, 0.19);
        transition: all 0.3s ease-in-out;
        transform-style: preserve-3d;
        overflow: hidden;
        width: 46%;
        .image {
          transform: skewX(-5deg) scale(1.09);
          height: 100%;
          width: 100%;
          background: #eef0f3;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            vertical-align: bottom;
          }
        }
      }
    }
  }
}
</style>
