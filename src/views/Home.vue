<template>
<div class="header_body">
    <h1>ZARA</h1>
    <div class="body_h">
         <!-- <select class="dropdown"  id='myDropdown' v-model='filtersApplied.dropDownEl'>
        <option value="all" >All</option>
        <option value="women">Women</option>
        <option value="men">Men</option>
        <option value="children">Children</option>
    </select>
    <input class="search" v-model="filtersApplied.search"> -->
    <Filter/>
       <ul class="new_pages"> 
        <li><router-link to="/signup">
            <img src="../assets/pictures/login.png" class="img-w-h"/></router-link>
        </li>
        <li><router-link to="/help">
            <img src="../assets/pictures/help2.png" class="img-w-h"/></router-link>
        </li>
        <li>
          <button v-on:click="isActive=!isActive;" class="img-w-h">
            <img src="../assets/pictures/cart2.png" style="width: 31px"/>
            <p class="flag">{{basket.length}}</p>
          </button>
          <div v-if="isActive" class="div-basket">
            <Cart :basket="basket" @button-event="processingButtonEvent"/>
          </div>
        </li>
       </ul>
  </div>
</div>
<!-- <div class="all_img" id="all_product" v-for="artical in articals" :key="artical.id" > v-for="artical in allFilters()" -->
 <div  class="all_img" id="all_product" >
<div class="shopping-products"  v-for="artical in allFilters()" :key="artical.id">
  <Artical :artical="artical"/>
  <button v-on:click="addToBasket(artical)" class="btn">Add to cart</button>
  <br>
  <br>
</div>
</div>
<Footer/> 

</template>
<script>
//import DropDown from './components/DropDown.vue'
import Footer from '../components/Footer.vue'
import Artical from '../components/Artical.vue';
//import Searchbar from './components/Searchbar.vue'
import Cart from '../components/Cart.vue';
import Filter from '../components/Filter.vue';


 const articles = [
        {
          picture: 'women1.jpg',
          namePicture: 'Zenska_haljina1',
          description: 'LONG DRESS LIMITED EDITION',
          price: 699.90,
          id: 1,
          category: 'women'
        },
        {
          picture: 'women2.jpg',
          namePicture: 'Zenska_haljina2',
          description: 'PLEATED DRESS LIMITED EDITION',
          price: 699.90,
          id: 2,
          category: 'women'
        },
        {
          picture: 'women3.jpg',
          namePicture: 'Zenska_haljina3',
          description: 'DRESS LIKE A LIMITED EDITION ROBE',
          price: 699.90,
          id: 3,
          category: 'women'
        },
        {
          picture: 'men3.jpg',
          namePicture: 'Muska_odjeca1',
          description: 'TEXTURED EASY CARE SHIRT',
          price: 149.90,
          id: 4,
          category: 'men'
        },
        {
          picture: 'men2.jpg',
          namePicture: 'Muska_odjeca2',
          description: 'HERRINGBONE PATTERNED SHIRT',
          price: 499.90,
          id: 5,
          category: 'men'
        },
        {
          picture: 'men1.jpg',
          namePicture: 'Muska_odjeca3',
          description: 'OVERSIZED COAT',
          price: 1599.90,
          id: 6,
          category: 'men'
        },
        {
          picture: 'children2.jpg',
          namePicture: 'Djecja_odjeca1',
          description: 'SPARKLY MOTORCYCLE JACKET',
          price: 499.90,
          id: 7,
          category: 'children'
        },
        {
          picture: 'children1.jpg',
          namePicture: 'Djecja_odjeca2',
          description: 'STAR-CAUSE DRESS',
          price: 299.90,
          id: 8,
          category: 'children'
        }
      ]
export default {
  
  data(){
    return{
      articlesNew: articles,
      filtersApplied: {search:null, dropDownEl:'all'},
      isActive: false,
      basket:[],
    }
  },
   
  name: 'App',
  components: {
    Filter,
    // Searchbar,
    //DropDown,
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
        let val=this.filtersApplied.dropDownEl;
         if (val == 'all') 
        {
          this.articlesNew = articles;
        }
        else
        {
          let test = this.articlesNew
              .filter((artical) => artical.category === val)
            this.articlesNew = test;
          }
      }
        return this.articlesNew;
    },
    addToBasket(artical){
      this.basket.push(artical);
      // console.log(this.basket);
    },
    removeBasket(artical){
      this.basket.splice(artical);
    },
    processingButtonEvent({operacija, artical}){
      console.log(operacija)
      switch (operacija) {
        case "clear":
          this.removeBasket(this.basket)
          break;
      case "remove":
          this.basket.splice(artical,1)
          break;
        default:
          break;
      }
    }
   
  }
    };
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.img-w-h{
  width: 40px;
  height: 30px;
}
h1 {
  display: flex;
  justify-content: center;
  color:black;
  border-style: outset;
  /* border-left: 120px solid #f44336; */
  letter-spacing: 10%;
  background-color:whitesmoke;
  } 
  body {
    background-image: linear-gradient(to right, rgb(255, 255, 255) , rgb(31, 30, 30));
  }

 .new_pages {
  position: relative;
  top: -75px;
  display: flex;
  justify-content: flex-end;
  list-style-type: none;  
  width: 200px;
  height: 20px;
  right: 2%;
  flex-grow:3;
}
.body_h{
 display: flex;
 justify-content: space-between;
}
.all_img{
  position: relative;
  display: inline-block;
  left: 1%;
}
.btn{
  background-color: rgba(255, 255, 255, 0.404);
  color: black; 
  border: 2px solid #f44336;
  position: relative;
  display: block;
  left: 40%;
  text-decoration: none;
}
.btn:hover, .clear-button:hover, .buy-cart:hover {
  background-color: #f44336;
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
.description, .price, .newsletter_lbl{
  text-align: center;
  color: black;
}

.shopping-products{
  width: 30%;
  height: 20%;
  display: inline-block;  
  flex-wrap: wrap;
}
.counter{
  display: inline-block;
  top: -60px;
}
.btn-cart {
  background-color: #f44336;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  border-radius: 50%;
  /* padding: 5px 10px; */
  text-decoration: none;
  color: white;
}
.flag {
    position: absolute;
    top: 16px;
    left: 99%;
    width: 20px;
    height: 20px;
    font-size: 10px;
    color: #fff;
    text-align: center;
    line-height: 20px;
    background-color: #FC5951;
    border-radius: 50%;
}
.div-basket{
  position: absolute;
  background: #fff;
  border: 20px black;
  width: 200px;
  right: 1%;
  font-size: 50%;
}
</style>