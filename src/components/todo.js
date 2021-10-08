import React from 'react';

function todo({ todo, index }) {
  const h1 = <h1>{todo.title}</h1>;
  const text = todo.completed ? <strike>{h1}</strike> : h1;
  return (
    <div data-testid={`todo-${index}`}>
      {text}
    </div>
  );
}

export default todo;