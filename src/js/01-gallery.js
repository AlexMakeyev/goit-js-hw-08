import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import galleryTpl from '../templates/gallery.hbs'
import { galleryItems } from './gallery-items.js';


const galleryBox = document.querySelector('.gallery');

const createGalleryImage = galleryItems.map(galleryTpl).join(" ");

galleryBox.insertAdjacentHTML("beforeend", createGalleryImage);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: "250" });

console.log(galleryItems);
