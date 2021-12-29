import _ from 'lodash';
import './style.css'; 
import AddPhoto from './add-photo.png';
import { intro } from './intro.js';

function hello() {
  const element = document.createElement('div');
  const lipsum = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi animi magnam nostrum repellat eaque facilis consequatur dolor porro blanditiis earum excepturi quo, ipsam voluptatem obcaecati molestias? Necessitatibus omnis alias numquam!";
  const addPhoto = new Image();
  
  addPhoto.src = AddPhoto; 


  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack', lipsum], ' ');
  element.classList.add('hello');
  element.appendChild(addPhoto);

  return element;
}

document.querySelector('.hello').appendChild(hello());
document.querySelector('.intro').textContent = intro;
