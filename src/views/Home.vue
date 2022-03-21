<template>
<div >
  <p class="shipping2">FREE SHIPPING ON ORDERS OVER 50$</p>
    <h1><img src="../assets/pictures/naslov1.jpg" class="img-naslov-home"></h1>
     <div class="home_help">
   </div>
   <div>
    <img src="../assets/pictures/home_page.jpg" class="img1">
    <p class="txt">HANDCRAFTED ORGANIC </p><p class="txt-part2"> SOAPS & CANDLES</p>
    <router-link to="/products" class="btnH"><button class="btn1" id="button1">Shop Now</button></router-link>
   </div>
     <p class="txt2">JUST LIKE </p><p class="txt2-part2">NATURE INTENDED</p>
     <video class="video1" controls>
      <source src="../assets/pictures/video1.mp4" type="video/mp4">
      Your browser does not support HTML video.
    </video>
     
</div>

</template>
<script>
export default {
  components: {
  }}
</script>
<style>
.img1{
  width: 65%;
  height: 30%;
  display: flex;
  margin-left: 5%;
}
.btnH{
  margin-top: auto;
}
  .btn1{
  background-color: darkgrey;
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  font-size: 200%;
  cursor: pointer;
  width: 60%
}
.btn1:hover{
  background-color:  rgba(255, 255, 255, 0.404);
  color: black;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
h1{
  display: grid;
  justify-content: center;
}
.shipping{
  margin-top: 1%;
  background-color: darkgray;
  text-align: center;
  color: #fff;
}
.shipping2{
  background-color: darkgray;
  text-align: center;
  color: #fff;
  margin-top: -0.1%;
}
.txt{
  font-size: 250%;
  margin-left: 40%;
}
.txt-part2{
  font-size: 250%;
  margin-left: 20%;
  margin-top: -3%;
}
.txt2{
  margin-left: -65%;
  font-size: 250%;
  
}
.txt2-part2{
  font-size: 250%;
  margin-left: -40%;
  margin-top: -3%;
}
.video1{
  width: 65%;
  height: 30%;
  display: flex;
  margin-left: 30%;
}
@media only screen and (max-width:480px) {
.img-naslov-home{
  width: 60%;
  margin-left: 25%;
}
.shipping {
  font-size: 70%;
  margin-top: 5%;
}
.img1{
  width: 50%;
  height: 20%;
}
.txt, .txt-part2, .btn1{
  font-size: 75%;
}
.txt2{
  font-size: 75%;
  margin-top: 2%;
}
.txt2-part2{
  font-size: 75%;
}
.sign_up{
  display: grid;
  justify-content: center;
  margin-top: 17%;
}
}
</style>