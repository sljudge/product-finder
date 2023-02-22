import { handleImages, handleText, saveImage, saveText } from "./helpers";

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
    this.api = api;
    this.settings = [
      {
        name: "white",
        icon: `<span class="text-center w-full">T</span>`,
      },
    ];
  }

  createText(parent) {
    const container = document.createElement("div");
    parent.appendChild(container);

    this.header = document.createElement("h1");
    handleText(this.header, this.data.header, [
      "mb-2",
      "p-4",
      "text-3xl",
      "font-semibold",
    ]);
    if (this.data.white) {
      this.header.classList.add("text-white");
    }
    container.appendChild(this.header);

    this.subHeader = document.createElement("div");
    handleText(this.subHeader, this.data.subHeader, ["p-2", "text-xl"]);
    if (this.data.white) {
      this.subHeader.classList.add("text-white");
    }
    container.appendChild(this.subHeader);
  }

  render() {
    this.wrapper = document.createElement("div");
    this.wrapper.className +=
      "min-h-132 h-132 bg-gray-400 flex items-center justify-center absolute";
    this.wrapper.style.maxWidth = "100vw";
    this.wrapper.style.minHeight = "250px";

    handleImages(this.wrapper, this.data.imgUrl, [
      "relative",
      "bg-center",
      "bg-cover",
      "bg-no-repeat",
      "bg-gray-400",
    ]);

    this.createText(this.wrapper);

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
    const header = blockContent.querySelector(".header");
    const subHeader = blockContent.querySelector(".subHeader");

    return {
      header: saveText(header),
      subHeader: saveText(subHeader),
      imgUrl: saveImage(this.wrapper),
      white: this.data.white,
    };
  }
}
