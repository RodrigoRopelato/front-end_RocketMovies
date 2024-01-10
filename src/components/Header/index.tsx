import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { Input } from "../Input";
import { Container, Logo, Profile } from "./styles";
import { useEffect, useState } from "react";

export function Header({onSearch = () => {}}) {
    const [search, setSearch] = useState("");
    const { singOut, user } = useAuth();
    const navigate = useNavigate();

    function handleSingOut() {
        navigate("/")
        singOut();
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    useEffect(() => {
        onSearch(search);
        }, [search,onSearch])

    return (
        <Container>
            <Logo to="/">
                <div>RocketMovies</div>
            </Logo>

            <Input placeholder="Pesquisar pelo título" icon={undefined} onChange={(e) => setSearch(e.target.value)} />

            <Profile to="/profile">
                <div>
                    <strong>{user.name}</strong>
                </div>
                <img src={avatarUrl} alt={user.name} />
            </Profile>
            <button onClick={handleSingOut}>sair</button>
        </Container>
    );
}

