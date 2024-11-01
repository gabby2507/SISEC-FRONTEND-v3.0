let form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(form);
    let data = Object.fromEntries(formData);
    let jsonData = JSON.stringify(data);
console.log(jsonData)
    fetch('http://localhost:2050/api/v1/loginuser',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
            //Se quiseres passar autorizacao descomenta esse ponto, fora isso tudo isso, excluindo o o corpo e a url mantem constante
            //'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiOTgwMTMzMzFmYjQyOWJmNzc1NTE2MzU1YmQyZWQ3NTcyNGM0MWVmNGUyNjU2NGZjYjQ3ZjY1ZDNkYzI2ODQ2ZGY5YTcwOGQ4YzA3NGY0M2IiLCJpYXQiOjE3MjkxNDIwMTkuNzIyMTY5LCJuYmYiOjE3MjkxNDIwMTkuNzIyMTczLCJleHAiOjE3NjA2NzgwMTkuNjM1MTIsInN1YiI6IjMiLCJzY29wZXMiOltdfQ.EC5g73064aSrYq1Rm6vXdymcUHKgyO7VYj1_9uyr-wYKUqjq2rEbKgDvUnw6KwyCxJXVNl2Z8MboFcIZK2Glb28flQ7-e_wEMGCWUGOMeTsYuxsEVENjCE6tucOchNakiLU4Mca3nt-i5cIluZw18EP95Ir-WuPCE6yFi1Tf8wbpc2Kjzv2cGzDdfISncCHvvooC3F1fExbcWlrGr-h6sF5GzMvoGRtIJe8-_0a-KcD4mJGkiaAWli8PnzercLCI7OCywSk1x1cwIhGDQmcShmePPEb6HhnEK-Zb9SgsZMGi_UQ2mS_550Cobc30niCGiVcrFMidvEX4ePw2ybUNTDZreN6SqSdV4kckYZhI-2YvDk17J91sZsGmHM67x4FjRez97Tbd3qBOQngXm8zd2Qiia_DOaj9gYdK4fFc3xotvk0JesBFhMad4Vye6giAa_rDmoG3GfE3oW8UT2HfSlrjupFfyTONf_2RrpABkjPnJt3jtYRFpBkCQKtH8QbzQ-NUS3hZszooSzajJhlmMsUEJFFSgF877eV4cwjSMfq3J-1l4uZO7ieEm5fKgXE5arW7zktJyKK-wvuNNgw-3W-wQPlFrNhDGPDkKe6k-KkzoXNOEbVihKgbkpKywWTBKJPk1V0nmGzz0TL9QI0R-Twx9AJ76RScfSC9TAdEHobs'
        },
        body: jsonData
    }).then(res => res.json())
    .then(result =>{
        
        localStorage.setItem('sisecToken',result.data.token)
        localStorage.setItem('sisecName',result.data.name)
        sessionStorage.setItem('sisecName',result.data.name)
        sessionStorage.setItem('sisecToken',result.data.token)
        console.log(result)
    })
    .catch(err => console.log(err))
  
}

function togglePassword() {
    const passwordField = document.getElementById('senha');
    const eyeIcon = document.getElementById('eye-icon');
    
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      eyeIcon.src = 'images/eye-close.png'; // Alterne para ícone de olho fechado
    } else {
      passwordField.type = 'password';
      eyeIcon.src = 'images/eye-view.png'; // Alterne para ícone de olho aberto
    }
}