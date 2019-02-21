window.addEventListener('DOMContentLoaded', function () {
    let uploadBtn = document.querySelector('.title'),
        img = document.querySelector('.img'),
        description = document.querySelector('.description'),
        status = document.querySelector('.status');

    function upload() {
        img.src = "https://www.creditmutuel.fr/cmne/fr/banques/webservices/nswr/images/loading.gif";
        uploadBtn.style.textDecoration = "none";
        status.textContent = '';
        setTimeout(check, 3000);
        setTimeout(done, 6000);
    };

    function check() {
        img.src = "task2-documents/wait.svg";
        uploadBtn.textContent = "Файл загружен";
        description.textContent = "Название файла (100 Кб)";
        status.textContent = 'Идет проверка';
        status.style.color = '#d3d3d3';
    };

    function done() {
        let result = Math.random();

        if (result > 0.5) {
            //success
            img.src = "task2-documents/ok.svg";
            uploadBtn.textContent = "Страница с пропиской";
            description.textContent = "Название файла (100 Кб)";
            status.textContent = 'Проверено';
            status.style.color = 'green';
        } else {
            //fail
            img.src = "task2-documents/upload.svg";
            uploadBtn.textContent = "Загрузить скан страницы с фотографией";
            uploadBtn.style.textDecoration = "underline";
            description.textContent = "Размер файла не более 5 Мб";
            status.textContent = 'Отклонено';
            status.style.color = 'red';
        }

    };

    uploadBtn.addEventListener('click', upload);

})