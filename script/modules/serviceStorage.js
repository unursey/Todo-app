
export const getStorageTaskData = (yourName) => (localStorage.getItem(yourName) ?
  JSON.parse(localStorage.getItem(yourName)) : []);

export const setStorageTask = (yourName, task) => {
  localStorage.setItem(yourName, JSON.stringify(task));
};

export const setStorageName = (yourName) => {
  localStorage.setItem(yourName, "");
};

export const addTaskData = (yourName, task) => {
  const data = getStorageTaskData(yourName);
 
  task.id = Math.random().toString().substring(2, 10);
  task.status = 'В процессе';
  
  data.push(task);
  setStorageTask(yourName, data);
  
};

export const removeStorageTaskData = (id, yourName) => {
  const data = getStorageTaskData(yourName);
  const newData = data.filter((item) => item.id !== id);
  setStorageTask(yourName, newData);
};
