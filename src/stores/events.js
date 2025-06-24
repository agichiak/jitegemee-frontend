import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', () => {
const events =ref([
    {
        name: "Community outreach at Northern Kenya",
        image:"../../public/images/outreach event.jpg",
        date:"July 6th 2025",
        location:"North Kenya National School",
        category: "Community outreach"
    },

      {
        name: "Annual Inter-School Robotics Competition",
        image: "../../public/images/robotics event.jpg",
        date: "July 12th 2025",
        location: "Main Campus Auditorium",
        category: "Academic Competition"
    },

      {
       name: "Tree Planting Initiative for Green Campus",
       image: "../../public/images/tree planting event.jpg",
       date: "July 19th 2025",
       location: "School Botanical Garden",
       category: "Environmental Action"
    },

      {
      name: "Career Fair & Mentorship Day",
      image: "../../public/images/career event.jpg",
      date: "July 25th 2025",
      location: "School Sports Complex",
      category: "Career Development"
    },



])

  return { events }
})
