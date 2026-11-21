#!/usr/bin/env python3
"""Create WebP siblings for the portfolio's JPG and PNG source images."""
from pathlib import Path
from PIL import Image, ImageOps

IMAGE_DIR = Path(__file__).resolve().parents[1] / "assets" / "img"
MAX_SIZE = (640, 640)
QUALITY = 76


def main():
    converted = 0
    for source_path in sorted(IMAGE_DIR.iterdir()):
        if source_path.suffix.lower() not in {".jpg", ".jpeg", ".png"}:
            continue
        with Image.open(source_path) as source:
            image = ImageOps.exif_transpose(source)
            image.thumbnail(MAX_SIZE, Image.Resampling.LANCZOS)
            if image.mode not in {"RGB", "RGBA"}:
                image = image.convert("RGBA" if "A" in image.getbands() else "RGB")
            image.save(source_path.with_suffix(".webp"), "WEBP", quality=QUALITY, method=6)
            converted += 1
    print(f"Created {converted} WebP image variants in {IMAGE_DIR}")


if __name__ == "__main__":
    main()
