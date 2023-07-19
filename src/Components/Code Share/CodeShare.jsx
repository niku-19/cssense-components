import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const CodeShare = ({ code, highlight }) => {
  return (
    <CopyBlock
      text={code}
      language={"HTML"}
      theme={dracula}
      showLineNumbers={true}
      wrapLines
      highlight={highlight}
    />
  );
};

export default CodeShare;
