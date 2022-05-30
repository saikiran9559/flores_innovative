import {
    Container,
    LogoTitle,
    Logo,
    Title,
    ButtonsContainer,
    Button,
    Layer,
} from './style.js'

const Navbar = () => {
    return (
        <Container>
            <LogoTitle>
                <Logo>Logo </Logo>
                <Title> Flores Innovative Solutions </Title>
            </LogoTitle>
            <ButtonsContainer>
                <Button><Layer id="layer"></Layer>Home </Button>
                <Button>Product</Button>
                <Button>About Us</Button>
                <Button>Contact Us</Button>
            </ButtonsContainer>
        </Container>
    );
}

export default Navbar;
