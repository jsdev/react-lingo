#!/bin/bash
# Loop through the letters A to Z
for letter in {A..Z}
do
  # Use mkdir -p to create the directory if it doesn't exist
  mkdir -p "$letter"
done