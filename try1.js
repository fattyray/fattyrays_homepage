xhr=new XMLHttpRequest()
const url='https://631333b8a8d3f673ffc6500b.mockapi.io/users';
xhr.onreadystatechange=function (){
    if (xhr.readyState!==4)
        return;
    if ((xhr.status>=200 &&xhr.status<300)||xhr.status===304)
    {
        let text=xhr.responseText;
        let pics=JSON.parse(text);
        xx=document.getElementById('boxx')
        for (const pic of pics) {
            let create_time=pic.createdAt;
            let pic_name=pic.name;
            let pic_url=pic.avatar;
            let id=pic.id;
            let box1=document.createElement('div')
            box1.setAttribute('class','boxs')
            xx.appendChild(box1);
            let name=document.createElement('h3');
            name.innerText="作品名"+pic_name+"  ID:"+id;
            box1.appendChild(name);
            let tim=document.createElement('h5');
            tim.innerText="创建时间"+create_time;
            box1.appendChild(tim);
            let img=document.createElement('img');
            img.setAttribute('src',pic_url);
            box1.appendChild(img);

        }

    }
}
xhr.open('GET',url,true);
xhr.send(null);
