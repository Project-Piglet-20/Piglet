import firebase from '../config/fbConfig.js';

// Function to retrieve all issues
export const getIssues = () => {
    var issueList = [];
    var db = firebase.firestore();
    db.collection('issues')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var tempdata = doc.data();
                tempdata.DOR = new Date(
                    tempdata.DOR.seconds * 1000
                ).toLocaleDateString('en-US');
                if (tempdata.DOC !== '-') {
                    tempdata.DOC = new Date(
                        tempdata.DOC.seconds * 1000
                    ).toLocaleDateString('en-US');
                }
                issueList.push(tempdata);
            });
            issueList.sort(function (a, b) {
                return a.DOR.localeCompare(b.DOR);
            });
            return issueList;
        });
};

// Function to retrieve all the issues based on the locations
export const getIssueFromLocation = (localityname) => {
    var issueList = [];
    var db = firebase.firestore();
    db.collection('issues')
        .where('Locality', '==', localityname)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var tempdata = doc.data();
                tempdata.DOR = new Date(
                    tempdata.DOR.seconds * 1000
                ).toLocaleDateString('en-US');
                if (tempdata.DOC !== '-') {
                    tempdata.DOC = new Date(
                        tempdata.DOC.seconds * 1000
                    ).toLocaleDateString('en-US');
                }
                issueList.push(tempdata);
            });
            issueList.sort(function (a, b) {
                return a.DOR.localeCompare(b.DOR);
            });
            return issueList;
        });
};

// Function to retrieve the Corporator based on the locations
export const getCorporator = (localityname) => {
    var db = firebase.firestore();
    db.collection('Corporator')
        .where('Locality', '==', localityname)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var data = doc.data();
                console.log(data);
            });
        });
};
