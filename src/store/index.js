import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // items:[]
    items:[{
       items:[
        { title: 'All category' , route:'/AllCategories',icon:'mdi-folder'  },
        { title: 'Add New Category',route:'/AddNewCategory' },
        
      ],
      title: 'Item Category', icon:"mdi-widgets",
    },
    {
      items: [
        { title: 'All Items',route:'/AllItems'},
        { title: 'Add New Items',route:'/AddNewItems'},

      ],
      title: 'Items',icon:"mdi-folder"
   } ]
  },
  getters: {

  },
  mutations: {
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const data = await axios.get(
          "http://localhost:3000/items"

        );
        commit("SET_USERS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  modules: {

  }
})
