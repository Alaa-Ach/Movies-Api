<template>

  <div class="home">
    <!-- <input class="max-w-xs  relative text-md my-5 bg-transparent outline-none border-b border-slate-500		text-white font-bold"
      type="text" v-model="search" placeholder="Search..." @keyup="split"> -->
    <br>

    <!-- <div  v-if="movies" class="movies"> -->
    <div class=" ">


      <!-- Trending -->
      <div class="text-slate-300	" v-if="Trending_movies">

        <div class="font-sans text-xl relative
         tracking-widest uppercase font-bold  "> 

            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-7 " viewBox="0 0 20 20" fill="#e61515">
              <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd" />
            </svg>

            <span class="align-middle">
              Trending :
            </span>
        </div>

        <div  v-for="movie in Trending_movies" :key="movie.id" class=" overflow-hidden w-[120px]  h-[180px]  sm:w-[180px] sm:h-[255px] 
        bg-slate-700 opacity-80 relative rounded-lg m-5 inline-block cursor-pointer " @click="InfoMovie(movie)">


          <div class="absolute z-20 p-1.5 rounded bg-red-800  text-white text-xs leading-3	">
            <span class="block">Vote</span>
            {{ movie.vote_average.toFixed() }}

          </div>


          <div class="relative inset-0 w-100 ">
            <img class="rounded  " :src="img(movie.poster_path)" alt="">

          </div>




          <div class=" inset-x-0 bottom-3 absolute  py-2 bg-slate-800 text-center ">

            <p class="text-white text-sm sm:text-base   ">{{ movie.title }}</p>

            <p class="text-slate-400  px-5 text-xs	truncate	"> {{ ReleaseDate(movie.release_date) }} </p>

          </div>
        </div>
      </div>


      <!-- Search -->
      <div v-for="movie in movies" :key="movie.id" class=" overflow-hidden w-[120px]  h-[180px]  sm:w-[180px] sm:h-[255px] 
        bg-slate-700 opacity-80 relative rounded-lg m-5 inline-block cursor-pointer " @click="InfoMovie(movie)">


        <div class="absolute z-20 p-1.5 rounded bg-red-800  text-white text-xs leading-3	">
          <span class="block">Vote</span>
          {{ movie.vote_average }}

        </div>


        <div class="relative inset-0 w-100 ">
          <img class="rounded  " :src="img(movie.poster_path)" alt="">

        </div>




        <div class=" inset-x-0 bottom-3 absolute  py-2 bg-slate-800 text-center ">

          <p class="text-white text-sm sm:text-base   ">{{ movie.title }}</p>

          <p class="text-slate-400  px-5 text-xs	truncate	"> {{ ReleaseDate(movie.release_date) }} </p>

        </div>
      </div>












    </div>


  </div>

  <!-- InfoMovie -->
</template>

<script>
// @ is an alias to /src

import { onMounted, ref, watch, } from 'vue';
import axios from 'axios';
import { createRouter, createWebHistory, useRoute } from 'vue-router';
import router from "../router";

export default {

  name: 'ShowMovies',


  setup() {
    const apikey = "11014907a552719550c04a15023b913d"
    const search_url = " https://api.themoviedb.org/3/search/movie?api_key=" + apikey + "&language=en-US&query="
    const search = ref("")
    const movies = ref([])
    const route = useRoute()
    const Trending_url = "https://api.themoviedb.org/3/trending/movie/week?api_key=" + apikey + "&language=en-US"
    const Trending_movies = ref([])




    const InfoMovie = (movie) => {
      router.push({ name: "Info", params: { movie: JSON.stringify(movie) } })
      // push.to("/about")

    }
    const img = (path) => {

      return ("https://image.tmdb.org/t/p/w500/" + path)
    }

    const ReleaseDate = (Date) => {

      return Date.split("-")[0]


    }



    const trand_fct = (async () => {
      Trending_movies.value = (await axios.get(Trending_url)).data.results
    })

    const search_fct = async () => {

      // else{
      if (search.value.length == 0) {
        trand_fct()
      }
      else {
        Trending_movies.value = ""
        const res = await axios.get(search_url + search.value)
        movies.value = res.data.results
        console.log(res.data)
      }
    }


      onMounted( () => {
        
        search.value=document.querySelector("#app input").value
        search_fct()


         
  })
    watch(route,  () => {
      search.value=route.query.search 
    }),

    watch(search , () => {
       search_fct()


    })

    

    return { search, movies, InfoMovie, img, ReleaseDate, Trending_movies }
  },








}
</script>


