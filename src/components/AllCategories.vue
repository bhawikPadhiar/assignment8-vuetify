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
        v-for="item in table1"
        :key="item.name"
      ><v-spacer></v-spacer>
        <td>{{ item.id }}</td>
        <v-spacer></v-spacer>
        <td>{{ item.name }}</td>
        <v-spacer></v-spacer>
        <td>{{ item.description }}</td>
        <v-spacer></v-spacer>
       <td><v-switch label="Switch"></v-switch></td>
       <v-spacer></v-spacer>
       <td><v-btn>
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
import { mapGetters } from 'vuex';

  export default {
    data () {
      return {
        table1: [
          // {
          //   id: 1,
          //   name: "kjadshjkadf",
          //   description:"vbhjdfs",
          //   status:false

          // },
          // {
          //   id: 1,
          //   name: "kjadshjkadf",
          //   description:"vbhshdfs",
          //   status:false
          // },
          // {
          //   id: 1,
          //   name: "kjadshjkadf",
          //   description:"vbdfs",
          //   status:false
          // },
          // {
          //   id: 1,
          //   name: "kjadshjkadf",
          //   description:"vbdfs",
          //   status:false
          // },
          // {
          //   id: 1,
          //   name: "kjadshjkadf",
          //   description:"vbhjhdfs",
          //   status:false
          // },
          // {
          //   id: 1,
          //   name: "kjadshjkadf",
          //   description:"vbhjfs",
          //   status:false
          // }  
        ],
      }
    },
    computed:{
      ...mapGetters["fetchUsers"]                 
    }
  }
</script>