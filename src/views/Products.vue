<template>
<div class="header_body">
    <p class="shipping"><b>FREE SHIPPING ON ORDERS OVER 50$</b></p>
    <h1><img src="../assets/pictures/naslov1.jpg" class="img-naslov-products"></h1>
    <div class="body_h">
        <Filter @filterDropDown="dropDownFunction" @filterSearch="searchFunction" />
        
        <div class="box1"><router-link to="/" class="box">Home</router-link></div>
      <div class="box1">
        <li class="box"><router-link to="/signup">
            <!-- <fa icon="user" >LogIn</fa>  -->Login
            <!-- <img src="../assets/pictures/login.png" /> -->
            </router-link>
        </li></div>
        <div class="box1">
          <li class="box"><router-link to="/help"> Blog
            <!-- <fa icon="info" ></fa>  -->
            <!-- <img src="../assets/pictures/help2.png"  -->
            </router-link>
        </li>
        </div>
        <div class="box1-cart">
          <li>
          <fa icon="shopping-bag" @click="isActive = !isActive" v-show="!verified" >
          </fa>
          <p class="flag"> {{ basketQuantity }}</p>
          <div v-show="isActive">
          <div v-show="basketQuantity>0 " class="div-basket">
            <Cart :basket="basket" @button-event="processingButtonEvent"/>
            <div class="total">Total price {{Number(totalPrice.toFixed(2))}} $</div>
          </div>
          <div v-show="basketQuantity==0">
          </div>
          </div>
          </li>
        </div>
      </div>
  </div>
  <Multilngual/>
  <SwitchLanguage/>
<div  class="all_img" id="all_product" >
<div class="shopping-products"  v-for="artical in allFilters()" :key="artical.id">
  <button v-on:click="addToBasket(artical)" class="btn">Add to cart</button>
  <Artical :artical="artical"/>
  <br>
  <br>
</div>
</div>
<Footer/>
</template>
<script>
import Footer from '../components/Footer.vue'
import Artical from '../components/Artical.vue';
import Cart from '../components/Cart.vue';
import Filter from '../components/Filter.vue';




 const articles = [
        {
          picture: 'sapun1.jpg',
          namePicture: 'Pearl Powder',
          description: 'Pearl Powder',
          price: 85,
          id: 1,
          category: 'soaps',
          quantity: 0,
          
        },
        {
          picture: 'svijeca1.jpg',
          namePicture: 'Lavender',
          description: 'Lavender',
          price: 85,
          id: 2,
          category: 'candles',
          quantity: 0,
          
        },
        {
          picture: 'sapun2.jpg',
          namePicture: 'Green Clay',
          description: 'Green Clay',
          price: 80,
          id: 3,
          category: 'soaps',
          quantity: 0,
          
        },
        {
          picture: 'svijeca2.jpg',
          namePicture: 'Coco & Sandelwoo',
          description: 'Coco & Sandelwoo',
          price: 14.25,
          id: 4,
          category: 'candles',
          quantity: 0,
          
        },
        {
          picture: 'sapun3.jpg',
          namePicture: 'Coconut Milk',
          description: 'Coconut Milk',
          price: 85,
          id: 5,
          category: 'soaps',
          quantity: 0,
          
        },
        {
          picture: 'svijeca3.jpg',
          namePicture: 'Aromatic Blend',
          description: 'Aromatic Blend',
          price: 9.50,
          id: 6,
          category: 'candles',
          quantity: 0,
          
        },
        {
          picture: 'sapun4.jpg',
          namePicture: 'Pink Anemore',
          description: 'Pink Anemore',
          price: 85,
          id: 7,
          category: 'soaps',
          quantity: 0,
          
        },
        {
          picture: 'svijeca4.jpg',
          namePicture: 'Three Rose',
          description: 'Three Rose',
          price: 19.90,
          id: 8,
          category: 'candles',
          quantity: 0,
          
        },
        {
          picture: 'svijeca5.jpg',
          namePicture: 'Vanilla',
          description: 'Vanilla',
          price: 130.00,
          id: 8,
          category: 'candles',
          quantity: 0,
          
        },
        {
          picture: 'sapun5.jpg',
          namePicture: 'Honey',
          description: 'Honey',
          price: 80.75,
          id: 8,
          category: 'soaps',
          quantity: 0,
          
        },
        {
          picture: 'svijeca6.jpg',
          namePicture: 'Milk & Honey',
          description: 'Milk & Honey',
          price: 25,
          id: 8,
          category: 'candles',
          quantity: 0,
          
        },
        {
          picture: 'sapun6.jpg',
          namePicture: 'Tar',
          description: 'Tar',
          price: 70,
          id: 8,
          category: 'soaps',
          quantity: 0,
          
        },
        {
          picture: 'svijeca7.jpg',
          namePicture: 'Orange & Bergamot',
          description: 'SOrange & Bergamot',
          price: 85,
          id: 8,
          category: 'candles',
          quantity: 0,
          
        },
        {
          picture: 'sapun7.jpg',
          namePicture: 'Laurel',
          description: 'Laurel',
          price: 60,
          id: 8,
          category: 'soaps',
          quantity: 0,
          
        },
        {
          picture: 'svijeca8.jpg',
          namePicture: 'Star Anise & Lil',
          description: 'Star Anise & Lil',
          price: 238.80,
          id: 8,
          category: 'candles',
          quantity: 0,
          
        },
        {
          picture: 'svijeca9.jpg',
          namePicture: 'Organic Beeswax',
          description: 'Organic Beeswax',
          price: 7.13,
          id: 8,
          category: 'candles',
          quantity: 0,
          
        },
        {
          picture: 'sapun8.jpg',
          namePicture: 'Bitter Almond',
          description: 'Bitter Almond',
          price: 80.75,
          id: 8,
          category: 'soaps',
          quantity: 0,
        },
        {
          picture: 'sapun9.jpg',
          namePicture: 'Jasmine',
          description: 'Jasmine',
          price: 85,
          id: 8,
          category: 'soaps',
          quantity: 0,
          
        }
      ]
export default {
  
  data(){
    return{
      articlesNew: articles,
      filtersApplied: {search:null, dropDownEl:'all'},
      isActive: false,
      verified: false,
      basket:[],
      quantity: 0,
      basketQuantity: 0,
      totalPrice: 0,
    }
  },
   
  name: 'App',
  components: {
    Filter,
    Footer,
    Artical,
    Cart,
 
    },
  methods: {  
    allFilters() {
      if (this.filtersApplied.search) {
        return this.articlesNew.filter(item => {
          return this.filtersApplied.search
            .toLowerCase()
            .split(" ")
            .every(v => item.description.toLowerCase().includes(v));
        });
      } 
      if(this.filtersApplied.dropDownEl){
        if (this.filtersApplied.dropDownEl === 'all') 
        {
          this.articlesNew = articles;
        }
        else{
           let test = articles
              .filter((artical) => artical.category === this.filtersApplied.dropDownEl)
            this.articlesNew = test;
        }
      }
        return this.articlesNew;
    },
    addToBasket(artical){
      if (this.basket.includes(artical)){
        artical.quantity += 1;
        this.basketQuantity +=1;
        this.totalPrice+=artical.price;
      }
      else{
        this.basket.push(artical);
        artical.quantity += 1;
        this.basketQuantity +=1;
        this.totalPrice+=artical.price;
      }
    },
    removeBasket(artical){
      this.basket.splice(artical);
      this.quantity=0;
    },
    
    processingButtonEvent({operacija, artical}){
      switch (operacija) {
        case "clear":
          this.removeBasket(this.basket)
          this.basketQuantity=0;
          this.totalPrice=0;
          
          break;
      case "remove":
         if (artical.quantity ===0){
          // this.basket.splice(artical,1)
          this.basket.splice(this.basket.indexOf(artical), 1);
          this.basketQuantity -=1;
          this.totalPrice-=artical.price;
        }
        else{
          artical.quantity -=1;
          this.basketQuantity -=1;
          this.totalPrice-=artical.price;
        }
          break;
          // this.artical.splice(this.artical.indexOf(artical), 1);
      }
    },
    dropDownFunction(value){
      this.filtersApplied.dropDownEl = value;
    },
    searchFunction(value){
      this.filtersApplied.search = value;
    }
    }};
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.header_body{
  position: fixed;
  width: 100%;
  top: -2%;
  background-color: white;
  
}
.shipping{
  background-color: darkgray;
  text-align: center;
  color: #fff;
  
}
 .new_pages {
  top: -20px;
  display: flex;
  justify-content: flex-end;
  list-style-type: none;  
  margin-top: -3%;
  margin-right: -70%;
  font-size: 150%;
}
.body_h{
  font-size: 160%;
  list-style: none;
  display: flex;
  grid-template-columns: repeat(6, 1fr);
  justify-content: space-between;
}
.all_img{
  position: static;
  display: inline-block;
  left: 1%;
  margin-top: 22%;
}
.btn{
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  color: white; 
  cursor: pointer;
    width: 80%;
    height: 20%;
    border-top-style: none;
    border-left-style: none;
    border-right-style: none;
    border-bottom-style: solid;
    border-color: darkgray;
    flex-wrap: wrap;
    background-color: black;
    border-color: black;
}
.btn:hover{
  background-color: #f4f6f3;
  color: black;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
.description, .price, .newsletter_lbl{
  text-align: center;
  color: black;
}
.shopping-products{
  width: 30%;
  aspect-ratio: 1;
  display: inline-block;  
  flex-wrap: wrap;
}
.btn-cart {
  border-radius: 10%;
  background-color: #f44336;
  margin-left: 7%;
  justify-items: center;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  cursor: pointer;
}
.btn-buy{
  border-radius: 10%;
  background-color: #2E8B57;
  margin-left: 7%;
  justify-items: center;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  cursor: pointer;
}
.btn-x{
  border: none;
  background-color: darkgrey;
  float: right;
  cursor: pointer;
  
}
.flag {
    position: fixed;
    font-size: 12px;
    color: white;
    margin-top: -1.4%;
    margin-left: 0.65%;
}

.div-basket{
  position: absolute;
  background: #a9a9a9;
  border: 20px black;
  width: 250px;
  right: 1%;
  font-size: 70%;
  border: outset;
  color: white;
}
.total{
  font-size: 90%;
    text-align: center;
    margin-left: right;
    border-style: solid;
}
thead{
  text-align: center;
}
.box1-cart{
  margin-right: 5%;
}

/* /* @media only screen and (max-width:480px) {
  
  .shopping-products {
    width: 100%;
    height: 20%;
  }
  .body{
    width: max-content;
  }} */
@media only screen and (max-width:480px) {
  #app{
    overflow: hidden;
  }
 .img-naslov-products{
   width: 100%;
   height: 80%;
   margin-left: 10%;
 }
   h1 {
    justify-content: left;
  }
    .header_body{
    position: fixed;
    width: 100%;
    top: -22px;
  }
  .new_pages{
    right: 10%;
    position: relative;
    top: -72px;
  }
   .search {
    left: 37%;
    width: 45%;
    height: 22%;
    top: -39px;
  }
   .all_img {
    justify-items: center;
    margin: 2%;
    padding: 2%;
  }
   .dropdown {
    width: 35%;
    top: -22px;
    font-size: small;
    height: 32%;
    text-align: -webkit-center;
}
.img-user{
  font-size: 25px;
}
.img-cart{
  font-size: 25px;
}
.img-info{
  font-size: 25px;
}
.home-link-products{
  font-size: 25px;
}
.shopping-products{
    width: 100%;
    aspect-ratio: 1;
    display: inline-block;
    flex-wrap: wrap;
    margin-top: 0%;
}
.btn:hover{
  background-color: #f4f6f3;
  color: black;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
.flag{
  margin-top: -3.5%;
    /* color: red; */
    margin-left: 1.6%;}
    
.body_h{
      font-size: 150%;}}
</style>