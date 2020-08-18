# @jamesrwilliams/prtscr

![npm](https://img.shields.io/npm/v/@jamesrwilliams/prtscr) ![npm](https://img.shields.io/npm/dt/@jamesrwilliams/prtscr)

A website screenshot tool on the command line.

## Installation

```
npm i -g @jamesrwilliams/prtscr
```

## Usage

For a single URL:

```bash
ptrscr https://google.com
```

Load a new line separated file of URLs to batch screenshot using the `--file` arg.

```bash
prtscr --file "./urls.txt"
```

## Options

- `-f, --file` - Tells prtscr that you're passing a file. Will treat each new line as a URL.
