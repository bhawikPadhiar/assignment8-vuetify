<template>
 <v-app id="inspire">
  <AppBar @drawerData="open($event)"></AppBar>
   <v-navigation-drawer v-if="drawer" app v-model="drawer" >  
     <template>
     <v-list>
          <!-- list group 1 -->
       <v-list-group v-for="item in allItems" :key="item.title" v-model="item.active" :prepend-icon="item.icon"
         active-color="primary">
         <template v-slot:activator>
           <v-list-item-content>
             <v-list-item-title  v-text="item.title"></v-list-item-title>
            
           </v-list-item-content>
         </template>
           <v-list-item  v-for="child in allItems3" :prepend-icon="child.icon" router :to='child.route' :key="child.title" active-color="dark">
              <v-icon class="icon">{{ child.icon }}</v-icon>
              <v-list-item-title  v-text="child.title" ></v-list-item-title>
           </v-list-item>
       </v-list-group>
     </v-list> 
       <!-- list group 2 -->
       <v-list>
       <v-list-group v-for="item in allItems2" :key="item.title" v-model="item.active" :prepend-icon="item.icon"
         active-color="primary">
         <template v-slot:activator>
             <v-list-item-title v-text="item.title"></v-list-item-title>
             <!-- <v-icon :icon="item.icon"></v-icon> -->
         </template>
         <v-list-item router :to='child.route' :key="child.title" v-for="child in allItems4" :prepend-icon="child.icon" active-color="primary">
            <v-icon class="icon" >{{ child.icon }}</v-icon>
           
            <v-list-item-title v-text="child.title"></v-list-item-title>
         
          </v-list-item>
       </v-list-group>
     </v-list>
   </template>
   </v-navigation-drawer >


  <!-- <AllCategories></AllCategories> -->
  <!-- <AllItems></AllItems> -->
   <!-- <AddNew></AddNew >
   <AddNewItems></AddNewItems> -->

   
   <v-main>s
     <v-container> 
     <RouterView></RouterView>
   </v-container>
 
   </v-main>
 </v-app>

</template>

<script>
import { mapGetters,mapActions } from 'vuex';
import AppBar from './AppBar.vue';


//  import AllItems from './components/AllItems.vue';
export default {

  name: 'App',
  components:{  AppBar },
  
    computed:{ ...mapGetters(['allItems']),...mapGetters(['allItems2']),...mapGetters(['allItems3']),...mapGetters(['allItems4'])},

    methods:{
      ...mapActions(['fetchItems']),...mapActions(['fetchItems2']),...mapActions(['fetchItems3']),...mapActions(['fetchItems4']),
      open(data){
        this.drawer=data
      // console.warn(data)
      }
    
    },
    created(){
      this.fetchItems(),
      this.fetchItems2(),
      this.fetchItems3(),
      this.fetchItems4()
    },
  data: () => ({
    drawer: '',
  
  })


  };
</script>
<style>
.icon {
 padding: auto;
 margin-right: 20px;
}
</style>