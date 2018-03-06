#!/bin/bash
set -e

convert $1 -resize 900x650 $2 && convert $2 -gravity center -extent 900x650 -background none $2
