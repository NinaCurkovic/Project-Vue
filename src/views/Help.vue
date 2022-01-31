<template>
<div>
    <h1 class="h1">HELP</h1>
    <router-link to="/" class="home-link">HOME</router-link>
</div>
     <div class="home_help">
   </div>
   <p class="help_text"><b><i>On the Zara.com page, you can purchase as a GUEST or as a REGISTERED customer.<br><br>

      Registration is very simple. We will only ask you for the information necessary
      to facilitate the purchase process.<br><br>
      
      In the registration form, you will see examples of filling in that can help you
      enter some information, such as your phone number.<br></i></b></p>

      <br>
      <img src="../assets/pictures/help4.jpg" alt="Help_img" class="img_help" ><br>
     
</template>
<script>
export default {
    setup() {
        
    },
}
</script>
<style>
.img_help{
  justify-content: center;
  
}
.home-link{
  display: flex;
  justify-content: left;
  margin-top: -52px;
  margin-left: 20px;
  font-variant: small-caps;
}
.h1{
  margin-top: -6%;
  width: 100%;
  justify-content: center;
}
@media only screen and (max-width:480px) {
  /* For mobile phones: */
  .img_help {
    width: 80%;
    height: 20%;
  }
  .h1{
    font-size: 80%;
    margin-top: -20%;
  }
  .home-link{
    font-size: 7px;
  }
  .help_text{
    margin-top: 15%;
    font-size: 70%;
  }
  }
</style>