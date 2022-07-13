
export const createLogo = (yourName) => {
  const h3 = document.createElement("h3");

  yourName = yourName.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
  h3.textContent = `Todo App. ${yourName}`;
  return h3;
};

export const createForm = () => {
  const form = document.createElement("form");
  form.classList.add("d-flex", "align-items-center", "mb-3");
  form.insertAdjacentHTML(
    "beforeend",
    `
    <label class="form-group me-3 mb-0">
      <input type="text" class="form-control" name="task" placeholder="ввести задачу">
    </label>

    <select name="importance" class="me-3 form-select w-25">
      <option>Обычное</option>
      <option>Важное</option>
      <option>Срочное</option>
    </select>

    <button type="submit" class="btn btn-primary me-3 disabled">
      Сохранить
    </button>

    <button type="reset" class="btn btn-warning">
      Очистить
    </button>
    `
  );
  return {
    form,
  };
};

export const createTable = () => {
  const tableWrapper = document.createElement("div");
  tableWrapper.classList.add("table-wrapper");
  tableWrapper.style.width = 740 + "px";

  const table = document.createElement("table");
  table.classList.add("table", "table-hover", "table-bordered");

  const thead = document.createElement("thead");
  thead.insertAdjacentHTML(
    "beforeend",
    `
        <tr class="w-100">
            <th>№</th>
            <th class="w-25 text-break">Задача</th>
            <th class="w-20">Статус</th>
            <th class="w-50">Действия</th>
        </tr>
    `
  );
  const tbody = document.createElement("tbody");

  table.append(thead, tbody);
  tableWrapper.append(table);
  tableWrapper.tbody = tbody;

  return tableWrapper;
};

export const createRow = (item) => {
  const tr = document.createElement("tr");
  tr.classList.add("table-light");
  tr.dataset.id = item.id;

  const tdNum = document.createElement("td");
  tdNum.classList.add("number");

  const tdTask = document.createElement("td");
  tdTask.classList.add("task", "text-break");
  tdTask.textContent = item.task;

  const tdStatus = document.createElement("td");
  tdStatus.classList.add("status");
  tdStatus.textContent = item.status;

  const tdEdit = document.createElement("td");

  const buttonDel = document.createElement("button");
  buttonDel.textContent = "Удалить";
  buttonDel.classList.add("btn", "btn-danger", "me-2");
  buttonDel.dataset.id = item.id;

  const buttonClose = document.createElement("button");
  buttonClose.textContent = "Завершить";7
  buttonClose.classList.add("btn", "btn-success", "me-2");
  buttonClose.style.width = 125 + "px";
  buttonClose.dataset.id = item.id;

  const buttonEdit = document.createElement("button");
  buttonEdit.textContent = "Изменить";
  buttonEdit.classList.add("btn", "btn-outline-secondary");
  buttonEdit.dataset.id = item.id;

  tdEdit.append(buttonDel, buttonClose, buttonEdit);

  tr.append(tdNum, tdTask, tdStatus, tdEdit);

  return tr;
};

export const createModal = () => {
  const modal = document.createElement("div");


  modal.insertAdjacentHTML(
    "beforeend",
    `
    <div class="modal fade show" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title" id="exampleModalLabel">Добро пожаловать!</h2>       
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Введите Ваше имя:</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="modal-footer">   
              <button type="submit" class="btn btn-primary">Отправить</button>
            </div>     
          </form>        
        </div>
      </div>
    </div>
  </div>

    `
  );

  return {
    modal,

  };
};



