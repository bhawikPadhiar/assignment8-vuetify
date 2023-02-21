<template>
 
 
  <v-app id="inspire">
   
    <v-app-bar app :elevation="1" >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Session 8</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn elevation fab small><v-icon>mdi-heart</v-icon></v-btn>
      <v-btn elevation fab small><v-icon>mdi-magnify</v-icon></v-btn>
      <v-btn elevation fab small><v-icon>mdi-dots-vertical</v-icon></v-btn>
    </v-app-bar>
    <v-navigation-drawer  app v-model="drawer" temporary>  
      <template>
      <v-list>
           <!-- list group 1 -->
        <v-list-group v-for="item in allItems" :key="item.title" v-model="item.active" :prepend-icon="item.icon"
          active-color="primary">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title  v-text="item.title"></v-list-item-title>
              <!-- <v-icon :icon="item.icon"></v-icon> -->
            </v-list-item-content>
          </template>
            <v-list-item router :to='child.route' :key="child.title" v-for="child in allItems3" :prepend-icon="child.icon"  active-color="dark">
                <template >
              <v-list-item-content>
                <v-icon :prepend-icon="child.icon"></v-icon>
               <v-list-item-title  :prepend-icon="child.icon" v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </template>
         
            </v-list-item>
        </v-list-group>
      </v-list> 
        <!-- list group 2 -->
        <v-list>
        <v-list-group v-for="item in allItems2" :key="item.title" v-model="item.active" :prepend-icon="item.icon"
          active-color="primary">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <!-- <v-icon :icon="item.icon"></v-icon> -->
            </v-list-item-content>
          </template>
          <v-list-item router :to='child.route' :key="child.title" v-for="child in allItems4" :prepend-icon="child.icon" active-color="primary">
            <v-list-item-content>
             <v-list-item-title  v-text="child.title"> </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </template>
    </v-navigation-drawer >
    

  
    
 
   <!-- <AllCategories></AllCategories> -->
   <!-- <AllItems></AllItems> -->
    <!-- <AddNew></AddNew >
    <AddNewItems></AddNewItems> -->

    
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
import { mapGetters,mapActions } from 'vuex';



//  import AllItems from './components/AllItems.vue';
export default {
 
  name: 'App',
   
    //RouterView,
    computed:{ ...mapGetters(['allItems']),...mapGetters(['allItems2']),...mapGetters(['allItems3']),...mapGetters(['allItems4'])},

    methods:{
      ...mapActions(['fetchItems']),...mapActions(['fetchItems2']),...mapActions(['fetchItems3']),...mapActions(['fetchItems4']),
      open(data){
      this.drawer=data
      console.warn(data)
      }
    
    },
    created(){
      this.fetchItems(),
      this.fetchItems2(),
      this.fetchItems3(),
      this.fetchItems4()
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
  })
  

  
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

  };
</script>
