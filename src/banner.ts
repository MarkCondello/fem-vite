// import { bannerContent } from './banner.module.css';

export const banner = (msg: string) => {
  // console.log('banner', msg);
  const bannerElement = document.getElementById('content') as HTMLElement;
  // bannerElement.classList.add(bannerContent);
  msg
    ? (bannerElement.style.display = 'block')
    : (bannerElement.style.display = 'none');
  bannerElement.textContent = msg;
};
