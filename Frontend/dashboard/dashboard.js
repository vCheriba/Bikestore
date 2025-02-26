let tableBody = document.getElementById("table-body");

const ACCESSKEY = localStorage.getItem("access");

if (!ACCESSKEY || ACCESSKEY === undefined) {
    window.location.href = "../index.html";
}

function loadWorker() {
    fetch ("http://127.0.0.1:8000/api/worker/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${ACCESSKEY}`,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            tableBody.innerHTML = "";

            data.forEach((worker) => {
                let tableRow = document.createElement("tr");
                let tableDataName = document.createElement("td");
                let tableDataAlter = document.createElement("td");
                let tableDataUrlaubstage = document.createElement("td");
                let tableDataGehalt = document.createElement("td");
                let tableDataGeschlecht = document.createElement("td");
                let tableDataEdit = document.createElement("td");
                let tableDataDelete = document.createElement("td");

                tableDataName.innerHTML = `${worker.name}`;
                tableDataAlter.innerHTML = `${worker.alter}`;
                tableDataUrlaubstage.innerHTML = `${worker.urlaubstage}`;
                tableDataGehalt.innerHTML = `${worker.gehalt}`;
                tableDataGeschlecht.innerHTML = `${worker.geschlecht}`;
                tableDataEdit.innerHTML = `<button class="btn btn-secondary" onclick="editWorker(${worker.id})">Bearbeiten</button>`;
                tableDataDelete.innerHTML = `<button class="btn btn-danger" onclick="deleteWorker(${worker.id})">Löschen</button>`;

                tableBody.appendChild(tableRow);
                tableRow.appendChild(tableDataName);
                tableRow.appendChild(tableDataAlter);
                tableRow.appendChild(tableDataUrlaubstage);
                tableRow.appendChild(tableDataGehalt);
                tableRow.appendChild(tableDataGeschlecht);
                tableRow.appendChild(tableDataEdit);
                tableRow.appendChild(tableDataDelete);
            });
        })
        .catch((error) => {
            console.error("Fehler beim Laden der Mitarbeiter:", error);
            alert("Es gab ein Problem beim Laden der Mitarbeiter.");
        });
}

document.addEventListener("DOMContentLoaded", loadWorker);

function logOut() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  window.location.href = "../index.html";
}

function editWorker(id) {
  window.location.href = `edit.html?id=${id}`;
}

function deleteWorker(id) {
  if (confirm("Möchten Sie diesen Mitarbeiter wirklich löschen?")) {
    fetch(`http://127.0.0.1:8000/api/worker/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${ACCESSKEY}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          alert(`Der Mitarbeiter wurde erfolgreich gelöscht.`);
          loadWorker();
        } else {
          alert("Fehler beim Löschen des Mitarbeiters.");
        }
      })
      .catch((error) => {
        console.error("Fehler beim Löschen:", error);
        alert("Ein Fehler ist aufgetreten.");
      });
  }
}
