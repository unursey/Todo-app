
import { addTask, checkSuccess } from "./render.js";
import {setStorageTask} from "./serviceStorage.js";

import {
  addTaskData,
  removeStorageTaskData,
} from "./serviceStorage.js";

export const closeTask = (yourName) => {
  document.querySelector(".table-wrapper").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-success")) {
      const arr = JSON.parse(localStorage.getItem(yourName));
      arr.forEach((item) => {
        if (item.id === e.target.dataset.id) {
          if (item.status === "Выполнено") {
            item.status = "В процессе";
          } else {
            item.status = "Выполнено";
          }
        } 
      });
      setStorageTask(yourName, arr);
      checkSuccess(yourName);
    }
  });
};

export const deleteControl = (list, yourName) => {
  list.addEventListener("click", (e) => {
    const target = e.target;
    if (target.closest(".btn-danger")) {
      if (confirm("Вы уверены, что хотите удалить задачу?")) {
        target.closest("tr").remove();  
        removeStorageTaskData(target.dataset.id, yourName);
        checkSuccess(yourName);
      } else {
        return;
      }
    }   
  });
};

export const formControl = (form, yourName, list) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newTasks = Object.fromEntries(formData);

    addTaskData(yourName, newTasks);
    addTask(list, newTasks, yourName);
    form.reset();
  });
};

export const formEmpty = () => {
  const input = document.querySelector(".form-control");
  const btnSave = document.querySelector(".btn-primary");
  const btnReset = document.querySelector(".btn-warning");

  input.addEventListener("input", () => {
    if (!(input.value.trim() == "")) {
      btnSave.classList.remove("disabled");
    } else {
      btnSave.classList.add("disabled");
    }
  });

  btnReset.addEventListener("click", () => {
    btnSave.classList.add("disabled");
  });
  btnSave.addEventListener("click", () => {
    btnSave.classList.add("disabled");
  });
};

const editAdd = (item, index, yourName) => { 
  item[index].addEventListener("blur", () => {
    item[index].contentEditable = "false";
      const arr = JSON.parse(localStorage.getItem(yourName));
      arr[index].task = document.querySelectorAll(".task")[index].textContent;
      setStorageTask(yourName, arr);   
    });
};  

export const editControl = (list, yourName) => {
  list.addEventListener("click", (e) => {    
    if (e.target.closest(".btn-outline-secondary")) {
      const editTask = document.querySelectorAll(".task"); 
      const index = [
      ...document.querySelectorAll(".btn-outline-secondary"),
    ].indexOf(e.target);
      editTask[index].contentEditable = "true";
      editTask[index].focus();
      editAdd(editTask, index, yourName);
    }
  });
};
 
export const sendName = () => {
  const inputName = document.getElementById("recipient-name");
  const yourName = inputName.value.toLowerCase().trim();
  return yourName;
};

export const closeModal = () => {
  document.querySelector(".modal").remove();
};

export const isEmpty = (str) => {
  if (str != null && typeof str !== "undefined") {
      if (str.trim() !== '') {
      return str = str.trim();
      }
   }else {
      return false;
   }
};