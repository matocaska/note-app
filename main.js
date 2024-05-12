

let note_area = document.querySelector('.note_area');
let noteText = document.querySelector('.note-text');
let title = document.querySelector('.title');
let note = document.querySelector('.note');
let notes = document.querySelector('#notes');

const showNotAre = ()=>{
    noteText.style = 'display : block';
    note_area.classList.add('note-now');
    title.setAttribute('placeholder','write your title her');
    title.style='font-size:30px';
} 

 const hideNoteArea  = ()=>{
    noteText.style='display:none';
    note_area.classList.remove('note-now')
 }

 const addnote =(title, note)=>{

    notes.innerHTML += `
    <div class="notes" id="notes">
    <div class="note">
    <h3 class="title-text">${title}</h3>
    <p class="note-blog">${note}</p>
    <i class="bi bi-trash"></i>
</div>`;

 }

note_area.addEventListener("click",showNotAre);

document.addEventListener('click', (Event) =>{
   let isclicked = note_area.contains(Event.target);
   if(!isclicked){
    hideNoteArea();
    addnote(title.ariaValueMax, noteText.value);

    


    
   }
});

