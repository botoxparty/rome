# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > yield > parameter-default-inside-generator-method`

```javascript
Program {
  comments: Array []
  corrupt: false
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'script'
  syntax: Array []
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 27
      index: 27
      line: 1
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  diagnostics: Array [
    Object {
      origins: Array [Object {category: 'js-parser'}]
      description: Object {
        category: 'parse/js'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'yield is not allowed in generator parameters'}
      }
      location: Object {
        filename: 'input.js'
        mtime: undefined
        sourceType: 'script'
        end: Object {
          column: 15
          index: 15
          line: 1
        }
        start: Object {
          column: 15
          index: 15
          line: 1
        }
      }
    }
  ]
  body: Array [
    ExpressionStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 27
          index: 27
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      expression: ObjectExpression {
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 26
            index: 26
            line: 1
          }
          start: Object {
            column: 1
            index: 1
            line: 1
          }
        }
        properties: Array [
          ObjectMethod {
            kind: 'method'
            key: StaticPropertyKey {
              value: Identifier {
                name: 'method'
                loc: Object {
                  filename: 'input.js'
                  end: Object {
                    column: 10
                    index: 10
                    line: 1
                  }
                  start: Object {
                    column: 4
                    index: 4
                    line: 1
                  }
                }
              }
              variance: undefined
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 10
                  index: 10
                  line: 1
                }
                start: Object {
                  column: 4
                  index: 4
                  line: 1
                }
              }
            }
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 24
                index: 24
                line: 1
              }
              start: Object {
                column: 3
                index: 3
                line: 1
              }
            }
            body: BlockStatement {
              body: Array []
              directives: Array []
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 24
                  index: 24
                  line: 1
                }
                start: Object {
                  column: 22
                  index: 22
                  line: 1
                }
              }
            }
            head: FunctionHead {
              async: false
              generator: true
              hasHoistedVars: false
              predicate: undefined
              rest: undefined
              returnType: undefined
              thisType: undefined
              typeParameters: undefined
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 22
                  index: 22
                  line: 1
                }
                start: Object {
                  column: 10
                  index: 10
                  line: 1
                }
              }
              params: Array [
                BindingAssignmentPattern {
                  loc: Object {
                    filename: 'input.js'
                    end: Object {
                      column: 20
                      index: 20
                      line: 1
                    }
                    start: Object {
                      column: 11
                      index: 11
                      line: 1
                    }
                  }
                  right: YieldExpression {
                    argument: undefined
                    delegate: false
                    loc: Object {
                      filename: 'input.js'
                      end: Object {
                        column: 20
                        index: 20
                        line: 1
                      }
                      start: Object {
                        column: 15
                        index: 15
                        line: 1
                      }
                    }
                  }
                  left: BindingIdentifier {
                    name: 'x'
                    loc: Object {
                      filename: 'input.js'
                      end: Object {
                        column: 12
                        index: 12
                        line: 1
                      }
                      start: Object {
                        column: 11
                        index: 11
                        line: 1
                      }
                    }
                    meta: PatternMeta {
                      optional: undefined
                      typeAnnotation: undefined
                      loc: Object {
                        filename: 'input.js'
                        end: Object {
                          column: 12
                          index: 12
                          line: 1
                        }
                        start: Object {
                          column: 11
                          index: 11
                          line: 1
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
}
```