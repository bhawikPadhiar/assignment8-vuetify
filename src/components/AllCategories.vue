<template>
  <v-main>
  <v-data-table
    :headers="headers"
    :items="allTable1"
    :sort-by="[{ key: 'calories', order: 'asc' }]"
    class="elevation-1"
  >

    <template v-slot:top>
      <v-toolbar
        flat >
        <v-toolbar-title>All Category</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
        
          
        <v-card>
          <EditModalCate v-if="dialog" :editCateData="editData" @close-modal="close($event)"></EditModalCate>
  
            </v-card>
        </v-dialog>
       
      </v-toolbar>


    </template>

    
    <template v-slot:[`item.model`]="{ item }">
        <v-switch  :key="item.model" v-model="item.model" />
  </template>
   
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        size="small"
        class="me-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
      
        @click="deleteCate(item.id)"
      >
        mdi-delete
      </v-icon>
    </template>
   
  </v-data-table>
</v-main>
</template>

<script>
//import EditModalCate from './EditModalCate.vue';

import {  mapGetters,mapActions } from 'vuex';
import EditModalCate from './EditModalCate.vue';

  export default {
    components:{
    EditModalCate,
    
},
    computed:{
    ...mapGetters(['allTable1']),
      headers(){
        return [
          { text: 'ID' , value:'id'},
          { text: 'Name' , value:'name'},
          { text: 'Description', value :'description'},
          { text: 'Status', value:'model' },
          { text: 'Actions', value:'actions'}
        ]
      },
      // items(){
      //   return[
          
      //    ]
      // }
    
    },
    methods:{
      ...mapActions(['fetchTable1']),
      deleteCate(id){
     this.$store.dispatch('deleteCate',id)},
     editItem(data){
      this.editData=data,
      this.dialog=true
     },
     close(){
      this.dialog=false
     }
    },
    created(){
      // this.fetchTable1()
      this.$store.dispatch('fetchTable1')
    },

    data () {
      return {
        table1:[],
       dialog:false,
        editData:[],
      }
    }
  }
</script>