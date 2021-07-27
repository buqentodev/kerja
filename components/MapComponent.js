import Iframe from 'react-iframe'
function MapComponent() {
    return (
        <div className="text-center">
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.4998125741304!2d127.7910606499498!3d-8.152291483886993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d1d6d44246aaae9%3A0x3a4b876ebef2f1aa!2sDinas%20Penanaman%20Modal%20Kab.%20Maluku%20Barat%20Daya!5e0!3m2!1sen!2sid!4v1619535094550!5m2!1sen!2sid"
                width="100%"
                height="270px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                frameBorder={0}
            />
        </div>
    )
}
export default MapComponent