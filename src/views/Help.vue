<template>
<div class="header_body">
  <p class="shipping"><b>{{$t('free')}}</b></p>
    <h1 class="h1"><img src="../assets/pictures/BLOG-NASLOV.jpg" class="img-naslov-signin"></h1>
    </div>
    <div class="grid-container2">
      <div class="boxx">
        <router-link to="/" class="home-link"><fa icon="home"></fa></router-link>
      </div>
      <div class="boxx">
        <select v-model="$i18n.locale" class="jezik" >
        <option value="en">English</option>
        <option value="hr">Croatia</option>
      </select>
      </div>
      
    </div>
    
  <div class="grid-container">
      <div class="grid-item">
        <img src="../assets/pictures/info1.jpg" class="img-info"/>
     
     </div > 
     <div class="grid-item">
       <p class="txt3">{{$t('h1')}}</p> 
       <p class="p">{{$t('paragraf1')}}</p>
     </div>
      <br>
      <div class="grid-item">
        <img src="../assets/pictures/info2.jpg" class="img-info"> 
     </div> 
     <div class="grid-item">
       <p class="txt3">{{$t('h2')}}</p><p></p>
       <p class="p">{{$t('paragraf2')}}
       </p>
     </div>
  </div>
<Footer/> 
</template>
<script>
import Footer from '../components/Footer.vue'

export default {
  name: 'Help',
  components: {
    Footer,
    
  }}
</script>
<style>
.home-link{
  font-size: 25px;
  color: black;
  position: fixed;
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
.img-info{
  margin-top:17%;
  }
.p{
  text-align: justify;
  font-style: italic;
  margin-left: 10%;
  margin-right: 10%;
}
.jezik{
  display: grid;
  width: 8%;
  position: fixed;
  border-style: none;
}
.grid-container2{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  margin-top: 12%;
  margin-left: 17%;
  grid-column-gap: 13%;
}
@media only screen and (max-width:480px) {
  /* For mobile phones: */
  .img_help {
    width: 80%;
    height: 20%;
  }
  .h1{
    font-size: 80%;
    margin-top: -22%;
  }
  .home-link{
    margin-left: -10%;
    margin-top: -2%;
  }
  .home-help{
    overflow: hidden;
  }
  .jezik{
    width: 60%;
  }
  }
</style>
<i18n>
{
  "en": {
    "paragraf1": "Soap is a salt of a fatty acid used in a variety of cleansing and lubricating products. In a domestic setting, soaps are surfactants usually used for washing, bathing, and other types of housekeeping. In industrial settings, soaps are used as thickeners, components of some lubricants, and precursors to catalysts. When used for cleaning, soap solubilizes particles and grime, which can then be separated from the article being cleaned. In hand washing, as a surfactant, when lathered with a little water, soap kills microorganisms by disorganizing their membrane lipid bilayer and denaturing their proteins. It also emulsifies oils, enabling them to be carried away by running water.",
    "paragraf2": "A candle is an ignitable wick embedded in wax, or another flammable solid substance such as tallow, that provides light, and in some cases, a fragrance. A candle can also provide heat or a method of keeping time. A person who makes candles is traditionally known as a chandler. Various devices have been invented to hold candles, from simple tabletop candlesticks, also known as candle holders, to elaborate candelabra and chandeliers.",
    "h1": "SOAPS",
    "h2": "CANDLES",
    "free": "FREE SHIPPING ON ORDERS OVER 50$",
    
  },
  "hr": {
    "paragraf1": "Sapun je sol masne kiseline koja se koristi u raznim proizvodima za čišćenje i podmazivanje. U kućanstvu, sapuni su površinski aktivne tvari koje se obično koriste za pranje, kupanje i druge vrste kućanstva. U industrijskim uvjetima, sapuni se koriste kao zgušnjivači, komponente nekih maziva i prekursori katalizatora.Kada se koristi za čišćenje, sapun otapa čestice i prljavštinu, koje se zatim mogu odvojiti od proizvoda koji se čisti. Kod pranja ruku , kao surfaktant, kada se zapjeni s malo vode, sapun ubija mikroorganizme dezorganizirajući njihov lipidni dvosloj membrane i denaturirajući njihove proteine . Također emulgira ulja, omogućujući njihovo odnošenje tekućom vodom.",
    "paragraf2": "Svijeća je zapaljivi fitilj ugrađen u vosak ili drugu zapaljivu čvrstu tvar kao što je loj , koja daje svjetlost, a u nekim slučajevima i miris. Svijeća također može pružiti toplinu ili način održavanja vremena. Osoba koja izrađuje svijeće tradicionalno je poznata kao chandler. Izmišljeni su različiti uređaji za držanje svijeća, od jednostavnih stolnih svijećnjaka, također poznatih kao svijećnjaci, do složenih kandelabra i lustera.",
    "h1": "SAPUNI",
    "h2": "SVIJEĆE",
    "free": "BESPLATNA POŠTARINA ZA NARUDŽBE IZNAD 50$",
  }
}
</i18n>