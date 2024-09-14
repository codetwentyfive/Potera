const fs = require('fs');
const folders = ['components', 'pages', 'public', 'styles'];
const files = {
  'components': ['Layout.tsx', 'Header.tsx', 'Footer.tsx'],
  'pages': ['_app.tsx', 'index.tsx', 'services.tsx', 'contact.tsx'],
  'public': [], // static assets can be added later
  'styles': ['globals.css'],
  '.': ['tailwind.config.js', 'tsconfig.json', 'package.json']
};

// Create folders
folders.forEach(folder => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }

  files[folder].forEach(file => {
    const filePath = folder === '.' ? file : `${folder}/${file}`;
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '');
    }
  });
});
