---
title:  Change default SQLite output mode to table
pubDate: 31 Aug 2024
tags:
  - sqlite
---

To set the default output mode to "table" when using `sqlite3` you can add `.mode table` to the `~/.sqliterc` file.

```
echo ".mode table" >> ~/.sqliterc
```