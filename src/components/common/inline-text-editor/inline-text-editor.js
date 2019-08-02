import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

const InlineTextEditor = () => {
  return(
    <CKEditor>
	  editor={ InlineEditor }
	</CKEditor>
  );
};

export default InlineTextEditor;
