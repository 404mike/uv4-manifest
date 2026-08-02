#!/bin/bash
# crop.sh <slug> <x> <y> <w> <h> <outwidth> [outname]
# Fetches a IIIF region crop in FULL-RES image pixels.
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"

svc_for() {
  case "$1" in
    stoke-by-nayland)        echo 400ce9e8-2f67-44e2-dd68-e6c98880d27f ;;
    st-john-patmos)          echo aa870b0d-5a1b-660a-6dc6-56c12109cf6e ;;
    fountain-villa-torlonia) echo 3f9aa9db-61e1-7060-fdb0-bfd7e41ddd08 ;;
    the-bedroom)             echo 6644829f-f292-c5c4-a73c-0356a6fdbf0d ;;
    paris-street-rainy-day)  echo f8fd76e9-c396-5678-36ed-6a348c904d27 ;;
    *) echo "unknown slug: $1" >&2; exit 1 ;;
  esac
}

slug="$1"; svc="$(svc_for "$slug")"
if [ "$2" = "full" ]; then
  region="full"; ow="${3:-1400}"; name="${4:-${slug}_full}"
else
  region="$2,$3,$4,$5"; ow="${6:-800}"; name="${7:-${slug}_$2_$3_$4_$5}"
fi
out="crops/${name}.jpg"
curl -sL -A "$UA" -H "Accept: image/avif,image/webp,image/apng,image/*,*/*;q=0.8" -H "Referer: https://www.artic.edu/" "https://www.artic.edu/iiif/2/$svc/$region/$ow,/0/default.jpg" -o "$out"
echo "$out  $(file -b "$out")"
