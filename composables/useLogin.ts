import type { LoginInput } from "~/types/login"

export const useLogin = () => {
    const rules = reactive({
        password: [(e: string) => (!!e || "Campo Obrigatório")],
        email: [(e: any) => (!!e || "Campo Obrigatório"), (e: any) => !e || /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/.test(e) || "E-mail inválido"]
    })

    const body = reactive<LoginInput>({
        email: null,
        password: null
    })

    const isFormFilled = ref<boolean>(false)

    const showPassword = ref(false)

    const loading = ref<boolean>(false)

    return {
        rules, showPassword, loading, body, isFormFilled
    }
}