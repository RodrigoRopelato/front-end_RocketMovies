import { FiArrowLeft } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import { DateTime } from 'luxon';

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Container, Content, Profile } from "./styles";
import { MovieRating } from './../../components/MovieRating/index';
import { Tag } from "../../components/Tag";


export function Details() {
    const [data, setData] = useState({});
    const [updatedAt, setUpdatedAt] = useState();

    const params = useParams();
    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    function handleEdit() {
        navigate(`/new/${params.id}`)
    }

    useEffect(() => {
        async function fetchMovie() {
          const response = await api.get(`/movie/${params.id}`);
          setData(response.data);
      
          const updatedAtUTC = new Date(response.data.updated_at);
          const updatedAtLocal = new Date(updatedAtUTC.getTime() - 3 * 60 * 60 * 1000);
          
          const formattedDate = updatedAtLocal.toLocaleString('pt-BR', {
            timeZone: 'America/Sao_Paulo',
            hour12: false,
          });
      
          setUpdatedAt(formattedDate);
      
          console.log(updatedAtLocal);
          console.log(response.data.updated_at);
        }
      
        fetchMovie();
      }, [params.id]);

    return (
        <Container>
            <Header />
            <main>
                <Content>
                    <div>
                        <ButtonText title="Voltar" icon={FiArrowLeft} onClick={handleBack} />
                        <ButtonText title="Editar" icon={undefined} onClick={handleEdit} />
                    </div>
                    <div>
                        <h1>{data.title}</h1>
                        <MovieRating rating={data.rating} />
                    </div>
                    <div>
                        <Profile>
                            <img src={`${api.defaults.baseURL}/files/${data.user_avatar}`} alt={data.user_name} />
                            <p>{`Por ${data.user_name}`}</p>
                            <CiClock2 />
                            <p>{updatedAt}</p>
                        </Profile>
                    </div>
                    {data.tags && (
                        <div>
                            {
                                data.tags.map((tag) => (
                                    <Tag
                                        key={String(tag.id)}
                                        title={tag.name}
                                    />
                                ))
                            }
                        </div>
                    )}
                    <div>
                        <p>{data.description}</p>
                    </div>
                </Content>
            </main>
        </Container>
    );
}