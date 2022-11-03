const formUpload = document.getElementById("formUpload");

formUpload.onsubmit = async (e) => {
  e.preventDefault();
  const dataForm = new FormData(formUpload);

  const res = await fetch("http://localhost:3000/upload", {
    method: "POST",
    body: dataForm,
  });

  const data = await res.json();

  console.log(data.message);
};
