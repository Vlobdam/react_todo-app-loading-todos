import React from 'react';

type Props = {};

export const TodoAppHeader: React.FC<Props> = ({}) => (
  <header className="todoapp__header">
    <button
      type="button"
      className="todoapp__toggle-all active"
      data-cy="ToggleAllButton"
    />

    <form>
      <input
        data-cy="NewTodoField"
        type="text"
        className="todoapp__new-todo"
        placeholder="What needs to be done?"
      />
    </form>
  </header>
);