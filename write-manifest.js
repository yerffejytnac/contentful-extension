const fs = require('fs');
const id = require('./package.json').name;
const name = require('./package.json').description;
const src = `https://contentful-extension.casper.rocks`;
// const src = `https://${name}@${version}.casper.rocks`;
// const src = `https://localhost:3000`;
// const version = require('./package.json').version;

const config = {
  // id: Extension id (required)
  id,
  // name: Extension name (required)
  name,
  // src: URL where the root HTML document of the extension can be found (required)
  src,
  // fieldTypes: The field types of a content type where an extension can be used
  // https://www.contentful.com/developers/docs/concepts/data-model/#fields/
  fieldTypes: ['Symbol'],
  // sidebar: Controls the location of the extension. If true it will be rendered on the sidebar (optional)
  sidebar: true,
  parameters: {
    instance: [],
  },
};

fs.writeFileSync('./extension.json', JSON.stringify(config, null, '\t') + '\n');
