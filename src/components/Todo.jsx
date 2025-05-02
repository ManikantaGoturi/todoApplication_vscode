
import { useRef, useState, useEffect} from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {
  
  const inputRef = useRef();

  const [todoList, setTodoList] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);

  const add = () =>{

  const inputText = inputRef.current.value.trim();

  if(inputText === ''){
    return null;
  }

  const newTodo = {
    id: new Date(),
    text: inputText,
    isCompleted:'false'
  }
  setTodoList((prev)=>[...prev,newTodo])
  inputRef.current.value = ''

}

const toggle = (id) =>{
  setTodoList((prevTodo)=>{
    return prevTodo.map((todo)=>{
      if(todo.id === id){
        return {...todo, isCompleted: !todo.isCompleted}
      }
      return todo
    })
  })
} 

useEffect(()=>{
  localStorage.setItem('todos',JSON.stringify(todoList))
  
},[todoList])

const deleteTodo = (id) =>{
  setTodoList(todoList.filter((todo)=> todo.id !== id))
}
  

  return (
    <div className="bg-white min-h-[550px] place-self-center w-11/12 max-w-md flex flex-col p-7 rounded-xl">
      <div className="flex item-center mt-7 gap-2">
        <img src={todo_icon} alt="" className="w-10 h-[40px]"/>
        <h1 className="text-xl font-medium">To-DO List</h1>
      </div>

      <div className="flex items-center my-10 bg-gray-200 rounded-full gap-2">
        <input type="text" ref={inputRef} className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr2 placeholder:text-slate-600" placeholder='Add your task' />
        <button className="rounded-full bg-orange-600 w-32 h-14 border-none text-white font-medium text-lg pl-2 pr-2" onClick={add}>Add +</button>
      </div>

      <div>
        {todoList.map((item,index)=>{
          return <TodoItems key={index} Text={item.text} id={item.id} deleteItem={deleteTodo} isCompleted={item.isCompleted} Toggle={toggle}/>
        })}
      </div>

    </div>
  )
}

export default Todo
