<template>
    <div class="apexcharts__container pa-4 rounded-lg elevation-1"  v-show="renderChart">
        <apexchart type="line" height="383" :options="chartOptions" :series="series" />
    </div>
</template>

<script setup lang="ts">

const chartOptions = {
    chart: {
        id: 'a',
        background: 'transparent',
    },
    theme: {
        mode: 'light'
    },
    stroke:{
        curve:'smooth'
    },
    colors: ["#008000", "#ff0000"],
    title: {
        text: 'Overview',
        align: 'left',
        style: {
            fontSize: '20px'
        }
    },
    xaxis: {
        type:'datetime',
        categories: ['2024-02-01', '2024-02-02', '2024-02-03', '2024-02-04', '2024-02-05', '2024-02-06', '2024-02-07', '2024-02-08'],
    },
    yaxis: {
        labels: {
            formatter: (val: any) => { return 'R$ ' + val }
        }
    }
};
const series = [
    {
        name: 'Receita',
        data: [30, 40, 35, 50, 49, 60, 70, 91],

    },
    {
        name: 'Gasto',
        data: [12, 20, 55, 50, 49, 60, 70, 91],
    },
];



const renderChart = ref(false)

onMounted(() => {
    nextTick(()=>{
        renderChart.value = true 
    })
})
</script>
<style lang="scss"></style>