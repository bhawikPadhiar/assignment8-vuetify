<template>
  <v-main>
    <v-main>
  <v-data-table
    :headers="headers"
    :items="allTable2"
    :sort-by="[{ key: 'calories', order: 'asc' }]"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat >
        <v-toolbar-title>All Items</v-toolbar-title>
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
          <EditModalItems v-if="dialog" :editItemsData="editData" :items="items" @close-modal="close($event)"></EditModalItems>
  
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
      
        @click="deleteItems(item.id)"
      >
        mdi-delete
      </v-icon>
    </template>
   
  </v-data-table>
</v-main>
  


        <!-- <td><v-btn @click="deleteItems(item.id)">
            Delete
          </v-btn></td>
        <v-spacer></v-spacer>
        <td><v-btn  @click="openModal(item)">
            Edit
          </v-btn></td>
        <v-spacer></v-spacer>
      </tr>
    </tbody>
  </v-table> -->
  
</v-main>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import EditModalItems from './EditModalItems.vue';
export default {
  props:['items'],
  components:{
   
    EditModalItems
},
  computed: {
    ...mapGetters(['allTable2']),
    headers(){
        return [
          { text: 'ID' , value:'id'},
          { text: 'Name' , value:'name'},
          { text: 'Description', value :'description'},
          { text: 'Price', value:'price' },
          { text: 'Category', value:'category' },
          { text: 'Status', value:'model' },
          { text: 'Actions', value:'actions'}
        ]
      },
  },
  methods: {
    ...mapActions(['fetchTable2']),
    deleteItems(id) {
     
      this.$store.dispatch('deleteItems', id)
    },
    editItem(data){
      //this.$emit('openMoadals',data),
      this.editData=data,
      this.dialog=true
      
    },
    // open(data){
    //   this.editData=data
    //   console.log(this.editData)
    // },
      close(){
          this.dialog=false
      
      },
  
  },
  created() {
    this.fetchTable2()
  },
  data() {
    return {
    dialog:false,
      table2: [],
    editData:[],
    }
  },
}
</script>