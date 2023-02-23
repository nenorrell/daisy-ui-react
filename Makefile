NODE=16

install:
	docker run -i --rm --name install-daisy -v `pwd`:/usr/src/app -w /usr/src/app node:${NODE} npm install ${PCKG}

install-dev:
	docker run -i --rm --name install-daisy -v `pwd`:/usr/src/app -w /usr/src/app node:${NODE} npm install ${PCKG} --save-dev

down:
	docker-compose down

up:
	docker-compose up

run: down install up

test: install unit-tests run-linting
test-fast: unit-tests run-linting

unit-tests:
	docker run -i --rm \
	--name daisy-ui-test \
	-p "9199:9200" \
	-v `pwd`:/usr/src/app \
	-w /usr/src/app node:${NODE} \
	npm test $(TEST) -- --coverage

run-linting:
	docker run -i --rm \
	--name daisy-ui-linting \
	-v `pwd`:/usr/src/app \
	-w /usr/src/app node:${NODE} \
	npm run lint

run-linting-fix:
	docker run -i --rm \
	--name daisy-ui-linting \
	-v `pwd`:/usr/src/app \
	-w /usr/src/app node:${NODE} \
	npm run lint:fix

publish-ci: install
	docker run -i --rm -p "9198:1337" \
	-v `pwd`:/usr/src/app -w /usr/src/app \
	-e NPM_TOKEN=$(NPM_TOKEN) \
	node:${NODE} bin/publish-ci.js