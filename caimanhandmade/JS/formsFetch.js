let newOrderFetch = function () {
    let fetchType = 'newOrder';
    let orderTypeSelect = document.getElementById('orderTypeSelect').value;
    let customerName = document.getElementById('customerName').value;
    let customerPhone = document.getElementById('customerPhone').value;
    let customerEmail = document.getElementById('customerEmail').value;
    let customerFile = document.getElementById('customerFile');

    let data = new FormData();
    data.append('type', fetchType);
    data.append('orderType', orderTypeSelect);
    data.append('customerName', customerName);
    data.append('customerPhone', customerPhone);
    data.append('customerEmail', customerEmail);
    data.append('customerFile', customerFile.files[0]);

    fetch('/core/email.php',{
        method: 'POST',
        body: data
    })
    .then(response => response.text())
    .then(result => {console.log(result)})
    .catch(error => {
        document.getElementById('orderErrorDiv').innerHTML = 'Упс, кажется произошла ошибка :С';
    })
}


let questionFetch = function() {
    let fetchType = 'question';
    let footerCustomerName = document.getElementById('footerCustomerName').value;
    let footerCustomerEmail = document.getElementById('footerCustomerEmail').value;
    let footerCustomerQuestion = document.getElementById('footerCustomerQuestion').value;

    let data = new FormData();
    data.append('type', fetchType);
    data.append('customerName', footerCustomerName);
    data.append('customerEmail', footerCustomerEmail);
    data.append('customerQuestion', footerCustomerQuestion);

    fetch('/core/email.php',{
        method: 'POST',
        body: data
    })
    .then(response => response.text())
    .then(result => {console.log(result)})
    .catch(error => {
        document.getElementById('footerErrorDiv').innerHTML = 'Упс, кажется произошла ошибка :С';
    })
}
