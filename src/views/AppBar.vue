<template>
   <v-app-bar app :elevation="6"   >
     <v-app-bar-nav-icon @click="drawerData(drawer = !drawer)"></v-app-bar-nav-icon>
     <v-toolbar-title>Session 8</v-toolbar-title>
     <v-spacer></v-spacer>
     <v-btn elevation fab small><v-icon>mdi-heart</v-icon></v-btn>
     <v-btn elevation fab small><v-icon>mdi-magnify</v-icon></v-btn>
     <v-btn elevation fab small><v-icon>mdi-dots-vertical</v-icon></v-btn>
   </v-app-bar>
</template>
<script>
export default{
data: () => ({
    drawer: null,
    data:''
}),
// drawer = !drawer
methods:{
  drawerData(data){
    // console.log(data)
    this.$emit('drawerData',data)
  }
  }

}

  </script>