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

const jsonDataBlogPosts = './Data/blogs.json';
let blogTabCountClicks = 0;

function LoadBlogPosts() {
  fetch(jsonDataBlogPosts)
    .then(response => response.json())
    .then(data => GetBlogPosts(data, blogTabCountClicks++))
    .catch(err => console.log('error: ' + err));
}

function GetBlogPosts(data, blogTabCountClicks) {
  const demoBlogPostsContainer = document.getElementById("blogposts");

  if (blogTabCountClicks == 0) {
    for (let i = 0; i < data.length; i++) {
      const div = document.createElement("div");
      div.classList.add('col-md-4');
      div.classList.add('p-2');
      div.innerHTML += `<div class='card'><img src='Images/${data[i].BlogPostImage}' class='card-img'>
        <div class='card-body'><p class='bold-text '>${data[i].BlogPostTitle}</p><p class=' text-left'>${data[i].BlogPostDescription}</p>
        <a href='${data[i].BlogPostUrl}' class='btn-default-colour p-2 ' target='_blank'>Click Here To Read This Blog Post</a></div></div></div>`
      demoBlogPostsContainer.appendChild(div);
    }
  }
}


