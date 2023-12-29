import { Back, Container, Form } from "./styles";
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { ButtonText } from './../../components/ButtonText/index';
import { FiArrowLeft } from "react-icons/fi";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";


export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <Back to="/">
                            <FiArrowLeft/>
                            Voltar
                        </Back>
                        <h1>Novo filme</h1>
                    </header>

                    <div>
                        <Input placeholder="Título" icon={undefined} />
                        <Input type="number" placeholder="Sua nota (de 0 a 5)" icon={undefined} />
                    </div>

                    <Textarea value={undefined} placeholder="Observações" />

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="Drama" isNew={undefined} onClick={undefined} />
                            <NoteItem isNew value={undefined} onClick={undefined} placeholder="Novo Marcador" />
                        </div>
                    </Section>

                    <div>
                        <Button isActive='' title="Excluir filme" icon={undefined} />
                        <Button title="Salvar alterações" icon={undefined} />
                    </div>
                </Form>
            </main>


        </Container>
    )
}