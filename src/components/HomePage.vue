<script setup>
</script>

<template>
  <!-- Rotating images -->
 <v-carousel>
  <v-carousel-item
   src="../../public/images/creab-thepolymath-jDXMQf3LPX8-unsplash.jpg">
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/images/divaris-shirichena-dtIaLdx6ikg-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/images/divaris-shirichena-rVATK1CRisQ-unsplash.jpg"
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/images/divaris-shirichena-vtp9CGOCtIE-unsplash.jpg"
    cover
  ></v-carousel-item>

</v-carousel>

<!--Latest from jitegemee-->
   <v-container>
     <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="A"
        text="B"
        title="C"
        color = "grey"
      ></v-card>

     
    </v-col>

    <v-col cols="12" md="4">
      <v-card color = "grey">
        <template v-slot:title>
          All are welcome for the school graduation on 27/6/2025
        </template>

        <template v-slot:subtitle>
          hey there, im learning vue js
        </template>

        <template v-slot:text>
          and it is fun
        </template>
      </v-card>

     
    </v-col>

    <v-col cols="12" md="4">
      <v-card color = "grey">
        <v-card-item>
          <v-card-title>1</v-card-title>

          <v-card-subtitle>2</v-card-subtitle>
        </v-card-item>

        <v-card-text>
         3
        </v-card-text>
      </v-card>

    </v-col>
  </v-row>
  </v-container>

  <!-- Partners -->
   <v-container>
    <v-row>
      <v-col cols="12" md="2">
      <v-img src = "../../public/images/SU-Logo.png"></v-img>
    </v-col>

    <v-col cols="12" md="2">
      <v-img src = "../../public/images/logo-small.png"></v-img>
    </v-col>

    <v-col cols="12" md="2">
      <v-img src = "../../public/images/POCO.png"></v-img>
    </v-col>

    <v-col cols="12" md="2">
      <v-img src = "../../public/images/tor-logo@2x.png"></v-img>
    </v-col>

    <v-col cols="12" md="2">
      <v-img src = "../../public/images/logo 2.png"></v-img>
    </v-col>

    <v-col cols="12" md="2">
      <v-img src = "../../public/images/safaricom-logo-green.png"></v-img>
    </v-col>

    </v-row>
   </v-container>
</template>

