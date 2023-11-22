import Image from "next/image";
import LogoTutto from '@/assets/img/tutto_logo.svg';

/**
 * Desde aqui se maneja el header en todas las carpetas
 * 
 */


const Header = () => {

    return (
        <>
            <header>
                <Image className="logo" src={LogoTutto.src} alt="Logo de tutto" width={100} height={100} />
            </header>
        </>
    )

}

export default Header;