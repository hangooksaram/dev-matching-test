export default class Closure {
  constructor({ $target }) {
    const add5 = this.adder(5);
    const add10 = this.adder(10);

    const button12 = document.createElement("button");
    const button14 = document.createElement("button");
    const button18 = document.createElement("button");

    button12.innerText = "12";
    button14.innerText = "14";
    button18.innerText = "18";

    const font12 = this.modifyFontSize(12);
    const font14 = this.modifyFontSize(14);
    const font18 = this.modifyFontSize(18);

    button12.addEventListener("click", font12);
    button14.addEventListener("click", font14);
    button18.addEventListener("click", font18);

    $target.appendChild(button12);
    $target.appendChild(button14);
    $target.appendChild(button18);
  }
  adder(x) {
    return function (y) {
      return x + y;
    };
  }

  modifyFontSize(size) {
    return function () {
      document.body.style.fontSize = `${size}px`;
    };
  }
}
