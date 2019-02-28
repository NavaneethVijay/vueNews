<template>
  <div class="home">
    <div>
      <header>
        <h1>
          VueNews
        </h1>
      </header>
    </div>
    <div class="sources">
      <div
        @click="cardClickHandler(source)"
        class="source-card"
        v-for="(source, i) in getAvailableSources"
        :key="i"
      >
        <router-link
          class="source-link"
          :to="{ name: 'sources', params: { source: source.id } }"
          :append="true"
        >
          <div class="source-main">
            <div
              class="source-top"
              v-bind:style="{
                background: '#' + ((Math.random() * 0xffffff) << 0).toString(16)
              }"
            >
              <a class="main-url" :href="source.url">
                <span>
                  {{ source.name }}
                </span>
              </a>
            </div>
            <div class="source-bottom">
              <p>
                {{ source.description }}
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import sources from '../mixins/sources.js'
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  mixins: [sources],
  computed: {
    ...mapGetters({
      AvailableSources: 'vueNews/getSources'
    }),
    getAvailableSources() {
      return this.AvailableSources
    }
  },
  methods: {
    cardClickHandler(source) {
      this.$emit('loadSource', source.id)
    }
  },
  beforeMount() {
    this.getSources()
  },
  created() {
    this.$emit('Home Created')
  }
}
</script>
<style>
body {
  padding: 0;
  margin: 0;
}
</style>

<style lang="scss" scoped>
.home {
  background: #eef0f3;
  overflow: hidden;
}
.sources {
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 40px auto;
}
.source-card {
  flex-basis: 33%;
  min-width: 33%;
  min-height: 250px;
  box-sizing: border-box;
  padding: 10px;
  cursor: pointer;
  margin: 20px 0;
  .source-link {
    text-decoration: none;
  }
}

.source-main {
  box-sizing: border-box;
  padding: 10px;
  color: #2e2e2e;
  background: #fff;
  width: 100%;
  height: 100%;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: all 0.3s ease-in-out;
  transform: translateY(0);
  border-radius: 10px;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 2px 43px -4px rgba(0, 0, 0, 0.19);
  }
  .source-top {
    box-sizing: border-box;
    padding: 50px;
    border-radius: 10px;
    .main-url {
      text-decoration: none;
      color: #fff;
      font-weight: bold;
    }
  }
  .source-top {
    transform: translateY(-40px);
    box-shadow: 0 2px 15px -4px rgba(0, 0, 0, 0.2);
  }
}
</style>
