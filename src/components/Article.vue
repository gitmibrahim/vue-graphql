<template>
  <div class="content">
    <div v-for="(section, index) in sections" :key="index">
      <div v-if="section.type == 'image_collection'" data-layout="overflow_fillwidth" data-section-type="image_collection" class="article-section-container responsive-layout-container">
        <div data-index="0" data-layout="overflow_fillwidth" class="article-section-image-collection images-loaded">
          <ul class="single portrait">
            <li>
              <figure>
                <img :src="section.images[0].url" alt="">
              </figure>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="section.type == 'text'" data-section-type="text" class="article-section-container responsive-layout-container">
        <div class="article-section-text" v-html="section.body">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

export default Vue.component('Article', {
  data() {
    return {
      sections: []
    }
  },
  async mounted() {
    const res = await axios.get(`https://writer.artsy.net/api/articles/${this.$route.params.slug}`)
    this.sections = res.data.sections;
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  margin: 140px 5% 60px;
}
.article-section-image-collection img {
  width: 100%;
}
/deep/ p {
  text-align: justify;
}
ul {
  padding: 0;
}
li {
  list-style: none;
}
</style>