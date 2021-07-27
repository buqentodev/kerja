import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

class NavAdmin extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>Administrator</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="news">Input Berita</Nav.Link>
                            <Nav.Link href="listusers">Daftar Kartu Pencari Kerja (AK/I)</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}
export default NavAdmin