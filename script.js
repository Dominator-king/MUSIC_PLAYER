const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const dropzone = document.getElementById("dropzone");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

const closeModalBtn = document.getElementById("closeModalBtn");
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

dropzone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropzone.classList.add("active");
});

dropzone.addEventListener("dragleave", () => {
  dropzone.classList.remove("active");
});

dropzone.addEventListener("drop", (event) => {
  event.preventDefault();
  dropzone.classList.remove("active");

  const files = event.dataTransfer.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.type == "audio/mpeg") {
      const table = document.querySelector("table");
      const newRow = document.createElement("tr");
      const h3 = document.createElement("h3");
      const audioElem = document.createElement("audio");
      const audioUrl = URL.createObjectURL(file);
      const fileName = file.name;
      h3.textContent = fileName;
      audioElem.src = audioUrl;
      audioElem.controls = true;
      newRow.appendChild(h3);
      newRow.appendChild(audioElem);
      table.appendChild(newRow);
      alert("File Added Succesfully");
      const item = document.createElement("div");
      item.textContent = fileName;
      dropzone.appendChild(item);
    } else alert("please Enter an Audio File");
  }
});
