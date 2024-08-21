---
title: Test
description: This is a test
pubDate: Aug 15 2024
heroImage: https://picsum.photos/id/10/1200/800
tags:
  - my test 
  - another tag
---

something



```html 
<!-- src/layouts/BlogPost.astro -->
<main class="max-w-screen-md p-3 md:px-12 md:py-24 prose  mx-auto">
  <h1>{entry.data.title}</h1>
  <h2>{entry.data.description}</h2>  
  
  <Content />
</main>
```

