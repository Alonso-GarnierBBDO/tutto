

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
                    <p>{content.textOne}</p>
                    <p>{content.textTwo}</p>
                </section>
            </section>
        </>
    )

}

export default InscriptionComponent;