const accessToken = localStorage.getItem("access");
let nameField = document.getElementById("name-field");
let alterField = document.getElementById("alter-field");
let urlaubstageField = document.getElementById("urlaubstage-field");
let gehaltField = document.getElementById("gehalt-field");
let geschlechtField = document.getElementById("geschlecht-field");

document.addEventListener("DOMContentLoaded", () => {
  let workerIdParam = new URLSearchParams(window.location.search);
  const workerName = workerIdParam.get("name");

  fetch(`http://127.0.0.1:8000/api/worker/${workerName}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "authorization": `Bearer ${accessToken}`
    },
  })
    .then((response) => response.json())
    .then((data) => {
      nameField.value = data.name;
      alterField.value = data.alter;
      urlaubstageField.value = data.urlaubstage;
      gehaltField.value = data.gehalt;
      geschlechtField.value = data.geschlecht;
    });
});

function editWorker() {
  newData = {
    name: nameField.value,
    alter: alterField.value,
    urlaubstage: urlaubstageField.value,
    gehalt: gehaltField.value,
    geschlecht: geschlechtField.value,
  };

  fetch(`http://127.0.0.1:8000/api/worker/${newData.id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(`Mitarbeiter mit der ID ${newData.id} erfolgreich bearbeitet`);
      window.location.href = "dashboard.html";
    });

  return false;
}
