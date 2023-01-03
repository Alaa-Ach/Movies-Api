<template >

    <div class="aha text-white  relative inset-0 h-full  ">
        <!-- test -->


        <div class=" relative  ">
            <div class="   w-full h-full pb-12 inset-0  ">



                <!-- Content  -->
                <div class="pt-5 text-2xl  relative z-20 flex justify-center font-sans	">
                    <!-- Cover -->
                    <div class=" ml-2">
                        <img class="rounded overflow-hidden w-[120px]  h-[180px]  md:w-[180px] md:h-[270px] "
                            :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path" alt="">
                    </div>
                    <div class="ml-3 w-1/2  ">
                        <!-- Date -->
                        <div class="font-sans text-left  ">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-6 w-6 mr-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span class=" text-xs sm:text-sm ">{{ movie.release_date }}</span>
                            </div>




                        </div>

                        <div class=" my-3  ">
                            <p class="	 text-left font-bold text-lg sm:text-xl	">Genre: </p>

                            <div class=" my-2 flex flex-wrap ">
                                <div class="bg-cyan-900 px-2  rounded-3xl  my-2 mx-1  text-[0.5rem] sm:text-[0.6rem] tracking-widest"
                                    v-if="genres" v-for="genre in genres" :key="genre"> {{ genre }}</div>



                            </div>
                        </div>

                    </div>





                </div>
                <!-- Title & Description -->
                <div class="mt-2 relative z-20 mx-auto ">
                    <p class=" relative font-bold  font-mono tracking-widest text-lg	sm:text-2xl xl:text-3xl">
                        {{ movie.title }}</p>


                </div>



            </div>
            <!-- Statistics & Overview & back drop -->
            <div class="h-fit w-full   relative">





                <div class="">

                    <!-- IMG Backdrop-->

                    <div class="absolute">
                        <!-- shadow sides of backdrop -->
                        <div class="hidden md:block absolute bg-gradient-to-b from-black h-40 w-full opacity-70 ">
                        </div>

                        <div
                            class="hidden md:block absolute bg-gradient-to-b from-transparent via-black to-black h-40 w-full opacity-70 bottom-0">
                        </div>

                        <div
                            class="hidden md:block absolute bg-gradient-to-b from-black       via-black to-transparent           h-36 w-full opacity-70 bottom-[-9rem]">
                        </div>

                        <div class="hidden md:block absolute bg-gradient-to-r from-black w-40 h-full opacity-70 left-0">
                        </div>
                        <div
                            class="hidden md:block absolute bg-gradient-to-l from-black w-40 h-full opacity-70 right-0">
                        </div>
                        <!-- <div class="absolute bg-gradient-to-b from-black h-40 w-full opacity-70 "> </div>
                                    <div class="absolute bg-gradient-to-b from-black h-40 w-full opacity-70 "> </div> -->
                        <img class=" prob   w-full   "
                            :src="'https://image.tmdb.org/t/p/original/' + movie.backdrop_path" alt="" srcset="">
                        <!-- Black backdrop -->
                        <div class=" absolute bg-black opacity-70 inset-0    "> </div>
                    </div>

                    <!-- <div class="absolute  bg-black w-full  h-screen 	opacity-80  	"></div> -->

                    <!-- Table Statistics -->
                    <div
                        class="top-[-30px] relative mx-auto w-fit flex justify-center bg-cyan-900 	  rounded-xl text-sm ">

                        <div
                            class=" inline-block py-3 md:py-5 border-gray-900  border-r-2 border-sky-500  w-20 md:w-40">
                            <svg xmlns="http://www.w3.org/2000/svg" class="  inline-block h-4 md:h-6 " fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>



                            <span class="text-sm md:text-lg align-middle ml-1 ">{{ movie.popularity.toFixed(1)
                            }}</span>

                            <p class="  text-[0.6rem] md:text-[0.8rem] tracking-widest">Popularity</p>


                        </div>


                        <div class="px-2 py-3 md:py-5 border-gray-900  border-r-2 border-sky-500  md:w-40 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="  inline-block h-4 md:h-6 " fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            <span class="text-sm md:text-lg align-middle ml-1 ">{{ movie.vote_average.toFixed(1)
                            }}</span>

                            <p class=" text-[0.6rem] md:text-[0.8rem] tracking-widest ">Vote Average</p>


                        </div>


                        <div class=" py-3 md:py-5 w-20  md:w-40 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="  inline-block h-4 md:h-6 " fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <span class="text-sm md:text-lg align-middle ml-1 ">{{ movie.vote_count }}</span>
                            <p class=" text-[0.6rem] md:text-[0.8rem] tracking-widest ">Vote Count</p>


                        </div>



                    </div>



                    <!-- Overview -->
                    <div class=" relative   px-2 md:px-5 w-fit text-left">

                        <p class="font-bold text-xl">Overview:</p>
                        <p class="leading-6 text-sm  sm:text-base md:text-lg  font-thin font-sans"> {{ movie.overview }}
                        </p>


                    </div>
                    <!-- Trailer -->
                    <div class=" relative mt-5  w-full  mx-auto text-left">

                        <p class="font-bold text-xl p-4">Trailer:</p>

                        <iframe
                            class="mx-auto mt-5 w-full  w-[300px] h-[200px]  sm:w-[400px] sm:h-[250px]  md:w-[480px] md:h-[300px]  "
                            v-if="Trailer" :src="'https://www.youtube.com/embed/' + Trailer.key"></iframe>

                    </div>

                    <!-- Cast -->
                    <div class="  relative p-4 py-10  w-full text-left">
                        <p class="font-bold text-xl">Cast:</p>





                        <div v-if="credits" class="relative mx-auto  sm:w-4/5">

                            <div v-for="cast in credits.cast.slice(0, 5)" :key="cast.id" class="  flex  w-full  h-[100px] lg:h-[165px] 
                                          bg-slate-700 opacity-80 relative rounded-lg my-10 inline-block  ">

                                <img  v-if="cast.profile_path!=null" class="w-fit relative top-[-5px] bg-black shadow-2xl shadow-black h-[110px] lg:h-[175px]"
                                    :src="'https://image.tmdb.org/t/p/original/' + cast.profile_path" alt="">
                                
                                 <div v-else class="relative top-[-5px] bg-black shadow-2xl shadow-black  w-[100px] h-[110px] lg:w-[140px] lg:h-[175px]">
                                          <img class="w-full h-full"
                                              src="https://i.ibb.co/gvtcMVp/Nouveau-projet.png" alt="">

                                        </div>


                                <div class=" font-sans	font-semibold tracking-wide text-[0.6rem] anywhere
                                                         sm:text-xs lg:text-lg w-full ml-2 sm:ml-5 my-auto ">
                                    <p class="mb-2"> <span class="lg:w-[140px] inline-block"> Original Name </span>
                                        :&nbsp;&nbsp;<span>{{ cast.original_name }}</span></p>
                                    <p class="mb-2"> <span class="inline-block  lg:w-[140px]"> Departement </span>
                                        :&nbsp;&nbsp;<span>{{ cast.known_for_department }}</span> </p>
                                    <p class=""> <span class="inline-block  lg:w-[140px]"> Character </span>
                                        :&nbsp;&nbsp;<span>{{ cast.character }}</span> </p>



                                </div>



                            </div>

                            <transition>

                                <div class="inline" v-if="MoreCasts">

                                    <div v-for="cast in credits.cast.slice(5)" :key="cast.id" class="  flex  w-full  h-[100px] lg:h-[165px] 
                                          bg-slate-700 opacity-80 relative rounded-lg my-10 inline-block  ">

                                           <img  v-if="cast.profile_path!=null" class="w-fit relative top-[-5px] bg-black shadow-2xl shadow-black h-[110px] lg:h-[175px]"
                                    :src="'https://image.tmdb.org/t/p/original/' + cast.profile_path" alt="">
                                      
                                      
                                      <div v-else class="relative top-[-5px] bg-black shadow-2xl shadow-black  w-[100px] h-[110px] lg:w-[140px] lg:h-[175px]">
                                          <img class="w-full h-full"
                                              src="https://i.ibb.co/gvtcMVp/Nouveau-projet.png" alt="">

                                        </div>


                                        <div class=" font-sans	font-semibold tracking-wide text-[0.6rem] anywhere
                                                         sm:text-xs lg:text-lg w-full ml-2 sm:ml-5 my-auto ">
                                            <p class="mb-2"> <span class="lg:w-[140px] inline-block"> Original Name
                                                </span> :&nbsp;&nbsp;<span>{{ cast.original_name }}</span></p>
                                            <p class="mb-2"> <span class="inline-block  lg:w-[140px]"> Departement
                                                </span> :&nbsp;&nbsp;<span>{{ cast.known_for_department }}</span> </p>
                                            <p class=""> <span class="inline-block  lg:w-[140px]"> Character </span>
                                                :&nbsp;&nbsp;<span>{{ cast.character }}</span> </p>



                                        </div>



                                    </div>
                                </div>

                            </transition>


                            <button class="block mx-5 px-3 py-1 thin bg-slate-900 rounded-full outline-none"
                                @click="MoreCasts = !MoreCasts">Show <span v-if="!MoreCasts">More...</span><span
                                    v-else>Less...</span></button>

                        </div>

                        <loadingDiv v-else />


                    </div>

                </div>


            </div>
        </div>

    </div>

</template>


<script>
import { onMounted, ref, watch, reactive } from 'vue';
import router from "../router";
import { useRoute } from 'vue-router';
import axios from 'axios';
import loadingDiv from "../components/loadingDiv.vue";


export default {
    name: "Info",
    setup() {
        // const movie = ref( JSON.parse($route.params.movie)  );
        const route = useRoute();
        const movie = reactive(JSON.parse(route.params.movie));
        const api_key = "11014907a552719550c04a15023b913d";
        const Genres_url = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + api_key + "&language=en-US";
        const AllGenres = ref();
        let genres = ref();
        const credits_url = "https://api.themoviedb.org/3/movie/" + movie.id + "/credits?api_key=" + api_key + "&language=en-US";
        const credits = ref();
        const MoreCasts = ref(false);
        // Trailer
        const Trailer_url = "https://api.themoviedb.org/3/movie/" + movie.id + "/videos?api_key=" + api_key + "&language=en-US"
        const Trailer = ref()
        onMounted(
            
            // AllGenres={a:"b"},
            async () => {
                // Genres
                AllGenres.value = (await axios.get(Genres_url)).data.genres;
                genres.value = movie.genre_ids.map(id => {
                    return (AllGenres.value.find(genre => genre.id == id).name);
                });
                // Credits
                credits.value = (await axios.get(credits_url)).data;

                // Trailer
                Trailer.value = (await axios.get(Trailer_url)).data.results.find(video => video.type == "Trailer")
             


            });
        return { movie, genres, credits, MoreCasts, Trailer };
    },
    components: { loadingDiv }

}



</script>



<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>