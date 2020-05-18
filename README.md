# use-lang

A small extansion providing a language grammar for the `use` and `soil` languages developed at the University of Bremen ([USE Documentation](http://useocl.sourceforge.net/w/index.php/Main_Page)).


This package aims to add minimalistic support for use and soil files in context with the UML and OCL modelling tool USE. It mainly helps me in my homework assignments in the Cours *Design of Information Systems* at the University of Bremen.

## Features

- Syntax Highlighting for `.use` and `.soil` files
- Primitive Formatter

### Syntax Highlighting
The package adds a simple language grammar which uses the JS syntax scope for highlighting.

\!\[Highlighting\]\(imgs/highlighting_example.png\)

### Auto-formatter
The package adds a primitive formatter.
It only ever applies one rule: let keywords breathe ie add extra space before and after certain keywords (`:`, `:=`, `->`, `=`)

## Requirements

No requirements, just install and enjoy.

## Known Issues

Feel free to contribute or fork this project!

## Release Notes

For mor information please check the changelog.md file.

### 0.0.1

Initial Release - enough to be usable in the information system course at the University of Bremen