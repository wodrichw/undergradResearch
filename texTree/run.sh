#!/bin/bash

cd "$(dirname "$0")"

if [ $1 ]
then
	python buildTree.py $1
	cd output
	scour -i tree$1.svg -o tree$1_opt.svg --enable-viewboxing --enable-id-stripping --enable-comment-stripping --shorten-ids --indent=none
	rm tree$1.svg
	rm tree$1
else
	echo "size of tree needs to be specified"
fi
	
