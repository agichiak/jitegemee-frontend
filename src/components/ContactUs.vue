<script setup>
import {ref} from 'vue'


const firstName = defineModel('firstName')

const lastName = defineModel('lastName')
const emailAddress = defineModel('emailAddress')
const phoneNumber = defineModel('phoneNumber')
const subject = defineModel('subject')
const message = defineModel('message')


//object to hold the form data
const applicationformDetails = ref({
    firstName:firstName,
    lastName:lastName,
    emailAddress:emailAddress,
    phoneNumber:phoneNumber,
    subject:subject,
    message:message,
    
})

// function to save data
function saveData(){
    for (let item in applicationFormDetails.value){
        console.log (applicationFormDetails.value[item])
    }
}
</script>

<template>
    <v-container>
    <v-row>
        <p> You are about to apply for {{ selectedCourse.name }}, the next intake is in {{ selectedCourse.intake }} </p>
    </v-row>
    </v-container>

<!-- Apply Form -->
    <v-container>
    <v-row>

    <v-col md="6">
        <v-text-field  label="First Name" v-model ="firstName"></v-text-field>
    </v-col>
     
    <v-col md="6">
        <v-text-field  label="Last Name" v-model ="lastName"></v-text-field>
    </v-col>
    
     </v-row>
     <v-row>

    <v-col md="6">
        <v-text-field  label="Email Address" v-model ="emailAddress"></v-text-field>
    </v-col>
     
    <v-col md="6">
        <v-text-field  label="Phone Number" v-model ="phoneNumber"></v-text-field>
    </v-col>
     
     </v-row>

      <v-row>

    <v-col md="6">
        <v-text-field  label="Subject" v-model ="subject"></v-text-field>
    </v-col>
     </v-row>

       <v-row>
    <v-col md="6">
        <v-text-field  label="Message" v-model ="message"></v-text-field>
    </v-col>
     
    
     </v-row>

     <v-row>
        <v-btn block color="primary" @click="saveData()">Submit</v-btn>
     </v-row>
     </v-container>
</template>