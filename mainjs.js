// import 'cropperjs/dist/cropper.css';
//import Cropper from '/cropper.min.js';

const image = document.getElementById('image');
const cropper = new Cropper(image, {
  aspectRatio: 1 / 1,
  crop(event) {
    console.log(event.detail.x);
    console.log(event.detail.y);
    console.log(event.detail.width);
    console.log(event.detail.height);
    console.log(event.detail.rotate);
    console.log(event.detail.scaleX);
    console.log(event.detail.scaleY);
  },
});
