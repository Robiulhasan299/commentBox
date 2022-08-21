// step 1.
document.getElementById('commentSubmit').addEventListener('click',function(){
    
// step 2.
const commentArea = document.getElementById('commentArea');
const commentAreaText = commentArea.value;
//  step 3.
const  commentContent = document.getElementById('commentContent');
const p =document.createElement('p');
p.innerText =  commentAreaText;
commentContent.appendChild( p);
commentArea.value = ' ';
});