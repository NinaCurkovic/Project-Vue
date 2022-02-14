<template>
<div class="header_body">
    <p class="shipping"><b>FREE SHIPPING ON ORDERS OVER 50$</b></p>
    <h1 class="h1">SIGN IN</h1>
    <router-link to="/" class="home-link"><fa icon="home"></fa></router-link>
</div>
    
    <form>
    <div id="main">
        <img src="../assets/pictures/img-signup1.jpg" class="img-signup">
      <div class="sign_up">
          
         <tr>
            <!-- <td >Name </td> -->
            <br>
            <td><input type="text" placeholder="Enter user here" id="t1" class="sirina" style="" v-model="nameLabela" /></td>
            <div id ="error_name"></div>
            </tr>
            <br><br>
            <tr>
            <!-- <td>E-mail </td> -->
            <br>
            <td><input type="email" placeholder="Enter e-mail here" id="t2" class="sirina" v-model="nameLabel" /></td>
            <div id ="error_email"></div>
            </tr>
            <br><br>
            <tr>
            <!-- <td >Username </td> -->
            <br>
            <td><input type="text" placeholder="Enter Username here" id="t3" class="sirina" v-model="nameLabel"/></td>
            <div id ="error_username"></div>
            </tr>
            <br><br>
            <tr>
            <!-- <td >Password </td> -->
            <br>
            <td><input type="password" placeholder="Enter Password here" id="t4" class="sirina" v-model="nameLabel"/></td>
            <div id ="error_pass"></div>
            </tr>
            <br><br>
            <tr>
            <!-- <td>Confirm Password </td> -->
            <br>
            <td><input type="password" placeholder="Enter Password here" id="t5" class="sirina" v-model="nameLabel"/></td>
            <div id ="error_cpass"></div>
            </tr>
            <br>
            <div class="two-btn">
                <button class="btn-signup">Clear</button>
                <button class="btn-signup">Next!</button>
            </div>
            
      </div>
    </div>
    </form>
</template>
<script>
export default {
    setup() {
        return{
            nameLabela:'',
            validation: 'pending',
        }
    },
    methods: {
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
        
    }
}
</script>
<style>
.sign_up{
    display: grid;
    justify-content: left;
    margin-top: -55%;
    margin-left: 40%;
}
.sirina{
    text-align: center;
    width: 140%;
}
.two-btn{
    display: inline-flex;
    height: 200%;
    margin-left: 43%;
}
.btn-signup{
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: black; 
    cursor: pointer;
    width: 60%;
    height: 50%;
    border-color: darkgray;
    
}
.btn-signup:hover{
    background-color:  rgba(255, 255, 255, 0.404);
    color: black;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
.img-signup{
    width: 60%;
    aspect-ratio: 1;
    margin-top: 3%;
}
</style>