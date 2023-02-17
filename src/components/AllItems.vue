<template>
  <v-main><EditModalItems v-if="dialog" :editItemsData="editData" :items="items" @close-modal="close($event)" @openModals="open($event)"></EditModalItems>
  <v-table density="comfortable" theme="dark">
    <thead>
      <tr>
        <v-spacer></v-spacer>
        <th>
          ID
        </th>
        <v-spacer></v-spacer>
        <th>
          Name
        </th>
        <v-spacer></v-spacer>
        <th>
          Description
        </th>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <th>
          Category
        </th>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <th>
          Price
        </th>
        <v-spacer></v-spacer>
        <th>
          Status
        </th>
        <th>
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in allTable2" :key="item.name"><v-spacer></v-spacer>
        <td>{{ item.id }}</td>
        <v-spacer></v-spacer>
        <td>{{ item.name }}</td>
        <v-spacer></v-spacer>
        <td>{{ item.description }}</td>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <td>{{ item.category }}</td>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <td>{{ item.price }}</td>
        <v-spacer></v-spacer>
        <td><v-switch v-model="item.model" label="Switch"></v-switch></td>
        <v-spacer></v-spacer>
        <td><v-btn @click="deleteItems(item.id)">
            Delete
          </v-btn></td>
        <v-spacer></v-spacer>
        <td><v-btn  @click="openModal(item)">
            Edit
          </v-btn></td>
        <v-spacer></v-spacer>
      </tr>
    </tbody>
  </v-table>
  <p>{{ editData }}</p>
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
    ...mapGetters(['allTable2'])
  },
  methods: {
    ...mapActions(['fetchTable2']),
    deleteItems(id) {
     
      this.$store.dispatch('deleteItems', id)
    },
    openModal(data){
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