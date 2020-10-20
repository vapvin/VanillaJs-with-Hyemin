

const form = document.querySelector(".todo-form");
const input = document.querySelector("input");
const pendingList = document.querySelector(".todo-list-pending");
const finishList = document.querySelector(".todo-list-finish");

const PENDING_KEY = "pending";
const FINISHED_KEY = "finished";

let dataList = [];
let confirmList = [];

const setTodo = () => {
  localStorage.setItem(PENDING_KEY, JSON.stringify(dataList));
  localStorage.setItem(FINISHED_KEY, JSON.stringify(confirmList));
};


const createID = () => {
  let liID = Math.ceil(Math.random() * 10000000);
  return liID;
};

const deleteData = (e) => {
  const { target: {parentNode: li} } = e;
  const state = li.classList.contains("finished");
  if (state) {
    finishList.removeChild(li);
    const confirmed = confirmList.filter((data) => {
      return data.id !== parseInt(li.id);
    });
    confirmList = confirmed;
  } else {
    pendingList.removeChild(li);
    const pending = dataList.filter((data) => {
      return data.id !== parseInt(li.id);
    });
    dataList = pending;
  }

  setTodo();
};

const confirmTodo = (e) => {
  const { target: {parentNode: li }} = e;
  const text = li.querySelector("span").innerText;
  const state = li.classList.contains("finished");
  deleteData(e);
  if (state) {
    inputTodo(text, false);
  } else {
    inputTodo(text, true);
  }
  setTodo();
};

const inputTodo = (text, state) => {
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  const complete = document.createElement("button");
  const span = document.createElement("span");
  const id = createID();
  deleteBtn.innerText = "DEL";
  deleteBtn.addEventListener("click", deleteData);
  if (state) {
    complete.innerText = "CANCEL";
  } else {
    complete.innerText = "CONFIRM";
  }
  complete.addEventListener("click", confirmTodo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(deleteBtn);
  li.appendChild(complete);
  li.id = id;
  const dataObj = {
    text,
    id,
    state,
  };
  if (state) {
    li.classList.add("finished");
    finishList.appendChild(li);
    confirmList.push(dataObj);
  } else {
    li.classList.add("pending");
    pendingList.appendChild(li);
    dataList.push(dataObj);
  }
  setTodo();
};



const handleSubmit = (e) => {
  e.preventDefault();
  const {value} = input;
  inputTodo(value, false);
  input.value = "";
};

const loadData = () => {
  const pending = JSON.parse(localStorage.getItem(PENDING_KEY));
  const finished = JSON.parse(localStorage.getItem(FINISHED_KEY));
  if (pending !== null) {
    pending.forEach((data) => {
      const {text, state} = data;
      inputTodo(text, state);
    });
  }

  if (finished !== null) {
    finished.forEach((data) => {
      const {text, state} = data;
      inputTodo(text, state);
    });
  }
};



function init() {
  loadData();
  form.addEventListener("submit", handleSubmit);
}

init();
