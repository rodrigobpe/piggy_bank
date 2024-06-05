<template>
    <div class="apexcharts__container pa-4 rounded-lg elevation-1" v-show="renderChart">
        <apexchart type="donut" :options="chartOptions" :series="series" />
    </div>
</template>

<script setup lang="ts">

const chartOptions = {
    chart: {
        id: 'b',
        background: 'transparent',
    },
    stroke: {
        show: false
    },
    labels: ['Roupas', 'Comidas', 'Viagens', 'Salário', 'Teste'],
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    total: {
                        show: true,
                        formatter: (val: any) => {
                            return `R$ ${val.globals.seriesTotals.reduce((a: any, b: any) => {
                                return a + b
                            }, 0).toFixed(2).replace('.', ',')
                                }`

                        }
                    },
                    value: {
                        formatter: function (val:any) {                            
                            return `R$ ${parseFloat(val).toFixed(2).replace('.',',')}`
                        }

                    }
                },
            }
        }
    },
    theme: {
        mode: 'light'
    },
    title: {
        text: 'Gastos por categoria',
        align: 'left',
        style: {
            fontSize: '20px'
        }
    },
};
const series = [43, 4, 57, 8, 9];



const renderChart = ref(false)

onMounted(() => {
    nextTick(() => {
        renderChart.value = true
    })
})
</script>
<style lang="scss"></style>