test:
	@./node_modules/.bin/mocha -R spec

test-w:
	@./node_modules/.bin/mocha -w -R min

.PHONY: test test-w