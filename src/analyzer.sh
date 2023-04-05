#!/bin/bash

# Check if directory exists
if [ ! -d "$1" ]; then
    echo "Directory does not exist"
    exit 1
fi

# Check if filetypes are provided
if [ -z "$2" ]; then
    filetypes="htm*|jsx"
else
    filetypes="$2"
fi

# Create HTML file name with timestamp
timestamp=$(date +%Y%m%d)
html_file="AltStatusSummary_${timestamp}.html"

# Create HTML file with document title and h1
echo "<!DOCTYPE html>" > $html_file
echo "<html lang=en>" >> $html_file
echo "<head>" >> $html_file
echo "<title>Alt Attribute Analysis</title>" >> $html_file
echo "</head>" >> $html_file
echo "<body>" >> $html_file
echo "<h1>Alt Text Summary</h1>" >> $html_file

# Iterate through each filename with img element present
for filename in $(find "$1" -type f -name "*.$filetypes" -exec grep -l '<img' {} \;); do
    # Get count of img elements in filename
    count=$(grep -c '<img' "$filename")

    # Add H2 of filename with count of img elements to HTML file
    echo "<h2>$filename ($count)</h2>" >> $html_file

    # Iterate through each image element in filename with line number
    while read -r line; do
        # Get values for alt attribute, width attribute, height attribute, and img src file extension
        alt=$(echo "$line" | grep -o 'alt="[^"]*"' | sed 's/alt="//' | sed 's/"//')
        width=$(echo "$line" | grep -o 'width="[^"]*"' | sed 's/width="//' | sed 's/"//')
        height=$(echo "$line" | grep -o 'height="[^"]*"' | sed 's/height="//' | sed 's/"//')
        extension=$(echo "$filename" | grep -o '\.[^\.]*$')
        line_number=$(grep -n "$line" "$filename" | cut -d ":" -f 1)

        # Add figure element with img tag and figcaption element with data definition list to HTML file
        echo "<figure>" >> $html_file
        echo "<img src=\"$line\">" >> $html_file
        echo "<figcaption>" >> $html_file
        echo "<dl>" >> $html_file
        echo "<dt>alt:</dt><dd>$alt</dd>" >> $html_file
        echo "<dt>width:</dt><dd>$width</dd>" >> $html_file
        echo "<dt>height:</dt><dd>$height</dd>" >> $html_file
        echo "<dt>extension:</dt><dd>$extension</dd>" >> $html_file
        echo "<dt>line number:</dt><dd>$line_number</dd>" >> $html_file
        echo "</dl>" >> $html_file
        echo "</figcaption>" >> $html_file
        echo "</figure>" >> $html_file

    done < <(grep '<img' "$filename")
done

# Close HTML file with body and html tags
echo "</body>" >> $html_file
echo "</html>" >> $html_file

echo "HTML file created: ${html_file}"
