function submitForm(){

 const input = document.getElementById('text');
 const output = document.getElementById('output');

if(input.value === ""){
    alert('cannot leave the field empty ');
    return
}

const li = document.createElement('li');
li.appendChild(document.createTextNode(input.value));
output.appendChild(li);

const deleteButton = document.createElement('button');
deleteButton.appendChild(document.createTextNode('delete'));
li.appendChild(deleteButton);

deleteButton.addEventListener('click', function(){

    output.removeChild(li);
})

input.value = ""
}

const input2 = document.getElementById('text');
const showText = document.getElementById('showText');

input2.addEventListener('input', function(){
    inputValue = input2.value;
    showText.textContent = inputValue;
})