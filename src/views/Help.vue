<template>
<div class="b">
  <p class="shipping1"><b>FREE SHIPPING ON ORDERS OVER 50$</b></p>
    <h1 class="h1">INFO</h1>
    <router-link to="/" class="home-link"><fa icon="home"></fa></router-link>
</div>
     <div class="home_help">
   </div>
      <div class="img3"><p class="txt3">SOAPS</p>
     <router-link to="/products"><button class="btn2" >Shop Soaps</button></router-link>
     
      
     
     </div >
     <div class="paragraf">
       <p class="p">Soap is a salt of a fatty acid used in a variety of cleansing and lubricating products. In a domestic setting, soaps are surfactants usually used for washing, bathing, and other types of housekeeping. In industrial settings, soaps are used as thickeners, components of some lubricants, and precursors to catalysts. When used for cleaning, soap solubilizes particles and grime, which can then be separated from the article being cleaned. In hand washing, as a surfactant, when lathered with a little water, soap kills microorganisms by disorganizing their membrane lipid bilayer and denaturing their proteins. It also emulsifies oils, enabling them to be carried away by running water.</p>
     </div>
      <br>
      <div class="img4"><p class="txt3">CANDLES</p><p></p>
     <router-link to="/products" ><button class="btn3">Shop Candles</button></router-link>
     </div>
     <div class="paragraf">
       <p class="p">A candle is an ignitable wick embedded in wax, or another flammable solid substance such as tallow, that provides light, and in some cases, a fragrance. A candle can also provide heat or a method of keeping time. A person who makes candles is traditionally known as a chandler. Various devices have been invented to hold candles, from simple tabletop candlesticks, also known as candle holders, to elaborate candelabra and chandeliers.
       </p>
     </div>
     <div>

     </div>
     <Footer/> 
</template>
<script>
import Footer from '../components/Footer.vue'
export default {
  name: 'Help',
  components: {
    Footer
  }}
</script>
<style>
.img3{
  background-image:url('../assets/pictures/info1.jpg');
  display: flex;
	width: 700px;
  height: 700px;
  margin-top: 5%;
  
}
.img4{
   background-image:url('../assets/pictures/info2.jpg');

  display: flex;
	width: 700px;
  height: 700px;
  margin-top: 5%;
  
}
.home-link{
  display: flex;
  justify-content: left;
  margin-top: -50px;
  margin-left: 20px;
  font-variant: small-caps;
  font-size: 25px;
}
  .btn2{
  background-color: darkgrey;
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  font-size: 200%;
  cursor: pointer;
  margin-left: -610%;

}
.btn3{
  background-color: darkgrey;
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  font-size: 200%;
  cursor: pointer;
  margin-left: -535%;
}
.btn2:hover, .btn3:hover{
 background-color:  rgba(255, 255, 255, 0.404);
  color: black;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  
}

.shipping1{
  margin-top: -5%;
  background-color: darkgray;
  text-align: center;
  color: #fff;
  
}
.home-help{
    overflow: hidden;
  }
.txt3{
  margin-left: 150%;
  font-size: 200%;
  margin-top: 50%;
}
.paragraf{
  text-align: justify;
  margin-top: -20%;
    width: 40%;
    margin-left: 58%;
 
}

@media only screen and (max-width:480px) {
  /* For mobile phones: */
  .img_help {
    width: 80%;
    height: 20%;
  }
  .h1{
    font-size: 80%;
    margin-top: -23%;
  }
  .home-link{
    font-size: 7px;
  }
  
  
  }
</style>