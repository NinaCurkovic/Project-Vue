<template>
<div>
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

	// function validateEmail(){
	// 	var email1= document.getElementById("email1").value;
	// 	var filter1 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	// 	if(email1=='')
	// 	{
	// 		alert("Please enter your user email");
	// 	}
	// 	else if (!filter1.test(email1))
	// 	{
	// 		alert("Invalid email");
	// 	}
	// 	else
	// 	{				                            
	// 		alert('Thank You!');
	// 		window.location = "../App.vue"; 
	// 	}
	// } 

  
  
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
  display: inline-block;
  height: 38 px;
  padding: 0 30 px;
  color: #555;
  text-align: center;
  font-size: 11px;
  letter-spacing: 3px;
  font-weight: 600;
  line-height: 38px;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4 px;
  border: 1 px solid #bbb;
  cursor: pointer;
  box-sizing: border-box;
}

</style>