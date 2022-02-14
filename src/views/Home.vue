<template>
<div class="header_body">
  <p class="shipping"><b>FREE SHIPPING ON ORDERS OVER 50$</b></p>
    <h1>SOAPS & CANDLES</h1>
     <div class="home_help">
   </div>
      <div class="img1"><p class="txt">HANDCRAFTED ORGANIC SOAPS & CANDLES</p>
     <router-link to="/products" class="btnH"><button class="btn1">Shop Now</button></router-link>
     </div>
     <div class="img2"><p class="txt2">JUST LIKE NATURE INTENDED</p></div>
      <br>
</div>
<Footer/>
</template>
<script>
import Footer from '../components/Footer.vue'
export default {
  components: {
    Footer
  }}
</script>
<style>
.img1{
  background-image:url('../assets/pictures/home_page.jpg');
	justify-content: left;
  display: flex;
	width: 700px;
  height: 550px;
  margin-top: 5%;
  margin-left: 5%;
  
}
.img2{
   background-image:url('../assets/pictures/home_page3.jpg');
	justify-content: left;
  display: flex;
	width: 700px;
  height: 500px;
  margin-top: 10%;
  margin-left: 40%;
}
.btnH{
    margin-left: -130%;
    margin-top: auto;
  }
  .btn1{
  background-color: darkgrey;
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  font-size: 200%;
  cursor: pointer;
  margin-left: 240%;
  width: 300%;
  
}
.btn1:hover{
 background-color:  rgba(255, 255, 255, 0.404);
  color: black;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  
}
h1{
  
  /* width: 20%;
  justify-content: center; */
  border-style: outset;
  width: 40%;
  margin-left: 30%;
}
.shipping1{
  margin-top: -5%;
  background-color: darkgray;
  text-align: center;
  color: #fff;
}
.txt{
  margin-left: 110%;
  margin-right: 50%;
  font-size: 250%;
  margin-top: 40%;
}
.txt2{
  margin-left: -65%;
  font-size: 250%;
  margin-top: -10%;
}
</style>