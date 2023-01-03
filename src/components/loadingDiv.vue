<template>

                <div class="w-full flex mx-auto flex-wrap relative ">
                    <div v-for="i in 6   " class=" shadow rounded-md p-4  w-[140px]  h-[180px]  sm:w-[180px] sm:h-[255px] ">
                    <div class="animate-pulse  space-x-4">
                        <div class="rounded-full bg-slate-700  mx-auto h-10 w-10 sm:h-20 sm:w-20"></div>
                        
                        <div class="flex-1 space-y-6 py-2">
                            <div class="h-2 bg-slate-700 rounded"></div>
                            <div class="space-y-4">
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div class="h-2 bg-slate-700 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

</template>




<script>

export default {
name: 'loadingDiv'




}


</script>