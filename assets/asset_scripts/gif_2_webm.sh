ffmpeg -i $1 -c:v libvpx -crf 12 -b:v 500K -auto-alt-ref 0 $2
