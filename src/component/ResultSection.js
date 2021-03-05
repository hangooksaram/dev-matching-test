export default class ResultSection {
  constructor({ $target, onGetAll, onClick }) {
    this.onGetAll = onGetAll;
    this.onClick = onClick;
    this.onGetAll();
    this.resultSection = document.createElement("div");
    this.resultSection.className = "result-section";
    $target.appendChild(this.resultSection);
  }

  setState(data) {
    this.data = data.drinks;
    this.render();
    const nodelist = document.querySelectorAll("span");

    const observer = new IntersectionObserver((entries) => {
      const resultS = document.querySelector(".result-section");
      const button = document.createElement("button");
      resultS.appendChild(button);
      console.log(entries[0]);
      if (entries[0].intersectionRatio === 0) {
      }
    });
    console.log(observer.observe(this.resultSection));
  }

  render() {
    if (this.data) {
      this.resultSection.innerHTML = "";
      const resultList = document.createElement("div");
      resultList.className = "result-list";
      this.data.map((item) => {
        const drinkName = document.createElement("span");
        console.log(item);
        drinkName.innerHTML = item.strDrink;
        drinkName.addEventListener("click", () => this.onClick(item.idDrink));
        resultList.appendChild(drinkName);
      });
      this.resultSection.appendChild(resultList);
    } else {
      this.resultSection.innerHTML = "";
      const notice = document.createElement("div");
      notice.innerText = "검색결과가 없습니다";
      this.resultSection.appendChild(notice);
    }
  }
}
