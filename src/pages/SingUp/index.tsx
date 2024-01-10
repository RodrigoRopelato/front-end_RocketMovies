import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Container, Form, Backgroud, Back } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";


export function SingUp() {
    const [name, setName] = useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    function handleSingUP(){
        if(!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        api.post("/users", {name,email,password})
        .then(()=>{
            alert("Usuário cadastrado com sucesso!");
            navigate(-1);
        })
        .catch(error=>{
            if(error.response) {
                alert(error.response.data.message);
            }else{
                alert("Não foi possível cadastrar")
            }
        })
    }

    function handleBack(){
        navigate(-1)
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>
                
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e=> setName(e.target.value)}
                    />
                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                    onChange={e=> setEmail(e.target.value)}
                    />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e=> setPassword(e.target.value)}
                    />

                <Button title="Cadastrar" icon={undefined} onClick={handleSingUP}/>

                <Back >
                    <ButtonText title="Voltar para o login" icon={FiArrowLeft} onClick={handleBack}/>
                </Back>

            </Form>

            <Backgroud />
        </Container>
    )
}