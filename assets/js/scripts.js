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
        //var t = document.createTextNode(inputValue);
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
    var checkbox = true;
    var item = 0;

/*    if (this.checked) {
        console.log("Checkbox is checked..");
    } else {
        console.log("Checkbox is not checked..");
    }*/

    // find all the <li> elements
    var lables = document.querySelectorAll('#list li label');
    for (item=0; item < lables.length; item++) {
        if (this.id == lables[item].id) {
//            console.log("id = " + checkbox.id);
            if (this.checked == true) {
                lables[item].style.textDecoration = 'line-through';
            } else {
                lables[item].style.textDecoration = 'none';
            }
        }
    }
}