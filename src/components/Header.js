import React, {useState} from "react";
import { Container ,Nav, Navbar, NavDropdown, Button, Form, FormControl } from "react-bootstrap";


export default function Header () { 
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };
  
    return (
    <Navbar expand="lg" style={{backgroundColor:'rgb(51, 69, 129, 0.95)', height:'65px'}} variant="dark" sticky="top" className="shadow">
      <Container>
        <Navbar.Brand href="#">
          <img src="/LOGO.png" alt="logo" style={{height:'27px'}} />
        </Navbar.Brand>
        <Form className="mx-auto d-flex w-50" onSubmit={handleSearch}>
          <img src="/icon/search-icon.png" alt="search icon" style={{ height: '27px', marginRight: '8px', marginTop: '5px' }} />
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="outline-light" type="submit">Search</Button>
        </Form>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">
              <a>
                <img src="/icon/user-icon.png" alt="user" style={{height:'27px'}}/>
              </a>
            </Nav.Link>
            <Nav.Link href="#">
              <a>
                <img src="/icon/cart-icon.png" alt="cart" style={{height:'27px'}}/>
              </a>
            </Nav.Link>
            <Nav.Link href="#">
              <a>
                <img src="/icon/language-icon.png" alt="language" style={{height:'27px'}}/>
              </a>
            </Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown" style={{ color: 'black'}}>
              <NavDropdown.Item href="#">Living Room</NavDropdown.Item>
              <NavDropdown.Item href="#">Kitchen</NavDropdown.Item>
              <NavDropdown.Item href="#">Bedroom</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}