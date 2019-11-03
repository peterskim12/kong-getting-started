#!/bin/bash

echo 'Starting installation of 3 example services...'

cd services/rest-a/
npm install 
cd ../rest-b/
npm install
cd ../graphql-a/
npm install
cd ../../

echo 'Installation of 3 example services complete!'

