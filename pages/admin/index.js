import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import fire from '../../config/firebase'
import { useRouter } from 'next/router'

const Admin = () => {
    const router = useRouter()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            router.push("listusers")
        } else {
            alert('Username atau Password yang dimasukan tidak sesuai!')
        }
    }

    return (
        <Container>
            <h1 className="my-4">Login Administrator</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        size="lg"
                        id="username"
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        size="lg"
                        id="password"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button size="lg" type="submit" block>Login</Button>
            </Form>
        </Container>
    )
}

export default Admin