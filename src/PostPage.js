import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";



const PostPage = ({ posts, handleDelete }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    

    return (
        <main className="PostPage">
            <Container fluid className="PostPageCon">
                {post &&
                   
                    <Card className="Card" border='primary'>
                        <Card.Header className="PostHead" > <h2>{ post.title }</h2> </Card.Header>
                            <Card.Body>
                                <p className="postDate">{ post.datetime }</p>
                                <p className="postBody">{ post.body }</p>
                            </Card.Body>
                            <Card.Footer>
                                <Link to={`/edit/${post.id}`}>
                                    <Button className="EditButton" variant="warning">
                                        Edit Post
                                    </Button>
                                </Link>
                                <Button  className="DeleteButton" variant="danger" onClick={() => handleDelete(post.id)}>
                                    Delete Post
                                </Button>
                            </Card.Footer>
                    </Card>
                }
                {!post &&
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that sucks!</p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </> 
                
                }

            </Container>
        </main>
    )
}
export default PostPage