---
publishDate: 2025-12-22T21:00:00-05:00
title: 'Image Copy Test: Automatic Image Transfer'
slug: ''
excerpt: '## Testing Automatic Image Transfer'
image: /assets/images/posts/2025-07-15-the-bioinformatics-triangle.png
imageAlt: The bioinformatics triangle showing relationships
imagePosition: top
authors:
- name: Lina L. Faller, PhD
  link: https://linkedin.com/in/linafaller
category: Quick Take
tags:
- testing
- images
metadata:
  title: 'Image Copy Test: Automatic Image Transfer'
  description: '## Testing Automatic Image Transfer'
  canonical: https://linafaller.github.io/posts//
---

![The bioinformatics triangle showing relationships](/assets/images/posts/2025-07-15-the-bioinformatics-triangle.png)

## Testing Automatic Image Transfer

This post verifies that images are automatically copied to the BWIB repo during cross-posting.

### What Should Happen

1. **Image Detection**: The system detects the featured image in the markdown
2. **File Lookup**: Finds the image file in your blog's assets directory
3. **Image Copy**: Copies the image to `public/blog_images/` in the BWIB repo
4. **Path Update**: Updates the frontmatter to point to the new location: `/blog_images/{filename}`
5. **Git Commit**: Commits both the post and the image in the PR

### The Result

The image should now be:
- ✓ Automatically copied to BWIB's repo
- ✓ Available in `public/blog_images/`
- ✓ Referenced with the new path
- ✓ Ready to be merged with the post

This eliminates manual image handling for the BWIB team!