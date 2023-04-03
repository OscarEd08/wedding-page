import { Parallax } from 'react-parallax';
import SecondBg from '../../assets/img/second-bg.jpg';

const SecondImage = () => (
    <Parallax 
        className='parallax-bg'        
        bgImage={SecondBg} 
        bgImageAlt='wedding-background-2'
        strength={800} 
    >
    </Parallax>        
);

export default SecondImage;
