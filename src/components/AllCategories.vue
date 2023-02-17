<template>
  <v-table theme="dark">
    <thead>
      <tr>
        <v-spacer></v-spacer>
        <th>
          ID
        </th>
        <v-spacer></v-spacer>
        <th >
          Name
        </th>
        <v-spacer></v-spacer>
        <th>
          Description
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
      <tr
        v-for="item in allTable1"
        :key="item.name">
        <v-spacer></v-spacer>
        <td>{{ item.id }}</td>
        <v-spacer></v-spacer>
        <td>{{ item.name }}</td>
        <v-spacer></v-spacer>
        <td>{{ item.description }}</td>
        <v-spacer></v-spacer>
       <td>
        <v-switch
        v-model="item.model"
    hide-details
    inset
></v-switch></td>
       <v-spacer></v-spacer>
       <td><v-btn @click="deleteCate(item.id)">
          Delete
       </v-btn></td>
       <v-spacer></v-spacer>
       <td><v-btn>
        Edit
        </v-btn></td>
        <v-spacer></v-spacer>
      </tr>
    </tbody>
  </v-table>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

  export default {
    computed:{
      ...mapGetters(['allTable1'])
    },
    methods:{
      ...mapActions(['fetchTable1']),
      deleteCate(id){
     this.$store.dispatch('deleteCate',id)}
    },
    created(){
      this.fetchTable1()
    },

    data () {
      return {
        table1:[ ],
      }
    }
  }
</script>