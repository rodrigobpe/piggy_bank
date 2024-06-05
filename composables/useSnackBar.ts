import { SnackBarProps } from "~/types/snack-bar.props"

export const useSnackBar = () => {
    const snackBar = reactive<SnackBarProps>({
        status:false,
        type:"success"
    })

    const setSnackBar = async({message,type}:Omit<SnackBarProps,'status'>,timeout:number = 4000) =>{
        snackBar.status = true
        snackBar.message = message
        snackBar.type = type
        return setTimeout(() => {
            return refreshSnackBar()
        },timeout)
    }

    const refreshSnackBar = () => {
        snackBar.message = undefined;
        snackBar.status = false
        snackBar.type = undefined
    }

    return {snackBar, setSnackBar}
}