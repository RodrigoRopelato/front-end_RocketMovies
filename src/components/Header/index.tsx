import { Input } from "../Input";
import { Container, Logo, Profile } from "./styles";

export function Header() {
    return (
        <Container>
            <Logo to="/">
                <div>RocketMovies</div>
            </Logo>

           <Input placeholder="Pesquisar pelo título" icon={undefined}/>

            <Profile to="/profile">
                <div>
                <strong>Rodrigo Ropelato</strong>
                </div>
                <img src="https://github.com/rodrigoropelato.png" alt="Foto do usuário" />
            </Profile>
                <button>sair</button>
        </Container>
    );
}