<template>
  <v-main>

    <v-dialog v-model="dialog" width="auto">
      <v-card>
        <v-card-text>
         
          <v-sheet width="300" class="mx-auto">
            <v-form ref="form">
              <v-text-field v-model="postss.name" :rules="rules" ></v-text-field>
              <v-text-field v-model="postss.price" :rules="rules" label="money"></v-text-field>
              <v-text-field v-model="postss.description" :rules="rules" label="Description"></v-text-field>
              <v-select v-model="postss.category"  :items="items"
                label="category" required></v-select>
              <v-switch v-model="postss.model"  hide-details inset></v-switch>
              
            </v-form>
          </v-sheet>
        </v-card-text>
       
        <v-card-actions> 
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="close()"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                type="submit" value="Submit"
                @click.prevent ="editIt()"
              >
                Save
              </v-btn>
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
      //  name:"",
      //  description:"",
      //  price:"",
      //  category:"",
      //  model:"",
      //  table2:[]
      rules: [
        value => {
          if (value)
            return true;
          return "Item Required.";
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
    if(this.$refs.form.validate()){
   
      let edit ={
        id: this.postss.id,
        name:this.postss.name,
        description:this.postss.description,model:this.postss.model,price:this.postss.price,category:this.postss.category
       
      };console.log(edit);
      this.$store.dispatch('editItems',edit);
     // this.editItems(edit);
     this.$emit("save-modal")
     }
    }
    // let post=postss
    // console.log(post)
    //  this.$store.dispatch('editItems')
   // const edit = {postss}
   
  },
  watch:{

dialog(val){
  val ||this.close() ||this.$emit("close-modal");
}
}
}
</script>