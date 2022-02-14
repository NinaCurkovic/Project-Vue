<template>
  <div>
    <table class="table">
      <thead>
        <tr>
        <th>PROIZVOD</th>
        <th>CIJENA</th>
        </tr>
        </thead>
        <tbody v-for="artical in basket" :key="artical.id">
          <tr>
          <th>{{artical.quantity}}x {{artical.description}}</th>
          <th>{{artical.price}}</th>
          <th><button @click='$emit("buttonEvent",{operacija:"remove", artical:artical})' class="btn-x" ><fa icon="trash"></fa></button></th>
          </tr>
        </tbody>
        <div class="two-btn">
          <button class="btn-buy" >Buy</button>
          <button @click='$emit("buttonEvent",{operacija:"clear"})' class="btn-cart">Clear</button>
        </div>
        
        
     </table>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: ['basket'],
  emits: ['buttonEvent','quantity'],
  data() {
    return {
    };
  },
  
};
</script>

<style>
.table{
  font-size: 90%;
    text-align: left;
    margin: 5%;
    word-spacing: 10px;
}
.two-btn{
  justify-items: center;
  font-family: Arial, Helvetica, sans-serif;
  
}
</style>