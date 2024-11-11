// 1. Demonstrasi Seleksi Elemen
function demonstrateSelection() {
  // Seleksi dengan ID
  const byId = document.getElementById("demo-element");
  byId.style.color = "red";

  // Seleksi dengan Class
  const byClass = document.getElementsByClassName("demo-class");
  Array.from(byClass).forEach((element) => {
    element.style.backgroundColor = "#f0f0f0";
  });

  // Seleksi dengan Tag
  const byTag = document.getElementsByTagName("p");
  Array.from(byTag).forEach((element) => {
    element.style.fontWeight = "bold";
  });

  // Seleksi dengan Query Selector
  const byQuery = document.querySelector("#demo-element");
  byQuery.style.padding = "10px";
}

// 2. Demonstrasi Manipulasi Konten
function demonstrateContentManipulation() {
  const element = document.getElementById("content-demo");

  // Mengubah text content
  element.textContent = "Teks telah diubah!";

  // Mengubah HTML
  setTimeout(() => {
    element.innerHTML = "<strong>Ini dengan HTML!</strong>";
  }, 1000);

  // Menambah class
  setTimeout(() => {
    element.classList.add("success");
  }, 2000);
}

// 3. Event Handling
document.addEventListener("DOMContentLoaded", () => {
  const eventDemo = document.getElementById("event-demo");
  const eventInfo = document.getElementById("event-info");

  // Mouse events
  eventDemo.addEventListener("mouseover", () => {
    eventDemo.style.backgroundColor = "#34a853";
    eventInfo.textContent = "Mouse di atas kotak!";
  });

  eventDemo.addEventListener("mouseout", () => {
    eventDemo.style.backgroundColor = "#1a73e8";
    eventInfo.textContent = "Mouse keluar dari kotak";
  });

  eventDemo.addEventListener("click", () => {
    eventDemo.style.transform = "scale(1.1)";
    setTimeout(() => {
      eventDemo.style.transform = "scale(1)";
    }, 200);
  });
});

// 4. Form Handling
document.getElementById("demoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value;
  const result = document.getElementById("formResult");

  // Validasi
  if (name.length < 3) {
    result.textContent = "Nama harus minimal 3 karakter!";
    result.className = "error";
    return;
  }

  if (!email.includes("@")) {
    result.textContent = "Email tidak valid!";
    result.className = "error";
    return;
  }

  // Sukses
  result.textContent = `Form berhasil! Nama: ${name}, Email: ${email}`;
  result.className = "success";
  this.reset();
});

// 5. Todo List Implementation
document.getElementById("todoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");

  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
        <span>${input.value}</span>
        <div>
            <button onclick="toggleTodo(this)">Selesai</button>
            <button onclick="deleteTodo(this)">Hapus</button>
        </div>
    `;

  todoList.appendChild(li);
  input.value = "";
});

function toggleTodo(button) {
  const todoItem = button.parentElement.parentElement;
  todoItem.classList.toggle("success");
  button.textContent = todoItem.classList.contains("success")
    ? "Batal"
    : "Selesai";
}

function deleteTodo(button) {
  const todoItem = button.parentElement.parentElement;
  todoItem.remove();
}

// 6. Dynamic Styling
function changeStyles() {
  const element = document.getElementById("style-demo");
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  element.style.backgroundColor = randomColor;
  element.style.transform = "rotate(45deg)";

  setTimeout(() => {
    element.style.transform = "rotate(0deg)";
  }, 500);
}

// 7. Modal Functions
function openModal() {
  document.getElementById("demoModal").style.display = "block";
}

function closeModal() {
  document.getElementById("demoModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("demoModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// 8. Dynamic Element Creation
function createDynamicElement() {
  const container = document.getElementById("dynamic-container");
  const newElement = document.createElement("div");

  newElement.textContent = "Elemen Dinamis " + (container.children.length + 1);
  newElement.style.padding = "10px";
  newElement.style.margin = "5px";
  newElement.style.backgroundColor = "#f0f0f0";
  newElement.style.borderRadius = "4px";

  // Menambahkan event listener
  newElement.addEventListener("click", function () {
    this.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  });

  container.appendChild(newElement);
}