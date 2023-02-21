import axios from "axios";

const state ={
    items:[],
    items2:[],
    items3:[],
    items4:[],
    table1:[],
    table2:[],
};

const getters ={
    allItems: state => state.items,
    allItems2: state => state.items2,
    allItems3: state => state.items3,
    allItems4: state => state.items4,
    allTable1: state => state.table1,
    allTable2: state => state.table2
};

const actions = {
    async fetchItems({commit}) {
        const response = await axios.get('http://localhost:3000/items');
        commit('setItems',response.data)
        
    },
    async fetchItems2({commit}) {
        const response = await axios.get('http://localhost:3000/items2');
        commit('setItems2',response.data)
       
    },
    async fetchItems3({commit}) {
        const response = await axios.get('http://localhost:3000/items3');
        commit('setItems3',response.data)
        
    },
    async fetchItems4({commit}) {
        const response = await axios.get('http://localhost:3000/items4');
        commit('setItems4',response.data)
       
    },
    // All Categories
    async fetchTable1({commit}) {
        const response = await axios.get('http://localhost:3000/table1');
        commit('setTable1',response.data)
    },
    //All Items
    async fetchTable2({commit}) {
        const response = await axios.get('http://localhost:3000/table2');
        commit('setTable2',response.data)
    },
    //Add Categories
    async addCategories({commit},param) {
        const response = await axios.post('http://localhost:3000/table1',param);
        commit('addCategories',response.data);
       
    },
    // Add Items
    async addItems({commit},param) {
        const response = await axios.post('http://localhost:3000/table2',param);
        commit('addItems',response.data);
        
    },
    // Delete Items
    async deleteItems({commit},id){
        await axios.delete(`http://localhost:3000/table2/${id}`);
    commit('removeItem',id);
   
},
// Delete Categories
    async deleteCate({commit},id){
        await axios.delete(`http://localhost:3000/table1/${id}`);
    commit('removeCate',id);
   
},
// Edit items
    async editItems({commit},edit){
       const response = await axios.put(`http://localhost:3000/table2/${edit.id}`,edit);
         commit('editItem',edit);
        console.log(response.data)
    },
// Edit Categories
async editCateg({commit},edit){
    const response = await axios.put(`http://localhost:3000/table1/${edit.id}`,edit);
      commit('editCateg',edit);
     
     console.log(response.data)
 },
 //Edit Items Status
 async editModelItems({commit},edit){
    const response = await axios.put(`http://localhost:3000/table2/${edit.id}`,edit);
      commit('editModelItems',edit);
     console.log(response.data)
 },
 // Edit Categories Status
 async editModelCategories({commit},edit){
    const response = await axios.put(`http://localhost:3000/table1/${edit.id}`,edit);
      commit('editModelCategories',edit);
     
     console.log(response.data)
 }, 
    
};

const mutations ={
    setItems: (state, items)=>(state.items = items),
    setItems2: (state, items2)=>(state.items2 = items2),
    setItems3: (state, items3)=>(state.items3 = items3),
    setItems4: (state, items4)=>(state.items4 = items4),
    setTable1: (state, table1)=>(state.table1 = table1),
    setTable2: (state, table2)=>(state.table2 = table2),
    addCategories:(state,table1)=>state.table1.unshift(table1),
    addItems:(state,table2)=>state.table2.unshift(table2),
    removeItem:(state,id) => state.table2 = state.table2.filter(table2 => table2.id !==id),
    removeCate:(state,id) => state.table1 = state.table1.filter(table1 => table1.id !==id),
    editItem: (state,edit)=> {const index = state.table2.findIndex(table2 => table2.id === edit.id);
    if(index !== -1){
        state.table2.splice(index,1,edit);
        console.warn(edit)
    }
 },
 editCateg: (state,edit)=> {const index = state.table1.findIndex(table1 => table1.id === edit.id);
    if(index !== -1){
        state.table1.splice(index,1,edit);
    }
 },
 editModelItems: (state,edit)=> {const index = state.table2.findIndex(table2 => table2.id === edit.id);
    if(index !== -1){
        state.table2.splice(index,1,edit);
        console.warn(edit)
    }
 },
 editModelCategories: (state,edit)=> {const index = state.table1.findIndex(table1 => table1.id === edit.id);
    if(index !== -1){
        state.table1.splice(index,1,edit);
        console.warn(edit)
    }
 },
};

export default {
    state,
    getters,
    actions,
    mutations
}