# Portfolio Image Storage

This directory contains all the images used in the portfolio website, organized by category.

## Directory Structure

```
public/images/
├── profile/       # Personal photos and profile images
│   ├── avatar.jpg # Profile picture
│   └── hero.jpg   # Hero section background
├── projects/      # Project screenshots and demos
│   ├── project1.png
│   ├── project2.png
│   └── project3.png
└── skills/        # Skill and technology logos
    ├── angular.svg
    ├── react.svg
    ├── typescript.svg
    ├── nextjs.svg
    ├── supabase.svg
    └── tailwind.svg
```

## Image Guidelines

1. **Profile Images**
   - Avatar: 400x400px, square aspect ratio
   - Hero: 1920x1080px, 16:9 aspect ratio

2. **Project Screenshots**
   - Recommended size: 1280x720px
   - Format: PNG for screenshots
   - Compress images before adding

3. **Skill Icons**
   - SVG format preferred
   - Size: 64x64px or scalable
   - Monochrome versions for consistency

## Usage

Import image paths from the constants file:
```typescript
import { IMAGES } from '@/lib/constants';

// Use in components
<Image 
  src={IMAGES.PROFILE.AVATAR}
  alt="Profile picture"
  width={400}
  height={400}
/>
``` 