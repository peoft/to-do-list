var listWrapper = document.getElementById('list');
var userTextWrapper = document.getElementById('userText');
var addButton = document.getElementById('addToList');
var items = 0;

addButton.addEventListener("click", addToList);


function addToList() {    
    var inputValue = userTextWrapper.value;

    if (inputValue === '')  {
        alert("Insira um texto!");
    } else {
        var list = document.createElement("li");
        var t = document.createElement('label');
        var checkbox = document.createElement('input');
    
        items++;

        t.id = 'element' + items.toString();
        t.innerHTML = inputValue;
        checkbox.type = "checkbox";
        checkbox.id = t.id;
        checkbox.addEventListener('change', changeText);
    
        list.appendChild(checkbox);
        list.appendChild(t);
        listWrapper.appendChild(list);
    }

    userTextWrapper.value = "";
    
}

function changeText() {
    var item = 0;

    // find all the <li> elements
    var lables = document.querySelectorAll('#list li label');
    for (item=0; item < lables.length; item++) {
        if (this.id == lables[item].id) {
            if (this.checked == true) {
                lables[item].style.textDecoration = 'line-through';
            } else {
                lables[item].style.textDecoration = 'none';
            }
        }
    }
}