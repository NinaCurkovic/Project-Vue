<template>
<div >
  <p class="shipping"><b>FREE SHIPPING ON ORDERS OVER 50$</b></p>
    <h1><img src="../assets/pictures/naslov1.jpg" class="img-naslov-home"></h1>
     <div class="home_help">
   </div>
      <div class="img1"><p class="txt">HANDCRAFTED ORGANIC SOAPS & CANDLES</p>
     <router-link to="/products" class="btnH"><button class="btn1">Shop Now</button></router-link>
     </div>
     <div class="img2"><p class="txt2">JUST LIKE NATURE INTENDED</p></div>
      <br>
</div>

<!-- <Footer/> -->
</template>
<script>
// import Footer from '../components/Footer.vue'
export default {
  components: {
    // Footer
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
  display: grid;
  justify-content: center;
}
.shipping{
  margin-top: 1%;
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
@media only screen and (max-width:480px) {
  .img-naslov-home{
    
    width: 60%;
    /* display: grid; */
    /* justify-content: center; */
    /* align-content: stretch; */
    margin-left: 25%;
  }
  .shipping {
    font-size: 70%;
}
.img1{
  width: 50%;
    height: 20%;
}
.img2{
  width: 100%;
  height: 250px;
  
}
.txt{
  margin-top: 30%;
  font-size: 120%;
}
.btn1{
  font-size: 80%;
    margin-left: 70%;
}
.txt2{
  font-size: 70%;
    margin-top: 2%;
    /* margin-right: 40%; */
    margin-left: -39%;
}
.sign_up{
      display: grid;
    justify-content: center;
    margin-top: 17%;
}
}
</style>