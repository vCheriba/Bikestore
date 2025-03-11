const ACCESSKEY = localStorage.getItem("access");

if (!ACCESSKEY || ACCESSKEY === undefined) {
  window.location.href = "../index.html";
}

document.getElementById("addBikeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const modell = document.getElementById("modell").value;
  const zoll = document.getElementById("zoll").value;
  const typ = document.getElementById("typ").value;
  const farbe = document.getElementById("farbe").value;
  const anzahl = document.getElementById("anzahl").value;
  const kosten = document.getElementById("kosten").value;
  const verkaeufe = document.getElementById("verkaeufe").value;
  const vorraetig = document.getElementById("vorraetig").value;

  const newBike = {
    modell: modell,
    zoll: zoll,
    typ: typ,
    farbe: farbe,
    anzahl: anzahl,
    kosten: kosten,
    verkaeufe: verkaeufe,
    vorraetig: vorraetig,
  };

  fetch("http://127.0.0.1:8000/api/bike/create/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${ACCESSKEY}`,
    },
    body: JSON.stringify(newBike),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(`Fahrrad ${modell} erfolgreich hinzugefügt!`);
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error("Fehler beim Hinzufügen des Fahrrads:", error);
      alert("Ein Fehler ist beim Hinzufügen des Fahrrads aufgetreten.");
    });
});
