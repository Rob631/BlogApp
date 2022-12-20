import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScroll({ search, setSearch }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Blogs</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/NewPost">
                Make A New Post!
              </NavDropdown.Item>
            </NavDropdown>
    
          </Nav>
          <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <input
              id="search"  
              type="text"
              placeholder="Search Posts"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;


// import React from "react"
// import { Link } from 'react-router-dom';
// const Nav = ({ search, setSearch }) => {
//     return (
//         <nav className="Nav">
//             <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
//                 <label htmlFor="search">Search Posts</label>
//                 <input
//                     id="search"
//                     type="text"
//                     placeholder="Search Posts"
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                 />
//             </form>
//             {/* <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/post">Post</Link></li>
//                 <li><Link to="/about">About</Link></li>
                    

                
//             </ul> */}
//         </nav>
//     )
// }

// export default Nav 
