<template>
  <nav class="relative z-20 text-sm	">
    <router-link class="inline-block " to="/">Show Movies</router-link>
    <router-link class="inline-block " to="/about">About</router-link>
    <div class=" inline-block relative cursor-pointer ml-1"   >
      <!-- Button -->
      <!-- <button> -->
        <!-- DOWN -->
        <!-- <svg v-if="drop_down" xmlns="http://www.w3.org/2000/svg" class="w-4 inline align-top" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg> -->
        <!-- UP -->
        <!-- <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 inline align-top" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
        </svg> -->
        <!-- Genre -->
      <!-- </button> -->

      <input type="text" class="  relative text-lg my-5 bg-transparent outline-none border-b border-slate-500		text-white font-bold
       h-[40px] w-[100px]" placeholder="Genre"   @focusin="toggle_Dropdown" @focusout="toggle_Dropdown"  v-model="genre_search">

      <!-- Dropdown Content -->
        <div  class="dropdown-content absolute left-[0] top-[63px]" v-show="drop_down">
          
          <a v-for="genre in (filtred_genre.value || []).slice(0,5)"  :key='genre.id'  @click="drop_down =!drop_down,showGenre(genre.id)"
          class="block border-b border-color-sky-500" >{{genre.name}}</a>


        </div>

    </div>
   
    <!-- <router-link to="/Info/dsds" > Info</router-link> -->


  </nav>
  <div class="inset-0 h-full w-full fixed  ">
    <img class="relative   w-full h-full object-cover" style="" src="https://developer.imdb.com/hero-dynamic.jpg" alt=""
      srcset="">
    <div class="absolute  bg-slate-900 	 inset-0  opacity-90 	"></div>
  </div>

  <input
    class="max-w-xs  relative text-md my-5 bg-transparent outline-none border-b border-slate-500		text-white font-bold"
    type="text" v-model="searchValue" placeholder="Search..." @keyup="toSearch">
 
 <!-- Pagination -->

 
 <router-view />

  <!-- <h1 class="text-white font-bold">Test</h1> -->

</template>

<script>
import axios from 'axios';
import { onMounted, ref,watch ,computed  } from 'vue'
import router from './router'
// Vue.component('paginate', VuejsPaginate)

export default {
  setup() {
    const exampleItems =ref( [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) })) );
          //  pageOfItems: []

    const api_key = "11014907a552719550c04a15023b913d";
    const Genres_url = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + api_key + "&language=en-US";
    const AllGenres = ref();
    const genre_search=ref("")
    const drop_down = ref(false);
    const searchValue = ref()
    const toSearch = () => {
      router.push({ name: "ShowMovies", query: { search: searchValue.value } })
    }


    const filtred_genre=ref()

   filtred_genre.value = computed(() => {
        //  return (AllGenres.value)
    if (genre_search.value.length==0)    return   AllGenres.value
            // if(genre_search.value.l)
     else  return (AllGenres.value.filter( genre =>{
                    return    (genre.name.toLowerCase()).startsWith(genre_search.value.toLowerCase())
                  } ))


   })

  const showGenre=(id)=>{

    router.push({name: "ShowByGenre" , params:{id:id}})
  }

    const toggle_Dropdown=()=>{
      console.log("Before "+drop_down.value )

      if(drop_down.value==false ) drop_down.value= true
       else setTimeout(()=>{drop_down.value =false},300)
      // drop_down.value =!drop_down.value
      console.log("After"+drop_down.value)
    }
         
    const clickCallback=(pageNum)=> {
      console.log(pageNum)
    }

    onMounted(
      async() =>{
        AllGenres.value=  (await axios.get(Genres_url)).data.genres
        

      }
      
      

    )

    return { toSearch, searchValue, drop_down,genre_search ,filtred_genre,showGenre,toggle_Dropdown,clickCallback}
  }


}



</script>


<style>
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  /* background-image: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),linear-gradient(180deg,transparent 14%,rgba(0,0,0,.3) 49%,rgba(0,0,0,.3) 85%,transparent),url(https://developer.imdb.com/hero-dynamic.jpg); */
  /* height:inherit;
  background-repeat: no-repeat;
  background-position: center; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav {
  padding: 30px;
}

nav a
{
  background-color: rgb(22, 78, 99);

  font-weight: bold;
  color: rgb(192, 192, 192);
  padding: 10px;
  margin-right: 2px;
}
div.dropdown-menu {
 background-color: rgb(22, 78, 99);

  font-weight: bold;
  color: rgb(192, 192, 192);
  /* padding: 10px; */
  margin-right: 2px;
}

nav a.router-link-exact-active {
  background-color: rgba(22, 78, 99, 0.552);

  padding: 10px;
  /* border-radius: 8px; */

}


.dropdown-content a, .dropdown-menu a.router-link-exact-active {
  background-color: rgba(22, 78, 99, 0.552);

padding-left: 2rem;
    padding-right: 2rem;  /* border-radius: 8px; */

}



</style>
<link href="//netdna.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" />
    <style>
        a { cursor: pointer; }
        .pagination {
           justify-content: center;
           flex-wrap: wrap;
        }
    </style>