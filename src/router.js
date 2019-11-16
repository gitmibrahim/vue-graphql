import Main from './components/Main.vue'
import Article from './components/Article.vue'

const routes = [
  { path: '/', component: Main },
  { path: '/article/:slug', component: Article }
]

export default routes