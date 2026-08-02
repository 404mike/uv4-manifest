#!/usr/bin/env python3
"""Generate local stand-in manifests + test story copies for viewer validation."""
import json, os

BASE = "http://localhost:8765"
DIMS = {
    "stoke-by-nayland": (8690, 6397),
    "st-john-patmos": (6092, 4508),
    "fountain-villa-torlonia": (4414, 5659),
    "the-bedroom": (12614, 9875),
    "paris-street-rainy-day": (9987, 7755),
}
REAL_MANIFEST = {
    "stoke-by-nayland": "https://api.artic.edu/api/v1/artworks/4758/manifest.json",
    "st-john-patmos": "https://api.artic.edu/api/v1/artworks/5848/manifest.json",
    "fountain-villa-torlonia": "https://api.artic.edu/api/v1/artworks/69780/manifest.json",
    "the-bedroom": "https://api.artic.edu/api/v1/artworks/28560/manifest.json",
    "paris-street-rainy-day": "https://api.artic.edu/api/v1/artworks/20684/manifest.json",
}
REAL_CANVAS = {
    "stoke-by-nayland": "https://www.artic.edu/iiif/2/400ce9e8-2f67-44e2-dd68-e6c98880d27f",
    "st-john-patmos": "https://www.artic.edu/iiif/2/aa870b0d-5a1b-660a-6dc6-56c12109cf6e",
    "fountain-villa-torlonia": "https://www.artic.edu/iiif/2/3f9aa9db-61e1-7060-fdb0-bfd7e41ddd08",
    "the-bedroom": "https://www.artic.edu/iiif/2/6644829f-f292-c5c4-a73c-0356a6fdbf0d",
    "paris-street-rainy-day": "https://www.artic.edu/iiif/2/f8fd76e9-c396-5678-36ed-6a348c904d27",
}
REAL_AUDIO = {
    "stoke-by-nayland": "https://www.artic.edu/assets/86aaf438-63d2-52ea-f883-e81dac4ee695",
    "st-john-patmos": "https://www.artic.edu/assets/2364b23c-f4e0-ce4e-9d65-d31a6b0f5dff",
    "fountain-villa-torlonia": "https://www.artic.edu/assets/311c5eb9-7ee8-ad6d-f55e-62045cd798ea",
    "the-bedroom": "https://www.artic.edu/assets/02e976d2-8c4a-3cc2-9d2b-3cee40fe8291",
    "paris-street-rainy-day": "https://www.artic.edu/assets/8313475f-a89a-035d-8a5b-93ac1bfcc69d",
}

os.makedirs("test", exist_ok=True)
for slug, (w, h) in DIMS.items():
    canvas_id = f"{BASE}/test/{slug}-canvas"
    manifest_id = f"{BASE}/test/{slug}-manifest.json"
    manifest = {
        "@context": "http://iiif.io/api/presentation/3/context.json",
        "id": manifest_id,
        "type": "Manifest",
        "label": {"en": [f"{slug} (local test)"]},
        "items": [{
            "id": canvas_id,
            "type": "Canvas",
            "width": w, "height": h,
            "items": [{
                "id": f"{canvas_id}/page",
                "type": "AnnotationPage",
                "items": [{
                    "id": f"{canvas_id}/page/anno",
                    "type": "Annotation",
                    "motivation": "painting",
                    "body": {
                        "id": f"{BASE}/media/{slug}.jpg",
                        "type": "Image",
                        "format": "image/jpeg",
                        "width": w, "height": h
                    },
                    "target": canvas_id
                }]
            }]
        }]
    }
    with open(f"test/{slug}-manifest.json", "w") as f:
        json.dump(manifest, f, indent=2)

    story = json.load(open(f"stories/{slug}.json"))
    s = json.dumps(story)
    s = s.replace(REAL_MANIFEST[slug], manifest_id)
    s = s.replace(REAL_CANVAS[slug], canvas_id)
    s = s.replace(REAL_AUDIO[slug], f"{BASE}/media/{slug}.mp3")
    with open(f"test/{slug}.json", "w") as f:
        f.write(s)
    print(f"test/{slug}.json + manifest written")
