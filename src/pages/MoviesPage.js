

import { Container, Row, Col, Card } from 'react-bootstrap';

const movies = [
    {
        movieId: "101",
        title: "E.T.",
        releaseYear: 1982,
        posterURL: 'https://m.media-amazon.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX67_CR0,0,67,98_AL_.jpg'
    },
    {
        movieId: "102",
        title: "Cujo",
        releaseYear: 1983,
        posterURL: "https://upload.wikimedia.org/wikipedia/en/8/8a/CujoVHScover.jpg"
    },
    {
        movieId: "105",
        title: "Edward Scissorhands",
        releaseYear: 1990,
        posterURL: "https://upload.wikimedia.org/wikipedia/en/3/3b/Edwardscissorhandsposter.JPG"
    },
    {
        movieId: "210",
        title: "The Matrix",
        releaseYear: 1999,
        posterURL: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg"
    },
    {
        movieId: "225",
        title: "Jaws",
        releaseYear: 1975,
        posterURL: "https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX45_CR0,0,45,67_AL_.jpg"
    }
];


export default function MoviesPage() {
    return (
        <Container fluid className="mt-4">
            <Row>
                {movies.map(movie => (
                    <Col sm={12} md={6} lg={4} key={movie.movieId} className="mb-4">
                        <
                            Card style={{ width: '15REM' }}>
                            <Card.Img variant="top" src={movie.posterURL} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>Release Year: {movie.releaseYear}</Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                ))}
            </Row>
        </Container>
    );
}
