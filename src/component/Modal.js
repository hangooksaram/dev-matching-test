export default class Modal {
  constructor({ $target }) {
    this.data = null;
    this.modalWrapper = document.createElement("div");
    this.modalWrapper.className = "modal-wrapper";
    this.modalWrapper.classList.add("hidden");
    this.modalWrapper.addEventListener("click", () => this.toggleModal());
    $target.appendChild(this.modalWrapper);
  }

  toggleModal() {
    this.data = null;
    this.modalWrapper.classList.toggle("hidden");
    this.modalWrapper.innerHTML = "";
  }

  setState(data) {
    if (data) {
      this.toggleModal();
      this.data = data.drinks[0];
      this.render();
    }
  }
  render() {
    const modalContent = document.createElement("div");
    modalContent.className = "loading-image";
    modalContent.innerHTML = this.data.strCategory;
    this.modalWrapper.appendChild(modalContent);
  }
}
