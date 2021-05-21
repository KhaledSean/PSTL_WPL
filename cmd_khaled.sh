#!/bin/bash
if [ $# -lt 1 ]
then
	echo "Usage : $0 pattern_to_delete"
	exit 1
fi

find . -name  *.js |grep -v node_modules >> filePath.txt

find . -name  *.cs >> filePath.txt

pat=$1

while read fichier 
	do 
	sed -i "/\/\/if\[$pat\]/,/\/\/endif\[$pat\]/{/\/\/if\[$pat\]/!{/\/\/endif\[$pat\]/!d}};/\/\/if\[$pat\]/d;/\/\/endif\[$pat\]/d" $fichier
done < filePath.txt

rm filePath.txt
