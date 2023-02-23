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
        const header = document.createElement("div");
        header.id = "header";
        header.className += this.styles["header"]
        parent.appendChild(header);
    }
    createColOne(parent) {
        const colOne = document.createElement("div");
        colOne.id = "col-one";
        colOne.className += this.styles["col-one"]
        parent.appendChild(colOne);
    }
    createColTwo(parent) {
        const colTwo = document.createElement("div");
        colTwo.id = "col-two";
        colTwo.className += this.styles["col-two"]
        parent.appendChild(colTwo);
    }

  render() {
    this.wrapper.className += ` ${this.styles.container}`

        this.createHeader(this.wrapper)
        this.createColOne(this.wrapper)
        this.createColTwo(this.wrapper)

    return this.wrapper;
  }

  renderSettings() {
    //
  }

  _toggleTune(tune) {
    //
  }

  _acceptTuneView() {
   //
  }

  save(blockContent) {
        const header = blockContent.querySelector("#header");
        const colOne = blockContent.querySelector("#col-one");
        const colTwo = blockContent.querySelector("#col-two");

    return {
      
    };
  }
}
