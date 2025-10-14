---
layout: post
title: "Creating Art from Digital Dreams"
description: "A behind-the-scenes look at how I created my latest digital artwork and the process of integrating it into my portfolio."
tags:
  - digital-art
categories:
  - art
featured: true
date: 2025-10-14T10:00:00
thumbnail: assets/img/art/digital-dreams-thumb.jpg
---

This post demonstrates how to integrate artwork into blog posts and automatically have it appear in your portfolio.

## The Creative Process

Creating digital art is a journey that combines technical skills with artistic vision. In this post, I'll walk you through the process of creating "Digital Dreams" and how I've integrated it into my portfolio system.

{% include art_image.liquid 
   image="assets/img/art/IMG_1786.jpg" 
   title="Digital Dreams" 
   year="2024" 
   medium="Digital Art" 
   category="Digital Art"
   tags="digital,art,surreal,technology,consciousness"
   description="A surreal exploration of technology and consciousness, blending organic forms with digital elements."
   featured=true %}

## Technical Approach

The artwork was created using a combination of 3D modeling and digital painting techniques. Here's what went into the process:

1. **Concept Development**: Starting with sketches and mood boards
2. **3D Modeling**: Creating the base forms in Blender
3. **Digital Painting**: Adding details and atmosphere in Photoshop
4. **Post-Processing**: Final color grading and effects

## Integration with Portfolio

This artwork is automatically integrated into my portfolio system. By using the `art_image.liquid` include, the image is marked as artwork and will appear in:

- The main art portfolio page at `/portfolio/`
- Individual artwork pages with full metadata
- Related blog post links
- Portfolio statistics and filtering

## Benefits of This System

The art portfolio integration provides several advantages:

- **Automatic Organization**: Artwork is automatically categorized and tagged
- **Cross-Referencing**: Blog posts and artwork are linked bidirectionally
- **Consistent Metadata**: Standardized information across all artwork
- **Easy Management**: Simple markdown files for each artwork

## Next Steps

I'm planning to expand this system to include:

- Exhibition tracking
- Sales and availability status
- Related artwork suggestions
- Advanced filtering by technique and medium

The integration between blog posts and artwork creates a richer, more connected experience for visitors exploring my creative work.
