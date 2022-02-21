<template>
<div class="body-footer">
    <hr>
    <br>
    <br>
    <form id="mail" @submit.prevent="submitForm">
        <label for="email1" class="newsletter_lbl"><b>Sing up for our newsletter:</b></label><br><br>
        <input type="email" name="email" id="email1" placeholder="Enter your address here" class="newsletter-input" v-model="nameLabel" >
        <button class="newsletter-btn">Submit</button>
        <p v-if="emailValidation === 'invalid'" style="color: red">Please enter a valid email</p>
        <p v-if="emailValidation === 'valid'" style="color: green">Thank you!</p>
    </form> 
    <br>
    <div>
    <div>
        <div class="soc_mreze">
            <a href="https://www.facebook.com/Zara">
            <img src="../assets/pictures/facebook.png" class="fb-img"></a><br>
        </div> 
        <div class="soc_mreze">
            <a href="https://www.instagram.com/accounts/login/">
            <img src="../assets/pictures/instagram.png" class="insta-img"></a><br>
        </div> 
        <div class="soc_mreze">
            <a href="https://consent.youtube.com/ml?continue=https://www.youtube.com/user/zara&gl=HR&hl=en&pc=yt&uxe=23983171&src=1">
            <img src="../assets/pictures/youtube-logo.png" class="yt-img"></a><br>
        </div>
    </div>
    </div>
</div>   
</template>
<script>

//newsletter
export default{
  data(){
    return{
      nameLabel: '',
      emailValidation: 'pending',
    }
  },
  methods:{
    submitForm(){
      console.log('Labela:' + this.nameLabel);
      
       if(this.nameLabel===''){
         this.emailValidation = 'invalid';
       } 
       else 
       {
         this.emailValidation = 'valid';
       }
       this.nameLabel='';
    }
    },
  };
  
</script>
<style>
.newsletter-input{
    width: 300px;
    text-align: center;
    size: 35;
}
.soc_mreze {
  position: relative;
  display: -webkit-inline-box;
}
.fb-img{
  width: 50px; 
  height: 40px;
}
.insta-img{
  width: 45px;
  height: 40px;
}
.yt-img{
  width: 65px;
  height: 40px;
}
.newsletter-btn{
  justify-items: center;
  border-radius: 10%;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  border-radius: 10%;
  margin-left: 0%;
  cursor: pointer;
}
.body-footer{
  background-color: darkgray;
  
}
</style>
