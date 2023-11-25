import Image from "next/image";
import LogoTutto from '@/assets/img/tutto_logo.svg';
import ParticipandoText from '@/assets/img/participando.png';
import BackgroundDescription from '@/assets/img/background_description.png';
import ChocaloateImage from '@/assets/img/chocolate.png';
import ChocaloateImageEscritorio from '@/assets/img/chocolate_escritorio.png';

/**
 * Desde aqui se maneja el header en todas las carpetas
 * 
 */


const Thanks = ( { country } : { country: string } ) => {

    return (
        <>
            <header>
                <section className="content">
                    <section className="box">
                        <Image src={ChocaloateImageEscritorio.src} width={250} height={250} priority alt="Chocolate tutto" title="Chocolate tutto"/>
                    </section>
                    <section className="box">
                        <Image className="placer" src={ParticipandoText.src} alt="Ya estas participando" title="Ya estas participando" width={200} height={200} priority/>
                        <section className="description">
                            <p>ahora me voy a leer todos los deseos que me han llegado y si tenés suerte...</p>
                            <h3>nos estaremos viendo muy pronto debajo del árbol 😏</h3>
                            <Image src={BackgroundDescription.src} alt="Fondo de color solido" width={500} height={500} priority />
                        </section>
                        <a href={`/mi-tutto?me=2&country=${country}`}>DESCUBRÍ AQUÍ TU TUTTO PARA NAVIDAD</a>
                    </section>
                </section>
                <Image className="chocolate" src={ChocaloateImage.src} width={250} height={250} alt="Chocolate Tutto" priority/>
            </header>
        </>
    )

}

export default Thanks;