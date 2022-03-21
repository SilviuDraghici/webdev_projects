// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

exports.selectColor = functions.https.onCall((data, context)=> {
	console.log("setColor called!");
	if(context.auth){
		console.log(`uuid: ${context.auth.uid}`);
		console.log(`auth: ${JSON.stringify(context.auth)}`);
	}
	console.log(`collection: ${JSON.stringify(admin.firestore().collection('players'))}`);
	admin.firestore().collection('players').add(data);
	//const playerRef = doc(admin.firestore(), 'players', context.auth.uid);
    //setDoc(playerRef, { color: color }, { merge: true });
});
