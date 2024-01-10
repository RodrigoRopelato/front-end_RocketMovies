import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { FiPlus } from "react-icons/fi";

import { Container, Content, NewMovie } from "./styles";
import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";

export function Home() {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    const navigate = useNavigate();

    const handleSearch = async (searchTerm) => {
        setSearch(searchTerm);
      };


    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/movie?title=${search}`)
            setMovies(response.data)
        }

        fetchMovies();
    }, [search])

    function handleDetails(id) {
        navigate(`/details/${id}`)
        console.log(id)
    }

    return (
        <Container>
            <Header onSearch={handleSearch}/>

            <main>
                <Content>
                    <div>
                        <h1>Meus filmes</h1>
                        <NewMovie to="/new">
                            <FiPlus />
                            Adiconar filme
                        </NewMovie>
                    </div>
                    {
                        movies.map(movie => (
                            <Movie
                                key={String(movie.id)}
                                data={movie}
                                onClick={() => handleDetails(movie.id)}
                            />
                        ))
                    }
                </Content>
            </main>
        </Container>
    );
}