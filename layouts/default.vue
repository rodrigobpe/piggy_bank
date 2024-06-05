<template>
    <v-navigation-drawer color="bg-default">
        <v-list-item class="d-flex justify-center my-6">
            <v-list-item-title class="text-h5 text-text text-bold font-weight-black">Piggy Bank</v-list-item-title>
        </v-list-item>

        <div class="pa-2 mb-4">
            <v-menu v-model="toggleButtonDrawer" :close-on-content-click="false" location="top">
                <template v-slot:activator="{ props }">
                    <v-btn color="text" rounded="lg" v-bind="props" density="default" size="large"
                        block>Adicionar</v-btn>
                </template>
                <v-card min-width="240" rounded="lg" style="left: -5px;">
                    <v-list>
                        <v-list-item v-for="action of listOfActionsButton" :prepend-icon="action.icon"
                            :base-color="action.baseColor" :title="action.title" />
                    </v-list>
                </v-card>
            </v-menu>
        </div>

        <v-list nav>
            <v-list-item v-for="item of listOfItemsNavBar" color="text" :title="item.name" rounded="lg"
                :prepend-icon="item.icon" :to="item.path" />
        </v-list>
        <template v-slot:append>
            <div class="pa-2">
                <v-btn color="red" size="large" rounded="lg" prepend-icon="mdi-logout" to="/" block>Sair</v-btn>
            </div>
        </template>
    </v-navigation-drawer>

    <v-app-bar elevation="0" color="bg-default" class="border-b-thin" croll-behavior="hide" flat>
        <template v-slot:append>
            <v-btn @click="changeTheme" :icon="theme == 'dark' ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
                color="text" />
            <v-avatar class="mx-2" color="surface-variant"></v-avatar>
        </template>
    </v-app-bar>
    <v-main class="d-flex bg-bg-contrast" style="min-height: 300px;">
        <slot></slot>
    </v-main>

</template>

<script setup lang="ts">

const { changeTheme, theme } = useThemeCustom()
const { listOfItemsNavBar, toggleButtonDrawer, listOfActionsButton } = useLayoutConfig()

</script>

<style lang="scss">
.color {
    color: #231c4a
}
</style>