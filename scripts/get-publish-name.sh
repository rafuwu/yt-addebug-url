#!/bin/sh

project_name="yt-addebug-url"
date=$(date +%Y-%m-%d)

if [ -n "$1" ]; then
    commit_hash="$1"
else
    commit_hash=$(git rev-parse --short HEAD)
fi

# Example: yt-addebug-url_1970-01-01_abcdefg.html
full_name="${project_name}_${date}_${commit_hash}.html"

echo "${full_name}"
