<template>
    <h1>SIGN IN</h1>
    <router-link class="home_signup" to="/">HOME</router-link>
    <br>
    <br>
  <form id="app" @submit="checkForm" action="/something" method="post" >
  <div>
    <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error.id">{{ error }}</li>
    </ul>
  </p>
  <p>
    <label for="name"></label>
    <input type="text" name="name" id="name" placeholder="Enter Name here" v-model="name" class="sirina">
  </p>
   <p>
    <label for="email"></label>
    <input type="email" name="email" id="email" placeholder="Enter Email here" v-model="email" class="sirina">
  </p>
  <p>
    <label for="username"></label>
    <input type="text" name="username" id="username" placeholder="Enter Username here" v-model="username" class="sirina">
  </p>
  <p>
    <label for="password"></label>
    <input type="password" name="password" id="password" placeholder="Enter Password here" v-model="password" class="sirina">
  </p>
  <p>
    <label for="cpassword"></label>
    <input type="password" name="cpassword" id="cpassword" placeholder="Enter Confirm Password here" v-model="cpassword" class="sirina">
  </p>
  <p>
    <input class="btn_singin" type="reset" value="Clear" v-on:click="clearFunc()" id="res" />
    <input class="btn_singin" type="submit" value="Next!" />
  </p>
  </div>
</form>
</template>
<script>
    export default {
        name: 'SignUp',
        data() {
            return {
                errors:[],
                name:null,
                email: null,
                username: null,
                pasword:null,
                cpasword:null
            }
        },
  methods:{
    checkForm:function(e) {
      if(this.name && this.email && this.username && this.pasword) return true;
      this.errors = [];
      if(!this.name) this.errors.push("Name required.");
      if(!this.email) this.errors.push("Email required.");
      if(!this.username)this.errors.push("Username required.");
      if(!this.pasword)this.errors.push("Password required");
      if(!this.cpasword) this.errors.push("cpasword required.");
      e.preventDefault();
    },
    clearFunc(){
     
    }

  }
}
</script>
<style>
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
div{
  justify-content: center;
}

</style>