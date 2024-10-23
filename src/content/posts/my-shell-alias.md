---
title: My shell aliases - aug 2024
description: Some of my aliases and functions
pubDate: Aug 21 2024
tags:
  - shell
  - shell alias
collection: 
  - 'shell-aliases'
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
'..'='cd ..'
'...'='../..'
b='cargo build'
c='cd ~/coding'
'c.'='cursor .'
cat=bat
cinstall='cargo install --path .'
code=code-insiders
d=docker
db='open -na "DataGrip.app"'
dc='docker compose'
disk=ncdu
diskus=dust
ga='git add'
gaa='git add --all'
gb='git branch'
gbd='git branch -d'
gc='git commit'
gca='git commit -v -a'
'gca!'='git commit -v -a --amend'
gcam='git commit -a -m'
'gcans!'='git commit -v -a -s --no-edit --amend'
gcm='git checkout main || git checkout main'
gco='git checkout'
gd='git diff'
gdc='git diff --cached'
gdca='git diff --cached'
gfrom='git reflog show --no-abbrev --date=iso | grep -i "checkout: moving from" | head -1 | sed '\''s/.*from //'\'' | sed '\''s/ to .*//'\'
gl='git pull'
glg='git log --stat'
glgg='git log --graph'
glgga='git log --graph --decorate --all'
glgm='git log --graph --max-count=10'
glo='git log --oneline --decorate'
glog='git log --oneline --decorate --graph'
gloga='git log --oneline --decorate --graph --all'
glol=glog
glum='git pull upstream master'
gmom='git merge origin/master'
gmt='git mergetool --no-prompt'
gp='git push'
grhh='git reset HEAD --hard'
gst='git status'
karabiner='cd ~/.config/karabiner'
kx=kubectx
l=pll
la='ls -lAh'
ld=lazydocker
ll='ls -lh'
ls='ls -G'
md=glow
n=nvim
'n.'='nvim .'
p=pnpm
pll='pls --grid true'
r='cargo run'
rr='cargo watch -x run'
run-help=man
s='cd ~/coding/scratch'
t='cargo test'
tt='cargo watch -x test'
vim=nvim
vrc='nvim ~/.config/nvim/'
w=wrangler
which-command=whence
zrc='vim ~/.zshrc'
src='vim ~/.zshrc'

```

<!-- changelog -->
