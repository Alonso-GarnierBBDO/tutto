import Header from '@/components/header';
import InscriptionComponent from '@/components/inscription';
import FormularioComponent from '@/components/formulario';

function CAM(){

    const content = {
        incription : {
            textOne: '¡Responde mi formulario de los deseos y descubre cuál de mis versiones no puede faltar en tu lista de Navidad!​ ',
            textTwo: ' Ahora solo completa las preguntas y participa por uno de los 5 kits con toda mi colección de temporada que te dejará sin aliento.'
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

export default CAM;