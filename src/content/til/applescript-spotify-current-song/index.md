---
title: AppleScript to get Spotify current song
pubDate: 19 Aug 2024
tags: 
- applescript
- spotify
- scripting
---

```bash
osascript -e 'tell application "Spotify" to return (name of current track) & " - " & (artist of current track)'
```

![image](./image.png)
![gif](https://media.cleanshot.cloud/media/363/3KIUWeWGrmBU94kJoBBQheyCpgvTeRzEF8rDh4ld.gif?Expires=1724104408&Signature=LFHBmpWDfOWPe88TcvV~-c65nO2odorhTaWN2F2LwfA~GNHgFFPHVzr6tEvym2VbBFdnFgzIW7V-z9G9IQ0fsfsUP~P5NyjdM-vzw1kBWkistSHi3P6UZdDlvidtsqcfB52oUczKJa3iLTcGZa-SLxdQWdd~Azoxxl~VA0yBdde-JSx6sht6EHDcm3bkI6JPimnxMOv7fgHJs--wDPw4um4q-XwDsdduxdQoSpwgLTvSnmIYRq~YSxpPy3BXCTTMwpVHv5TdRLTN~KFooDvWNz~GKeL5vfjOComAk1Zjy9NkPOAT9KE9duewBCqS4dGmh7-7G47ulqseV5ZWrHvDLg__&Key-Pair-Id=K269JMAT9ZF4GZ)

