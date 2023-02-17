<template>
    <v-sheet width="300" class="mx-auto">
        <v-form @submit="onSubmit">
            <v-text-field v-model="name" :rules="rules" label="Name"></v-text-field>
            <v-text-field v-model="price" label="price"></v-text-field>
            <v-text-field v-model="description" label="Description"></v-text-field>
            <v-select v-model="category" :items="items" :rules="[v => !!v || 'Item is required']" label="category"
                required></v-select>
            <v-switch v-model="model" hide-details inset ></v-switch>
            <v-btn type="submit"  block class="mt-2">Submit</v-btn>
        </v-form>

    </v-sheet>

</template>

<script>
export default {

    methods:{
        
        onSubmit(){
    //  event.preventDefault();
      let addData={name:this.name,description:this.description,model:this.model,price:this.price,category:this.category}
      this.$store.dispatch('addItems',addData)
    // event.target.reset();
},
    },

    data: () => ({
        name:'',
        model: false,
        description: '',
        price:"",
        category: null,
        items: [
            'Fire Type',
            'Water Type',
            'Earth Type',
            'Lightening Type',
        ],
       // Name: '',
        rules: [
            value => {
                if (value) return true

                return 'You must enter a first name.'
            },
        ],
    }),
}
</script>