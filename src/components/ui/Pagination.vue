<template>
    <div class="flex justify-center items-center gap-2.5 sm:gap-5">
        <button :class="arr_btn" @click="goFirst()" :disabled="active_page === 1">
            <span class="mdi mdi-chevron-double-left"></span>
        </button>
        <button :class="arr_btn" @click="changePage(-1)" :disabled="active_page === 1">
            <span class="mdi mdi-chevron-left"></span>
        </button>
        <!--  -->
        <div class="h-[52px] w-[52px] flex justify-center items-center text-xl georgia rounded-full bg-primary text-dim_dark">{{active_page}}</div>
        <!--  -->
        <button :class="arr_btn" @click="changePage(1)" :disabled="active_page === pages">
            <span class="mdi mdi-chevron-right"></span>
        </button>
        <button :class="arr_btn" @click="goLast()" :disabled="active_page === pages">
            <span class="mdi mdi-chevron-double-right"></span>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        pages: {
            required: true,
            type: Number
        },
        active_page: {
            required: true,
            type: Number
        }
    },
    data(){
        return{
            arr_btn: 'h-[52px] w-[52px] rounded-full border-2 flex justify-center items-center border-primary hover:bg-primary text-dim_dark text-2xl disabled:border-dim_gray disabled:text-dim_gray disabled:hover:bg-transparent',
        }
    },
    methods: {
        changePage(param){
            this.$emit('changePage', param)
        },
        goFirst(){
            this.$emit('goFirst')
        },
        goLast(){
            this.$emit('goLast')
        }
    }
}
</script>