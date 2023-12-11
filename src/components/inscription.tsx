import BuzonImage from '@/assets/img/buzon_two.png';
import TrianguloImage from '@/assets/img/triangulo.png';
import Image from 'next/image';

type Content = {
    content: {
        textOne: string,
        textTwo: string,
    },
}

const InscriptionComponent = ( { content } : Content ) => {

    return (
        <>
            <section className="content_inscription">
                <section className="content">
                    <div className="image">
                        <Image src={BuzonImage.src} width={BuzonImage.width} height={BuzonImage.height} alt='Imagen de buzon'/>
                    </div>
                    <div className="item_question">
                        <p>{content.textOne}</p>
                        <p><strong>{content.textTwo}</strong></p>
                    </div>
                </section>
                <section className='premios'>
                    <section className='menu'>
                        <div>
                            <hr />
                            <Image src={TrianguloImage.src} width={TrianguloImage.width} height={TrianguloImage.height} alt="Triangulo Imagen"/>
                        </div>
                        <section>
                            <h3>Ahora solo completá las preguntas y participá por:</h3>
                        </section>
                        <div>
                            <Image src={TrianguloImage.src} width={TrianguloImage.width} height={TrianguloImage.height} alt="Triangulo Imagen"/>
                            <hr />
                        </div>
                    </section>
                    <section className='all'>
                        <div className='item one'>
                            <p>1 cena para dos personas</p>
                        </div>
                        <div className='item two'>
                            <p>1 masaje para dos personas</p>
                        </div>
                        <div className='item three'>
                            <p>5 kits con toda mi colección de temporada que te dejará sin aliento.</p>
                        </div>
                    </section>
                </section>
            </section>
        </>
    )

}

export default InscriptionComponent;