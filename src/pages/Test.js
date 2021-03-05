export default class Test {
  constructor($target) {
    const headerContainer = document.createElement("div");
    headerContainer.className = "header-container";
    
    const backBtn = document.createElement("button");

    $target.appendChild(headerContainer);
  }
}
