<template>
<div>
    <select class="dropdown"  id='myDropdown' @change="switchSelect($event)" >
        <!-- v-model='filtersApplied.dropDownEl' -->
        <option value="all" >All</option>
        <option value="women">Women</option>
        <option value="men">Men</option>
        <option value="children">Children</option>
    </select>
    
    <input class="search" >
    <!-- v-model="filtersApplied.search" -->
    
</div>

</template>
<script>
export default{
	name:"Filter",
	props: ['articlesNew'],
    data() {
    return {
    };
  },
    methods: {
    }
  }
</script>
<style>
.search {
    width: 55%;
    position: relative;
    display: flex;
    top: -70px;
    left: 46%;
    height: 20%;
    /* flex-grow: 2; */
    flex-grow: 0.2;
}
.dropdown {
  display: flex;
  font-family: Georgia, 'Times New Roman', Times, serif;
  width: 45%;
  height: 20px;
  position: relative;
  top: -52px;
  left: 1%;
  justify-content: flex-start;
  background-color:#f44336;
  font-variant: small-caps;
  flex-grow: 0.2;
}   
</style>