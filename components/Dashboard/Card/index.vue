<template>
    <v-card min-width="250" :subtitle="title" color="bg-default" :append-icon="icon" rounded="lg" class="pa-2">
        <v-card-text class="text-h5">
            R&#36; {{ Math.round(value).toFixed(2).replace(".",",") }}
        </v-card-text>
        <template v-slot:append>
            <v-icon size="x-large" :color="!iconColor ? 'text' : iconColor" :icon="icon"/>
        </template>
    </v-card>
</template>

<script setup lang="ts">
const { icon, iconColor, title, value } = defineProps<{ icon: string, iconColor?: string, title: string, value: number }>()
</script>

<style lang="scss"></style>