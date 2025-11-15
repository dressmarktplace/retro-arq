import { Option } from "lucide-react"

export const CreateThriftStorePage = () => {
    return (

        <div className="w-full">
            <form >
                <fieldset>
                    <label for="name">Nome do brechó:</label>
                    <input type="text" id="name" name="name" />
                </fieldset>

                <fieldset>
                    <label for="category">Categorias:</label>
                    <select name="Selecione uma categoria" id="Selecion">
                        <option value="Vintage">Vintage</option>
                        <option value="Retrô">Retrô</option>
                        <option value="Moderno">Moderno</option>
                        <option value="Fantasias">Fantasias</option>
                    </select>
                </fieldset>

                <fieldset>
                    <label for="description">Descrição:</label>
                    <input type="text" id="description" name="description" />
                </fieldset>

                <fieldset>
                    <label for="adress">Endereço:</label>
                    <input type="text" id="adress" name="adress" />
                </fieldset>

                <fieldset>
                    <label for="city">Cidade</label>
                    <input type="text" id="city" name="city" />
                </fieldset>

                <fieldset>
                    <label for="phone">Telefone</label>
                    <input type="tel" id="phone" name="phone" />
                </fieldset>

                <fieldset>
                    <label for="email">E-mail</label>
                    <input type="text" id="email" name="email" />
                </fieldset>

                <fieldset>
                    <label for="time">Horário</label>
                    <input type="time" id="time" name="time" />
                </fieldset>
            </form>
        </div>
    )
}