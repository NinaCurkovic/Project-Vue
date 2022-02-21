<template>
<div class="header_body">
    <p class="shipping"><b>FREE SHIPPING ON ORDERS OVER 50$</b></p>
    <h1 class="h1"><img src="../assets/pictures/naslov-signin.jpg" class="img-naslov-signin"></h1>
    <router-link to="/" class="home-link-signin"><fa icon="home"></fa></router-link>
</div>
    
    <form>
    <div id="main">
        <!-- <img src="../assets/pictures/img-signup6.jpg" class="img-signup"> -->
      <div class="sign_up">
          <div>
              <p class="two-name">Email</p>
              <input type="email">
              <p class="two-name">Password</p>
              <input type="password">
          </div> 
          <div class="btn-signup">
              <button class="btn-s" v-on:click="showMessage">Sign In</button>
          </div>
          <img src="../assets/pictures/sign-up.jpg" class="fb">
          <div class="linkovi">
            <div class="soc_mreze">
                <a href="https://www.facebook.com">
                <img src="../assets/pictures/facebook.png" class="fb-img"></a><br>
                </div> 
            <div class="soc_mreze">
                <a href="https://www.google.com">
                <img src="../assets/pictures/googlee.jpg" class="google-img"></a><br>
            </div>
          </div>
      </div>
    </div>
    </form>
</template>
<script>
export default {
    setup() {
        return{
        }
    },
    methods: {
        showMessage(){
                alert("Hello!");
            }
    }
}
</script>
<style>
.sign_up{
    display: grid;
    justify-content: center;
    margin-top: 17%;
}
.sirina{
    text-align: center;
    width: 140%;
}
.two-name{
   display: grid;
   justify-content: left;
   margin-left: 35%;
}
.home-link-signin{
    display: flex;
  justify-content: left;
  margin-top: -6.5%;
  margin-left: 33%;
  font-size: 25px;
}
/* .btn-signup{
   display: grid;
    justify-content: center;
    margin-top: 5%;
     */

/* .btn-signup:hover{
    background-color:  rgba(255, 255, 255, 0.404);
    color: black;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
} */
/* .img-signup{
    width: 60%;
    aspect-ratio: 1;
    margin-top: 3%;
} */
.div-btn{
    position: absolute;
  background: #a9a9a9;
  border: 20px black;
  width: 250px;
  right: 1%;
  font-size: 70%;
  border: outset;
  color: white;
}
.btn-s{
    width: 32%;
    display: grid;
    justify-content: center;
    margin-top: 5%;
    margin-left: 34%;
    background-color: darkgrey;
    color: white;
}
.google-img{
    width: 50px;
    height: 40px;
}
.linkovi{
    display: inline;
}
@media only screen and (max-width:480px) {
    .img-naslov-signin{
       width: 70%;
    /* height: 30%; */
    margin-left: 10%;
    margin-top: 20%;
    }
    .home-link-signin{
        margin-left: 18%;
    margin-top: -12%;
    }
    .shipping-signin{
        margin-top: -2%;
    }

}
</style>