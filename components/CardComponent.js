import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { FaBullhorn, FaRegAddressCard } from 'react-icons/fa'
import { BsNewspaper } from 'react-icons/bs'
import { ImUserTie } from 'react-icons/im'

function CardComponent() {
    return (
        <Container className="mt-4">
            <h1 className="text-center my-5">Layanan Publik</h1>
            <Row>
                <Col lg={3} sm={12} className="mb-3 text-center">
                    <Card bg="warning" text="white">
                        <Card.Body>
                            <div className="mb-4"><FaRegAddressCard size={48} /></div>
                            <Card.Title>KARTU PENCARI KERJA (AK/I)</Card.Title>
                            <Card.Text>
                                Pendaftaran Kartu Pencari Kerja (AK/I). Anda dapat membuat Kartu Pencari Kerja (AK/I) disini.
                            </Card.Text>
                            <Button variant="light" size="lg" href="alurpendaftaran">Selengkapnya</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} sm={12} className="mb-3 text-center">
                    <Card bg="success" text="white">
                        <Card.Body>
                            <div className="mb-4"><ImUserTie size={48} /></div>
                            <Card.Title>LOWONGAN KERJA</Card.Title>
                            <Card.Text>
                                Layanan Informasi Lowongan Kerja Resmi oleh Dinas Penanaman Modal dan PTSP Kabupaten Maluku Barat Daya.
                            </Card.Text>
                            <Button variant="light" size="lg" href="loker">Lihat Lowongan</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} sm={12} className="mb-3 text-center">
                    <Card bg="info" text="white">
                        <Card.Body>
                            <div className="mb-4"><BsNewspaper size={48} /></div>
                            <Card.Title>BERITA &amp; REGULASI TERBARU</Card.Title>
                            <Card.Text>
                            Informasi dan kegiatan yang berkaitan dengan tenaga kerja serta informasi regulasi terbaru.
                            </Card.Text>
                            <Button variant="light" size="lg" href="informasi">Selengkapnya</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} sm={12} className="mb-3 text-center">
                    <Card bg="danger" text="white">
                        <Card.Body>
                            <div className="mb-4"><FaBullhorn size={48} /></div>
                            <Card.Title>LAYANAN PENGADUAN</Card.Title>
                            <Card.Text>
                                Tenaga kerja dapat menyampaikan permasalahan yang terkait dengan ketenagakerjaan.
                            </Card.Text>
                            <Button variant="light" size="lg" href="pengaduan">Selengkapnya</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CardComponent