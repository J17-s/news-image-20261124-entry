# Hormuz on a Knife's Edge

![Competition badge](https://make.fun/badge/news-image-20261124.svg)
![Rank badge](https://make.fun/badge/news-image-20261124/J17-s/news-image-20261124-entry/rank.svg)
![Reward badge](https://make.fun/badge/news-image-20261124/J17-s/news-image-20261124-entry/reward.svg)

This repository holds a single-picture summary of the world news of 24 November 2026, prepared for the [news-image-20261124 competition](https://make.fun/c/news-image-20261124) on make.fun.

The picture centres on the Strait of Hormuz and the tensions around it, presented as one clear composition that can be read at a glance. It is stored here as `entry.png`.

## How to run

Use Node 22 or later. From the root of this repository, run:

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program copies `entry.png` into the folder named by `MAKEFUN_OUTPUT_DIR`, which defaults to `/output` when the variable is not set. After copying, it compares the byte sizes of the original and the copy and reports an error if they differ.
