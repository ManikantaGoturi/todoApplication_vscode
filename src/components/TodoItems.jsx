import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'

import delete_icon from '../assets/delete.png'

const TodoItems = ({Text, id, isCompleted, deleteItem, Toggle}) => {
  
  return (
    <div className="flex item-center my-3 gap-2">
        <div className="flex flex-1 item-center cursor-pointer" onClick={()=>Toggle(id)}>
            <img src={isCompleted ? not_tick: tick  } alt="tick" className="w-8 h-8" />
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isCompleted ? '': 'line-through'}`} >{Text}</p>  
        </div>
        <img src={delete_icon} alt="delete" className="w-5 h-5 cursor-pointer" onClick={()=>{deleteItem(id)}}/>
    </div>
  )
}

export default TodoItems
