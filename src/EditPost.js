import { useEffect } from "react";
import React from "react";
import {useParams, Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

const EditPost = ({
    posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle
}) => {
    const {id} = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if(post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody])

    return(
        <main className="NewPost">
            {editTitle &&
                <>
                    <h2>Edit Post</h2>
                    <Form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                        <Form.Group className="mb-3" controlId="editPostTitle">
                        <Form.Label htmlFor="postTitle">Title:</Form.Label>
                        <Form.Control
                            id="postTitle"
                            type='text'
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="editPostTextarea">
                        <Form.Label htmlFor="postBody">post:</Form.Label>
                        <Form.Control as='textarea' rows={3}
                            id="postBody"
                            type='text'
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                        <Button className="editPostBtn" variant="success" type="submit" onClick={() => handleEdit(post.id)}>
                            Submit
                        </Button>
                        </Form.Group>
                    </Form>
                </>
            }
            {!editTitle &&
                    <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to='/'>Visit Our Homepage</Link>
                    </p>
                    </>
            }
            
        </main>
    )
}

export default EditPost