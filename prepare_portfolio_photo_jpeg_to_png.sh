#!/bin/bash
set -e

convert $1 $2 && convert -rotate "90" $2 $2 && convert $2 -resize 900x650 $2 && convert $2 -gravity center -extent 900x650 -background none $2
