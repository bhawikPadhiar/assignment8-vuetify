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
        <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm(deleteData)">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>

        <v-card>
          <EditModalCate v-if="dialog" :editCateData="editData" @save-modal="save($event)" @close-modal="close($event)"></EditModalCate>
  
            </v-card>
        
       
      </v-toolbar>
    </template>

    
    <template v-slot:[`item.model`]="{ item }">
        <v-switch  :key="item.model" @change="editModel(item)" v-model="item.model" />
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
        this.deleteData=id,
        
      this.dialogDelete=true
     },
     closeDelete(){
      this.dialogDelete=false
     },
     editModel(data){
    
      this.$store.dispatch('editModelCategories',data)
     },

     deleteItemConfirm(id){
      console.log(id)
      this.$store.dispatch('deleteCate',id)
      this.dialogDelete=false
     },
     editItem(data){
      this.editData=data,
      
      this.dialog=true
     },
     close(){
      this.dialog=false
     },
     save(){
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
        dialogDelete:false,
        deleteData:''
      }
    }
  }
</script>