/************************************************************************************************************
*  COPYRIGHT BY ZIGGY RAFIQ (ZAHEER RAFIQ)
*  LinkedIn Profile URL Address: https://www.linkedin.com/in/ziggyrafiq/ 
*
*  Website  :  	Ziggy Rafiq GitHub Website Project
*  Date     :  	23/09/2022
*  Author   :  	Ziggy Rafiq (https://www.ziggyrafiq.com)
*  Notes    :  	
*  Reminder :	PLEASE DO NOT CHANGE OR REMOVE AUTHOR NAME.
*
************************************************************************************************************/
const jsonDataProjects = './Data/projects.json';
let demoProjectTabCountClicks = 0;

function LoadDemoProjects() {
  fetch(jsonDataProjects)
    .then(response => response.json())
    .then(data => GetDemoProjects(data, demoProjectTabCountClicks++))
    .catch(err => console.log('error: ' + err));
}

function GetDemoProjects(data, demoProjectTabCountClicks) {
  const demoProjectContainer = document.getElementById('demoProjects');

  if (demoProjectTabCountClicks === 0) {
    for (let i = 0; i < data.length; i++) {
      const div = document.createElement('div');
      div.classList.add('col-md-4');
      div.classList.add('p-2');
      div.innerHTML += `<div  class='card shadow-sm'><img src='Images/${data[i].ProjectImage}' class='card-img'>
        <div class='card-body'><p class='bold-text'>${data[i].ProjectName}</p><p class='text-left'>${data[i].ProjectDescription}</p>
        <a href='${data[i].ProjectGitRepo}' class='btn-default-colour p-2' target='_blank'>Click Here To Access GitHub Repo</a>
        </div></div></div>`;
      demoProjectContainer.appendChild(div);
    }
  }
}

// const jsonDataProjects = './Data/projects.json';
// let demoProjectTabCountClicks = 0;
// function LoadDemoProjects() {
// fetch(jsonDataProjects)
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (data) {
//                   GetDemoProjects(data,demoProjectTabCountClicks++);
//             })
//             .catch(function (err) {
//                 console.log('error: ' + err);
//             });
// }

// function GetDemoProjects(data,demoProjectTabCountClicks) {

//     var demoProjectContainer = document.getElementById("demoProjects");
    
//     if (demoProjectTabCountClicks == 0) {
//         for (var i = 0; i < data.length; i++) {
//             var div = document.createElement("div");
//             div.classList.add('col-md-4');
//             div.classList.add('p-2');
//             div.innerHTML += `<div  class='card shadow-sm'><img src='Images/${data[i].ProjectImage}' class='card-img'>               
//         <div class='card-body'><p  class='bold-text'>${data[i].ProjectName}</p><p  class=' text-left'>${data[i].ProjectDescription}</p>
//         <a href='${data[i].ProjectGitRepo}' class='btn-default-colour p-2' target='_blank'>Click Here To Access GitHub Repo</a> 
        
//         </div></div></div>`;
//             demoProjectContainer.appendChild(div);
//         }
//     }
// }