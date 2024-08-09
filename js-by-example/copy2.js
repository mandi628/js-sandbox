#!/bin/bash

echo "Enter the file you want to copy: "
read oldFile

chmod -x $oldFile

echo "Enter the new file name: "
read newFile

cp $oldFile ../../my_sandbox/bash/bash-by-example/$newFile.sh
cp $oldFile ../../my_sandbox/ruby/ruby-by-example/$newFile.rb
cp $oldFile ../../my_sandbox/js/js-by-example/$newFile.js

chmod +x $oldFile
