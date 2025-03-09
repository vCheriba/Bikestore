let workerTableBody = document.getElementById("worker-table");
let bikeTableBody = document.getElementById("bike-table");

const ACCESSKEY = localStorage.getItem("access");

if (!ACCESSKEY || ACCESSKEY === undefined) {
    window.location.href = "../index.html";
}

// Funktion zum Laden der Mitarbeiter
function loadWorker() {
    fetch("http://127.0.0.1:8000/api/worker/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${ACCESSKEY}`,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            workerTableBody.innerHTML = "";
            data.forEach((worker) => {
                let tableRow = document.createElement("tr");
                let tableDataID = document.createElement("td");
                let tableDataName = document.createElement("td");
                let tableDataAlter = document.createElement("td");
                let tableDataUrlaubstage = document.createElement("td");
                let tableDataGehalt = document.createElement("td");
                let tableDataGeschlecht = document.createElement("td");
                let tableDataEdit = document.createElement("td");
                let tableDataDelete = document.createElement("td");

                tableDataID.innerHTML = `${worker.id}`;
                tableDataName.innerHTML = `${worker.name}`;
                tableDataAlter.innerHTML = `${worker.alter}`;
                tableDataUrlaubstage.innerHTML = `${worker.urlaubstage}`;
                tableDataGehalt.innerHTML = `${worker.gehalt}`;
                tableDataGeschlecht.innerHTML = `${worker.geschlecht}`;
                tableDataEdit.innerHTML = `<button class="btn btn-secondary" onclick="editWorker(${worker.id})">Bearbeiten</button>`;
                tableDataDelete.innerHTML = `<button class="btn btn-danger" onclick="deleteWorker(${worker.id})">Löschen</button>`;

                workerTableBody.appendChild(tableRow);
                tableRow.appendChild(tableDataID);
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

// Funktion zum Laden der Fahrräder
function loadBike() {
    fetch("http://127.0.0.1:8000/api/bike/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${ACCESSKEY}`,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            bikeTableBody.innerHTML = "";
            data.forEach((bike) => {
                let tableRow = document.createElement("tr");
                let tableDataID = document.createElement("td");
                let tableDataModell = document.createElement("td");
                let tableDataZoll = document.createElement("td");
                let tableDataTyp = document.createElement("td");
                let tableDataFarbe = document.createElement("td");
                let tableDataAnzahl = document.createElement("td");
                let tableDataKosten = document.createElement("td");
                let tableDataVerkaeufe = document.createElement("td");
                let tableDataVorratig = document.createElement("td");
                let tableDataEdit = document.createElement("td");
                let tableDataDelete = document.createElement("td");

                tableDataID.innerHTML = `${bike.id}`;
                tableDataModell.innerHTML = `${bike.modell}`;
                tableDataZoll.innerHTML = `${bike.zoll}`;
                tableDataTyp.innerHTML = `${bike.typ}`;
                tableDataFarbe.innerHTML = `${bike.farbe}`;
                tableDataAnzahl.innerHTML = `${bike.anzahl}`;
                tableDataKosten.innerHTML = `${bike.kosten}`;
                tableDataVerkaeufe.innerHTML = `${bike.verkaeufe}`;
                tableDataVorratig.innerHTML = `${bike.vorratig}`;
                tableDataEdit.innerHTML = `<button class="btn btn-secondary" onclick="editBike(${bike.id})">Bearbeiten</button>`;
                tableDataDelete.innerHTML = `<button class="btn btn-danger" onclick="deleteBike(${bike.id})">Löschen</button>`;

                bikeTableBody.appendChild(tableRow);
                tableRow.appendChild(tableDataID);
                tableRow.appendChild(tableDataModell);
                tableRow.appendChild(tableDataZoll);
                tableRow.appendChild(tableDataTyp);
                tableRow.appendChild(tableDataFarbe);
                tableRow.appendChild(tableDataAnzahl);
                tableRow.appendChild(tableDataKosten);
                tableRow.appendChild(tableDataVerkaeufe);
                tableRow.appendChild(tableDataVorratig);
                tableRow.appendChild(tableDataEdit);
                tableRow.appendChild(tableDataDelete);
            });
        })
        .catch((error) => {
            console.error("Fehler beim Laden der Fahrräder:", error);
            alert("Es gab ein Problem beim Laden der Fahrräder.");
        });
}

// Beim Laden der Seite beide Tabellen laden
document.addEventListener("DOMContentLoaded", () => {
    loadWorker();
    loadBike();
});

// LogOut Funktion
function logOut() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "../index.html";
}

// Editieren der Mitarbeiter
function editWorker(id) {
    window.location.href = `edit-worker.html?id=${id}`;
}

// Löschen eines Mitarbeiters
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
                    alert("Der Mitarbeiter wurde erfolgreich gelöscht.");
                    loadWorker(); // Tabelle neu laden
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

// Editieren der Fahrräder
function editBike(id) {
    window.location.href = `edit-bike.html?id=${id}`;
}

// Löschen eines Fahrrads
function deleteBike(id) {
    if (confirm("Möchten Sie dieses Fahrrad wirklich löschen?")) {
        fetch(`http://127.0.0.1:8000/api/bike/${id}/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${ACCESSKEY}`,
            },
        })
            .then((response) => {
                if (response.ok) {
                    alert("Das Fahrrad wurde erfolgreich gelöscht.");
                    loadBike(); // Tabelle neu laden
                } else {
                    alert("Fehler beim Löschen des Fahrrads.");
                }
            })
            .catch((error) => {
                console.error("Fehler beim Löschen:", error);
                alert("Ein Fehler ist aufgetreten.");
            });
    }
}
