let openMenuButton = function() {
    document.getElementById('openMenuButton').classList.add('menuButtonHiddenClass');
    document.getElementById('menuContainer').classList.add('menuVisibleClass');
    document.getElementById('closeMenuButton').classList.remove('menuButtonHiddenClass');
    document.body.classList.add('stopOverflowClass');
}

let closeMenuButton = function() {
    document.getElementById('closeMenuButton').classList.add('menuButtonHiddenClass');
    document.getElementById('menuContainer').classList.remove('menuVisibleClass');
    document.getElementById('openMenuButton').classList.remove('menuButtonHiddenClass');
    document.body.classList.remove('stopOverflowClass');
}

let orderWindowOpen = function(e) {
    let button = e.target.closest("button");

    if (!button) return;

    let PayCard = e.target.parentNode.parentNode;
    let PayCardName = PayCard.getElementsByTagName('input')[0].value;

    document.getElementById('orderWindow').style.right = 0;
    document.body.classList.add('stopOverflowClass');
    document.getElementById('closeOrderWindowButton').classList.remove('orderWindowCloseButtonClass');
    document.getElementById('orderTypeSelect').value = PayCardName;
}

// проверки валидности заказа

let customerOrderTypeCheck = function() {
    let customerOrderType = document.getElementById('orderTypeSelect');
    if (customerOrderType.value != '') {
        customerOrderType.style.border = 'none';
        return true;
    } else {
        customerOrderType.style.border = '1px solid #f24822';
        return false;
    }
}


let customerNameCheck = function() {
    let customerName = document.getElementById('customerName');
    if (customerName.value) {
        customerName.style.border = 'none';
        return true;
    } else {
        customerName.style.border = '1px solid #f24822';
        customerName.placeholder = 'Введите Ваше имя';
        return false
    }
}

let customerEmailCheck = function() {
    let customerEmail = document.getElementById('customerEmail');

    if (!customerEmail.value) {
        customerEmail.style.border = '1px solid #f24822';
        customerEmail.placeholder = 'Введите email';
        return;
    }

    let emailRE = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let valid = emailRE.test(customerEmail.value);
    if (valid) {
        customerEmail.style.border = 'none';
        return (true);
    } else {
        customerEmail.style.border = '1px solid #f24822';
        return (false);
    }
}

let customerPhoneCheck = function() {
    let customerPhone = document.getElementById('customerPhone');

    if (!customerPhone.value) {
        customerPhone.style.border = '1px solid #f24822';
        customerPhone.placeholder = 'Введите номер телефона';
        return
    }

    let phoneRE = /^\d[\d\(\)\ -]{4,14}\d$/;
    let valid = phoneRE.test(customerPhone.value);
    if (valid) {
        customerPhone.style.border = 'none';
        return true;
    } else {
        customerPhone.style.border = '1px solid #f24822';
        return false;
    }
}

let inputFileChange = function() {
    let labelForInputFile = document.getElementById('labelFileOnChange');
    let inputFile = document.getElementById('customerFile');

    if (inputFile.files.length > 0) labelForInputFile.innerHTML = inputFile.files[0].name;
    else return;
}

let enterOrderButton = function() {

    let orderTypeSelect = document.getElementById('orderTypeSelect');
    let customerName = document.getElementById('customerName');
    let customerPhone = document.getElementById('customerPhone');
    let customerEmail = document.getElementById('customerEmail');
    let error = 0;

    if (!customerOrderTypeCheck()) error = 1;
    if (!customerNameCheck()) error = 1;
    if (!customerEmailCheck()) error = 1;
    if (!customerPhoneCheck()) error = 1;
    if (error == 1) return;

    newOrderFetch(); //написать что будет происходить во время error

    document.getElementById('orderWindow').style.right = '100%';
    document.getElementById('thanksForOrederWindow').style.right = 0;
}


let closeOrderWindowButton = function() {
    document.getElementById('orderWindow').style.right = '100%';
    document.getElementById('thanksForOrederWindow').style.right = '100%';
    document.getElementById('closeOrderWindowButton').classList.add('orderWindowCloseButtonClass');
    document.body.classList.remove('stopOverflowClass');
}

let portfolioImgClick = function(e) {
    let block = e.target.closest('div[class=portfolioTextContent]')

    if (!block) return;

    block = e.target;
    block.classList.add('portfolioWisibleText');
}


// footer Form

let footerNameChange = function() {
    let footerCustomerName = document.getElementById('footerCustomerName');
    let footerErrorDiv = document.getElementById('footerErrorDiv');

    if (footerCustomerName.value) {
        footerCustomerName.style.border = 'none';
        footerErrorDiv.innerHTML = '';
        return true;
    } else {
        footerCustomerName.style.border = '1px solid #f24822';
        footerCustomerName.placeholder = 'Введите Ваше имя';
        footerErrorDiv.innerHTML = 'что-то пошло не так, проверьте Ваши данные';
        return false
    }
}

let footerEmailChange = function() {
    let footerCustomerEmail = document.getElementById('footerCustomerEmail');
    let footerErrorDiv = document.getElementById('footerErrorDiv');

    if (!footerCustomerEmail.value) {
        footerCustomerEmail.style.border = '1px solid #f24822';
        footerCustomerEmail.placeholder = 'Введите Ваш email';
        footerErrorDiv.innerHTML = 'что-то пошло не так, проверьте Ваши данные';
        return
    }

    let emailRE = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let valid = emailRE.test(footerCustomerEmail.value);
    if (valid) {
        footerCustomerEmail.style.border = 'none';
        return (true);
    } else {
        footerCustomerEmail.style.border = '1px solid #f24822';
        return (false);
    }
}

let footerQuestionClick = function() {
    let footerCustomerName = document.getElementById('footerCustomerName');
    let footerCustomerEmail = document.getElementById('footerCustomerEmail');
    let footerCustomerQuestion = document.getElementById('footerCustomerQuestion');
    let footerErrorDiv = document.getElementById('footerErrorDiv');

    let error = 0;

    if (!footerNameChange()) error = 1;
    if (!footerEmailChange()) error = 1;

    if (!footerCustomerQuestion.value) {
        footerCustomerQuestion.placeholder = 'Введите Ваш вопрос';
        footerCustomerQuestion.style.border = '1px solid #f24822';
        error = 1;
    } else {
        footerCustomerQuestion.style.border = 'none';
    }

    if (error == 1) {
        return;
    } else {
        footerErrorDiv.innerHTML = 'Спасибо за Ваше обращение, в скором времени с Вами свяжутся';
    }

    questionFetch(); //тут еще надо написать обработчик ошибки, если будет

}
