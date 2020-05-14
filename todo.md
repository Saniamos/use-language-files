fix type capture in declaration


function declaration

{"comment":"function declaration",
"begin": "([_\\-a-zA-Z0-9]+?)\\s*?\\(",
"beginCaptures": {"1": {"name":"entity.name.function"}},
"end": "(\\s*?(\\S+?)\\s*?:\\s*?(\\S+?))*?\\)",
"endCaptures": {"1": {"name": "variable.parameter"}}
}


,{
"match": "\\b\\w+?\\W*?:\\W*?(\\w+?)\\b",
"captures": {"1": {"name":"entity.name.type.use"}}
}