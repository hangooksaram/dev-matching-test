import { api } from "./src/api/cocktailService.js";
import SearchSection from "./src/component/SearchSection.js";
import ResultSection from "./src/component/ResultSection.js";
import { getItem, setItem } from "./src/utils/localStorage.js";
import Loading from "./src/component/Loading.js";
import Closure from "./src/component/Closure.js";
import Modal from "./src/component/Modal.js";

export default class App {
  constructor($target) {
    const { getRandom, search, getAll, searchById } = api;
    const button = document.createElement("button");
    button.addEventListener(
      "click",
      (function () {
        let count = 0;
        return function (event) {
          event.preventDefault();
          if (count > 9) alert("그만");
          count += 1;
        };
      })()
    ); //closure, IIFE 사용

    const push = document.createElement("button");
    const back = document.createElement("button");
    push.innerHTML = "푸쉬";
    back.innerHTML = "뒤로";
    push.addEventListener("click", () =>
      history.pushState({ data: "push" }, "title", "/test")
    );
    back.addEventListener("click", () => history.back());
    $target.appendChild(push);
    $target.appendChild(back);

    $target.appendChild(button);
    const loading = new Loading({ $target });
    const searchingSection = new SearchSection({
      $target,
      onSearch: async (keyword) => {
        try {
          const result = await search(keyword);
          console.log(result);
          if (!result.isError) {
            resultSection.setState(result.data);
          }
        } catch (e) {
          console.log(e);
        }
      },
    });

    const resultSection = new ResultSection({
      $target,
      onGetAll: async () => {
        loading.toggleSpinner();
        try {
          const result = await getAll();
          if (!result.isError) {
            resultSection.setState(result.data); //배열 결과
            setItem("item", result.data);
          }
        } catch (e) {
          console.log(e);
        }
        loading.toggleSpinner();
      },
      onClick: async (keyword) => {
        const result = await searchById(keyword);
        try {
          if (!result.isError) {
            modal.setState(result.data);
          }
        } catch (e) {
          console.log(e);
        }
      },
    });
    // const loading = new Loading({ $target });
    const closure = new Closure({ $target });
    const modal = new Modal({ $target });
    window.addEventListener("scroll", () => console.log("scolled!"));
  }
}
