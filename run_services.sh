#!/bin/bash

echo 'Running 3 example services...'

cd services/rest-a/
node index.js &
cd ../rest-b/
node index.js &
cd ../graphql-a/
node index.js &
cd ../../


