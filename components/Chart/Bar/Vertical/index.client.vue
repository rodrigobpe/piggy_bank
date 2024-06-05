<template>
    <div class="apexcharts__container pa-4 rounded-lg elevation-1" v-show="renderChart">
        <apexchart type="bar" height="383" :options="chartOptions" :series="series" />
    </div>
</template>

<script setup lang="ts">

const chartOptions = {
    chart: {
        id: 'a',
        background: 'transparent',
        zoom:{enabled:false}
    },
    theme: {
        mode: 'light'
    },
    stroke: {
        width: 1,
        colors: ['transparent']
    },
    plotOptions: {
        bar: {
            borderRadius:5,
            borderRadiusApplication:'end',
        },
        value:{
            enabled:false
        }
    },
    colors: ["#008000", "#ff0000"],
    title: {
        text: 'Receita x Gasto (Maio/24)',
        align: 'left',
        style: {
            fontSize: '20px'
        }
    },
    dataLabels:{
        enabled:false
    },
    xaxis: {
        type:'datetime',
        categories:['2024-03-01','2024-03-02','2024-03-03','2024-03-04','2024-03-05','2024-03-06','2024-03-07','2024-03-31']
    },
    yaxis:{
        labels:{
            show:true,
            formatter:(val:any) => {
                return `R$ ${val}`
            }
        }
    }
};
const series = [
    {
        name: 'Receita',
        data: [2000,0,0,0,0,0,0],

    },
    {
        name: 'Gasto',
        data: [1000,100,5,6,7,9,8,],
    },
];



const renderChart = ref(false)

onMounted(() => {
    nextTick(() => {
        renderChart.value = true
    })
})
</script>
<style lang="scss"></style>