import { decorate, observable } from 'mobx';

class WindowStore {
  constructor() {
    this.height = '';
    this.width = '';
    this.scroll = '';
    this.windowSize = this.windowSize.bind(this);
    this.windowScroll = this.windowScroll.bind(this);
  }

  windowSize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  windowScroll() {
    this.scroll = (document.scrollingElement || document.documentElement).scrollTop;
  }

  initiate() {
    if (window) {
      this.windowSize();
      this.windowScroll();
      window.addEventListener('resize', this.windowSize);
      window.addEventListener('scroll', this.windowScroll);
    }
  }
}

decorate(WindowStore, {
  height: observable,
  width: observable,
  scroll: observable,
});

let windowStore = new WindowStore();
export default windowStore;
