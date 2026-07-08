function createcard(title,cname,view,url,date,time){
    let views;
    if(view<1000000){
        views=view/1000+"K";
    }
    else if(view>1000000){
         views=view/1000000+"M";
    }
    
    let html=`<div class="card">
            <div class="image">
                 <img src="${url}" alt="">
                 <div class="capsule">${time}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cname} . ${views} . ${date} months ago</p>
            </div>
        </div>`
    document.querySelector(".container").innerHTML += html;
}
createcard("BACKEND DEVELOPMENT","CODEWITH HARRY",20000,"https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw",8,"40:32")