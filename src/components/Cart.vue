<template>
  <div>
     <tr>
     <th>{{this.artical.description}}</th>
     <th>{{this.artical.price}}</th>
     </tr>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: ['artical'],
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style lang="scss">
</style>