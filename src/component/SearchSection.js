export default class SearchSection {
  constructor({ $target, onSearch }) {
    this.onSearch = onSearch;
    this.searchContainer = document.createElement("div");
    this.searchContainer.className = "search-section";

    $target.appendChild(this.searchContainer);
    this.render();
  }

  render() {
    this.input = document.createElement("input");
    this.searchContainer.appendChild(this.input);
    this.input.addEventListener("keyup", (e) => {
      if (e.key === "Enter") this.onSearch(e.target.value);
    });
  }
}
