import { MouseEventHandler } from 'react';

interface TodoProps {
  className?: string

  id?: number
  value?: string
  date?: string
  isDone?: boolean

  onClick?: MouseEventHandler
}

export default TodoProps;
