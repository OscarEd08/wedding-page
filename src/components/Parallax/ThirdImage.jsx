import { Parallax } from 'react-parallax';
import ThirdBg from '../../assets/img/third-bg.jpg';

const ThirdImage = () => (
    <Parallax 
        className='parallax-bg'        
        bgImage={ThirdBg} 
        bgImageAlt='wedding-background-3'
        strength={800} 
    >
    </Parallax>        
);

export default ThirdImage;
