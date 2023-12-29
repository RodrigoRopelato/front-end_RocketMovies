import { Container } from "./stykes";

export function ButtonText({title, isActive = true, icon:Icon, ...rest}) {
    return(
        <Container
        type="button"
        $isactive = {isActive}
        {...rest}
        >
            {Icon && <Icon size={20}/>}
            {title}
        </Container>
    )
}