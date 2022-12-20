import React from "react"
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

const NewPost = ({
    handleSubmit, postTitle, setPostTitle, postBody, setPostBody
}) => {
    return (
        <main>
            <h1>New Post</h1>
            <Form className='newPostForm' onSubmit={handleSubmit}>
                <Form.Group className="mb-3"
                controlId="exampleForm.ControlInput1">
                    <Form.Label htmlFor='postTitle'>Title:</Form.Label>
                    <Form.Control 
                        id="postTitle"
                        type="text"
                        required
                        value={postTitle}
                        onChange={(e) => setPostTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3"
                controlId="exampleForm.ControlTextarea1">
                    <Form.Label htmlFor="postBody" >Post:</Form.Label>
                    <Form.Control as='textarea' rows={3} 
                        id="postBody"
                        required
                        value={postBody}
                        onChange={(e) => setPostBody(e.target.value)}
                    />
                    
                    <Button className="NewPostBtn" variant="success" type="submit">Submit</Button>
                </Form.Group>
            </Form>
        </main>
    )
}

export default NewPost
