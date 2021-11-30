import './sass/main.scss';
import lazySizes from 'lazysizes';


const refs = {
    galleryList: document.querySelector('.gallery-list'),
    lazyImages : document.querySelectorAll('.lazyload'),
}

refs.lazyImages.forEach(image => {
    image.addEventListener('load', onLoadImg, {once:true});
})

function onLoadImg(e){
    e.target.classList.add('appear');
}


