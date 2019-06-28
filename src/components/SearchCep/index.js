import React from 'react'

const SearchCep = () => {
    return (
        <div>
            <form>
                <input type='text' name='cep' />
                <button type='submit'>Buscar Endereço</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <td>CEP</td>
                        <td>Endereço</td>
                        <td>Bairro</td>
                        <td>Cidade</td>
                        <td>Estado</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>89086-723</td>
                        <td>Rua Rio de Janeiro</td>
                        <td>Estados</td>
                        <td>Indaial</td>
                        <td>Santa Catarina</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SearchCep
