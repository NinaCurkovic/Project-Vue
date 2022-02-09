<template>

  <img :src="require(`@/assets/pictures/${artical.picture}`)" class="img">
  <p>{{artical.description}}</p>
  <p>{{artical.price}} $</p>
  
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
</style>