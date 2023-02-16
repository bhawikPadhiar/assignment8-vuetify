import Vue from 'vue'
import Vuex from 'vuex'
import items from './modules/items'
//import axios from 'axios'
//   import AddNewCategory from './components/AddNewCategory.vue';
//  import AddNewItems from './components/AddNewItems.vue';
//  import AllCategories from './components/AllCategories.vue';
//Load vuex
 Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    items
  }
})
 
    // items:[]
  //   items:[{
  //      items:[
  //       { title: 'All category' , route:'/AllCategories',icon:'mdi-folder'  },
  //       { title: 'Add New Category',route:'/AddNewCategory' },
        
  //     ],
  //     title: 'Item Category', icon:"mdi-widgets",
  //   },
  //   {
  //     items: [
  //       { title: 'All Items',route:'/AllItems'},
  //       { title: 'Add New Items',route:'/AddNewItems'},

  //     ],
  //     title: 'Items',icon:"mdi-folder"
  //  } ]

