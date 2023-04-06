#!/bin/bash

# Usage: ./find_files.sh <directory> [<filetype1> <filetype2> ...]

# Check if directory exists
if [ ! -d "$1" ]; then
    echo "Directory does not exist"
    exit 1
fi

# Get all file types that follow
if [ $# -eq 1 ]; then
    filetypes="tsx jsx html htm"
else
    filetypes="${@:2}"
fi

# Build a regex pattern for find command
regex=""
for filetype in $filetypes
do
    regex+=" -o -name \"**.$filetype\""
done
regex=${regex#" -o"}

# echo "Regex Pattern: $regex"

# Create HTML file name with timestamp
timestamp=$(date +%Y%m%d)
html_file="AltStatusSummary_${timestamp}.html"

# Create HTML file with document title and h1
echo "<!DOCTYPE html>" > $html_file
echo "<html lang=en>" >> $html_file
echo "<head>" >> $html_file
echo "<title>Alt Attribute Analysis</title>" >> $html_file
echo '<style type="text/css">' >> $html_file
echo '  dl {' >> $html_file
echo '    display: flex;' >> $html_file
echo '    flex-flow: row wrap;' >> $html_file
echo '    border: solid #333;' >> $html_file
echo '    border-width: 1px 1px 0 0;' >> $html_file
echo '  }' >> $html_file
echo '  dt {' >> $html_file
echo '    flex-basis: 20%;' >> $html_file
echo '    padding: 2px 4px;' >> $html_file
echo '    background: #333;' >> $html_file
echo '    text-align: right;' >> $html_file
echo '    color: #fff;' >> $html_file
echo '  }' >> $html_file
echo '  dd {' >> $html_file
echo '    flex-basis: 70%;' >> $html_file
echo '    flex-grow: 1;' >> $html_file
echo '    margin: 0;' >> $html_file
echo '    padding: 2px 4px;' >> $html_file
echo '    border-bottom: 1px solid #333;' >> $html_file
echo '  }' >> $html_file
echo ' @media print {' >> $html_file
echo '  dl { border: 0 none }' >> $html_file
echo '  dd { border-bottom: 0 none }' >> $html_file
echo '  dt {' >> $html_file]
echo '    background: none;' >> $html_file
echo '    color: #333;' >> $html_file
echo '  }' >> $html_file
echo ' }' >> $html_file
echo '</style>' >> $html_file
echo "</head>" >> $html_file
echo "<body>" >> $html_file
echo "<h1>Alt Text Summary</h1>" >> $html_file

echo find "$1" -type f \( $regex \);
# # Iterate through each filename with img element present
    # for filename in $(find "$1" -type f \( $regex \)); do
    for filename in $(grep -rl "<img" "$1"); do
        
        if [[ $filename != *.sh ]]; then            
            # Add H2 of filename with count of img elements to HTML file
            echo "<h2>$filename</h2>" >> $html_file
            
            grep -o '<img[^>]*>' $filename | sed 's/<img/\n&/g' | while read line; do
                src=$(echo $line | sed 's/.*src="\([^"]*\).*/\1/')
                alt=$(echo $line | sed 's/.*alt="\([^"]*\).*/\1/')
                width=$(echo $line | sed 's/.*width="\([^"]*\).*/\1/')
                height=$(echo $line | sed 's/.*height="\([^"]*\).*/\1/')
                filename=$(basename -- "$src")
                extension="${filename##*.}"

                if [[ $height == "<img"* ]]; then 
                    height="** MISSING **"
                fi
                if [[ $width == "<img"* ]]; then 
                    width="** MISSING **"
                fi

                trimmed=$(echo "$alt" | sed -e 's/^[[:space:]]//' -e 's/[[:space:]]$//') 
                if [[ $alt == "<img"* ]]; then 
                    alt="** MISSING **"
                elif [[ -z "$alt" ]]; then 
                    alt="The alt attribute is empty."
                elif [[ "$trimmed" == "" ]]; then 
                    alt="present but empty when trimmed. Is this meant to be decorative?"
                    # alt="The alt attribute contains actual characters."
                fi

                if [[ $src != "" ]]; then
                    echo "<h3>$src</h3>" >> $html_file
                    echo "<dl>" >> $html_file
                    echo "<dt>alt:</dt><dd>$alt</dd>" >> $html_file
                    echo "<dt>width:</dt><dd>$width</dd>" >> $html_file
                    echo "<dt>height:</dt><dd>$height</dd>" >> $html_file
                    echo "<dt>extension:</dt><dd>$extension</dd>" >> $html_file
                    # echo "<dt>line number:</dt><dd>$line_number</dd>" >> $html_file
                    echo "</dl>" >> $html_file
                    # echo "src=$src alt=$alt width=$width height=$height"
                fi
            done
        fi
    done
# for filename in $(find "$1" -type f \( $regex \) -exec grep -l "<img" {} \;) do
#     echo $filename
#     # Get count of img elements in filename
#     count=$(grep -c '<img' "$filename")

#     # Add H2 of filename with count of img elements to HTML file
#     echo "<h2>$filename ($count)</h2>" >> $html_file

#     # Iterate through each image element in filename with line number
#     while read -r line; do
#         # Get values for alt attribute, width attribute, height attribute, and img src file extension
#         alt=$(echo "$line" | grep -o 'alt="[^"]*"' | sed 's/alt="//' | sed 's/"//')
#         width=$(echo "$line" | grep -o 'width="[^"]*"' | sed 's/width="//' | sed 's/"//')
#         height=$(echo "$line" | grep -o 'height="[^"]*"' | sed 's/height="//' | sed 's/"//')
#         extension=$(echo "$filename" | grep -o '\.[^\.]*$')
#         line_number=$(grep -n "$line" "$filename" | cut -d ":" -f 1)

#         # Add figure element with img tag and figcaption element with data definition list to HTML file
#         echo "<figure>" >> $html_file
#         echo "<img src=\"$line\">" >> $html_file
#         echo "<figcaption>" >> $html_file
#         echo "<dl>" >> $html_file
#         echo "<dt>alt:</dt><dd>$alt</dd>" >> $html_file
#         echo "<dt>width:</dt><dd>$width</dd>" >> $html_file
#         echo "<dt>height:</dt><dd>$height</dd>" >> $html_file
#         echo "<dt>extension:</dt><dd>$extension</dd>" >> $html_file
#         echo "<dt>line number:</dt><dd>$line_number</dd>" >> $html_file
#         echo "</dl>" >> $html_file
#         echo "</figcaption>" >> $html_file
#         echo "</figure>" >> $html_file

#     done < <(grep '<img' "$filename")
# done

# Close HTML file with body and html tags
echo "</body>" >> $html_file
echo "</html>" >> $html_file

echo "HTML file created: ${html_file}"
