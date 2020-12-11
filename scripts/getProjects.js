var firebaseConfig = {
    apiKey: "AIzaSyB1skRa2N58v4ER_OpGiRyErAhLE4LyrbY",
    authDomain: "portfolio-juanes.firebaseapp.com",
    databaseURL: "https://portfolio-juanes.firebaseio.com",
    projectId: "portfolio-juanes",
    storageBucket: "portfolio-juanes.appspot.com",
    messagingSenderId: "5318892034",
    appId: "1:5318892034:web:980eebec33dd8c6866a51b",
    measurementId: "G-3K36T941RF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

var objects = [];
function getProducts(){
    db.collection("projects").get().then((querySnapshot) => {
        objects.splice(0,objects.length);
        querySnapshot.forEach((doc) => {
            const obj = doc.data();
            obj.id = doc.id;
            objects.push(obj);
            // console.log(`${doc.id} => ${doc.data()}`);
            // console.log(`${doc.data().projectName}`);
        });
        renderProjects(objects);
        viewProject();
    });
}

getProducts();


function renderProjects(list){
    const carrouselStripe = document.querySelector('.carrousel__stripe');
    if(carrouselStripe !=null){
        carrouselStripe.innerHTML = '';
        list.forEach(function (elem) {
            const newProject = document.createElement('div');
            newProject.classList.add('mainContainer__projectItem');
            
            newProject.innerHTML = `
            <div class="mainContainer__projectItemName">
                <h1 class="title titleProject">${elem.projectName}</h1>
                <h3 class="title DescProject">${elem.projectDesc}</h3>
            </div>
            <div class="mainContainer__projectItemImg">
                <img class="mainContainer__projectItemImgView" src="${elem.projectImg}" alt="">
            </div>
            `;
            carrouselStripe.appendChild(newProject);
        });
    }   
}

function viewProject(){
    var projects = document.querySelectorAll('.mainContainer__projectItemImgView');
    projects.forEach(function (elem,index) {
        elem.addEventListener('click', function(){
            window.location.href = 'projectView.html'
            localStorage.setItem("id", index);
        });
    });
}

