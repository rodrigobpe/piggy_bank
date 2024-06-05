<template>
    <v-card class="bg-bg-default pa-2" min-height="400" rounded="lg">
        <template v-slot:append>
            <v-btn color="text" icon="mdi-eye" variant="text" />
        </template>
        <template v-slot:title>
            <p class="font-weight-black">Transações recentes</p>
        </template>
        <v-card-actions>
            <v-list class="pa-0 w-100 bg-transparent" base-color="">
                <v-list-item v-for="transaction of listFake" class="mb-2 pa-2" :key="transaction.id" to="/"
                    rounded="lg">
                    <template v-slot:prepend>
                        <v-icon size="x-large" :icon="transaction.icon" :color="transaction.color" />
                    </template>
                    <v-list-item-title>{{ transaction.description }}</v-list-item-title>
                    <v-list-item-subtitle>{{ transaction.categoryName }}</v-list-item-subtitle>
                    <template v-slot:append>
                        <div class="d-flex flex-column align-end justify-self-end">
                            <span :class="[transaction.type === 'expanse' ? 'text-red' : 'text-green']"
                                class="font-weight-bold recent-transaction__title">{{ transaction.type === "expanse" ?
                                    `- R$${transaction.value.toFixed(2).replace(".", ",")}` : `+
                                R$${transaction.value.toFixed(2).replace(".", ",")}` }}
                            </span>
                            <span class="recent-transaction__subtitle">{{ transaction.date }}</span>
                        </div>
                    </template>
                </v-list-item>
            </v-list>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
// const {categoryName,id,type,value,description} = defineProps<{id:string,categoryName:string,type:string,value:number,description:string}>()

const listFake = [
    { id: 1, categoryName: "Salário", type: 'gain', value: 2130.87, description: "Salário Maio/24", icon: 'mdi-cash', color: 'green', date: '2024-03-13' },
    { id: 2, categoryName: "Comida", type: 'expanse', value: 50.87, description: "Ifood", icon: 'mdi-food', color: 'pink', date: '2024-03-13' },
    { id: 2, categoryName: "Roupas", type: 'expanse', value: 50.87, description: "Camiseta", icon: 'mdi-tshirt-crew', color: 'blue', date: '2024-03-13' },
    { id: 2, categoryName: "Viagem", type: 'expanse', value: 100.87, description: "Viajem para Santa Cecília", icon: 'mdi-wallet-travel', color: 'brown', date: '2024-03-13' },
    { id: 2, categoryName: "Comida", type: 'expanse', value: 50.87, description: "Ifood", icon: "mdi-food", color: 'pink', date: '2024-03-13' },
]

</script>

<style lang="scss">
.recent-transaction {
    &__subtitle {
        font-size: 12px;
    }
}
</style>