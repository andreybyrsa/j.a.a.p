import { child, get, getDatabase, ref, set } from 'firebase/database';
import Todo from '../domain/Todo';

export const getDataBase = async (id: string | null) => {
  const dbRef = await ref(getDatabase());
  let dataBase;
  await get(child(dbRef, `user${id}/todos/todos`)).then((data) => {
    dataBase = data.val();
  });
  return await dataBase;
}

export const setDataBase = async (id: string | null, todos: Todo[]) => {
  const db = await getDatabase();
  await set(ref(db, `user${id}/todos`), todos);
}
