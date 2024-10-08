import { EditorElement } from "@/providers/editor/editor-provider";
import React from "react";
import TextComponent from "./text";
import Container from "./Container";

type Props = {
  element: EditorElement;
};

const Recursive = ({ element }: Props) => {
  console.log(element.type);

  switch (element.type) {
    case "text":
      return <TextComponent element={element} />;
    case "__body":
      return <Container element={element} />;
    default:
      return null;
  }
};

export default Recursive;
