<template>
    <NuxtLayout>
        <v-container fluid>
            <v-row>
                <v-col cols="12" v-for="item of dashboardCarditems" sm="6" md="6" lg="4" :key="item.title">
                    <DashboardCard :icon="item.icon" :icon-color="item.iconColor" :title="item.title"
                        :value="item.value" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="8">
                    <ChartBarVertical />
                </v-col>
                <v-col cols="12" md="4">
                    <DashboardRecentTransaction />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4">
                    <ChartDonut />
                </v-col>
                <v-col cols="12" md="4">
                    <ChartBarHorizontal />
                </v-col>
                <v-col cols="12" md="4">
                    <DashboardCreditCard/>
                </v-col>
            </v-row>
        </v-container>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { DashboardCardProps } from '~/types/dashboardCardProps';

const dashboardCarditems: DashboardCardProps[] = [
    { icon: 'mdi-wallet', title: 'Saldo total', value: 2180.01, iconColor: 'blue' },
    { icon: 'mdi-arrow-up', title: 'Receitas', value: 2400.00, iconColor: 'green' },
    { icon: 'mdi-arrow-down', title: 'Gastos', value: 220.00, iconColor: 'red' },
    // { icon: 'mdi-credit-card', title: 'Cartão de crédito', value: 1000.00, iconColor: 'orange' },
]



</script>

<style lang="scss"></style>