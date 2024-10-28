---
title: show brew package dependencies
pubDate: 28 oct 2024
tags:
  - brew
---

```bash
# all below example use this brew version
❯ brew -v
Homebrew 4.4.2
```


## Basic 
```bash
❯ brew deps elixir
ca-certificates
erlang
jpeg-turbo
libpng
libtiff
libtool
lz4
m4
openssl@3
pcre2
unixodbc
wxwidgets
xz
zstd
```

## As tree 🌳
```bash
❯ brew deps elixir --tree
elixir
└── erlang
    ├── openssl@3
    │   └── ca-certificates
    ├── unixodbc
    │   └── libtool
    │       └── m4
    └── wxwidgets
        ├── jpeg-turbo
        ├── libpng
        ├── libtiff
        │   ├── jpeg-turbo
        │   ├── xz
        │   └── zstd
        │       ├── lz4
        │       └── xz
        └── pcre2
```

## As graph or diagram
```bash
❯ brew deps elixir --graph
```
<iframe class="w-full h-80 mt-3 rounded" src="https://dreampuf.github.io/GraphvizOnline/#digraph%20%7B%0A%20%20%22elixir%22%20-%3E%20%22erlang%22%0A%20%20%22erlang%22%20-%3E%20%22openssl%403%22%0A%20%20%22erlang%22%20-%3E%20%22unixodbc%22%0A%20%20%22erlang%22%20-%3E%20%22wxwidgets%22%0A%20%20%22openssl%403%22%20-%3E%20%22ca-certificates%22%0A%20%20%22unixodbc%22%20-%3E%20%22libtool%22%0A%20%20%22libtool%22%20-%3E%20%22m4%22%0A%20%20%22wxwidgets%22%20-%3E%20%22jpeg-turbo%22%0A%20%20%22wxwidgets%22%20-%3E%20%22libpng%22%0A%20%20%22wxwidgets%22%20-%3E%20%22libtiff%22%0A%20%20%22wxwidgets%22%20-%3E%20%22pcre2%22%0A%20%20%22libtiff%22%20-%3E%20%22jpeg-turbo%22%0A%20%20%22libtiff%22%20-%3E%20%22xz%22%0A%20%20%22libtiff%22%20-%3E%20%22zstd%22%0A%20%20%22zstd%22%20-%3E%20%22lz4%22%0A%20%20%22zstd%22%20-%3E%20%22xz%22%0A%7D"/>

## Other options

```bash
❯ brew deps -h
Usage: brew deps [options] [formula|cask ...]

Show dependencies for formula. When given multiple formula arguments, show the
intersection of dependencies for each formula. By default, deps shows all
required and recommended dependencies.

If any version of each formula argument is installed and no other options are
passed, this command displays their actual runtime dependencies (similar to
brew linkage), which may differ from the current versions' stated dependencies
if the installed versions are outdated.

Note: --missing and --skip-recommended have precedence over --include-*.

  -n, --topological                Sort dependencies in topological order.
  -1, --direct, --declared, --1    Show only the direct dependencies declared in
                                   the formula.
      --union                      Show the union of dependencies for multiple
                                   formula, instead of the intersection.
      --full-name                  List dependencies by their full name.
      --include-build              Include :build dependencies for formula.
      --include-optional           Include :optional dependencies for
                                   formula.
      --include-test               Include :test dependencies for formula
                                   (non-recursive).
      --skip-recommended           Skip :recommended dependencies for
                                   formula.
      --include-requirements       Include requirements in addition to
                                   dependencies for formula.
      --tree                       Show dependencies as a tree. When given
                                   multiple formula arguments, show individual
                                   trees for each formula.
      --graph                      Show dependencies as a directed graph.
      --dot                        Show text-based graph description in DOT
                                   format.
      --annotate                   Mark any build, test, implicit, optional, or
                                   recommended dependencies as such in the
                                   output.
      --installed                  List dependencies for formulae that are
                                   currently installed. If formula is
                                   specified, list only its dependencies that
                                   are currently installed.
      --missing                    Show only missing dependencies.
      --eval-all                   Evaluate all available formulae and casks,
                                   whether installed or not, to list their
                                   dependencies.
      --for-each                   Switch into the mode used by the --eval-all
                                   option, but only list dependencies for each
                                   provided formula, one formula per line.
                                   This is used for debugging the
                                   --installed/--eval-all display mode.
      --HEAD                       Show dependencies for HEAD version instead of
                                   stable version.
      --os                         Show dependencies for the given operating
                                   system.
      --arch                       Show dependencies for the given CPU
                                   architecture.
      --formula, --formulae        Treat all named arguments as formulae.
      --cask, --casks              Treat all named arguments as casks.
  -d, --debug                      Display any debugging information.
  -q, --quiet                      Make some output more quiet.
  -v, --verbose                    Make some output more verbose.
  -h, --help                       Show this message.
  ```