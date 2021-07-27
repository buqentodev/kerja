import React from 'react'
import { Container, Image, Table } from 'react-bootstrap'
import { shape } from 'prop-types'

export class BioPrint extends React.PureComponent {
    render() {
        const { user } = this.props
        return (
            <>
                {
                    user &&

                    <Container className="px-5 my-5">
                        <h2 className="mb-4 text-center font-weight-bold">TANDA BUKTI PENDAFTARAN<br />PENCARI KERJA</h2>
                        <h4 className="my-2">DATA PRIBADI</h4>
                        <Table borderless size="sm">
                            <tbody>
                                <tr>
                                    <td rowSpan={8}>
                                        <Image src="https://via.placeholder.com/250x300.png?text=Foto 3x4" className="img-fluid" thumbnail />
                                    </td>
                                    <td>NIK</td>
                                    <td className="font-weight-bold">: {user.nik}</td>
                                </tr>
                                <tr>
                                    <td>Nama</td>
                                    <td className="font-weight-bold">: {user.namaLengkap}</td>
                                </tr>
                                <tr>
                                    <td>Tempat Tanggal Lahir</td>
                                    <td className="font-weight-bold">: {user.tempatLahir}, {user.tanggalLahir}</td>
                                </tr>
                                <tr>
                                    <td>Jenis Kelamin</td>
                                    <td className="font-weight-bold">: {user.jenisKelamin}</td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td className="font-weight-bold">: {user.status}</td>
                                </tr>
                                <tr>
                                    <td>Agama</td>
                                    <td className="font-weight-bold">: {user.agama}</td>
                                </tr>
                                <tr>
                                    <td>Alamat</td>
                                    <td className="font-weight-bold">: {user.alamat}</td>
                                </tr>
                                <tr>
                                    <td>Telepon</td>
                                    <td className="font-weight-bold">: {user.telepon}</td>
                                </tr>
                            </tbody>
                        </Table>

                        {
                            user.pendidikanFormal &&
                            <div className="mt-5">
                                <h4>PENDIDIKAN FORMAL</h4>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr className="text-uppercase text-center">
                                            <th>#</th>
                                            <th>Jenjang Pendidikan</th>
                                            <th>Nama Jenjang Pendidikan</th>
                                            <th>Tahun Lulus</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            user.pendidikanFormal.sdSederajat &&
                                            <tr>
                                                <td className="text-center">1</td>
                                                <td>Sekolah Dasar</td>
                                                <td>{user.pendidikanFormal.sdSederajat.nama}</td>
                                                <td className="text-center">{user.pendidikanFormal.sdSederajat.tahun}</td>
                                            </tr>
                                        }
                                        {
                                            user.pendidikanFormal.smtpSederajat &&
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td>Sekolah Menengah Pertama</td>
                                                <td>{user.pendidikanFormal.smtpSederajat.nama}</td>
                                                <td className="text-center">{user.pendidikanFormal.smtpSederajat.tahun}</td>
                                            </tr>
                                        }
                                        {
                                            user.pendidikanFormal.smtaD1Akta1 &&
                                            <tr>
                                                <td className="text-center">3</td>
                                                <td>Sekolah Menengah Atas</td>
                                                <td>{user.pendidikanFormal.smtaD1Akta1.nama}</td>
                                                <td className="text-center">{user.pendidikanFormal.smtaD1Akta1.tahun}</td>
                                            </tr>
                                        }
                                        {
                                            user.pendidikanFormal.smD2d3 &&
                                            <tr>
                                                <td className="text-center">5</td>
                                                <td>Pendidikan Tinggi Diploma</td>
                                                <td>{user.pendidikanFormal.smD2d3.nama}</td>
                                                <td className="text-center">{user.pendidikanFormal.smD2d3.tahun}</td>
                                            </tr>
                                        }
                                        {
                                            user.pendidikanFormal.akta2 &&
                                            <tr>
                                                <td className="text-center">6</td>
                                                <td>Pendidikan Tinggi Strata 1</td>
                                                <td>{user.pendidikanFormal.akta2.nama}</td>
                                                <td className="text-center">{user.pendidikanFormal.akta2.tahun}</td>
                                            </tr>
                                        }
                                        {
                                            user.pendidikanFormal.akta3 &&
                                            <tr>
                                                <td className="text-center">7</td>
                                                <td>Pendidikan Tinggi Strata 2</td>
                                                <td>{user.pendidikanFormal.akta3.nama}</td>
                                                <td className="text-center">{user.pendidikanFormal.akta3.tahun}</td>
                                            </tr>
                                        }
                                        {
                                            user.pendidikanFormal.s3PascaS1Akta4D4 &&
                                            <tr>
                                                <td className="text-center">8</td>
                                                <td>Pendidikan Tinggi Strata 3</td>
                                                <td>{user.pendidikanFormal.s3PascaS1Akta4D4.nama}</td>
                                                <td className="text-center">{user.pendidikanFormal.s3PascaS1Akta4D4.tahun}</td>
                                            </tr>
                                        }
                                        {
                                            user.pendidikanFormal.doktor2Akta5 &&
                                            <tr>
                                                <td className="text-center">9</td>
                                                <td>Pendidikan Tinggi Doktor</td>
                                                <td>{user.pendidikanFormal.doktor2Akta5.nama}</td>
                                                <td className="text-center">{user.pendidikanFormal.doktor2Akta5.tahun}</td>
                                            </tr>
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        }

                        {
                            user.keterampilan &&
                            <div className="mt-5">
                                <h4>KETRAMPILAN {user.keterampilan.length}</h4>
                                <ol>
                                    {
                                        user.keterampilan.keterampilan1 !== "" &&
                                        <li>{user.keterampilan.keterampilan1}</li>
                                    }
                                    {
                                        user.keterampilan.keterampilan2 !== "" &&
                                        <li>{user.keterampilan.keterampilan2}</li>
                                    }
                                    {
                                        user.keterampilan.keterampilan3 !== "" &&
                                        <li>{user.keterampilan.keterampilan3}</li>
                                    }
                                </ol>
                            </div>
                        }
                        <div className="my-5 text-center">
                            <div>Kepala Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu<br /> Kabupaten Maluku Barat Daya</div>

                            <img src="../images/ttd.jpg" width={200} />

                            <div className="font-weight-bold">MACARIA LOUHENAPESSY, S.Sos</div>
                            <div>Pembina Tk. I</div>
                            <div>NIP.19651126 198603 2 008</div>
                        </div>
                    </Container>
                }
            </>
        );
    }
}
BioPrint.propTypes = {
    user: shape({})
}
BioPrint.defaultProps = {
    user: null
}