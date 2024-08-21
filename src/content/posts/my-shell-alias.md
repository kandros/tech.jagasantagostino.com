---
title: My shell aliases
description: Some of my aliases and functions
pubDate: Aug 21 2024
tags:
  - shell
---


```bash
# mkcd - make a directory and cd into it
function mkcd() {
  mkdir -p "$1" && cd "$1"
}
```

```bash
# ginit - initialize a git repo and commit all files
function ginit() {
  git init && git add . && git commit -m "Initial commit"
}
```

```bash
# g. - git add and commit all files, used for quick commits during prototyping
function g.() {
  git add -A && git commit -m "."
}
```

```bash
# scripts - print all npm scripts
function scripts() {
  cat package.json | jq -r '.scripts'
}
```

```bash
alias p='pnpm'
alias d='docker'
alias dc='docker compose'

# colored cat alternative https://github.com/sharkdp/bat
alias cat='bat'

alias code='code-insiders'
alias c.='code .'
alias ...='../..'
alias ..='cd ..'
```

<!-- changelog -->
