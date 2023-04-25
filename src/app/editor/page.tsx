"use client";
import React, { useState } from "react";
import MdEditor from "md-editor-rt";
import "md-editor-rt/lib/style.css";

function Editor() {
  const [text, setText] = useState("# Hello Editor");

  return <MdEditor modelValue={text} onChange={setText} language="es-US"/>;
}

export default Editor;
