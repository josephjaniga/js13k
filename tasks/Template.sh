#!/bin/sh

rm -f ./build/temp/index.FAT.html
cat ./header.template.html ./build/temp/es5.concat.min.js ./footer.template.html > ./build/temp/index.FAT.html

./node_modules/.bin/html-minifier ./build/temp/index.FAT.html --remove-comments --collapse-whitespace --remove-attribute-quotes > ./build/temp/index.html

cp ./index.FULL.html ./build/temp/index.FULL.html

cp ./build/temp/index.html ./index.html