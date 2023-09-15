<template>
    <section id="hero" class="bg-center bg-no-repeat bg-cover bg-[url('@/assets/img/mainbg.png')] pt-[180px] overflow-hidden">
        <div class="container px-3 sm:px-[30px] md:px-0 sm:mx-auto ">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:items-center text-center sm:text-left">
                <div class="col-span-1 md:col-span-5 wow fadeInUp sm:mx-auto mb-[60px] md:mb-0">
                    <h1 class="georgia mb-[42px] text-5xl text-white leading-tight">Not only people <br> need a house</h1>
                    <p class="mb-[42px] text-md leading-[24px] text-dim_gray max-w-[460px] mx-auto sm:mx-0">We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else 
                        in the world, you will see!</p>
                    <router-link tag="a" to="/pets" class="text-center w-full block md:text-left md:w-fit">
                        <button class="georgia text-dim_super_dark text-[17px] bg-primary px-[45px] py-[15px] rounded-full hover:bg-primary_hover">Make a friend</button>
                    </router-link>
                </div>
                <div class="col-span-1 md:col-span-7">
                    <img src="@/assets/img/hund.png" class="sm:mx-auto sm:w-[570px] md:w-full dog_main">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
const basicScroll = require('basicscroll')

export default {
    mounted(){
        const instance = basicScroll.create({
            elem: document.querySelector('#hero'),
            from: 'top-top',
            to: 'bottom-top',
            props: {
                '--transform_dog': {
                    from: '15%',
                    to: '0%'
                }
            }
         })
        instance.start()
    }
}
</script>