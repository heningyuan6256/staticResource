import React, { useEffect, useState } from 'react';

import CodeMirror from '@uiw/react-codemirror';
import { javascript, typescriptLanguage } from '@codemirror/lang-javascript';
// import { StreamLanguage } from '@codemirror/language';
import { html } from '@codemirror/lang-html';
import { java } from '@codemirror/lang-java';
import { json } from '@codemirror/lang-json';
import { php } from '@codemirror/lang-php';
import { python } from '@codemirror/lang-python';
import { rust } from '@codemirror/lang-rust';
import { sql } from '@codemirror/lang-sql';
import { xml } from '@codemirror/lang-xml';
import { StreamLanguage } from '@codemirror/language';
import { go } from '@codemirror/legacy-modes/mode/go';

export interface OnChainTextViewerProps {}
const OnChainTextViewer: React.FC<OnChainTextViewerProps> = () => {
  const [value, setValue] = useState<string>();
  const [fileType, setFileType] = useState<any>('js');
  useEffect(() => {
    const fileTypeMap: any = {
      sql: sql(),
      html: html(),
      java: java(),
      json: json(),
      php: php(),
      python: python(),
      rust: rust(),
      xml: xml(),
      go: StreamLanguage.define(go),
      js: javascript(),
      py: python(),
      ts: typescriptLanguage,
    };
    setFileType(fileTypeMap[fileType]);
    setValue(``);
  }, []);
  return <CodeMirror value={value} extensions={fileType} readOnly editable={false} theme="light" />;
};

export default OnChainTextViewer;
