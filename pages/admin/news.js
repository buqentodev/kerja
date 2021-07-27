import React, { useState } from 'react'
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import fire from '../../config/firebase'
import Head from 'next/head'
import { DefaultEditor } from 'react-simple-wysiwyg';
import NavAdmin from './NavAdmin'

const FormAdd = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    let newsData = {
        date_modified: Date.now(),
        title: title,
        description: description
    }

    const handlePublish = e => {
        e.preventDefault()
        if (title !== "") {
            fire.firestore().collection("news")
                .add(newsData)
                .then(() => { alert('Publish') })
                .catch((error) => { alert(error.message) })
        } else {
            alert('Data tidak sesuai')
        }
    }

    return (<div className="my-4">
        <Form onSubmit={handlePublish}>
            <Container>
                <Row>
                    <Col lg={12} sm={12}>
                        <Form.Group>
                            <Form.Label>Judul Berita</Form.Label>
                            <Form.Control
                                size="lg"
                                id="title"
                                type="text"
                                placeholder="Judul Berita"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} sm={12}>
                        <DefaultEditor
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Col>
                </Row>
                <Button size="lg" variant="primary" type="submit" className="my-2" block>Publish</Button>
            </Container>
        </Form>
    </div>)
}

class AddNews extends React.Component {

    render() {
        return (
            <>
                <Head>
                    <title>Si Pelita MBD - News</title>
                    <meta property="og:title" content="Si Pelita MBD - News" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.sipelitambd.com/" />
                    <meta property="og:image" content="https://www.sipelitambd.com/images/pelantikan.jpg" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <NavAdmin />
                <Container>
                    <h1 className="mt-4">Input Berita</h1>
                    <FormAdd />
                </Container>
            </>
        )
    }
}

export default AddNews