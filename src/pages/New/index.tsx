import { useEffect, useState } from "react";
import { Back, Container, Form } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { api } from "../../services/api";

import { ButtonText } from './../../components/ButtonText/index';
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Header } from '../../components/Header';
import { Button } from "../../components/Button";
import { Input } from '../../components/Input';



export function New() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");

    const [tags, setTags] = useState<string[]>([]);
    const [tagsUpdate, setTagsUpdate] = useState<string[]>([]);
    const [newTag, setNewTag] = useState("");

    const params = useParams();
    const navigate = useNavigate();

    function handleAddTag(id) {
        if (newTag !== "") {
            if(id){
               setTagsUpdate(prevState => [...prevState, newTag]) 
               setNewTag("")
            }else{
                setTags(prevState => [...prevState, newTag]);
                setNewTag("")
            }
        } else {
            alert("Preencha o campo para poder adicionar uma Tag")
        }
    }

    function handleRemoveTag(deleted) {
        params ? setTagsUpdate(prevState => prevState.filter(tag => tag !== deleted)) : setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    function handleBack() {
        navigate(-1);
    }

    async function handleRemove() {
        const confirm = window.confirm("Deseja realmente remover o filme?");

        if (confirm) {
            await api.delete(`/movie/${params.id}`);
            navigate("/");
        }
    }


    async function handleNewMovie() {

        if (!title) {
            return alert("Digite o título do novo filme")
        }

        if (tags.length == 0) {
            return alert("Deve ser adicionado no minímo um marcador")
        }

        if (newTag) {
            return alert("Existem marcadores preenchidas que não foram adicionadas, clique em adicionar ou deixe o campo vazio.")
        }

        await api.post("/movie", {
            title,
            description,
            rating,
            tags
        });

        alert("Filme cadastrado com sucesso!");
        navigate(-1);
    }


    async function handleEditMovie() {
        if (!title) {
            return alert("Digite o título do filme")
        }

        if (tags.length == 0) {
            return alert("Deve ser adicionado no minímo um marcador!")
        }

        if (newTag) {
            return alert("Existem marcadores preenchidas que não foram adicionadas, clique em adicionar ou deixe o campo vazio.")
        }

        await api.put(`/movie/${params.id}`, {
            title,
            description,
            rating,
            tagsUpdate
        });

        alert("Filme alterado com sucesso!");
        navigate(-1);
    }

    useEffect(() => {
        async function fetchMovie() {
            const response = await api.get(`/movie/${params.id}`);

            setTitle(response.data.title);
            setRating(response.data.rating);
            setDescription(response.data.description);
            setTags(response.data.tags);
        }

        if (params.id) {
            fetchMovie();
        }
    }, [params.id]);

    useEffect(() => {
        // Atualiza o array 'tagsUpdate' sempre que o array 'tags' for alterado
           const updatedTags = tags.map(tag => tag.name);
           setTagsUpdate(updatedTags);
    }, [tags]);

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <Back>
                            <ButtonText
                                title="Voltar"
                                icon={FiArrowLeft}
                                onClick={handleBack}
                            />
                        </Back>
                        <h1>
                            {
                                params.id ? "Editar filme" : "Novo filme"
                            }
                        </h1>
                    </header>

                    <div>
                        <Input
                            placeholder="Título"
                            type="text"
                            icon={undefined}
                            value={title}
                            onChange={e => setTitle(e.target.value)}

                        />
                        <Input
                            placeholder="Sua nota (de 0 a 5)"
                            type="number"
                            value={rating}
                            icon={undefined}
                            onChange={e => { setRating(e.target.value) }}
                        />
                    </div>

                    <Textarea
                        placeholder="Observações"
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Marcadores">

                        <div className="tags">
                            {
                                params.id ?
                                    tagsUpdate.map((tag,index) => (
                                        <NoteItem
                                            key={String(index)}
                                            value={tag}
                                            onClick={() => handleRemoveTag(tag)}
                                        />
                                    ))
                                    :
                                    tags.map((tag,index) => (
                                        <NoteItem
                                            key={String(index)}
                                            value={tag}
                                            onClick={() => handleRemoveTag(tag)}
                                        />
                                    ))
                            }
                            <NoteItem
                                isNew
                                placeholder="Novo Marcador"
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={() => handleAddTag(params.id)}
                                // onClick={params.id ? () => handleAddTag('sim') : () => handleAddTag('')}
                            />
                        </div>

                    </Section>

                    <div>
                        <Button
                            isActive=''
                            title={params.id ? "Excluir filme" : "Cancelar"}
                            icon={undefined}
                            onClick={params.id ? handleRemove : handleBack}
                        />

                        <Button
                            title="Salvar alterações"
                            icon={undefined}
                            onClick={params.id ? handleEditMovie : handleNewMovie}
                        />
                    </div>
                </Form>
            </main>


        </Container>
    )
}