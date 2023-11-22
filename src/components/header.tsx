import Image from "next/image";
import LogoTutto from '@/assets/img/tutto_logo.svg';
import PlacerText from '@/assets/img/placer.png';
import BackgroundDescription from '@/assets/img/background_description.png';
import ChocaloateImage from '@/assets/img/chocolate.png';
import ChocaloateImageEscritorio from '@/assets/img/chocolate_escritorio.png';

/**
 * Desde aqui se maneja el header en todas las carpetas
 * 
 */


const Header = () => {

    return (
        <>
            <header>
                <Image className="logo" src={LogoTutto.src} alt="Logo de tutto" width={100} height={100} priority/>
                <section className="content">
                    <section className="box">
                        <Image src={ChocaloateImageEscritorio.src} width={250} height={250} priority alt="Chocolate tutto" title="Chocolate tutto"/>
                    </section>
                    <section className="box">
                        <Image className="placer" src={PlacerText.src} alt="Navidad es para dar...te placer" title="Navidad es para dar...te placer" width={200} height={200} priority/>
                        <section className="description">
                            <h3>Hola, <span>?</span>ya hiciste tu lista?</h3>
                            <p>En navidad algunos le dejan sus deseos a Santa, pero esta Navidad vos dejámelos a mí.​</p>
                            <Image src={BackgroundDescription.src} alt="Fondo de color solido" width={500} height={500} priority />
                        </section>
                    </section>
                </section>
                <Image className="chocolate" src={ChocaloateImage.src} width={250} height={250} alt="Chocolate Tutto" priority/>
            </header>
        </>
    )

}

export default Header;