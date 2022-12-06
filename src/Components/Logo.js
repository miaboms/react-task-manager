import LogoFCC from '../imgs/fcc_primary.svg';
import './Logo.css';
export default function Logo () {
    return (
        <div className='logo-contenedor'>
            <img src={LogoFCC} className='logo' alt='logo'/>
        </div>
    );
};
