const img = document.querySelector('img');
const body = document.querySelector('body');
body.appendChild(img);
const images = [
    'https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg',
    'https://images.freeimages.com/images/large-previews/83f/paris-1213603.jpg',
    'https://images.freeimages.com/images/large-previews/bbb/autumn-in-new-york-5-1360120.jpg',
    'https://images.freeimages.com/images/large-previews/bc4/curious-bird-1-1374322.jpg',
    'https://images.freeimages.com/variants/pgFBx5hMEeeJ1s6eWuDjHBZe/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d?fmt=webp&w=500',
    'https://images.freeimages.com/images/large-previews/ab3/puppy-2-1404644.jpg',
    'https://images.freeimages.com/images/large-previews/400/bird-at-zoo-1579028.jpg',
    'https://images.freeimages.com/images/large-previews/630/big-basin-morning-1523946.jpg',
    'https://images.freeimages.com/images/large-previews/866/butterfly-1-1535829.jpg',
]


function getRandomImg () {
    const randomImg = Math.floor(Math.random()*images.length);
    img.setAttribute('src', images[randomImg]);
    console.log(randomImg);
}

img.addEventListener("click", getRandomImg(img));
