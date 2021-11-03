import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

import { MdQrCode2 } from "react-icons/md";

function NavbarLayout() {
  return (
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Evenner</Navbar.Brand>
        <div>
          <Button variant='link' href='#' className='text-dark navbar-toggler'>
            <MdQrCode2 style={{ width: "30px", height: "30px" }} />
          </Button>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
        </div>

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLayout;
