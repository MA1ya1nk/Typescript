// Process 
/*
all steps are same just parser and checker are additional
checker is not available in any language except typescript
emiiter or generator for generating ts file

steps

TS code
lexar -> tokens(catch mising semicolon, invalid character)
parser -> AST(abstract syntax tree) tree format of code
binder -> symbol tableand parent pointers coz we traverse up and down the tree
checker -> AST with types check that each variable get correct type
emitter -> JS code
*/