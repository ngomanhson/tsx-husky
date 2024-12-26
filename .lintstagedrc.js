module.exports = {
  "**/*.{js,ts,jsx,tsx}": (filenames) => [
    `eslint --fix ${filenames.join(" ")}`,
    `prettier --write ${filenames.join(" ")}`,
  ],

  "**/*.{css,scss}": (filenames) => [
    `stylelint --fix ${filenames.join(" ")}`,
    `prettier --write ${filenames.join(" ")}`,
  ],

  "**/*.{json,md}": (filenames) => `prettier --write ${filenames.join(" ")}`,
  "**/*.{yaml,yml}": (filenames) => `prettier --write ${filenames.join(" ")}`,
};
