#!/bin/bash

# Resize team images to 500x500 max dimension while preserving aspect ratio
# Only resizes images larger than 500px in either dimension

TEAM_DIR="public/team"
MAX_SIZE=500

echo "Resizing oversized team images to ${MAX_SIZE}px max..."

shopt -s nullglob
for img in "$TEAM_DIR"/*.jpg "$TEAM_DIR"/*.jpeg "$TEAM_DIR"/*.png "$TEAM_DIR"/*.JPG "$TEAM_DIR"/*.JPEG "$TEAM_DIR"/*.PNG; do
    [ -f "$img" ] || continue

    # Get current dimensions
    width=$(sips -g pixelWidth "$img" 2>/dev/null | tail -1 | awk '{print $2}')
    height=$(sips -g pixelHeight "$img" 2>/dev/null | tail -1 | awk '{print $2}')

    # Skip if we couldn't get dimensions
    [ -z "$width" ] || [ -z "$height" ] && continue

    # Check if image needs resizing
    if [ "$width" -gt "$MAX_SIZE" ] || [ "$height" -gt "$MAX_SIZE" ]; then
        echo "Resizing: $img (${width}x${height})"

        # Resize to fit within MAX_SIZE while preserving aspect ratio
        sips --resampleHeightWidthMax "$MAX_SIZE" "$img" > /dev/null 2>&1

        # Get new dimensions
        new_width=$(sips -g pixelWidth "$img" 2>/dev/null | tail -1 | awk '{print $2}')
        new_height=$(sips -g pixelHeight "$img" 2>/dev/null | tail -1 | awk '{print $2}')
        echo "  -> Now: ${new_width}x${new_height}"
    else
        echo "Skipping: $img (${width}x${height}) - already small enough"
    fi
done

echo "Done!"
