/// Configura tu proyecto Firebase aquí (pega tus datos del paso 2)
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Manejo del formulario de registro
const formRegistro = document.querySelector("#formRegistro");
if (formRegistro) {
  formRegistro.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;
    const tipo = document.querySelector("#tipo").value;

    await db.collection("usuarios").add({
      nombre,
      correo,
      tipo,
      fecha: new Date()
    });

    alert("¡Registro guardado correctamente!");
    formRegistro.reset();
  });
}

// Manejo del formulario de donación
const formDonacion = document.querySelector("#formDonacion");
if (formDonacion) {
  formDonacion.addEventListener("submit", async (e) => {
    e.preventDefault();
    const articulo = document.querySelector("#articulo").value;
    const descripcion = document.querySelector("#descripcion").value;

    await db.collection("donaciones").add({
      articulo,
      descripcion,
      fecha: new Date()
    });

    alert("¡Gracias por donar!");
    formDonacion.reset();
  });
}
