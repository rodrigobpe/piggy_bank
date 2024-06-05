<template>
    <div class="apexcharts__container pa-4 rounded-lg elevation-1" v-show="renderChart">
        <apexchart type="bar" height="350" :options="chartOptions" :series="series" />
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
    stroke: {
        width: 3,
        colors: ['transparent']
    },
    dataLabels: {
        enabled: true,
        offsetX:-30,
        formatter:(val:any) => {
            return `R$ ${val.toFixed(2).replace('.',",")}`
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            borderRadius:16,
            borderRadiusApplication:'end',
            barHeight: "30%",
            dataLabels: {
              position: 'top',
            },
        }
    },
    colors: ["#008000", "#ff0000"],
    title: {
        text: 'Balanço do mês (Maio)',
        align: 'left',
        style: {
            fontSize: '20px'
        }
    },
    xaxis: {
        labels: {
            formatter: (val: any) => { return 'R$ ' + val }
        },
        categories:['Maio']
    },
    yaxis:{
        labels:{
            show:true,
        }
    }
};
const series = [
    {
        name: 'Receita',
        data: [2000],

    },
    {
        name: 'Gasto',
        data: [1000],
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