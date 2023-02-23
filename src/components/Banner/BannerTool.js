import { handleImages, handleText, saveImage, saveText } from "utils/tools";
import generateStyles from "./styles";

export default class Banner {
  static get toolbox() {
    return {
      title: "Banner",
      icon: '<i class="fas fa-image p-1 mx-2 border border-gray-500 bg-white"></i>',
    };
  }

  constructor({ data, config, api }) {
    this.data = {
      header: data.header || "",
      subHeader: data.subHeader || "",
      imgUrl:
        data.imgUrl ||
        "https://www.3minutosdearte.com/wp-content/uploads/2021/12/C6-Paul-Klee-and-the-Essaence-mini.jpg",
      white: data.white || false,
    };
    this.styles = generateStyles(this.data.white);
    this.api = api;
    this.settings = [
      {
        name: "white",
        icon: `<span class="text-center w-full">T</span>`,
      },
    ];
  }

  createHeader(parent) {
    this.header = document.createElement("div");
    handleText(
      [parent, this.header],
      this.data.header,
      this.styles.header,
      "header"
    );
  }

  createSubHeader(parent) {
    this.subHeader = document.createElement("div");
    handleText(
      [parent, this.subHeader],
      this.data.subHeader,
      this.styles.subHeader,
      "subHeader"
    );
  }

  render() {
    this.wrapper = document.createElement("div");
    handleImages(this.wrapper, this.data.imgUrl, this.styles.container);

    this.createHeader(this.wrapper);
    this.createSubHeader(this.wrapper);

    return this.wrapper;
  }

  renderSettings() {
    const wrapper = document.createElement("div");

    const darkSettings = [
      "bg-gray-100",
      "text-black",
      "hover:bg-gray-700",
      "hover:text-white",
    ];

    const whiteSettings = ["bg-gray-700", "text-white", "hover:text-gray-700"];

    this.settings.forEach((tune) => {
      let button = document.createElement("div");

      button.classList.add(this.api.styles.settingsButton);
      if (this.data.white) {
        button.classList.add(...whiteSettings);
      } else {
        button.classList.add(...darkSettings);
      }
      button.innerHTML = tune.icon;
      wrapper.appendChild(button);

      button.addEventListener("click", () => {
        this._toggleTune(tune.name);
        if (this.data.white) {
          button.classList.add(...whiteSettings);
          button.classList.remove(...darkSettings);
        } else {
          button.classList.add(...darkSettings);
          button.classList.remove(...whiteSettings);
        }
      });
    });
    return wrapper;
  }

  _toggleTune(tune) {
    this.data[tune] = !this.data[tune];
    this._acceptTuneView();
  }

  _acceptTuneView() {
    this.settings.forEach((tune) => {
      if (tune.name === "white") {
        this.header.classList.toggle("text-white");
        this.header.classList.toggle("text-black");
        this.subHeader.classList.toggle("text-white");
        this.subHeader.classList.toggle("text-black");
      }
    });
  }

  save(blockContent) {
    const header = blockContent.querySelector("#header");
    const subHeader = blockContent.querySelector("#subHeader");

    return {
      header: saveText(header),
      subHeader: saveText(subHeader),
      imgUrl: saveImage(this.wrapper),
      white: !this.data.white,
    };
  }
}
