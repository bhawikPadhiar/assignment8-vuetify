<template>
  <v-main>

    <v-dialog v-model="dialog" width="auto">
      <v-card>
        <v-card-text>
          <h3>{{ postss }}</h3>
          <v-sheet width="300" class="mx-auto">
            <v-form @submit.prevent="editIt(postss)" >
              <v-text-field v-model="postss.name" :rules="rules" label="Name"></v-text-field>
              <v-text-field v-model="postss.price" label="money"></v-text-field>
              <v-text-field v-model="postss.description" label="Description"></v-text-field>
              <v-select v-model="postss.category" :items="items" :rules="[v => !!v || 'Item is required']"
                label="category" required></v-select>
              <v-switch v-model="postss.model" hide-details inset></v-switch>
              <v-btn type="submit" block class="mt-2">Submit</v-btn>
            </v-form>
          </v-sheet>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="close">Close Dialog</v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>

  </v-main>
</template>

<script>

//import { mapActions } from 'vuex'


export default {
  props: ["editItemsData"],

  data() {
    return {
      //editData:[],
      postss: this.editItemsData,
      dialog: true,
      items: [
        "Fire Type",
        "Water Type",
        "Earth Type",
        "Lightening Type",
      ],
       name:this.name,
       description:this.description,
       price:this.price,
       category:this.category,
       model:this.price,
      //  table2:[]
      rules: [
        value => {
          if (value)
            return true;
          return "You must enter a first name.";
        },
      ],
    };
  },
  getters: {

    // this.$store.commit('allTable2')
  },
  methods: {
  
    // open(data){
    //   console.log(data)
    // },
    close() {
      this.$emit("close-modal");
    },
   //...mapActions(['editItems']),
   editIt() {
    //  this.$store.dispatch('editItems')
      let edit ={
        id: this.postss.id,
        name:this.postss.name,
        description:this.postss.description,model:this.postss.model,price:this.postss.price,category:this.postss.category
       
      }
      this.$store.dispatch('editItems',edit)
     // this.editItems(edit);
     }
  },

}
</script>