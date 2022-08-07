const Ajv = require('ajv-draft-04');
const addFormats = require('ajv-formats');
const cgManifest = require('./cgmanifest.json');
const fetch = require('node-fetch');

fetch('https://json.schemastore.org/component-detection-manifest.json')
    .then(res => res.json())
    .then(cgManifestSchema => {
        const ajv = addFormats(new Ajv());
        const validateSchema = ajv.compile(cgManifestSchema);

        const isValid = validateSchema(cgManifest);
        if (!isValid) {
            for (const error of validateSchema.errors) {
                console.warn(JSON.stringify(error));
            }
        } else {
            console.log('Validation successful');
        }
    });

