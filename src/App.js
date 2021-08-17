import { useCallback, useEffect, useState } from 'react';
import TodoList from './componenst/TodoList'

const TODO_APP_STORAGE_KEY = 'TODO_APP';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");
  // const [textInputUpdate, setTextInputUpdate] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  // lấy data trên localStorage về.
  useEffect(() => {
    const localStorageTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if (localStorageTodoList) {
      setTodoList(JSON.parse(localStorageTodoList));
    }

  }, [])

  // đẩy data lên localStorage.
  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  // Thêm item
  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);
  const onAddBtnClick = useCallback(() => {
    if (isEditing === false) {
      if (textInput) {
        setTodoList([
          { id: new Date().getTime().toString(), name: textInput, isComplete: false },
          ...todoList,
        ]);
        return setTextInput('');
      }
      setTextInput('');
    } else {

      setTodoList(
        todoList.map((item) => {
          if (item.id === editID) {
            return { ...item, name: textInput, isComplete: false };
          }
          return item;
        })
      );
      setTextInput("");
      setEditID(null);
      setIsEditing(false);

    }
  }, [todoList, textInput, isEditing, editID]);

  // Sửa Time
  const Update = useCallback((id) => {
    // setTextInputUpdate(e.target.value);
    let specificItem = todoList.find((item) => item.id === id);
    setTextInput(specificItem.name);
    setIsEditing(true);
    setEditID(id);
  }, [todoList])

  // thay đổi status
  const onCheckClick = useCallback((id, isComplete) => {
    setTodoList(prevState => prevState.map((todo) => {
      if (todo.id === id) {
        if (isComplete === true) {
          return { ...todo, isComplete: false };
        } else {
          return { ...todo, isComplete: true };
        }
      }
      return { ...todo };
    }))
  }, []);

  //Xóa item
  const onClickDelete = useCallback((id) => {
    setTodoList(prevState => prevState.filter(
      (todo) => todo.id !== id));
  }, [])

  return (
    <>
      <div className="px-auto flex justify-center">
        <div className="w-80 flex flex-col">
          <div className="block h-10 leading-10 bg-white shadow-md z-10">
            <div className="flex h-10 leading-10 bg-white shadow-md z-10">
              <div className="w-8 h-10 text-gray-300 flex justify-center py-3">
                <i className="fas fa-chevron-down"></i>
              </div>
              <input
                className="w-full pl-4 focus:outline-none focus:ring-0 focus:ring-white focus:border-transparent"
                type="text"
                id = "w"
                placeholder="What are you doing today?"
                value={textInput}
                onChange={onTextInputChange}
              />
              <button
                className="bg-pink-300 rounded-lg m-1 px-2 text-white text-center leading-3"
                onClick={onAddBtnClick}
              >{isEditing === false ? 'Add' : 'Update'}</button>
            </div>
            <TodoList todoList={todoList} key={todoList.id}
              onCheckClick={onCheckClick} onClickDelete={onClickDelete} Update={Update} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
