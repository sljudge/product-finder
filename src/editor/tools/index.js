import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";

import { BannerTool } from "components/Banner";
import { TestTool } from "components/Test";
import { TwoColumnTool } from "components/TwoColumn";
// import TwoColumn from "./TwoColumn";

const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  header: {
    class: Header,
    inlineToolbar: true,
  },
  quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
  // *********************
  banner: {
    class: BannerTool,
    inlineToolbar: false,
  },
  twoColumn: {
    class: TwoColumnTool,
    inlineToolbar: true,
  },
  test: {
    class: TestTool,
    inlineToolbar: true,
  },
};
export default EDITOR_JS_TOOLS;
