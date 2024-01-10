import { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Container, Form, Backgroud } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function SingIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { singIn } = useAuth();

    function handleSingIn() {
        singIn({ email, password });
    }

    function handleKeyDown(e){
        if (e.key === 'Enter') {
            singIn({ email, password });
          }
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button
                    title="Entrar"
                    onClick={handleSingIn}
                    onKeyDown={handleKeyDown}
                    icon={undefined}
                />

                <Link to="register">Criar Conta</Link>

            </Form>

            <Backgroud />
        </Container>
    )
}