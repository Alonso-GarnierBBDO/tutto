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




const Thanks = ( { country, puntos, gracias, gracias_button } : { country: string, puntos: number, gracias : string, gracias_button : string } ) => {

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
                            <p>{gracias}</p>
                            <h3>nos estaremos viendo muy pronto debajo del árbol 😏</h3>
                            <Image src={BackgroundDescription.src} alt="Fondo de color solido" width={500} height={500} priority />
                        </section>
                        <a href={`/mi-tutto?points=${puntos}&country=${country}`}>{gracias_button}</a>
                    </section>
                </section>
                <Image className="chocolate" src={ChocaloateImage.src} width={250} height={250} alt="Chocolate Tutto" priority/>
            </header>
        </>
    )

}

export default Thanks;