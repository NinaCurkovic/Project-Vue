<template>
  <div class="item-b">
    <select class="dropdown"  id='myDropdown' @change='swichDropDownValue($event)' >
        <option value="all" >All</option>
        <option value="soaps">Soaps</option>
        <option value="candles">Candles</option>
    </select>
  </div>
    <div class="item-b">
      <div class="icon-search">
        <fa icon="search"></fa>
      <input class="search" v-model="searchInputData" placeholder="search.." >
      </div>
    </div>
</template>
<script>
export default {
	name:"Filter",
	props: ['artical'],
  
    data() {
    return {
      searchInputData: '',
    };
  },
    methods: {
      swichDropDownValue(e){
        this.$emit("filterDropDown",e.target.value)
      }
    },
    watch: {
      searchInputData(newValue){
        this.$emit("filterSearch",newValue)
      }}
}
</script>
<style>
.search {
    /* position: relative;
    display: flex;
    top: -20px;
    left: 56%;
    height: 20%;
    flex-grow: 0.2;*/
    border-style: inset;
    border-top-style: none;
    border-left-style: none;
    border-right-style: none; 
} 
.icon-search{
  display: inline-flex;
}
div{
  justify-content: left;
}
</style>