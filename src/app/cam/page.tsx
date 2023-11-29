import Header from '@/components/header';
import InscriptionComponent from '@/components/inscription';
import FormularioComponent from '@/components/formulario';

function CAM(){

    const content = {
        incription : {
            textOne: '¡Responde mi formulario de los deseos y descubre cuál de mis versiones no puede faltar en tu lista de Navidad!​ ',
            textTwo: ' Ahora solo completa las preguntas y participa por uno de los 5 kits con toda mi colección de temporada que te dejará sin aliento.'
        },
        header: {
            deseo: 'Algunos le dejan sus deseos a Santa, pero esta Navidad tu déjamelos a mí.'
        },
        preguntas: {
            cuartaPregunta: '4. si nos encontráramos a solas en tu casa esta Navidad, tu desearías…'
        },
        deseoPregunta: {
            text:  '¡Ahora deja tu deseo más seductor en mi buzón para quedar participando!'
        },
        formulario: {
            enviar: 'Envia TU DESEO AQUÍ',
            compartir: 'Compárteme tus datos para contactarte si eres el ganador, y para enviarte sorpresas o nuevas promociones en el futuro.'
        },
        gracias: "AHORA ME VOY A LEER TODOS LOS DESEOS QUE ME HAN LLEGADO Y SI tienes SUERTE...",
        gracias_button: "DESCUBRE AQUÍ TU TUTTO PARA NAVIDAD",
    }

    return (
        <>
            <Header header={content.header}/>
            <InscriptionComponent content={content.incription}/>
            <FormularioComponent gracias_button={content.gracias_button} gracias={content.gracias} enviar={content.formulario} deseo={content.deseoPregunta} formulario={content.preguntas}/>
        </>
    )

}

export default CAM;