const accessToken = localStorage.getItem("access");
let idField = document.getElementById("id-field");
let modellField = document.getElementById("modell-field");
let zollField = document.getElementById("zoll-field");
let typField = document.getElementById("typ-field");
let farbeField = document.getElementById("farbe-field");
let anzahlField = document.getElementById("anzahl-field");
let kostenField = document.getElementById("kosten-field");
let verkaeufeField = document.getElementById("verkaeufe-field");
let vorraetigField = document.getElementById("vorraetig-field");

document.addEventListener("DOMContentLoaded", () => {
  let bikeIdParam = new URLSearchParams(window.location.search);
  const bikeID = bikeIdParam.get("id");

  fetch(`http://127.0.0.1:8000/api/bike/${bikeID}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "authorization": `Bearer ${accessToken}`
    },
  })
    .then((response) => response.json())
    .then((data) => {
      idField.value = data.id;
      modellField.value = data.modell;
      zollField.value = data.zoll;
      typField.value = data.typ;
      farbeField.value = data.farbe;
      anzahlField.value = data.anzahl;
      kostenField.value = data.kosten;
      verkaeufeField.value = data.verkaeufe;
      vorraetigField.value = data.vorraetig;
    });
});

function editBike() {
  newData = {
    id: idField.value,
    modell: modellField.value,
    zoll: zollField.value,
    typ: typField.value,
    farbe: farbeField.value,
    anzahl: anzahlField.value,
    kosten: kostenField.value,
    verkaeufe: verkaeufeField.value,
    vorraetig: vorraetigField.value,
  };

  fetch(`http://127.0.0.1:8000/api/bike/${newData.id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(`Fahrrad mit der ID ${newData.id} erfolgreich bearbeitet`);
      window.location.href = "dashboard.html";
    });

  return false;
}
