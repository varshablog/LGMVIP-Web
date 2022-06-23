// console.log("this is the 2 project");
//constructor
function Data(name, email,website,link,gender,skills) {
  this.name = name;
  this.email =email ;
  this.website = website;
  this.link=link;
  this.gender=gender;
  this.skills=skills;
}

//Display CONSTRUCTOR
function Display() {

}

//add methods to display prototype
Display.prototype.add = function (data) {
  // console.log("Adding to UI");
  adddtasks = document.getElementById('tablebody');
  // console.log(data.name);
  // console.log(data.gender);
  // console.log(data.skills);
  let uIstring = `<tr>
          <th>${data.name}</th>
          <th>${data.email}</th>
          <th>${data.website}</th>
          <th>${data.link}</th>
          <th>${data.gender}</th>
          <th>${data.skills}</th>
          </tr>`;
   adddtasks.innerHTML += uIstring;
}

Display.prototype.clear = function () {
  let registrationForm = document.getElementById('registrationForm');
  registrationForm.reset();

}
let registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener("submit", datasubmit);
function datasubmit(e) {
e.preventDefault();
// console.log("add a book");
let name = document.getElementById('name').value;
let email = document.getElementById('email_id').value;
if(name=="" && email==""){
  // console.log("this is an empty");
  let error=document.getElementById('error');  
  let html="";
  html+=`
  <div class="s">
          <div class="center">
              <strong>Failure</strong>&emsp;Your response has not been submitted
              <a class="prev" onclick="remove()">&#10060;</a>
          </div>
      </div>
  `
  error.innerHTML=html ;
  error.style.display="block";
}
else{
  let name = document.getElementById('name').value;
  let email = document.getElementById('email_id').value;
  let website = document.getElementById('web').value;
  let link = document.getElementById('url').value;

  let male = document.getElementById('input1');
  let female = document.getElementById('input2');
  let type;
  // let skillstype;

  if(male.checked){
    type=male.value
  }
  else if(female.checked){
      type=female.value;
  }

  let java = document.getElementById('java');
  let html = document.getElementById('html');
  let css = document.getElementById('css');
  
  skillstype=[];
  if (java.checked) {
    skillstype.push(java.value);
  }
  if (html.checked) {
    skillstype.push(html.value);
  }
  if (css.checked) {
     skillstype.push(css.value);
  }
  let data = new Data(name, email, website,link,type,skillstype);
  // console.log(data);

  let display=new Display();
  display.add(data);
  display.clear();
  // console.log(type);
  
}
}
function remove() {
  let error=document.getElementById('error');
  
  if (error.style.display != 'none') {
      error.style.display = 'none';
  }

  
}

