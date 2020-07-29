# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > meta-properties > new-target-invalid-escaped-new`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2015/meta-properties/new-target-invalid-escaped-new/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2015/meta-properties/new-target-invalid-escaped-new/input.js"
		end: Object {
			column: 0
			index: 34
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: MARKUP {
					parts: Array [
						RAW_MARKUP {value: "Escape sequence in keyword "}
						"new"
					]
				}
			}
			location: Object {
				filename: "es2015/meta-properties/new-target-invalid-escaped-new/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 16
					index: 16
					line: 1
				}
				start: Object {
					column: 16
					index: 16
					line: 1
				}
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "f"
				loc: Object {
					filename: "es2015/meta-properties/new-target-invalid-escaped-new/input.js"
					identifierName: "f"
					end: Object {
						column: 10
						index: 10
						line: 1
					}
					start: Object {
						column: 9
						index: 9
						line: 1
					}
				}
			}
			loc: Object {
				filename: "es2015/meta-properties/new-target-invalid-escaped-new/input.js"
				end: Object {
					column: 33
					index: 33
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "es2015/meta-properties/new-target-invalid-escaped-new/input.js"
					end: Object {
						column: 12
						index: 12
						line: 1
					}
					start: Object {
						column: 10
						index: 10
						line: 1
					}
				}
			}
			body: JSBlockStatement {
				directives: Array []
				loc: Object {
					filename: "es2015/meta-properties/new-target-invalid-escaped-new/input.js"
					end: Object {
						column: 33
						index: 33
						line: 1
					}
					start: Object {
						column: 13
						index: 13
						line: 1
					}
				}
				body: Array [
					JSExpressionStatement {
						loc: Object {
							filename: "es2015/meta-properties/new-target-invalid-escaped-new/input.js"
							end: Object {
								column: 31
								index: 31
								line: 1
							}
							start: Object {
								column: 15
								index: 15
								line: 1
							}
						}
						expression: JSMetaProperty {
							loc: Object {
								filename: "es2015/meta-properties/new-target-invalid-escaped-new/input.js"
								end: Object {
									column: 30
									index: 30
									line: 1
								}
								start: Object {
									column: 15
									index: 15
									line: 1
								}
							}
							meta: JSIdentifier {
								name: "new"
								loc: Object {
									filename: "es2015/meta-properties/new-target-invalid-escaped-new/input.js"
									identifierName: "new"
									end: Object {
										column: 23
										index: 23
										line: 1
									}
									start: Object {
										column: 15
										index: 15
										line: 1
									}
								}
							}
							property: JSIdentifier {
								name: "target"
								loc: Object {
									filename: "es2015/meta-properties/new-target-invalid-escaped-new/input.js"
									identifierName: "target"
									end: Object {
										column: 30
										index: 30
										line: 1
									}
									start: Object {
										column: 24
										index: 24
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
```

### `diagnostics`

```

 es2015/meta-properties/new-target-invalid-escaped-new/input.js:1:16 parse/js ━━━━━━━━━━━━━━━━━━━━━━

  ✖ Escape sequence in keyword new

    function f() { n\u0065w.target; }
                    ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```