<template>
    <div class="side_menu bg-dim_super_dark -z-10 flex justify-center items-center" 
    :class="{'activeMenu' : sideMenu}">
        <ul class="p-0 space-y-[40px] text-4xl text-center">
            <li v-for="(item, index) in navs" :key="index" @click="close">
                <router-link tag="a" :to="item.link" 
                        class="py-2 text-dim_gray hover:text-dim_l_gray"
                        
                        active-class="border-primary border-b-[3px]" exact-active-class="border-primary border-b-[3px]">
                            {{item.title}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        navs: {
            required: true,
            type: Array
        },
        sideMenu: {
            required: true,
            type: Boolean
        }
    },
    methods: {
        get_route_status(){
            return this.$route.name === 'Home' ? false : true
        },
        close(){
            this.$emit('close')
        }
    }   
}
</script>