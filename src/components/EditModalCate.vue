<template>
    <v-main>
      <v-dialog v-model="dialog" width="auto">
        <v-card>
          <v-card-text>
            <v-sheet width="300" class="mx-auto">
                 <v-form ref="form">
                 <v-text-field v-model="postss.name" :rules="rules"   label="Name"></v-text-field>
                 <v-text-field v-model="postss.description" :rules="rules" label="Description"></v-text-field>
                 <v-switch v-model="postss.model" hide-details inset ></v-switch>
              <!-- <v-btn type="submit" value="Submit" block class="mt-2">Submit</v-btn> -->
              </v-form>
            </v-sheet>
          </v-card-text>
          <v-card-actions> 
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="close">
                Cancel
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                type="submit" value="Submit"
                @click ="onSubmit()"
              >
                Save
              </v-btn>
             </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </template>
  
  <script>
  export default {

    props: ["editCateData"],
    
  
    data() {
      return {
        resetData:[

        ],
        //editData:[],
        postss: this.editCateData,
        dialog:true,
        items: [
          "Fire Type",
          "Water Type",
          "Earth Type",
          "Lightening Type",
        ],
        //  name:this.name,
        //  description:this.description,
        //  model:this.price,
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
     onSubmit() {
      //  this.$store.dispatch('editItems')
      if(this.$refs.form.validate()){

      
        let edit ={
          id: this.postss.id,
          name:this.postss.name,
          description:this.postss.description,
          model:this.postss.model
        };
        this.$store.dispatch('editCateg',edit),
        
        this.$emit("save-modal")
        
       }
      }
    },
  
  }
  </script>