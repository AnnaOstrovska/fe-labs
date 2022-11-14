const changeColorWithGetElement = () => {
    document.getElementById('study').style.background = 'rgb(242, 158, 176)'
}

const changeColorWithQuerySelector = () => {
    document.querySelector('.hobby').style.background = 'rgb(158,169,242)'
}

const newImage = document.createElement('img');
newImage.src = "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Florence_1_1.jpg";
newImage.width = 600;
newImage.height = 600;

const addImage = () => {
    document.querySelector('.task2').appendChild(newImage);
}

const zoomIn = () => {
    newImage.style.width = newImage.width + 25 + 'px';
    newImage.style.height = newImage.height + 25 + 'px';
}

const zoomOut = () => {
    newImage.style.width = newImage.width - 25 + 'px';
    newImage.style.height = newImage.height - 25 + 'px';
}

const remove = () => {
    document.querySelector('.task2').querySelector('img')?.remove()
}