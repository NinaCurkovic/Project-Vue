<template>
  <div>
    <table>
      <thead>
        <tr>
        <th>Proizvod</th>
        <th>Cijena</th>
        </tr>
        </thead>
        <tbody v-for="artical in basket" :key="artical.id">
          <tr>
          <th>{{artical.description}}</th>
          <th>{{artical.price}}</th>
          <th><button @click='$emit("buttonEvent",{operacija:"remove", artical:artical})' class="btn-cart">X</button></th>
          </tr>
        </tbody>
        <button class="btn-cart" >Buy!</button>
        <button @click='$emit("buttonEvent",{operacija:"clear"})' class="btn-cart">Clear</button>
        
     </table>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: ['basket'],
  emits: ['buttonEvent'],
  data() {
    return {
    };
  },
  
};
</script>

<style lang="scss">
</style>