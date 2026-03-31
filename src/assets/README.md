# Assets Folder

This folder contains static assets for the personal blog.

## Structure

- **images/**: All image files
  - `logo.svg`: Portfolio logo (currently a placeholder SVG)

## How to Add Your Logo

1. Replace `logo.svg` with your own logo file
2. Supported formats: PNG, JPG, SVG, WebP
3. Recommended size: At least 200x200px for best quality
4. The logo will be displayed at 80x80px in the sidebar

### To update the logo reference in HTML:

- If using a PNG: Change `src="assets/images/logo.svg"` to `src="assets/images/logo.png"`
- If using a JPG: Change `src="assets/images/logo.svg"` to `src="assets/images/logo.jpg"`
- If using SVG: Keep as is or replace the current logo.svg

## Adding More Images

Create subdirectories as needed:

- `images/icons/` - For icon files
- `images/backgrounds/` - For background images
- And so on...

Then reference them in your components like: `assets/images/icons/icon-name.svg`
