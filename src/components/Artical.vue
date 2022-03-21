<template>
  <img :src="require(`@/assets/pictures/${artical.picture}`)" class="img">
  <p id="description">{{artical.description}}</p>
  <p>{{artical.price}} $</p>
  <p class="category" id="category">{{artical.category}}</p>
  <br>
</template>
<script>
export default{
	name:"Artical",
	props: ['artical'],
  methods: {
  }
}
</script>
<style>
.img{
  width: 80%;
  height: 80%;
}
.category{
  /* visibility: hidden; */
}
</style>