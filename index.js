function creatEl(el, props) {
    var element = document.createElement(el);
    Object.assign(element, props);
    return element;
}

const fieldset = creatEl('fieldset', {});
document.body.appendChild(fieldset);

const form = creatEl('form', {
    name: 'login',
    action: 'http://www.google.com',
    id: 'form'

});
fieldset.appendChild(form);

const age = creatEl('input', {
    type: 'text',
    name: 'age',
    placeholder: 'your age'
});
form.appendChild(age);

const ageWarn = creatEl('div', {
    id: 'warn'
});
form.appendChild(ageWarn);

const userName = creatEl('input', {
    type: 'text',
    name: 'username',
    placeholder: 'your name: start from "user_"'
});
form.appendChild(userName);

const userNameWarn = creatEl('div', {
    id: 'warn2'
});
form.appendChild(userNameWarn);

const date = creatEl('input', {
    type: 'text',
    name: 'date',
    placeholder: 'date format: dd-mm-yyyy'
});
form.appendChild(date);

const dateWarn = creatEl('div', {
    id: 'warn3'
});
form.appendChild(dateWarn);

const submit = creatEl('input', {
    type: 'submit',
    value: 'Submit',
});
form.appendChild(submit);

const errorDialog = creatEl('dialog', {
    open: 'open',
    id: 'errorDialog',
    classList: 'hiddenDialog'
});
form.appendChild(errorDialog);
errorDialog.innerHTML = 'Please fill out correct all fields!';

const sucssesDialog = creatEl('dialog', {
    open: 'open',
    id: 'sucssesDialog',
    classList: 'hiddenDialog'
});
form.appendChild(sucssesDialog);
sucssesDialog.innerHTML = 'Thanks for info!';

const regexUserName = /^user_([a-zA-Z0-9@\.]*)/i;
const regexData = /\d{2}-\d{2}-\d{4}/;
const regexAge = /^[1-9][0-9]*$/ ;

age.onblur = function () {
    if (!regexAge.test(this.value)) {     
       this.className = "error";
        console.log(this);
        ageWarn.innerHTML = 'Please type only number bigger the 0'
    } else {
        this.className = ''
    }
};

age.onfocus = function () {
    if (this.className == 'error') {
        ageWarn.innerHTML = "";
    }
};

userName.onblur = function () {
    if (!regexUserName.test(userName.value)) {
        this.className = "error";
        userNameWarn.innerHTML = 'username should start from "user_"'
    } else {
        this.className = ''
    }
};
userName.onfocus = function () {
    if (this.className == 'error') {
        this.className = "";
        userNameWarn.innerHTML = "";
    }
};

date.onblur = function () {
    if (!regexData.test(date.value)) {
        this.className = "error";
        dateWarn.innerHTML = 'date should contain current date (format dd-mm-yyyy)'
    } else {
        this.className = ''
    }
};

date.onfocus = function () {
    if (this.className == 'error') {
        this.className = "";
        dateWarn.innerHTML = "";
    }
};



submit.addEventListener('click', function (e) {
    if (age.value == '' || userName.value == '' || date.value == '' || age.classList.contains('error') || userName.classList.contains('error') || date.classList.contains('error')) {
        e.preventDefault();
        fail();
    } else {
        done();
    }
})

function fail() {
    var remove = document.getElementById('errorDialog').classList.remove('hiddenDialog');
    setTimeout(() => {
        document.getElementById('errorDialog').classList.add("hiddenDialog")
    }, 3500);
}

function done() {
    var remove = document.getElementById('sucssesDialog').classList.remove('hiddenDialog');
    setTimeout(() => {
        document.getElementById('sucssesDialog').classList.add("hiddenDialog")
    }, 3500);
}