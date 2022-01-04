#!/bin/bash


for f in *_*.bmp; do
	[[ "$f" = '*_*.bmp' ]] && exit 1
	echo "$f"
	potrace -s "$f" -o "${f::-4}.svg"
done
