<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit="onSubmit">
      <v-text-field v-model="name" :rules="rules" label="Name"></v-text-field>
      <v-text-field v-model="description" label="Description"></v-text-field>
      <v-switch v-model="model" hide-details inset ></v-switch>
      <v-btn type="submit" value="Submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
//import { mapActions } from 'vuex';
export default {
props:['addItems'],
  methods:{
    
   // ...mapActions(['addCategories']),
   

    onSubmit(event){
    //  e.preventDefault();
      let addData={name:this.name,description:this.description,model:this.model}
      this.$store.dispatch('addCategories',addData)
      event.target.reset();
    },

} ,
  data: () => ({
      name:'',
      description:'',
      model:'',
      
   
    rules: [
      value => {
        if (value) return true

        return 'You must enter a first name.'
      },
    ],
  }),
}
</script>