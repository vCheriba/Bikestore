const ACCESSKEY = localStorage.getItem("access");

if (!ACCESSKEY || ACCESSKEY === undefined) {
  window.location.href = "../index.html";
}

document.getElementById("addWorkerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const alter = document.getElementById("alter").value;
  const urlaubstage = document.getElementById("urlaubstage").value;
  const gehalt = document.getElementById("gehalt").value;
  const geschlecht = document.getElementById("geschlecht").value;

  const newWorker = {
    name: name,
    alter: alter,
    urlaubstage: urlaubstage,
    gehalt: gehalt,
    geschlecht: geschlecht,
  };

  fetch("http://127.0.0.1:8000/api/worker/create/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${ACCESSKEY}`,
    },
    body: JSON.stringify(newWorker),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(`Mitarbeiter ${name} erfolgreich hinzugefügt!`);
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error("Fehler beim Hinzufügen des Mitarbeiters:", error);
      alert("Ein Fehler ist beim Hinzufügen des Mitarbeiters aufgetreten.");
    });
});
