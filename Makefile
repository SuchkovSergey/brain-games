install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
publish:
	npm publish --dry-run
push:
	sudo git push origin master
build:
	npm run build
lint:
	npx eslint .
