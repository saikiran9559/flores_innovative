
import Navbar from '../components/navbar/navbar';
import SliderComponent from '../components/slider/slider';
import {
    Container,
} from '../styles/index.style'
const Home = () => {
    return (
        <Container >
            <Navbar />
            <SliderComponent />
        </Container>
    );
}

export default Home;
