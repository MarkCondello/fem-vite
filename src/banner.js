import { bannerContent } from './banner.module.css';

export const banner = (msg) => {
  // console.log('banner', msg);
  const bannerElement = document.getElementById('content');
  bannerElement.classList.add(bannerContent);
  msg
    ? (bannerElement.style.display = 'block')
    : (bannerElement.style.display = 'none');
  bannerElement.textContent = msg;
};
