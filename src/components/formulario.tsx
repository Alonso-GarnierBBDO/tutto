

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
                            <span className="item">Nombre:</span>
                            <input type="text" name="name" id="name" required/>
                        </label>
                        <label htmlFor="lastName">
                            <span className="item">Apellidos:</span>
                            <input type="text" name="lastName" id="lastName" required/>
                        </label>
                        <label htmlFor="genero">
                            <span className="item">Genéro:</span>
                            <select name="genero" id="genero" required>
                                <option value="">Seleccione el genéro</option>
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                                <option value="otro">Otro</option>
                            </select>
                        </label>
                        <label htmlFor="email">
                            <span className="item">Correo electrónico:</span>
                            <input type="email" name="email" id="email" required/>
                        </label>
                        <label htmlFor="phone">
                            <span className="item">Teléfono (Ingresar con el código del país) :</span>
                            <input type="phone" id="phone" name="phone" required/>
                        </label>
                        <label htmlFor="year">
                            <span className="item">Edad:</span>
                            <input type="number" max="100" min="5" id="year" name="year" required/>
                        </label>
                        <label htmlFor="provincia">
                            <span className="item">Provincia:</span>
                            <input type="text" name="provincia" id="provincia" required/>
                        </label>

                        <section className="quiz">
                            <section>

                                {/* Pregunta 1 */}

                                <section className="question">
                                    <span className="item_question">1. ¿qué desearías ver bajo tu árbol esta navidad?</span>
                                    <label htmlFor="option_uno">
                                        <input type="radio" name="option_one" id="option_uno" />
                                        <span>A. el regalo más especial de todos</span>
                                    </label>
                                    <label htmlFor="option_dos">
                                        <input type="radio" name="option_one" id="option_dos" />
                                        <span>b. algo que te seduzca a primera vista</span>
                                    </label>
                                    <label htmlFor="option_tres">
                                        <input type="radio" name="option_one" id="option_tres" />
                                        <span>c. un detalle de alguien especial</span>
                                    </label>
                                    <label htmlFor="option_cuatro">
                                        <input type="radio" name="option_one" id="option_cuatro" />
                                        <span>d. un regalo que despierte tus sentidos</span>
                                    </label>
                                </section>

                                {/* Pregunta 2 */}

                                <section className="question">
                                    <span className="item_question">2. la nochebuena que deseás más sería en...</span>
                                    <label htmlFor="question_two_option_uno">
                                        <input type="radio" name="option_two" id="question_two_option_uno" />
                                        <span>A. una cabaña secreta y especial</span>
                                    </label>
                                    <label htmlFor="question_two_option_dos">
                                        <input type="radio" name="option_two" id="question_two_option_dos" />
                                        <span>b. un mirador lleno de option_two</span>
                                    </label>
                                    <label htmlFor="question_two_option_tres">
                                        <input type="radio" name="option_two" id="question_two_option_tres" />
                                        <span>c. en tu casa con quien más querés</span>
                                    </label>
                                    <label htmlFor="question_two_option_cuatro">
                                        <input type="radio" name="option_two" id="question_two_option_cuatro" />
                                        <span>d. en un lugar exótico que te sorprenda</span>
                                    </label>
                                </section>


                                {/* Pregunta 3 */}

                                <section className="question">
                                    <span className="item_question">3. ¿Qué es lo que más desearías morder después de la cena navideña?</span>
                                    <label htmlFor="question_three_option_uno">
                                        <input type="radio" name="option_three" id="question_three_option_uno" />
                                        <span>A. algo cremoso y único</span>
                                    </label>
                                    <label htmlFor="question_three_option_dos">
                                        <input type="radio" name="option_three" id="question_three_option_dos" />
                                        <span>b. un cuadrito con chocolate 100% real</span>
                                    </label>
                                    <label htmlFor="question_three_option_tres">
                                        <input type="radio" name="option_three" id="question_three_option_tres" />
                                        <span>c. algo navideño por fuera y seductor por dentro</span>
                                    </label>
                                    <label htmlFor="question_three_option_cuatro">
                                        <input type="radio" name="option_three" id="question_three_option_cuatro" />
                                        <span>d. algo que te llene de placer en todo sentido</span>
                                    </label>
                                </section>


                                {/* Pregunta 4 */}

                                <section className="question">
                                    <span className="item_question">4. si nos encontráramos a solas en tu casa esta Navidad, vos desearías...</span>
                                    <label htmlFor="question_four_option_uno">
                                        <input type="radio" name="option_four" id="question_four_option_uno" />
                                        <span>A. guardarme para un momento especial</span>
                                    </label>
                                    <label htmlFor="question_four_option_dos">
                                        <input type="radio" name="option_four" id="question_four_option_dos" />
                                        <span>b. morder mis cuadritos en secreto</span>
                                    </label>
                                    <label htmlFor="question_four_option_tres">
                                        <input type="radio" name="option_four" id="question_four_option_tres" />
                                        <span>c. compartirme con tus personas favoritas</span>
                                    </label>
                                    <label htmlFor="question_four_option_cuatro">
                                        <input type="radio" name="option_four" id="question_four_option_cuatro" />
                                        <span>d. darme un mordisco y dejarte llevar</span>
                                    </label>
                                </section>


                                {/* Message */}

                                <label htmlFor="message" className="message">
                                    <span>Ahora dejá tu deseo más seductor en mi buzón para quedar participando!</span>
                                    <textarea name="message" id="message"></textarea>
                                </label>


                            </section>
                        </section>

                        <button type="submit">Enviá tu deseo aquí</button>

                    </form>
                </section>
            </section>
        </>
    )

}

export default FormularioComponent;