import {useState, useEffect} from 'react'
import Image from 'next/image';

import {
    Container,
    Slider,
    MySlide,
    ImageBox,
    Text,
    Heading,
    Para,
    PrevButton,
    NextButton,

} from './style'


const SliderComponent = () => {
    const [display, setDisplay] = useState({1: 'block', 2: 'none', 3: 'none'});
    const [counter, setCounter] = useState(1);
    const length = 3;
    const changeSlide = (val) => {
        if (counter + val > length)
            setCounter(1);
        else if (counter + val < 1)
            setCounter(length);
        else
            setCounter(counter + val);
        sliderFun(counter);
    }
    const sliderFun = (val) => {
        let i;
        let dict = {};
        for (i = 1; i <= length; i++) {
            if (val == i) {
                dict[i] = 'block';
                continue;
            }
            dict[i] = 'none';
        }
        setDisplay({...display, ...dict});
    }
    useEffect(() => {
        sliderFun(1);
    }, [])
    useEffect(() => {
        const timer = setInterval(() => {
            if (counter == length)
                setCounter(1);
            else
                setCounter(counter + 1);
            console.log(counter)
            sliderFun(counter);
        }, 5000)
        return () => clearInterval(timer);

    }, [counter])

    return (
        <Container>
            <Slider >
                <MySlide displays={display[1]}>
                    <Text>
                        <Heading> Heading 1</Heading>
                        <Para> About the technology </Para>
                    </Text>
                    <ImageBox> <Image style={{opacity: 0.8}} src={'/assets/1.jpg'} alt='1' objectFit='cover' layout='fill' /></ImageBox>
                </MySlide>

                <MySlide displays={display[2]}>
                    <Text>
                        <Heading> Heading 2</Heading>
                        <Para> About the  technology </Para>
                    </Text>
                    <ImageBox> <Image style={{opacity: 0.8}} src={'/assets/2.jpg'} alt='1' objectFit='cover' layout='fill' /></ImageBox>
                </MySlide>

                <MySlide displays={display[3]}>
                    <Text>
                        <Heading> Heading 3</Heading>
                        <Para> About the  technology </Para>
                    </Text>
                    <ImageBox> <Image style={{opacity: 0.8}} src={'/assets/3.jpg'} alt='1' objectFit='cover' layout='fill' /></ImageBox>
                </MySlide>
                <PrevButton onClick={() => changeSlide(-1)}>&#10094;</PrevButton>
                <NextButton onClick={() => changeSlide(1)}>&#10095;</NextButton>
            </Slider>
        </Container >
    );

}

export default SliderComponent;


                // <MySlide displays={display[1]}>
                //     <Text>
                //         <Heading> Technology </Heading>
                //         <Para> About the technology </Para>
                //     </Text>
                //     <Image style={{opacity: 0.8}} src={'/assets/1.jpg'} alt='1' objectFit='cover' layout='fill' />
                // </MySlide>

                // <MySlide displays={display[2]}>
                //     <Text>
                //         <Heading> Technology </Heading>
                //         <Para> About the  technology </Para>
                //     </Text>
                //     <Image style={{opacity: 0.8}} src={'/assets/3.jpg'} alt='1' objectFit='cover' layout='fill' />
                // </MySlide>

                // <MySlide displays={display[3]}>
                //     <Text>
                //         <Heading> Technology </Heading>
                //         <Para> About the  technology </Para>
                //     </Text>
                //     <Image style={{opacity: 0.8}} src={'/assets/3.jpg'} alt='1' objectFit='cover' layout='fill' />
                // </MySlide>

