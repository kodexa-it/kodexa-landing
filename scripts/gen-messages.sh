#!/bin/sh
# Regenera messages/<lang>/index.ts a partir de los .json de cada carpeta.
for l in es en; do
  d="messages/$l"; f="$d/index.ts"
  : > "$f"
  for j in $(ls $d/*.json | sort); do n=$(basename $j .json); echo "import $n from \"./$n.json\"" >> "$f"; done
  echo "" >> "$f"
  echo -n "export default { " >> "$f"
  first=1; for j in $(ls $d/*.json | sort); do n=$(basename $j .json); [ $first = 1 ] || echo -n ", " >> "$f"; echo -n "$n" >> "$f"; first=0; done
  echo " }" >> "$f"
done
