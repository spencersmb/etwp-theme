
export class SimpleClass {
  Add(a: number, b: number): number {
    return a + b
  }
}

const simpleClass: SimpleClass = new SimpleClass();
console.log(simpleClass.Add(2, 3));

$(document).ready(() => {
  console.log('working ts');
  const h1: JQuery = $('body').find('h1');
  h1.css('color', 'blue');
  console.log(h1);
});
