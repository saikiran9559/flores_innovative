
import Navbar from '../components/navbar/navbar';
import Slider from '../components/slider/slider';
import {
    Container,
} from '../styles/index.style'
const Home = () => {
    return (
        <Container >
            <Navbar />
            <Slider />
        </Container>
    );
}

export default Home;
