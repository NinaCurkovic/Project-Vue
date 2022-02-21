<template>
<div class="two-filter">
  <div class="item-b">
    <select @change='swichDropDownValue($event)' class="dropdown" >
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
  margin-left: 125%;
}
div{
  justify-content: left;
}
.two-filter{
  display: inline-flex;
    /* justify-content: center; */
    /* align-content: stretch; */
    margin-top: -6.1%;
    /* justify-items: center; */
    margin-left: 33%;
}
.dropdown{
  border-style: none;
    width: 120%;
    height: 18%;
    text-align: center;
}
@media only screen and (max-width:480px) {
  .dropdown{width: 600%;}
  .two-filter{
    margin-left: 40%;
  }
  .icon-search{
    
  }
}
</style>