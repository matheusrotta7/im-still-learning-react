import Title from '../../components/Title'

/*
using props to pass arguments
you need {} to pass boolean
you don't need {} to pass strings
if you put the property, it assumes true
if you omit the property, it assumes false
it becomes pleasantly readable 
*/

export default function () {

    return (
        <>
            <Title 
                primary="Página de cadastro"
                secondary="Incluir, alterar, excluir..."
                small={false}
            />
            <Title 
                primary="Timo"
                secondary="Boll"
            />
            <Title 
                primary="Timo"
                secondary="Boll"
                small={true}
            />
            <Title 
                primary="Timo"
                secondary="Boll"
                small
            />
        </>
    )

}