# Art Portfolio System for Jekyll al-folio

This system adds a comprehensive art portfolio to your Jekyll site based on al-folio theme.

## Features

- **Art Portfolio Page**: A dedicated `/art/` page showcasing all your artwork
- **Individual Artwork Pages**: Detailed pages for each piece with metadata
- **Blog Integration**: Mark images in blog posts as artwork automatically
- **Responsive Design**: Mobile-friendly grid layout
- **Filtering**: Filter artwork by category
- **Search Integration**: Works with al-folio's search system
- **al-folio Compatible**: Uses existing theme variables and styling

## Setup

### 1. Collections Configuration

The art collection is already configured in `_config.yml`:

```yaml
collections:
  art:
    output: true
    permalink: /art/:name/
```

### 2. File Structure

```
_art/                          # Art collection directory
├── example-artwork.md         # Example artwork file
└── your-artwork.md           # Your artwork files

_pages/
└── art.md                    # Main portfolio page

_layouts/
└── art.liquid                # Individual artwork layout

_includes/
└── art_image.liquid          # Blog integration include

_plugins/
└── art_generator.rb          # Automatic art generation from blog posts

_sass/
└── _art.scss                 # Art portfolio styles

assets/img/art/               # Artwork images directory
```

## Usage

### Creating Artwork

1. **Manual Creation**: Create a new file in `_art/` directory:

```markdown
---
layout: art
title: "Your Artwork Title"
image: "assets/img/art/your-image.jpg"
year: 2024
medium: "Digital Art"
dimensions: "1920x1080px"
description: "Description of your artwork"
tags:
  - digital-art
  - surreal
  - technology
category: "Digital Art"
featured: true
blog_posts:
  - title: "Related Blog Post"
    url: "/blog/2024/related-post/"
---

Your detailed description of the artwork...
```

2. **Blog Integration**: Use the `art_image.liquid` include in blog posts:

```liquid
{% include art_image.liquid 
   image="assets/img/art/your-image.jpg" 
   title="Artwork Title" 
   year="2024" 
   medium="Digital Art" 
   category="Digital Art"
   tags="digital,art,surreal"
   description="Description"
   featured=true %}
```

### Front Matter Options

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | String | Yes | Artwork title |
| `image` | String | Yes | Path to artwork image |
| `year` | Number | No | Creation year (defaults to file date) |
| `medium` | String | No | Art medium (e.g., "Digital Art", "Oil Painting") |
| `dimensions` | String | No | Artwork dimensions |
| `description` | String | No | Short description |
| `tags` | Array | No | Tags for filtering |
| `category` | String | No | Art category |
| `featured` | Boolean | No | Mark as featured artwork |
| `blog_posts` | Array | No | Related blog posts |
| `related_works` | Array | No | Related artwork |
| `techniques` | Array | No | Techniques used |
| `software` | Array | No | Software used |
| `exhibition` | Array | No | Exhibition information |
| `availability` | String | No | Availability status |
| `price` | String | No | Price information |

### Styling

The art portfolio uses al-folio's CSS variables for consistent theming:

- `--global-theme-color`: Primary color for highlights
- `--global-text-color`: Main text color
- `--global-bg-color`: Background color
- `--global-card-bg-color`: Card background
- `--global-divider-color`: Border colors

## Customization

### Adding New Categories

1. Add artwork with new categories in front matter
2. Categories will automatically appear in filter buttons

### Custom Styling

Edit `_sass/_art.scss` to customize the appearance. The styles are designed to be responsive and work with both light and dark themes.

### Advanced Features

- **Exhibition Tracking**: Add exhibition details to front matter
- **Sales Integration**: Include availability and pricing information
- **Related Works**: Link related artwork together
- **Blog Cross-References**: Automatic linking between blog posts and artwork

## Examples

### Basic Artwork

```markdown
---
layout: art
title: "Sunset Dreams"
image: "assets/img/art/sunset.jpg"
year: 2024
medium: "Digital Painting"
description: "A peaceful sunset landscape"
tags: [landscape, digital, peaceful]
category: "Digital Art"
---
```

### Complex Artwork with Metadata

```markdown
---
layout: art
title: "Neural Networks"
image: "assets/img/art/neural.jpg"
year: 2024
medium: "Digital Art"
dimensions: "2560x1440px"
description: "Visualization of neural network connections"
tags: [ai, technology, visualization, abstract]
category: "Digital Art"
featured: true
techniques: [3D modeling, digital painting, post-processing]
software: [Blender, Photoshop, After Effects]
exhibition:
  - name: "Digital Futures"
    venue: "Tech Gallery"
    date: "2024-03-15"
    location: "San Francisco, CA"
availability: "Available for purchase"
price: "$800"
blog_posts:
  - title: "Creating Neural Art"
    url: "/blog/2024/neural-art-process/"
---
```

## Troubleshooting

### Images Not Showing

1. Ensure images are in `assets/img/art/` directory
2. Check image paths in front matter
3. Verify image files exist and are accessible

### Styling Issues

1. Check that `_art.scss` is imported in `main.scss`
2. Verify CSS variables are defined
3. Clear browser cache and rebuild Jekyll site

### Blog Integration Not Working

1. Ensure `art_image.liquid` include exists
2. Check include syntax in blog posts
3. Verify Jekyll plugins are enabled

## Contributing

To add new features or improve the art portfolio system:

1. Follow al-folio's coding standards
2. Use existing CSS variables for theming
3. Ensure responsive design
4. Test with both light and dark themes
5. Update documentation

## License

This art portfolio system follows the same license as al-folio.
