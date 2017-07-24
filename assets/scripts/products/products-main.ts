const $ = jQuery;
import Font_Preview_Class from "./font-preview.ts";
import License_Select_Class from "./products-license.ts";
import Products_Modals_Class from "./products-modals.ts";

const Font_Preview = Font_Preview_Class;
const License_Select = License_Select_Class;
const Products_Modals = Products_Modals_Class;

class ProductsComponent {

  constructor() {

  }


  init(): void {

    var isProductPage = ($(".et-product-page").length > 0 ? true : false);

    if(isProductPage){
      console.log("Products Main Loaded");
      Font_Preview.init();
      License_Select.init();
      Products_Modals.init();
    }
  }

}

let Products = new ProductsComponent();

export default Products;