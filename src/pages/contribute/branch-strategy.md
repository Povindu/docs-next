---
uid: branch_strategy
language: en
title: Branch strategy for SuperOfficeDocs
description: We use feature branches to isolate work in progress from the completed work in the main branch.
topic: tutorial
date: 04.19.2021
author: Bergfrid Dias
layout: ../../layouts/Markdown.astro
---

<!-- # Branch strategy -->

Our main branch is **main**, which the live SuperOfficeDocs is built from.

We use feature branches to isolate work in progress from the completed work in the main branch. Even small fixes and changes should have their own branch. This simplifies the review process and creates an accurate history of changes.

* Create a feature branch for all new features and bug fixes.
* Base the feature branch on the main branch.
* Create pull requests to merge feature branches into the main branch.
* Use lowercase letters, numbers, and hyphens only.

## Naming conventions

* \<docs issue>-feature-name
* \<docs issue>-description
* bugfix-description

:::note{.note}
If you haven't already, create an issue in the appropriate repo so that you can use the **issue ID** in the branch name and commit messages.
:::

## <a id="git-branch"></a>List existing branches with Git Bash

```sh
git branch
```

To include remotes, add `-a`.

To just list your remotes: `git remote -v`

## <a id="git-switch"></a>Create a new local branch with Git Bash

```sh
git switch -c "[INSERT A NEW BRANCH NAME HERE]"
```

Or:

```sh
git checkout -b "[INSERT A NEW BRANCH NAME HERE]"
```

Then:

```sh
git push -u origin "[INSERT A NEW BRANCH NAME HERE]"
```

:::note{.tip}
Did you start making changes in main before making a branch? Don't worry - `git switch` will bring your **uncommitted changes** into the new branch!
:::

Each Git client is different, so consult the help for your preferred client.

## <a id="pr"></a>Pull requests

* Require a pull request to merge code.
* Code merged into the main branch should build cleanly.
* Squash merge.

## <a id="release-branch"></a>Release branches (versioning)

Release branches are long-lived and not merged back into the main branch.

TBD
