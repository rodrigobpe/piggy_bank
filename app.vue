<template>
  <div>
    <v-app>
      <NuxtPage />
    </v-app>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">

.v-theme--dark .apexcharts-canvas svg text{
  color: white !important;
  fill: white !important;
}

.v-theme--light .apexcharts-series path{
  color:black !important;
}

.v-theme--dark .apexcharts-legend-text{
  color:white !important;
  fill:white !important;
}

.v-theme--dark .apexcharts-canvas{
  background-color: #1A1C22;

}

.v-theme--light .apexcharts-canvas{
  background-color: #fff;
}

.v-theme--dark .apexcharts__container{
    background-color: #1A1C22;
}

.v-theme--light .apexcharts__container{
    background-color: #fff;
}

.v-theme--dark .apexcharts-tooltip{
  background-color: #282C35 !important;
  border: 1px solid #282C35 !important;
}

.v-theme--dark .apexcharts-tooltip-title{
  background-color: #1A1C22 !important;
  border: 1px solid #1A1C22 !important;
}

.v-theme--dark .apexcharts-xaxistooltip{
  background-color: #282C35 !important;
  color: white;
  border: 1px solid #282C35 !important;
}

.v-theme--dark .apexcharts-menu{
  background-color: #282C35 !important;
  border: 1px solid hsl(222, 14%, 15%) !important;
  color: white;
}

.v-theme--dark .apexcharts-menu-item:hover{
  background-color: hsl(222, 14%, 15%) !important;
}



</style>