// @flow
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import APISchemaForms from '../Form/APISchemaForms';
// These will be local to the project

type FormPageProps = {
  pageName: string,
  schemaEndpoint: string,
  schemas: {[schema: string]: any},
  dataApiEndpoint: string,
  uiSchema: {[key: string]: any},
  onError: (string) => void
};

export default function FormPage(props: FormPageProps) {
  let {pageName, schemaEndpoint, schemas, dataApiEndpoint, uiSchema, onError} = props;

  return (
    <div id={pageName}>
      <APISchemaForms
        schemaEndpoint={schemaEndpoint}
        schemas={schemas}
        dataApiEndpoint={dataApiEndpoint}
        uiSchema={uiSchema}
        onError={onError}
      />
    </div>
  );
};