<template>
  <section class="articles" itemprop="articleSection">
    <div class="article" v-for="article in articles" :key="article.id">
      <router-link :to="'/article/' + article.slug">
        <article itemscope itemtype="http://schema.org/Article">
          <img :src="article.thumbnail_image.image_url" alt="" class="article-thumbnail">
          <h4 itemprop="headline">{{ article.title }}</h4>
          <p itemprop="author" class="author"><em>author: </em>{{ article.author.name }}</p>
        </article>
      </router-link>
    </div>
  </section>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'

export default Vue.component('Main', {
  data () {
    return {
      articles: []
    }
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    async getArticles() {
      const cachedArticles = localStorage.getItem('articles')
      if (cachedArticles) {
        this.articles = JSON.parse(cachedArticles);
        return;
      }
      const res = await axios.post('https://metaphysics-production.artsy.net/', {
        query: `
          {
            articles {
              id
              thumbnail_title
              thumbnail_teaser
              title
              slug
              author {
                id
                name
              }
              thumbnail_image {
                image_url
              }
            }
          }
        `
      })
      this.articles = res.data.data.articles
      localStorage.setItem('articles', JSON.stringify(this.articles))
    }
  }
})
</script>

<style>
.articles {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 140px 5% 60px;
}
a {
  text-decoration: none;
  color: #333;
}
.article {
  width: 40%;
  min-width: 350px;
  padding: 5px;
  margin: 0 20px 40px;
  border: 1px solid #d0cfcf;
  border-radius: 5px;
}
.article-thumbnail {
  width: 100%;
  height: 250px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
p {
  font-family: 'Roboto', sans-serif;
}
.author {
  font-style: italic;
}
em {
  color: #555;
  font-size: 0.8rem;
}
</style>
