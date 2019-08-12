install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
publish:
	npm publish --dry-run
push:
	sudo git push origin master
lint:
	npx eslint .
build:
	npm run build
