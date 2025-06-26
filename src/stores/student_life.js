import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStudentLifeStore = defineStore('student_life',  {
    state: () => {
        const student_life = ref([
            {
                id: 1,
                title: "Beyond the books: A Journey through Student Life",
                image: "../public/images/sl1.jpg",
                description: "11",
            },
            {
                id: 2,
                title: "Study Chill Repeat. Life at its Best",
                image: "../public/images/sl2.jpg",
                description: "22",
            },
            {
                id: 2,
                title: "Studt Chill Repeat. Life at its Best",
                image: "../public/images/sl3.jpg",
                description: "33",
            },
            {
                id: 2,
                title: "Studt Chill Repeat. Life at its Best",
                image: "../public/images/sl4.jpg",
                description: "44",
            },
            {
                id: 2,
                title: "Studt Chill Repeat. Life at its Best",
                image: "../public/images/sl5.jpg",
                description: "55",
            },
            {
                id: 2,
                title: "Studt Chill Repeat. Life at its Best",
                image: "../public/images/sl6.jpg",
                description: "66",
            },
            {
                id: 2,
                title: "Studt Chill Repeat. Life at its Best",
                image: "../public/images/sl7.jpg",
                description: "77",
            },
            {
                id: 2,
                title: "Studt Chill Repeat. Life at its Best",
                image: "../public/images/sl8.jpg",
                description: "88",
            },
            {
                id: 2,
                title: "Studt Chill Repeat. Life at its Best",
                image: "../public/images/sl9.jpg",
                description: "99",
            },
            {
                id: 2,
                title: "Studt Chill Repeat. Life at its Best",
                image: "../public/images/sl10.jpg",
                description: "00",
            },
        
        ])

        return{
            student_life,
        }
    }, 
    actions:{
        
    }
})
