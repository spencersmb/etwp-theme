/**
 *
 * INTERFACE FOR DATA COMING FROM PHP
 * ......................
 * */
interface FontPHPData {
  placeholder: string;
  name: string;
  styles: string[];
}

/**
 *
 * Font Preview Component
 * ......................
 * Connects to React component using dispatch event trigger
 *
 * */
class ProductsFontPreviewComponent {
  fontPreviewArray: any;
  event: CustomEvent;
  app: JQuery;
  isOpen: Boolean;

  constructor() {
    this.fontPreviewArray = $('.et-font-preview__link');
    this.app = $('#app');
  }

  addButtonClick() {
    this.fontPreviewArray.each((index: number, el: Element) => {
      let elIndex = index;
      $(el).on('click', this.buttonClick.bind(this));
    });
  }

  createEvent() {
    // Modern Browser way to call event ie11 and above
    // this.event = new CustomEvent(
    //   'fontCheck',
    //   {
    //     detail: {
    //       message: 'Font Component up!',
    //       time: new Date(),
    //     },
    //     bubbles: true,
    //     cancelable: true
    //   }
    // );

    this.event = document.createEvent('CustomEvent');
    this.event.initCustomEvent('fontCheck', false, false, {
      message: 'Font Component up!',
      time: new Date(),
    });


  }

  setData(data: FontPHPData) {
    this.app.attr({
      'data-placeholder': data.placeholder,
      'data-name': data.name,
      'data-styles': data.styles
    });
  }

  buttonClick(e: Event) {
    e.preventDefault();
    console.log('font button click');
    // Build font attr
    let element = $(e.currentTarget);
    let name = element.data('name');

    let data = {
      placeholder: name + ' preview',
      name: name,
      styles: element.data('styles').split(',')
    };

    // pass new data into react app
    this.setData(data);

    // fire event to notify React app to update
    // e.currentTarget.dispatchEvent(this.event); //Ie11 and above
    window.dispatchEvent(this.event); //

    // open slider
    this.open();
  }

  open() {
    if (this.isOpen) {
      return;
    } else {
      this.app.addClass('open');
    }
  }

  close() {
    this.app.removeClass('open');
  }

  init(): void {

    this.createEvent();
    this.addButtonClick();

    // delay showing the app for just a sec for safari fix
    setTimeout(() => {
      console.log('Font Preview loaded');
      $('#app').addClass('loaded');
    }, 100);
  }

}

let Products_font_preview_js = new ProductsFontPreviewComponent();

export default Products_font_preview_js;
