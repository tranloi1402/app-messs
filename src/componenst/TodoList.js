import React from 'react';
import Todo from './Todo';
import Amount from './Amount';
function TodoList({ todoList, onCheckClick, onClickDelete, Update}) {
   
    return (
        <section className="display-tash block mt-0.5">
            {
                todoList.map((todo) => {
                        return <Todo key={todo.id} todo={todo} onCheckClick={onCheckClick}
                        onClickDelete={onClickDelete} Update={Update}/>;
                })

            }
            <Amount todoList={todoList}/>

        </section>
    );
}

export default TodoList;