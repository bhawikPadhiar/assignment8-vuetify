<template>
    <v-table density="comfortable" theme="dark">
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
          <v-spacer></v-spacer>
          <td>{{ item.category }}</td>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <td>{{ item.price }}</td>
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
    export default {
      data () {
        return {
          table1: [
            {
              id: 1,
              name: "kjdf",
              description:"vbhjdfs",
              status:false
  
            },
            {
              id: 1,
              name: "jkadf",
              description:"vbhshdfs",
              price:12,
              category:"bad",
              status:false
            },
            {
              id: 1,
              name: "jadshjkadf",
              description:"vbdfs",
              status:false
            },
            {
              id: 1,
              name: "kjadshjdf",
              description:"vbdfs",
              status:false
            },
            {
              id: 1,
              name: "kjadadf",
              description:"vbhjhdfs",
              status:false
            },
            {
              id: 1,
              name: "kjkadf",
              description:"vbhjfs",
              status:false
            }  
          ],
        }
      },
    }
  </script>