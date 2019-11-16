<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Article from "./components/Article.vue";
export default {
  name: 'app',
  components: {
    Main,
    Article
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 20px 0;
  border-bottom: 1px solid #999;
  margin-bottom: 100px;
  box-shadow: 0 0 4px #777;
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
}
a {
  text-decoration: underline;
  color: mediumseagreen;
}
</style>
