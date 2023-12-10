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
                </section>
            </section>
        </>
    )

}

export default InscriptionComponent;