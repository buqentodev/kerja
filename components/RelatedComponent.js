import { Card, Container, Button } from "react-bootstrap"
import { ImEarth } from 'react-icons/im'

function RelatedComponent() {
    return (
        <>
            <Card>
                <Card.Header>Link terkait</Card.Header>
                <Card.Body className="text-center">
                    <Button variant="primary" href="https://www.malukubaratdayakab.go.id/" target="blank">malukubaratdayakab.go.id</Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default RelatedComponent