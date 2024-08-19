---
title: Remix SPA does pre-render
pubDate: 19 Aug 2024
tags: 
- remix
---

TIL that Remix SPA mode pre-renders the Root layout and index page, so you should be careful using libraries that rely on the DOM to be ready or that depend on the window object.

more info: [https://remix.run/docs/en/main/guides/spa-mode](https://remix.run/docs/en/main/guides/spa-mode)

