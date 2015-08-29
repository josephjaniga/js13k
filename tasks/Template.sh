#!/bin/sh

cat ./header.template.html ./build/temp/es5.concat.min.js ./footer.template.html >> ./build/temp/index.FAT.html

./node_modules/.bin/html-minifier -o ./build/temp/index.html --remove-comments --collapse-whitespace --remove-attribute-quotes ./build/temp/index.FAT.html

cp ./index.FULL.html ./build/temp/.