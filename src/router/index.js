import Vue from 'vue'
import VueRouter from 'vue-router'
import AddNewItems from '../components/AddNewItems'
import AllCategories from '../components/AllCategories'
import AllItems from '../components/AllItems'
import AddNewCategory from '../components/AddNewCategory'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/AllItems',
    name: 'AllItems',
    component: AllItems},
{
  path: '/AllCategories',
  name: 'AllCategories',
  component: AllCategories

},{
  path: '/AddNewCategory',
  name: 'AddNewCategory',
  component: AddNewCategory

},{
  path: '/AddNewItems',
  name: 'AddNewItems',
  component: AddNewItems

},


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
