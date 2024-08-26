# Contriubuting to shadcn-vanilla-js

## File structure 
```
📦shadcn-vanilla-js
 ├── 📂MyCustomButton
 └──┬── 📜 button.css
    ├── 📜 button.js
    ├── 📜 component.json
 ├── 📜.gitignore
 ├── 📜CONTRIBUTING.md
 ├── 📜LICENSE
 ├── 📜README.md
```
### component.css
This file is where your component's styling lives, and is the most important part of any component. For most use cases, you won't need any other file except this and your `component.json` simply because modern CSS is very powerful. (this file does not need to be named component.css, it just needs to be defined in your component.json correctly)

### component.js
While creating components, it can be helpful to include your own JavaScript code to create custom functions when a user interacts with your component. This file is just a standard Client-Sided JavaScript file.

### component.json
Your `component.json` tells the build tool how to package your source files for production. An example for a custom button that added on to the native button element would look like:
```json
{
    "$schema": "https://raw.githubusercontent.com/peterwojt/shadcn-vanilla-js/main/schema.json",
    "name": "MyCustomButton",
    "class": "customButton",
    "type": "extension",
    "extends": "button",
    "element": "my-custom-button",
    "description": "A custom button that extends the native HTML button element.",
    "version": "1.0.0",
    "author": "httphypixelnet",
    "dependencies": {
        "css": [
            "button.css"
        ],
        "js": [
            "button.js"
        ]
    }
}
```