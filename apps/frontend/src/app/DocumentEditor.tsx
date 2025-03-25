import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);

registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1NMaF1cXmhNYVJ2WmFZfVtgdV9DZVZUTGYuP1ZhSXxWdkZiWH9fdXJVR2BaWEE='
);

import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-inputs/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';
import '@syncfusion/ej2-lists/styles/material.css';
import '@syncfusion/ej2-navigations/styles/material.css';
import '@syncfusion/ej2-splitbuttons/styles/material.css';
import '@syncfusion/ej2-dropdowns/styles/material.css';
import '@syncfusion/ej2-react-documenteditor/styles/material.css';
import { registerLicense } from '@syncfusion/ej2-base';
import { useEffect, useRef } from 'react';

export const DocumentEditor = () => {
  const editorRef = useRef<DocumentEditorContainerComponent | null>(null);
  useEffect(() => {
    if (editorRef.current && localStorage.getItem('currentDocument')) {
      editorRef.current.documentEditor.open(localStorage.getItem('currentDocument') ?? '');
    }
  }, []);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.documentEditor.documentChange = () => {
        localStorage.setItem('currentDocument', editorRef.current?.documentEditor.serialize() ?? '');
      };

      editorRef.current.documentEditor.contentChange = () => {
        localStorage.setItem('currentDocument', editorRef.current?.documentEditor.serialize() ?? '');
      };
    }
  }, []);

  return (
    <>
      <div className="flex justify-center px-24 bg-gray-300 pt-12 h-screen">
        <DocumentEditorContainerComponent
          ref={editorRef}
          height="calc(100vh - 125px)"
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
          enableToolbar={true}
          showPropertiesPane={false}
          toolbarItems={[
            'New',
            'Open',
            'Separator',
            'Undo',
            'Redo',
            'Separator',
            'Bookmark',
            'Table',
            'Separator',
            'Find',
          ]}
        />
      </div>
    </>
  );
};
