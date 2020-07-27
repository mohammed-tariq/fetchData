
const result = document.querySelector(".result");
const apibtn= document.querySelector("#api");
const textbtn= document.querySelector("#text");
const jsonbtn= document.querySelector("#json");

textbtn.addEventListener('click',fetchText);
jsonbtn.addEventListener('click',fetchJson);
apibtn.addEventListener('click',fetchApi);


   
async function fetchText(e){
  result.innerText="";
  try{
  const res= await fetch('text.txt');
  let data= await res.text();
  showAlert("Successfully Fetched", "green");
  data= data.split('\n');
  data.map((item)=>{
    const h3=document.createElement("h3");
    h3.innerText=item;
    result.appendChild(h3);
  })
}
catch(err){
  showAlert(err.message, "red")
}
}




async function fetchJson(e){
    e.preventDefault();
    result.innerText="";
    try{
    const res = await fetch('fetchJson.json')
    const data= await res.json();
    showAlert("Successfully Fetched", "green");
       data.forEach((user) => {
        const h3=document.createElement("h3");
        h3.innerText=user.name;
        result.appendChild(h3);
      })
    }
    catch(err){
      showAlert(err.message, "red")
    }
    }

    async function fetchApi(e){
      e.preventDefault();
      result.innerText="";
      try{
      const res= await fetch("https://jsonplaceholder.typicode.com/users")
      const data=await res.json();
      showAlert("Successfully Fetched", "green");
      data.map((item)=>{
        const h3=document.createElement("h3");
        h3.innerText=item.name;
        result.appendChild(h3);
        })
      }
      catch(err){
        showAlert(err.message, "red")
      }
      }

    //alert function
    function showAlert(msg,color){
      const alert=document.createElement('div');
      alert.innerText=msg;
      alert.style.backgroundColor= color;
      alert.style.textAlign="center";
      alert.style.margin='10px';
      result.insertBefore(alert,result.firstElementChild);
      setTimeout(() => {
        alert.remove();
      }, 3000);
    }