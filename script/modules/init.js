import { closeTask, formEmpty, deleteControl, formControl, editControl } from "./control.js";

import { renderTodo, checkSuccess, renderTask } from "./render.js";

export const init = (selectorApp, yourName) => {
  const app = document.querySelector(selectorApp);

  const { list, form } = renderTodo(app, yourName);

  renderTask(list, yourName);
  formEmpty();
  deleteControl(list, yourName);
  formControl(form, yourName, list);
  closeTask(yourName);
  checkSuccess(yourName);
  editControl(list, yourName)
};
