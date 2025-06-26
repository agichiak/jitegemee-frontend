import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLibraryStore = defineStore('library',  {
    state: () => {
        const library = ref([
            {
                id: 1,
                title: "AA",
                image: "../public/images/bk1.jpg",
                description: "aa",
            },
            {
                id: 2,
                title: "BB",
                image: "../public/images/bk2.jpg",
                description: "bb",
            },
              {
                id: 3,
                title: "CC",
                image: "../public/images/bk3.jpg",
                description: "cc",
            },
              {
                id: 4,
                title: "DD",
                image: "../public/images/bk4.jpg",
                description: "dd",
            },
              {
                id: 5,
                title: "EE",
                image: "../public/images/bk5.jpg",
                description: "ee",
            },
              {
                id: 6,
                title: "FF",
                image: "../public/images/bk6.jpg",
                description: "ff",
            },
              {
                id: 7,
                title: "GG",
                image: "../public/images/bk7.jpg",
                description: "gg",
            },
              {
                id: 8,
                title: "HH",
                image: "../public/images/bk8.jpg",
                description: "hh",
            },
              {
                id: 9,
                title: "II",
                image: "../public/images/bk9.jpg",
                description: "ii",
            },    
            
                {
                id: 10,
                title: "JJ",
                image: "../public/images/bk10.jpg",
                description: "jj",
            },    
    
        ])

        return{
            library,
        }
    }, 
    actions:{
        
    }
})
