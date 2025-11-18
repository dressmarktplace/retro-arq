import { Option } from "lucide-react"

export const CreateThriftStorePage = () => {
    return (

        <div className="w-full">
            <form className="flex flex-col gap-4 p-4 max-w-lg mx-auto">
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
                    <label for="time">Horário de Atendimento</label>
                    <input type="time" id="time" name="time" />
                    <input type="time" id="time" name="time" />
                </fieldset>

                <fieldset>
                    <label for="Website">Site:</label>
                    <input type="text" id="Website" name="Website" />
                </fieldset>

                <fieldset>
                    <label for="socialmedia">Redes Sociais:</label>
                    <input type="text" id="socialmedia" name="socialmedia" />
                </fieldset>

                <fieldset>
                    <label for="image">Imagem:</label>
                    <input type="file" id="image" name="image" />
                </fieldset>

                <fieldset>
                    <label for="maps">Localização:</label>
                    <input type="img" id="maps" name="maps" />
                </fieldset>

                <button type="submit">Cadastrar Brechó:</button>
                <input type="reset" value="Limpar formulário" />
                <input type="button" value="Cancelar" />

            </form>
        </div >
    )
}