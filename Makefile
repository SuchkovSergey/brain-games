install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
publish:
	npm publish --dry-run
babelfile:
	npx babel src --out-dir dist
push:
	sudo git push origin master
lint:
	npx eslint .
