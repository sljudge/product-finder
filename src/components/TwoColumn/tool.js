import { handleImages, handleText, saveImage, saveText } from "utils/tools";
import generateStyles from "./styles";

export default class TwoColumnTool {
  static get toolbox() {
    return {
      title: "TwoColumn",
      icon: '<i class="fas fa-image p-1 mx-2 border border-gray-500 bg-white"></i>',
    };
  }

  constructor({ data, config, api }) {
    this.data = {
      header: "",
      text: "",
      imgSrc:
        "https://www.accessart.org.uk/wp-content/uploads/2022/02/image-from-rawpixel-id-2990217-jpeg.jpeg",
    };
    this.styles = generateStyles();
    this.api = api;
    this.settings = [];
    this.wrapper = document.createElement("div");
  }

  createHeader(parent) {
    this.header = document.createElement("h2");
    handleText(
      [parent, this.header],
      "header",
      this.styles["header"],
      "header"
    );
  }

  createColumn(parent) {
    const column = document.createElement("div");
    column.className += this.styles.column;
    parent.appendChild(column);
    return column;
  }

  createColOne(parent) {
    const col = this.createColumn(parent);
    handleText(col, this.data.text, this.styles["colOne"], "col-one");
  }
  createColTwo(parent) {
    const col = this.createColumn(parent);
    handleImages(col, this.data.imgSrc, this.styles["colTwo"], "col-two");
  }

  render() {
    this.wrapper.className += ` ${this.styles.container}`;

    this.createHeader(this.wrapper);

    const colContainer = document.createElement("div");
    colContainer.className += "flex";
    this.wrapper.appendChild(colContainer);

    this.createColOne(colContainer);
    this.createColTwo(colContainer);

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
    this.settings.forEach((tune) => {});
  }

  save(blockContent) {
    const header = blockContent.querySelector("#header");
    const text = blockContent.querySelector("#col-one");
    const imgSrc = blockContent.querySelector("#col-two");

    console.log("saving image", saveImage(imgSrc));

    return {
      header: saveText(header),
      text: saveText(text),
      imgSrc: saveImage(imgSrc),
    };
  }
}
