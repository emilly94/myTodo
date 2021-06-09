import React, { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const TodoListContext = createContext({});

const TodoListProvider = (props) => {
    const [tasksTitle, setTasksTitle] = useState("");
    const [listaDeTarefas, setListaDeTarefas] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem('lista-de-tarefas');
        if(minhaLista){
            setListaDeTarefas(JSON.parse(minhaLista));
        }
    }, []);

    //Essa função será chamada quando clicar no botão de adicionar tarefa
    const handleCreateNewTask = () =>{
        setListaDeTarefas([...listaDeTarefas, tasksTitle]);
        localStorage.setItem('lista-de-tarefas', JSON.stringify([...listaDeTarefas, tasksTitle]) );
        setTasksTitle("");
    }

    const handleRemoveTask = (indiceTarefa) => {
        const novaListaDeTarefas = listaDeTarefas.filter(
            (tarefa, index) => {
                return index !== indiceTarefa;
            });
            setListaDeTarefas(novaListaDeTarefas);
            localStorage.setItem('lista-de-tarefas', JSON.stringify(novaListaDeTarefas) );
    }
    const handleMoveTask = () =>{
        const MySwal = withReactContent(Swal)
        return (
            MySwal.fire({
              title: <p>TODO List</p>,
              footer: 'Copyright 2021',
              didOpen: () => {
                // `MySwal` is a subclass of `Swal`
                //   with all the same instance & static methods
                MySwal.clickConfirm()
              }
            }).then(() => {
              return MySwal.fire(<p>Tarefa selecionada como concluida</p>)
            })
        );
    }

    return(
        <TodoListContext.Provider value={ {
            tasksTitle,
            setTasksTitle,
            handleCreateNewTask,
            listaDeTarefas,
            handleRemoveTask,
            handleMoveTask,
        } }>
            {props.children}
        </TodoListContext.Provider>
    )
}

export default TodoListProvider;