<template>
  
  <v-app>
    <v-app-bar elevation="" >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Session 8</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn elevation fab small><v-icon>mdi-heart</v-icon></v-btn>
      <v-btn elevation fab small><v-icon>mdi-magnify</v-icon></v-btn>
      <v-btn elevation fab small><v-icon>mdi-dots-vertical</v-icon></v-btn>
    </v-app-bar>
   <!-- <AllCategories></AllCategories> -->
   <!-- <AllItems></AllItems> -->
    <!-- <AddNew></AddNew >
    <AddNewItems></AddNewItems> -->
    <v-navigation-drawer app v-model="drawer" temporary>  
      <v-list>
        <v-list-group v-for="item in items" :key="item.title" v-model="item.active" :prepend-icon="item.icon"
          active-color="primary">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <!-- <v-icon :icon="item.icon"></v-icon> -->
            </v-list-item-content>
          </template>
          <v-list-item router :to='child.route' :key="child.title" v-for="child in item.items" :prepend-icon="child.icon" active-color="primary">
            <v-list-item-content>
              
             <v-list-item-title  v-text="child.title"></v-list-item-title>
            
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list> 
    </v-navigation-drawer >
    <v-main>
      <v-container class="d-flex justify-right align-right text-h5">
      <RouterView></RouterView>
    </v-container>
     <!-- <v-container v-if="display1" default="false" class="d-flex justify-center align-center text-h5"
          style="min-height: 300px;">
        <AllCategories></AllCategories>

     </v-container>
     <v-container v-if="display2"  default="false" class="d-flex justify-center align-center text-h5"
          style="min-height: 300px;">
        <AddNewCategory></AddNewCategory>

     </v-container>
     <v-container v-if="display3" class="d-flex justify-center align-center text-h5"
          style="min-height: 300px;">
        <AllItems></AllItems>

     </v-container>
     <v-container v-if="display4" class="d-flex justify-center align-center text-h5"
          style="min-height: 300px;">
        <AddNewItems></AddNewItems>

     </v-container> -->
    </v-main>
  </v-app>
</template>

<script>
//  import AddNewCategory from './components/AddNewCategory.vue';
//  import AddNewItems from './components/AddNewItems.vue';
//  import AllCategories from './components/AllCategories.vue';

//import RouterView  from 'vue-router';



//  import AllItems from './components/AllItems.vue';
export default {
  name: 'App',
  components:{
    //RouterView,
   
},
  data: () => ({
    drawer: false,
    // display1:false,
    // display2:false,
    // display3:false,
    // display4:false,
    // items:[
    //   {title:'Item Category', icon:"mdi-widgets",child:['All Categories','Add New Category']},
    //   {title:'Items', icon:"mdi-folder",child:['All Items','Add New Items']}
    // ],
    // child:[
    //   {title:'All Categories'},
    //   {title:'Add New Category'},
    //   {title:'All Items'},
    //   {title:'Add New Items'}
    // ]
    //
  }),
  computed: {
    items() {
      return this.$store.state.items
    },
  },
  methods:{
  //   clicks(para){
     
  //    if(para==1){
  //    this.display1 = !this.display1;
     
  //   }
  //   else if(para==2){
  //     this.display2 = !this.display2;
      
  //   }
  //   else if(para==3){
  //     this.display3 = !this.display3; 
  //   }
  //   else if(para==4){
  //     this.display4 = !this.display4; 
  //   }
  // }

    
  }
};
</script>