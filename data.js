const firebaseConfig = {
    apiKey: "AIzaSyAgJSbLXwyKXVLUllaIo-aMCj4SPGeAITQ",
    authDomain: "datastat-38737.firebaseapp.com",
    projectId: "datastat-38737",
    storageBucket: "datastat-38737.appspot.com",
    messagingSenderId: "204834231737",
    appId: "1:204834231737:web:b72a4f6e1b52c109fa1268"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  function send(){
    console.log("Data Sent Succesfully");
      db.collection("student").doc(reg).set(obj).then(()=>{console.log("done");})
  }