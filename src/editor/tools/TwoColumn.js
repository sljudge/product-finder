import { handleImages, handleText, saveImage, saveText } from "./helpers";

export default class Banner {
  static get toolbox() {
    return {
      title: "Two Column",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z"/></svg>',
    };
  }

  constructor({ data, config, api }) {
    this.data = {
      header: data.header || "",
      firstColumn: {
        data: [{ type: "paragraph", text: "Hello world" }],
        orientation: "col",
      },
      secondColumn: {
        data: [
          {
            type: "image",
            imgSrc:
              "https://www.accessart.org.uk/wp-content/uploads/2022/02/image-from-rawpixel-id-2990217-jpeg.jpeg",
          },
        ],
        orientation: "col",
      },
    };
    this.api = api;
    this.settings = [
      // {
      //   name: "white",
      //   icon: `<span class="bg-gray-700 text-white text-center w-full">T</span>`,
      // },
    ];
  }

  createHeader(parent) {
    const container = document.createElement("div");
    parent.appendChild(container);

    this.header = document.createElement("h2");
    handleText(this.header, this.data.header, ["mb-2", "p-4", "text-xl"]);
    container.appendChild(this.header);
  }

  createColumn(parent, data) {
    const column = document.createElement("div");
    column.className +=
      "flex flex-col min-h-24 max-w-2/3 flex-1 relative column pl-4";
    this.renderColumn(column, data);
    parent.appendChild(column);
  }

  renderParagraph(parent, data) {
    const domElem = document.createElement("div");
    domElem.className += " mb-1 flex";
    const textElem = document.createElement("p");
    textElem.className += " mb-1 flex-1";

    handleText(textElem, data);

    domElem.appendChild(textElem);
    parent.appendChild(domElem);

    if (parent.firstElementChild !== domElem) {
      const removeCta = document.createElement("button");
      removeCta.innerText += "X";
      removeCta.contentEditable = "false";
      removeCta.className +=
        "text-red-500 absolute right-1 opacity-25 hover:opacity-100 transition-100";
      removeCta.addEventListener("click", (e) => {
        e.preventDefault();
        parent.removeChild(domElem);
      });
      domElem.appendChild(removeCta);
    }

    domElem.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        this.renderParagraph(parent, "");
      }
    });
  }

  renderColumn(parent, data) {
    data.forEach((elem) => {
      let domElem;
      if (elem.type === "paragraph") {
        this.renderParagraph(parent, elem.text);
      } else if (elem.type == "image") {
        domElem = document.createElement("div");
        parent.appendChild(domElem);
        handleImages(domElem, elem.imgSrc, [
          "bg-cover",
          "bg-no-repeat",
          "min-h-80",
          "two-col-image",
        ]);
      }
    });
  }

  render() {
    this.wrapper = document.createElement("div");
    this.wrapper.className += "container";
    this.createHeader(this.wrapper);

    this.columnContainer = document.createElement("div");
    this.columnContainer.className += "flex";
    this.wrapper.appendChild(this.columnContainer);

    this.createColumn(this.columnContainer, this.data.firstColumn.data);
    this.createColumn(this.columnContainer, this.data.secondColumn.data);

    return this.wrapper;
  }

  renderSettings() {
    const wrapper = document.createElement("div");

    this.settings.forEach((tune) => {
      let button = document.createElement("div");

      button.classList.add(this.api.styles.settingsButton);
      button.classList.toggle(
        this.api.styles.settingsButtonActive,
        this.data[tune.name]
      );
      button.innerHTML = tune.icon;
      wrapper.appendChild(button);

      button.addEventListener("click", () => {
        this._toggleTune(tune.name);
        button.classList.toggle(this.api.styles.settingsButtonActive);
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
    const header = blockContent.querySelector("h2");
    const columns = blockContent.querySelectorAll(".column");

    console.log(columns[0], columns[1]);

    return {
      header: saveText(header),
      firstColumn: {
        data: Array.from(columns[0].querySelectorAll("p")).map((elem) => ({
          type: "paragraph",
          text: saveText(elem),
        })),
        orientation: "col",
      },
      secondColumn: {
        data: [
          {
            type: "image",
            imgSrc: saveImage(columns[1].querySelector(".two-col-image")),
          },
        ],
        orientation: "col",
      },
    };
  }
}
