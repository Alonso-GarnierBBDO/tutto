import Header from '@/components/header';
import InscriptionComponent from '@/components/inscription';
import FormularioComponent from '@/components/formulario';

function NI(){

    const content = {
        incription : {
            textOne: '¡Respondé mi formulario de los deseos y descubrí cuál de mis versiones no puede faltar en tu lista de Navidad!​',
            textTwo: 'Ahora solo completá las preguntas y participá por uno de los 5 kits con toda mi colección de temporada que te dejará sin aliento.'
        },
        header: {
            deseo: 'Algunos le dejan sus deseos a Santa, pero esta Navidad vos dejámelos a mí.​'
        },
        preguntas: {
            cuartaPregunta: '4. si nos encontráramos a solas en tu casa esta Navidad, vos desearías...'
        },
        deseoPregunta: {
            text:  '¡Ahora dejá tu deseo más seductor en mi buzón para quedar participando!'
        },
        formulario: {
            enviar: 'ENVIÁ TU DESEO AQUÍ',
            compartir: 'Compartime tus datos para contactarte si sos el ganador, y para enviarte sorpresas o nuevas promociones en el futuro.'
        },
        gracias: "AHORA ME VOY A LEER TODOS LOS DESEOS QUE ME HAN LLEGADO Y SI TENÉS SUERTE...",
        gracias_button: "DESCUBRÍ AQUÍ TU TUTTO PARA NAVIDAD"
    }

    return (
        <>
            <Header  header={content.header}/>
            <InscriptionComponent content={content.incription}/>
            <FormularioComponent gracias_button={content.gracias_button} gracias={content.gracias} enviar={content.formulario} deseo={content.deseoPregunta}  formulario={content.preguntas}/>
        </>
    )

}

export default NI;