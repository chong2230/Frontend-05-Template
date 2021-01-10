# Babel笔记

### @babel/preset-react

此预设（preset）始终包含以下插件：

@babel/plugin-syntax-jsx

@babel/plugin-transform-react-jsx

@babel/plugin-transform-react-display-name

`
{
  "presets": [
    [
      "@babel/preset-react",
      {
        "pragma": "dom", // default pragma is React.createElement (only in classic runtime)
        "pragmaFrag": "DomFrag", // default is React.Fragment (only in classic runtime)
        "throwIfNamespace": false, // defaults to true
        "runtime": "classic" // defaults to classic
        // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
      }
    ]
  ]
}
`

### priority

babel.config.json < .babelrc < programmatic options from @babel/cli

