import Header from '@/components/header';
import InscriptionComponent from '@/components/inscription';
import FormularioComponent from '@/components/formulario';

function CR(){

    const content = {
        incription : {
            textOne: '¡Respondé mi formulario de los deseos y descubrí cuál de mis versiones no puede faltar en tu lista de Navidad!​',
            textTwo: 'Ahora solo completá las preguntas y participá por 1 cena para dos personas, 1 masaje para dos personas y 5 kits de producto con toda mi colección de temporada que te dejará sin aliento.'
        }
    }

    return (
        <>
            <Header/>
            <InscriptionComponent content={content.incription}/>
            <FormularioComponent/>

        </>
    )

}

export default CR;