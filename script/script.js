
import {init} from "./modules/init.js";
import { createModal } from "./modules/createElements.js";
import { sendName, isEmpty, closeModal } from "./modules/control.js";

const {modal} = createModal();

document.body.append(modal);

document.querySelector(".btn-primary").addEventListener("click", () => {
  
  let yourName = sendName();
  if (isEmpty(yourName)) {
    closeModal();
    init(".app-container", yourName);
  }
});




