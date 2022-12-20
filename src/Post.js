import React from "react"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'


const Post = ({ post }) => {
    return(
        
                    <Card style={{ width: '18rem'}}>
                    <Card.Title> 
                        <Link to={`/post/${post.id}`}>
                            <h2>{post.title}</h2>
                            <p className="postDate">{post.datetime}</p>
                        </Link></Card.Title>
                        <Card.Body className="cardBody">
                            <Card.Text className="cardText">{
                            (post.body).length <= 25
                            ? post.body
                            : `${(post.body).slice(0,25)}...`
                            }</Card.Text>
                        </Card.Body>
                    </Card> 
            

    )
}

export default Post