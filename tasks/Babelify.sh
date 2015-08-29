#!/bin/sh
#./node_modules/.bin/browserify ./core/Main.js -t babelify -o ./build/temp/es5.concat.js
#cp ./build/temp/es5.concat.js ./core/core.es5.min.js
#./node_modules/.bin/browserify ./core/Main.js --debug --transform [ babelify --stage 1 ] --plugin [ minifyify --output ./build/temp/map.json --map ./build/temp/map.js ] > ./build/temp/es5.concat.min.js


./node_modules/.bin/browserify ./core/Main.js --transform [ babelify ] > ./build/temp/es5.concat.js

#./node_modules/.bin/uglifyjs ./build/temp/es5.concat.js --mangle-props -m -c > ./build/temp/es5.concat.min.js
./node_modules/.bin/uglifyjs ./build/temp/es5.concat.js -m -c > ./build/temp/es5.concat.min.js

./tasks/Template.sh

zip ./build/temp/pack.zip ./build/temp/index.html

wc -c ./build/temp/index.html
wc -c ./build/temp/pack.zip