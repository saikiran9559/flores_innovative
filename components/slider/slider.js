import Image from 'next/image';
import {useEffect, useState} from 'react';
import {
    Container,
    Slide,
} from './style'

const Slider = () => {

    const [img, setImg] = useState({'num': 1, 'asset': '/assets/1.jpg'});

    useEffect(() => {

        const Interval = setInterval(() => {
            let n = img['num'];
            if (n == 3)
                setImg({...img, 'num': 1, 'asset': `/assets/1.jpg`});
            else
                setImg({...img, 'num': n + 1, 'asset': `/assets/${n + 1}.jpg`});
        }, 2500);

        return () => clearInterval(Interval);

    }, [img])

    const img1 = '/assets/1.jpg';

    return (
        <Container>
            <Slide>
                <Image style={{opacity: 0.8}} src={img['asset']} alt='1' objectFit='cover' layout='fill' />
            </Slide>
        </Container>
    );
}

export default Slider;
