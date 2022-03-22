const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

exports.selectColor = functions.https.onCall((data, context)=> {
  if (!context.auth) {
    console.log("Unauthenticated call made!");
    throw new functions.https.HttpsError(
        "unauthenticated",
        "Must be signed in to change player data!"
    );
  }

  const docRef = admin.firestore().collection("admins").doc(context.auth.uid);

  return docRef.get().then((doc) => {
    if (doc.exists) {
      // user is an admin
      console.log("Admin has changed data!");
    } else {
      // user is not an admin
      console.log("Regular user is attempting a change!");
      if (context.auth.uid != data.uid) {
        console.log("Attempt to change another user's data!");
        throw new functions.https.HttpsError(
            "unauthenticated",
            "Player can only change their own data!"
        );
      }
    }
    const player = admin.firestore().collection("players").doc(data.uid);
    console.log(
        `updating doc (${context.auth.uid}) with {color: ${data.color}}`);
    return player.set({color: data.color}, {merge: true});
  });
});
