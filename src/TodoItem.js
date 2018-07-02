import React from 'react';
import './TodoItem.css';

const TodoItem = ({name, completed, onDelete, onToggle}) => (
    <li className="task">
      <span
       style={{
           float: 'left',
           textDecoration: completed? 'line-through': 'none'
       }}
       onClick={onToggle}
      >
       {name}
      </span>
      <span id="x" onClick={onDelete}> X </span>
    </li>
);

export default TodoItem;
    