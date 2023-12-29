import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container, Form, Backgroud } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SingIn(){
    return(
        <Container>
            <Form>  
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button  title="Entrar" icon={undefined}/>

                <Link to="register">Criar Conta</Link>

            </Form>

            <Backgroud/>
        </Container>
    )
}