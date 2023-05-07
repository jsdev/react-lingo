# Get the total number of files in the parent directory
total=$(find . -maxdepth 2 -type f | wc -l)

# Initialize the maximum percentage and subdirectory name
max=0
maxdir=""

# Loop through all subdirectories
for dir in */; do
  # Get the number of files in the current subdirectory
  num=$(find "$dir" -type f | wc -l)
  # Calculate the percentage of files from the parent directory
  percent=$((num * 100 / total))
  # Compare with the current maximum percentage
  if [ $percent -gt $max ]; then
    # Update the maximum percentage and subdirectory name
    max=$percent
    maxdir="$dir"
  fi
done

# Print the result
echo "$maxdir has the highest percentage of files: $max%"