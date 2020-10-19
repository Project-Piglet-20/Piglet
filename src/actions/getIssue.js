import firebase from '../config/fbConfig.js';

// Function to retrieve all issues
export const getIssues = () => {
    var db = firebase.firestore();
    db.collection("issues")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var data = doc.data();
            console.log(data);
        });
    });
};

// Function to retrieve all the issues based on the locations
export const getIssueFromLocation = (localityname) => {
    var issues = [];
    var db = firebase.firestore();
    db.collection("issues")
    .where("Locality", "==", localityname)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var data = doc.data();
            issues.push(data);
        });
        return issues;
    });
};

// Function to retrieve the Corporator based on the locations
export const getCorporator = (localityname) => {
    var db = firebase.firestore();
    db.collection("Corporator")
    .where("Locality", "==", localityname)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var data = doc.data();
            console.log(data);
        });
    });
};