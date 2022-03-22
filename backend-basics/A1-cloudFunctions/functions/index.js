const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

exports.selectColor = functions.https.onCall((data, context)=> {
  if (!context.auth) {
    console.log("Unauthenticated call made!");
    throw new functions.https.HttpsError(
        "unauthenticated",
        "Must be signed in to change player status!"
    );
  }
  const player = admin.firestore().collection("players").doc(context.auth.uid);
  console.log(`updating doc (${context.auth.uid}) with {color: ${data.color}}`);
  return player.set(data, {merge: true});
});
