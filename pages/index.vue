<template>
    <div class="d-flex justify-center bg-bg-contrast align-center h-screen w-screen">
        <v-sheet width="400" min-height="400" color="transparent">
            <v-form class="pa-6" v-model="isFormFilled">
                <h1 class="mb-8 text-center">Login</h1>
                <v-text-field
                    class="mb-4"
                    label="Email*"
                    required
                    v-model="body.email"
                    :rules="rules.email"
                    placeholder="Ex: joão@gmail.com"
                    clearable
                    variant="outlined"
                    rounded
                />
                <v-text-field
                    class="mb-4"
                    label="Senha*"
                    required
                    v-model="body.password"
                    :rules="rules.password"
                    placeholder="Ex: senha123"
                    :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:append-inner="toggleShowPassword()"
                    clearable
                    variant="outlined"
                    rounded
                />
            <div class="d-flex flex-column">
                <v-btn
                    block
                    :disabled="!isFormFilled"
                    text="Entrar"
                    @click.prevent="login"
                    color="btn"
                    :loading="loading"
                    rounded
                    size="large"
                />
                <v-btn
                    block
                    @click=""
                    class="mt-4"
                    text="Cadastro"
                    color="btn-100"
                    rounded
                    size="large"
                />
            </div>
            </v-form>
        </v-sheet>
        <v-snackbar :color="snackBar.type" :text="snackBar.message" location="top right" v-model="snackBar.status"/>
    </div>
</template>

<script setup lang="ts">
const { rules, showPassword, loading, body, isFormFilled } = useLogin()
const { setSnackBar, snackBar} = useSnackBar()

const login = async() => {
    loading.value = true
    const {data,error,refresh:executeLogin} = useFetch('/api/auth',{method:'post',immediate:false,watch:false,body})
    await executeLogin()
    if(error.value){
        return setTimeout(() => {
            setSnackBar({message:error?.value?.data.message,type:'error'})
            loading.value = false
        },2000)
    }else{
        return setTimeout(() => {
            return navigateTo('/dashboard')
        }, 2000);
    }
}

const toggleShowPassword = () => {
    showPassword.value = !showPassword.value
}

</script>

<style lang="scss">

</style>