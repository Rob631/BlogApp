import React from "react";
import Post from './Post';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import Container  from "react-bootstrap/Container";


const Feed = ({ posts }) => {
    return (
        <Container className="Feed">
            <Col className="justify-content-md-center">
                <Row md={4} >
                    {posts.map(post => (
                        <Post key={post.id} post={post} />
                        ))}
                </Row>
            </Col>
        </Container>
    )
};

export default Feed