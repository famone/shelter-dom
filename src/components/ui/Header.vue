<template>
    <header class="top-0 left-0 w-full z-40 pt-14 overflow-x-hidden" 
    :class="[{ 'pt-[30px] pb-[30px] bg-white relative' : get_route_status() }, sideMenu ? 'fixed' : 'absolute']"
    >
        <div class="px-3 sm:px-[30px] md:px-0 md:container md:mx-auto relative">
            <div class="flex justify-between items-center">
                <router-link tag="a" to="/" class=" cursor-pointer ">
                    <img src="@/assets/img/logo_d.svg" v-if="get_route_status()">
                    <img src="@/assets/img/logo.svg" v-else>
                </router-link>
                <ul class="sm:flex p-0 gap-[35px] hidden">
                    <li v-for="(item, index) in navs" :key="index">
                        <router-link tag="a" :to="item.link" 
                        class="py-2"
                        :class="!get_route_status() ? 'text-dim_gray hover:text-dim_l_gray' : 'text-dim_dark hover:text-dim_super_dark'" 
                        active-class="border-primary border-b-[3px]" exact-active-class="border-primary border-b-[3px]">
                            {{item.title}}
                        </router-link>
                    </li>
                </ul>
                <button class="mr-[42px] sm:hidden" @click="sideMenu = !sideMenu">
                    <svg class="transition-all" :class="{'rotate-90' : sideMenu}" width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="21" x2="30" y2="21" :stroke="!get_route_status() ? '#F1CDB3' : '#000000'" stroke-width="2"/>
                        <line y1="11" x2="30" y2="11" :stroke="!get_route_status() ? '#F1CDB3' : '#000000'" stroke-width="2"/>
                        <line y1="1" x2="30" y2="1" :stroke="!get_route_status() ? '#F1CDB3' : '#000000'" stroke-width="2"/>
                    </svg>
                </button>
            </div>
        </div>
        <SideMenu :navs="navs" :sideMenu="sideMenu" @close="sideMenu = false" />
    </header>
</template>

<script>
import SideMenu from '@/components/ui/SideMenu.vue'

export default {
    components: {
        SideMenu
    },
    data(){
        return {
            navs: [
                { title: 'About the shelter', link: '/' },
                { title: 'Our pets', link: '/pets' },
                { title: 'Help the shelter', link: '/help' },
                { title: 'Contacts', link: '/contacts' },
            ],
            sideMenu: false
        }
    },
    methods: {
        get_route_status(){
            return this.$route.name === 'Home' ? false : true
        }
    }
}
</script>