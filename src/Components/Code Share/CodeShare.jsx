import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const CodeShare = ({ code }) => {
  return (
    <CopyBlock
      text={code}
      language={"jsx"}
      theme={dracula}
      wrapLines
      // highlight={highlight}
    />
  );
};

export default CodeShare;
