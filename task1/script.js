console.log("this is the js file");
showtasks();
let button=document.getElementById('push');
console.log(button);
button.addEventListener('click',function(){
    
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please enter a task");
        
    }
    else{
    let inputvalue=document.getElementById('inputtype');
    console.log(inputvalue);
    
    let notes=localStorage.getItem('notes');
    if(notes==null){
        noteobj=[];
    }
    else{
        noteobj=JSON.parse(notes);
    }
    noteobj.push(inputvalue.value);
    localStorage.setItem("notes", JSON.stringify(noteobj));
    inputvalue="";
    showtasks();
 }
})
function showtasks()
{
            
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }
            
    let html = "";
    noteobj.forEach(function(item,index){
        html += `
                
            <div class="task" >
            <span id="taskname">${item}</span>
            <button class="delete"onclick="deletenotes(this.id)"id="${index}">X</button>
            </div> 
        `
    })
            
    let tasks=document.querySelector('#tasks');
            
    if (noteobj.length != 0 ) {
        tasks.innerHTML = html;
    }
    else {
        tasks.innerHTML = ` you first entered the note`;
    }
    document.querySelector('#newtask input').value="";
}
        
function deletenotes(index){
    console.log("I am deleting", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }
   
    noteobj.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(noteobj));
    showtasks();
} 
    

