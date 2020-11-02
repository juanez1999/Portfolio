var db = firebase.firestore();
var id = localStorage.getItem("id");

var body = document.querySelector('body');
var project = document.querySelector('.mainContainer__project');
var nav = document.querySelector('.mainContainer__nav')

body.classList.add('bodyOverflow');
project.classList.add('mainContainer__project--overflow');
nav.classList.add('mainContainer__nav--overflow');

var objects = [];
function getProducts(){
    db.collection("projects").doc(id).get().then( function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            renderProjectView(doc.data().projectView);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

getProducts();

function renderProjectView(img){
    const projectView = document.querySelector('.projectView');
    projectView.innerHTML = '';

    const newProject = document.createElement('div');
    newProject.classList.add('projectView__be');

    newProject.innerHTML = `
        <div class="projectView__beImg">
            <img src="${img}" alt="">
        </div>
    `;
    projectView.appendChild(newProject);
}