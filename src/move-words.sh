#!/bin/bash
# get the current directory
dir=$(pwd)
# loop through the files that end in .js in the directory
for file in $dir/*.js
do
  # get only the file name from the path
  filename=$(basename $file)
  # get the first two letters of the file name
  prefix=${filename:0:2}

  mv $dir/$filename $dir/$prefix
done