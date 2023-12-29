import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Avatar, Back, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
    return (
        <Container>
            <header>
                <Back to="/">
                    <FiArrowLeft />
                    Voltar
                </Back>
            </header>

            <Form>
                <Avatar>
                    <img
                        src="https://github.com/rodrigoropelato.png"
                        alt="Foto do usuário"
                    />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />
                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />

                <Button isActive title="Salvar" icon={undefined} />
            </Form>
        </Container>
    )
}