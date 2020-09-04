import React, { useState } from 'react';

const Todos = () => {
    const [todos, setTodos] = useState(
        []
    )
    const handleChange = (e) => {
        if (e.keyCode === 13) {   // capturamos el valor del todo cuando presionamos la tecla "enter"
            e.preventDefault()    // evitamos que la pagina se recargue ante el el evento "onChange"
            setTodos([...todos, e.target.value]) // con el setTodos envias todo lo que tenias anteriormente en todos (...todos) mas el nuevo valor que tiene el e.target.value
            e.target.value = "" // esta linea boora el input una vez que sido capturado 
        }
    }
    const handleClick = (i) => { // el handleClick recibe la posicion del elemnto al cual le estas dando click con la i
        const newTodos = [...todos] // clonar el array original
        newTodos.splice(i,1) // eliminar el elemento del array
        setTodos([...newTodos])


    }
    console.log(todos)
    return (
        <> 
            <h1 class="text-align:center">Todo's</h1>
            <form>
                <input type="text" onKeyDown={(e) => handleChange(e)} /> 
            </form> 
            <ul>
                { 
                    todos.map((todo, i) => { /// recorre el array todos y añade cada todo a un li
                        return (
                            <li key={i} onClick={() => handleClick(i)}>{todo}</li>
                        )
                    })
                }
            </ul>
        </>

    )

}

export default Todos;