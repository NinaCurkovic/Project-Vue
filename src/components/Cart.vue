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
          <th><button @click='$emit("buttonEvent",{operacija:"remove", artical:artical})' class="btn-x" >X</button></th>
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
  props: ['basket', 'quantity'],
  emits: ['buttonEvent'],
  data() {
    return {
    };
  },
  
};
</script>

<style>
.table{
  font-size: 120%;
  text-align: left;
  margin: 1%;
}
.two-btn{
  justify-items: center;
  margin-left: 40%;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: -5%;
}
</style>