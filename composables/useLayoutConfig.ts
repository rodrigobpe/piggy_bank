class listOfItemsNavBarProps {
    icon: string;
    name: string;
    path: string
}

class listOfActionsButtonProps {
    icon: string;
    baseColor: string;
    title: string;
}

export const useLayoutConfig = () => {
    const toggleButtonDrawer = ref<false>(false)

    const listOfActionsButton = ref<listOfActionsButtonProps[]>([
        {
            title: 'Despesas',
            baseColor: 'red',
            icon: 'mdi-trending-down',
        },
        {
            title: 'Ganhos',
            baseColor: 'green',
            icon: 'mdi-trending-up',
        },
    ])

    const listOfItemsNavBar = ref<listOfItemsNavBarProps[]>([
        {
            icon: 'mdi-finance',
            name: 'Dashboard',
            path: '/dashboard'
        },
        {
            icon: 'mdi-account',
            name: 'Perfil',
            path: '/'
        },
        {
            icon: 'mdi-wallet',
            name: 'Contas',
            path: '/'
        },
        {
            icon: 'mdi-bank-transfer',
            name: 'Transações',
            path: '/'
        },
        {
            icon: 'mdi-tag',
            name: 'Categorias',
            path: '/'
        },
        {
            icon: 'mdi-credit-card',
            name: 'Cartão de crédito',
            path: '/'
        },
    ])



    return { listOfItemsNavBar, toggleButtonDrawer, listOfActionsButton }
}