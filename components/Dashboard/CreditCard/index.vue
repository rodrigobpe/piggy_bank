<template>
    <v-card color="bg-default px-2" height="396">
        <template v-slot:append>
            <v-btn color="text" variant="text" icon="mdi-plus" />
        </template>
        <template v-slot:title>
            <p class="font-weight-black">Cartão de crédito</p>
        </template>
        <v-card-actions style="height: 78%;" class="flex-column align-start pa-0 mx-4 bg-bg-contrast rounded-lg">
            <div class="d-flex flex-column pa-8">
                <span class="text-h5">LOGO</span>
                <span class="my-8 text-h6">2343 4343 **** ****</span>
            </div>
            <div class="d-flex w-100 h-100 credit-card__content-bottom rounded-lg">

            </div>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.credit-card__content-bottom{
    background-color: hsl(60, 14%, 98%);
}

.v-theme--dark .credit-card__content-bottom{
    background-color: hsl(222, 14%, 27%)
}
</style>
