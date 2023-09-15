import { defineStore } from 'pinia'
import axios from 'axios'
// import router from '@/router'


export const usePetsStore = defineStore('pets', {
    state: () => ({
        pets: [],
        single_pet: null
    }),
    getters: {
        // getSingleGood: (state) => (id) => {
        //     return state.pets.find(i  => i.slug === id)
        // },
    },
    actions: {
        async LOAD_PETS(){
            try {
                const { data } = await axios.get('http://localhost:3000/pets')
                this.pets = data
            } catch (error) {
                console.log(error)
                // router.replace('/404')
            }
        },
        SET_SINGLE_PET(pet){
            this.single_pet = pet
        }
    },
})