'use strict';

const vscode = require('vscode');

exports.activate = function (context) {
    vscode.languages.registerDocumentFormattingEditProvider('use', {
        provideDocumentFormattingEdits(document) {
            let formatted = document.getText()

            // make sure special chars can breath
            formatted = formatted.replace(/(\S)(->|:=|(?<!(:|<|>))=)/gi, '$1 $2')
            formatted = formatted.replace(/(->|=|:(?!=))(\S)/gi, '$1 $2')

            // funktion calls and dec should not have a space
            // also currently affects tuples -> i guess we'll need to re-use the language file stuff we jsut created somehow :D
            // formatted = formatted.replace(/\b(\w+?)\b\s\(/gi, '$1$2')

            let fullRange = new vscode.Range(0, 0, document.lineCount, 0);
            return [vscode.TextEdit.replace(fullRange, formatted)];
        }
    });
}