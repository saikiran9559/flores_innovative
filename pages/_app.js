import '../styles/globals.css'
import styled from 'styled-components'
import Navbar from '../components/navbar/navbar.js'
const Container = styled.div`
    width: 100%;
    height: 100%;
`
function MyApp({Component, pageProps}) {
    return (
        <Container>
            <Navbar />
            <Component {...pageProps} />
        </Container>
    );
}

export default MyApp
