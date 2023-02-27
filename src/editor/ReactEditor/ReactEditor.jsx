import React, { Component, useState } from "react";
import { createReactEditorJS } from "react-editor-js";

import BLOCKS from "data/testBlocks";
import EDITOR_JS_TOOLS from "../tools";

const ReactEditorJS = createReactEditorJS();

const ReactEditor = () => {
  const editorCore = React.useRef(null);
  const [dataOutput, setDataOutput] = useState();

  const handleInitialize = React.useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  const handleSave = React.useCallback(async () => {
    const savedData = await editorCore.current.save();
    setDataOutput(savedData);
    localStorage.setItem("editorjs-data", JSON.stringify(savedData));
  }, []);

  return (
    <>
      <ReactEditorJS
        tools={EDITOR_JS_TOOLS}
        onInitialize={(core) => handleInitialize(core)}
        defaultValue={
          JSON.parse(localStorage.getItem("editorjs-data")) || BLOCKS
        }
      />
      <div className="bg-gray-50 flex justify-center py-12">
        <button
          className="bg-green-500 hover:opacity-95 hover:shadow-lg w-40 h-12 text-lg rounded-xl text-white hover:text-gray-100 transition-100"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <pre className="min-h-80 bg-gray-900 p-12 text-white">
        {JSON.stringify(dataOutput, null, 2)}
      </pre>
    </>
  );
};

export default ReactEditor;
