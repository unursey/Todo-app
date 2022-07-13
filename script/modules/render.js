
import {
  createLogo,
  createTable,
  createForm,
  createRow,
} from './createElements.js';
import {getStorageTaskData} from "./serviceStorage.js";


export const renderTodo = (app, title) => {
  const logo = createLogo(title);
  const table = createTable();
  const {form} = createForm();


  app.classList.add("vh-100", "w-100", "d-flex", "align-items-center", "justify-content-center", "flex-column");
  app.append(logo, form, table);

  return {
    list: table.tbody,
    form,
  };
};

export const renderTask = (list, yourName) => {
  list.textContent = "";
  const allTask = getStorageTaskData(yourName);
  allTask.forEach(function (item) {
    list.append(createRow(item));
});
};

export const addTask = (list, newTasks, yourName) => {
  list.append(createRow (newTasks));
  checkSuccess(yourName);
};

export const checkSuccess = (yourName) => {
  const allTask = getStorageTaskData(yourName);
  const btnSuccess = document.querySelectorAll(".btn-success");
  const btnEdit = document.querySelectorAll(".btn-outline-secondary");
  const allTr = document.querySelectorAll("tr");
  const tdNum = document.querySelectorAll(".number");
  const tdTask = document.querySelectorAll(".task");
  const tdStatus = document.querySelectorAll(".status");

    allTask.forEach((item, index) => {
      if (item.importance === "Важное") {
        allTr[index+1].classList.remove("table-light");
        allTr[index+1].classList.add("table-warning");
      } else if (item.importance === "Срочное") {
        allTr[index+1].classList.remove("table-light");
        allTr[index+1].classList.add("table-danger");
      }
      if (item.status === "Выполнено") {
        allTr[index+1].removeAttribute("class");
        allTr[index+1].classList.add("table-success");
        tdTask[index].classList.add("text-decoration-line-through");
        tdStatus[index].textContent = item.status; 
        btnSuccess[index].textContent = "Восстановить";
        btnEdit[index].classList.add("disabled");    
      } else {
        allTr[index+1].classList.remove("table-success");
        tdTask[index].classList.remove("text-decoration-line-through");
        tdStatus[index].textContent = item.status;
        btnSuccess[index].textContent = "Завершить";
        btnEdit[index].classList.remove("disabled");    
      }
      tdNum[index].textContent = index+1;
    });
};
