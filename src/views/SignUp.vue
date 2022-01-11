<template>
    <h1>SIGN IN</h1>
    <router-link class="home_signup" to="/">HOME</router-link>
    <br>
    <br>
   <div id="main">
   <div >
      <div class="sign_up">
         <tr>
            <!-- <td >Name </td> -->
            <br>
            <td><input type="text" placeholder="Enter user here" id="t1" class="sirina" style="text-align: center;" /></td>
            <div id ="error_name"></div>
            </tr>
            <br><br>
            <tr>
            <!-- <td>E-mail </td> -->
            <br>
            <td><input type="text" placeholder="Enter e-mail here" id="t2" class="sirina" style="text-align: center;" /></td>
            <div id ="error_email"></div>
            </tr>
            <br><br>
            <tr>
            <!-- <td >Username </td> -->
            <br>
            <td><input type="text" placeholder="Enter Username here" id="t3" class="sirina" style="text-align: center;" /></td>
            <div id ="error_username"></div>
            </tr>
            <br><br>
            <tr>
            <!-- <td >Password </td> -->
            <br>
            <td><input type="password" placeholder="Enter Password here" id="t4" class="sirina" style="text-align: center;" /></td>
            <div id ="error_pass"></div>
            </tr>
            <br><br>
            <tr>
            <!-- <td>Confirm Password </td> -->
            <br>
            <td><input type="password" placeholder="Enter Password here" id="t5" class="sirina" style="text-align: center;" /></td>
            <div id ="error_cpass"></div>
            </tr>
            <br>
            <tr>
            <br>
            <td>
            <input class="btn_singin" type="reset" value="Clear" v-on:click="clearFunc()" id="res" />
            <input class="btn_singin" type="submit" value="Next!" v-on:click="registration()" /></td>
            </tr>
      </div>
   </div>
   </div>
</template>

<script>

    export default {
        name: 'SignUp',
        data() {
            return {
                
            }
        },
        methods: {
           clearFunc(){
                document.getElementById("t1").value="";
                document.getElementById("t2").value="";
                document.getElementById("t3").value="";
                document.getElementById("t4").value="";
                document.getElementById("t5").value="";

                document.getElementById('error_name').innerHTML='';
                document.getElementById('error_email').innerHTML='';
                document.getElementById('error_username').innerHTML='';
                document.getElementById('error_pass').innerHTML='';
                document.getElementById('error_cpass').innerHTML='';
           }
     
    }}
</script>
<style>
.sign_up 
{
 flex-direction: row;
 justify-content: center;
 left: 35%;
 position: relative;
 text-align: center;
}
.home_signup{
  display: flex;
  justify-content: left;
  margin-top: -52px;
  margin-left: 20px;
  font-variant: small-caps;

}
.btn_singin {
  background-color: rgba(255, 255, 255, 0.397);
  border-radius: 50%;
  padding: 5px 10px;
  text-decoration: none;
  color: white;
  
}
.btn_singin:hover{
  background-color: #f44336;
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
.sirina{
  width: 400px;
}
</style>