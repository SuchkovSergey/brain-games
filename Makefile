install:
	npm install
publish:
	npm publish --dry-run
push:
	sudo git push origin master
lint:
	npx eslint .
build:
	npm run build
fix:
	sudo npx eslint --fix .
