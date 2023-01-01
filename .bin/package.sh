#!/bin/bash
echo "\n Checking if directories already exist..."
if [ -d "./dist" ]; then
    printf '%s\n' "Removing dist..."
    rm -rf "./dist"
fi

echo "Compiling app..."
make compile

echo "Setting up dist folder..."
mkdir -p ./dist

echo "Moving static to dist..."
mv ./build/static/* ./dist/

echo "Done!"
