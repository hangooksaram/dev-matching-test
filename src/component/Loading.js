export default class Loading {
  constructor({ $target }) {
    this.spinnerWrapper = document.createElement("div");
    this.spinnerWrapper.className = "spinner-wrapper";
    this.spinnerWrapper.classList.add("hidden");
    $target.appendChild(this.spinnerWrapper);
    this.render();
  }
  toggleSpinner() {
    const spinner = document.querySelector(".spinner-wrapper");
    spinner.classList.toggle("hidden");
    console.log(spinner.classList);
  }

  render() {
    const loadingImage = document.createElement("div");
    loadingImage.className = "loading-image";
    this.spinnerWrapper.appendChild(loadingImage);
  }
}
