import { Conteiner } from "./styles";


export function Button({title, icon:Icon, isActive = true, loading = false, ...rest}){
    return(
        <Conteiner
        type="button"
        $isactive = {isActive}
        disabled={loading}
        {...rest}
        >
            {Icon && <Icon size={20}/>}
            {loading ? 'Carregando' : title}
        </Conteiner>
    )
}