import React from 'react';


function Amount({ todoList }) {
    
    return (
        <div className={`flex w-80 bg-white h-10 leading-10 mt-0.5 ${todoList.length > 0 ? '':'hidden' }`}>
            <div className="text-base w-24 py-3 px-3 leading-4">
                <p>item: <span className="text-pink-600 font-semibold">
                    { 
                        todoList.length
                    }
                </span></p>
            </div>
            {/* <div className="text-base ml-auto">
                <button className="bg-pink-300 rounded-lg m-1 px-2 text-white text-center leading-7"
                    onClick={() => onSelected('All')}>All</button>
                <button className="bg-pink-300 rounded-lg m-1 px-2 text-white text-center leading-7"
                    onClick={() => onSelected('Active')}>Active</button>
                <button className="bg-pink-300 rounded-lg m-1 px-2 text-white text-center leading-7"
                    onClick={() => onSelected('Unactive')}>Unactive</button>
            </div> */}
        </div>
    );
}

export default Amount