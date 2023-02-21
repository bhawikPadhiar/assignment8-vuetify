<template>
  <v-main>

    <v-data-table :headers="headers" :items="allTable2" :sort-by="[{ key: 'calories', order: 'asc' }]"
      class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>All Items</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <!-- <v-dialog
          v-model="dialog"
          max-width="500px"
        > -->
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
            <EditModalItems v-if="dialog" :editItemsData="editData" :items="items" @save-modal="save($event)" @close-modal="close($event)">
            </EditModalItems>

          </v-card>
          <!-- </v-dialog> -->

        </v-toolbar>
      </template>
      <template v-slot:[`item.model`]="{ item }">
        <v-switch :key="item.model" @change="editModel(item)" v-model="item.model" />
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-icon size="small" class="me-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon size="small" @click="deleteItems(item.id)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>

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
  props: ['items'],
  components: {

    EditModalItems
  },
  computed: {
    ...mapGetters(['allTable2']),
    headers() {
      return [
        { text: 'ID', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Description', value: 'description' },
        { text: 'Price', value: 'price' },
        { text: 'Category', value: 'category' },
        { text: 'Status', value: 'model' },
        { text: 'Actions', value: 'actions' }
      ]
    },
  },
  methods: {
    ...mapActions(['fetchTable2']),
    deleteItems(id) {
      this.deleteData = id
      this.dialogDelete = true
    },
    closeDelete() {
      this.dialogDelete = false
    },
    deleteItemConfirm(id) {
      console.log(id)
      this.$store.dispatch('deleteItems', id)
      this.dialogDelete = false

    },
    editItem(data) {
      //this.$emit('openMoadals',data),
      this.editData = data,
        this.dialog = true
    },
    editModel(data){
    
      // let edit ={
       
      //   id:data.id,
      //   model:data.model
      // }

      console.log()
      this.$store.dispatch('editModelItems', data)
    },
    // open(data){
    //   this.editData=data
    //   console.log(this.editData)
    // },
    close() {
      this.dialog = false

    },
    save(){
      this.dialog = false
    }
  
  },
  created() {
    this.fetchTable2()
  },
  data() {
    return {
      dialog: false,
      table2: [],
      editData: [],
      dialogDelete: false,
      deleteData: ''
    }
  },
}
</script>