// script.js
document.getElementById('search-input').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let names = document.querySelectorAll('#name-list li');

    names.forEach(function(name) {
        if (name.textContent.toLowerCase().includes(filter)) {
            name.classList.remove('hidden');
        } else {
            name.classList.add('hidden');
        }
    });
});

// script.js
document.getElementById('add-name-btn').addEventListener('click', function() {
    let newName = document.getElementById('new-name').value;
    if (newName) {
        let newLi = document.createElement('li');
        newLi.textContent = newName;
        document.getElementById('name-list').appendChild(newLi);
        document.getElementById('new-name').value = '';
    }
});

// Adicionar ao final da função de busca
let anyVisible = Array.from(names).some(name => !name.classList.contains('hidden'));
document.getElementById('no-results').style.display = anyVisible ? 'none' : 'block';

function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

document.getElementById('search-input').addEventListener('keyup', function() {
    let filter = removeAccents(this.value.toLowerCase());
    let names = document.querySelectorAll('#name-list li');

    names.forEach(function(name) {
        let nameText = removeAccents(name.textContent.toLowerCase());
        if (nameText.includes(filter)) {
            name.classList.remove('hidden');
        } else {
            name.classList.add('hidden');
        }
    });
});


// Save to localStorage
function saveNameToStorage(newName) {
    let names = JSON.parse(localStorage.getItem('namesList')) || [];
    names.push(newName);
    localStorage.setItem('namesList', JSON.stringify(names));
}

// Load from localStorage
function loadNamesFromStorage() {
    let storedNames = JSON.parse(localStorage.getItem('namesList')) || [];
    storedNames.forEach(function(name) {
        let newLi = document.createElement('li');
        newLi.textContent = name;
        document.getElementById('name-list').appendChild(newLi);
    });
}

window.onload = loadNamesFromStorage;

document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', function() {
        let li = this.parentElement;
        li.parentElement.removeChild(li);
        updateStorage();
    });
});

