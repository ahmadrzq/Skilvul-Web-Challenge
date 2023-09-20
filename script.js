// Menu
const btnBar = document.getElementById("bar-line");
const menuBar = document.getElementById("menu-bar");
const btnClose = document.getElementById("btn-close");

if (btnBar) {
  btnBar.addEventListener("click", () => {
    menuBar.classList.add("show");
  });
}

if (btnClose) {
  btnClose.addEventListener("click", () => {
    menuBar.classList.remove("show");
  });
}

//! Kriteria Skilvul

// Mengecek apakah inputan berupa angka
function isNumber(number) {
  if (isNaN(number)) {
    return false;
  } else {
    return true;
  }
}

// Mengecek apakah checkbox sudah tercentang
function checkboxIsChecked() {
  if (checkbox && checkbox.checked) {
    console.log("checked");
    return true;
  } else {
    console.log("Not checked");
    return false;
  }
}
const checkbox = document.getElementById("status");
checkbox.addEventListener("click", function () {
  checkboxIsChecked();
});

// Mengecek input kosong atau tidak
function validateFormData(obj) {
  if (obj != null && isNumber(obj.zipCode) && checkboxIsChecked()) {
    return true;
  }
  return false;
}

// Event ketika mengklik tombol submit
const form = document.querySelector("form");
const warning = document.querySelector("#warning");

function submit(e) {
  const input = validateFormData(handleGetFormData());
  if (input === false) {
    e.preventDefault();
    warning.innerHTML = "<p>Periksa form anda sekali lagi</p>";
  } else {
    warning.innerHTML = "";
    clearInput();
  }
}

form.addEventListener("submit", submit);

// Menghapus inputan ketika submit sukses
function clearInput() {
  const inputs = document.querySelectorAll(
    "#name, #city, #email, #zip-code, #status"
  );
  for (let input of inputs) {
    if (input.type === "checkbox") {
      input.checked = false;
    } else if (input.type === "number") {
      input.value = "";
    } else {
      input.value = "";
    }
  }
}

// Mengambil data dari inputan
const handleGetFormData = () => ({
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  city: document.getElementById("city").value,
  zipCode: document.getElementById("zip-code").value,
  status: document.getElementById("status").checked,
});
