import { MovieRating } from "../MovieRating";
import { Tag } from "../Tag";
import { Container } from "./styles";


export function Movie({ data, ...rest }) {
    return (
        <Container {...rest}>
            <div>
                <h1>{data.title}</h1>
                <MovieRating rating={data.rating} />
            </div>

            <p>{data.description}</p>
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name}></Tag>)
                    }
                </footer>
            }
        </Container>
    );
}