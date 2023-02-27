import { handleImages, handleText, saveImage, saveText } from "utils/tools";
import generateStyles from "./styles";

export default class TestTool {
  static get toolbox() {
    return {
      title: "Test",
      icon: '<i class="fas fa-image p-1 mx-2 border border-gray-500 bg-white"></i>',
    };
  }

  constructor({ data, config, api }) {
    this.data = {
        header: "",
        colOne: "",
        colTwo: "",
    };
    this.styles = generateStyles();
    this.api = api;
    this.settings = [];
    this.wrapper = document.createElement("div");
  }

    createHeader(parent) {
        handleText(parent, this.data.header, this.styles["header"], "header");
    }
    createColOne(parent) {
        handleText(parent, this.data.colOne, this.styles["colOne"], "col-one");
    }
    createColTwo(parent) {
        handleText(parent, this.data.colTwo, this.styles["colTwo"], "col-two");
    }

  render() {
    this.wrapper.className += ` ${this.styles.container}`

    this.createHeader(this.wrapper)
    this.createColOne(this.wrapper)
    this.createColTwo(this.wrapper)

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
    const colOne = blockContent.querySelector("#col-one");
    const colTwo = blockContent.querySelector("#col-two");

    return {
        header: saveText(header),
        colOne: saveText(colOne),
        colTwo: saveText(colTwo),
    };
  }
}
