const admin = require('./node_modules/firebase-admin');
const serviceAccount = require("./service-key.json");

const cities = require("./store.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://quick-pack-53fe3.firebaseio.com"
});

cities && Object.keys(cities).forEach(key => {
    const nestedContent = cities[key];

    if (typeof nestedContent === "object") {
        Object.keys(nestedContent).forEach(docTitle => {
            admin.firestore()
                .collection(key)
                .doc(docTitle)
                .set(nestedContent[docTitle])
                .then((res) => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
        });
    }
});