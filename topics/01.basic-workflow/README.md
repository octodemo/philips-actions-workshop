# Basic Workflow

This section covers the basics of creating and using GitHub Actions workflows. It includes a simple CI pipeline example and introduces key concepts such as workflows, jobs, steps, and actions.

## Contents

Workflows are defined using YAML files that are stored in the `.github/workflows` directory of your repository. Each workflow file is executed in response to specific events.

## Example Workflow

Below is an example of a basic CI pipeline executed on every push to the `main` branch. The pipeline runs on the latest version of Ubuntu and includes three steps: checking out the repository, setting up Node.js, and running tests.

```yaml
name: CI Pipeline
on:
  push:
    branches:
      - main
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
```