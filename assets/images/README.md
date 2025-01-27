# Portfolio Assets Directory

This directory is for storing your original, high-resolution images before they are processed and moved to the public directory.

## Directory Structure

```
assets/images/
├── profile/       # Original profile and personal photos
│   ├── avatar     # Your profile pictures
│   └── hero       # Hero section images
├── projects/      # Original project screenshots and images
│   ├── project1/  # Images for project 1
│   ├── project2/  # Images for project 2
│   └── project3/  # Images for project 3
└── skills/        # Original skill and technology logos
```

## How to Use

1. Place your original images in the appropriate folders:
   - Profile pictures → `profile/`
   - Project screenshots → `projects/`
   - Technology logos → `skills/`

2. Process the images (resize, compress, convert) as needed

3. Move the processed images to the corresponding folders in `public/images/`

## Image Processing Guidelines

1. **Profile Images**
   - Save original high-resolution images here
   - Process to required sizes before moving to public:
     * Avatar: 400x400px
     * Hero: 1920x1080px

2. **Project Screenshots**
   - Keep original screenshots here
   - Process to 1280x720px before moving to public
   - Compress PNG files for web

3. **Skill Icons**
   - Store original SVG files here
   - Optimize SVGs before moving to public
   - Convert to monochrome if needed

## Tools Recommended for Processing

- [Sharp](https://sharp.pixelplumbing.com/) for image resizing
- [SVGO](https://github.com/svg/svgo) for SVG optimization
- [TinyPNG](https://tinypng.com/) for PNG compression
- [Squoosh](https://squoosh.app/) for general image optimization 