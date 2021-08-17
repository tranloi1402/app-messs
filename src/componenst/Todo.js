import React from 'react';

function Todo({ todo, onCheckClick, onClickDelete, Update }) {

    return (
        <>
            <section className="display-tash block mt-0.5">

                <div className="flex w-80 bg-white h-10 leading-10">
                    <div className={`icon-status w-8 px-2 text-md justify-center ${todo.isComplete === true ? 'text-gray-300' : 'text-green-500'} `}
                        onClick={() => onCheckClick(todo.id, todo.isComplete)}>
                        <i className="far fa-check-circle"></i>
                    </div>
                    <div className="name-needs flex hover:text-red-900 ">

                        <div className="w-52 text-black truncate">
                            <p className={`w-52 pl-4 text-xl font-normal leading-9 truncate ${todo.isComplete === true ? 'line-through text-gray-400' : 'text-black'}`}>{todo.name}</p>
                        </div>

                        <div className="float-left w-16 py-3 pl-6 text-sm flex justify-center">
                            <i className="fas fa-edit px-2 text-red-900 transition delay-75 hover:text-red-700"
                                onClick={() => Update(todo.id)}
                            ></i>
                            <i className="fas fa-times px-2 text-red-900 transition delay-75 hover:text-red-700"
                                onClick={() => onClickDelete(todo.id)}
                            >
                            </i>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );

}

export default Todo;