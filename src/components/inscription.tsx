import BuzonImage from '@/assets/img/buzon_two.png';
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
            </section>
        </>
    )

}

export default InscriptionComponent;