

const FormularioComponent = () => {

    return (
        <>
            <section className="formulario_sections">
                <section className="content">
                    <h3>Primero conozcámonos un poco más!</h3>
                    <p>compartime tus datos para contactarte si sos el ganador, y para enviarte sorpresas o nuevas promociones en el futuro.</p>
                    <span className="subtitle">*disclaimer sobre uso de datos</span>
                    <form action="">
                        <label htmlFor="name">
                            <span>Nombre:</span>
                            <input type="text" name="name" id="name" required/>
                        </label>
                        <label htmlFor="lastName">
                            <span>Apellidos:</span>
                            <input type="text" name="lastName" id="lastName" required/>
                        </label>
                        <label htmlFor="genero">
                            <span>Genéro:</span>
                            <select name="genero" id="genero" required>
                                <option value="">Seleccione el genéro</option>
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                                <option value="otro">Otro</option>
                            </select>
                        </label>
                        <label htmlFor="email">
                            <span>Correo electrónico:</span>
                            <input type="email" name="email" id="email" required/>
                        </label>
                        <label htmlFor="phone">
                            <span>Teléfono:</span>
                            <input type="phone" id="phone" name="phone" required/>
                        </label>
                        <label htmlFor="year">
                            <span>Edad:</span>
                            <input type="number" max="100" min="5" id="year" name="year" required/>
                        </label>
                        <label htmlFor="provincia">
                            <span>Provincia:</span>
                            <input type="text" name="provincia" id="provincia" required/>
                        </label>
                    </form>
                </section>
            </section>
        </>
    )

}

export default FormularioComponent;