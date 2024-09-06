# Complex Workflows

In this section, we will cover advanced topics related to GitHub Actions workflows, including parallel and sequential jobs, matrix builds, and reusable workflows.

## Parallel and Sequential Jobs

### Parallel Jobs

Parallel jobs allow you to run multiple jobs simultaneously. This can help speed up your CI/CD pipeline by running independent tasks in parallel.

Example:

```yaml
jobs:
  parallel-job-1:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run parallel job 1
        run: echo "Running parallel job 1"

  parallel-job-2:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run parallel job 2
        run: echo "Running parallel job 2"
```

### Sequential Jobs

Sequential jobs allow you to run jobs in a specific order. This can be useful when you have tasks that depend on the completion of previous tasks.

Example:

```yaml
jobs:
  [...]
  sequential-job:
    runs-on: ubuntu-latest
    needs: [parallel-job-1, parallel-job-2]
    steps:
      - uses: actions/checkout@v2
      - name: Run sequential job
        run: echo "Running sequential job"
```

## Matrix Builds

Matrix builds allow you to run a job with multiple configurations. This can be useful for testing your code against different environments or versions of dependencies.

Example:

```yaml
jobs:
  matrix-build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12, 14, 16]
    steps:
      - uses: actions/checkout@v2
      - name: Set up Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
```

## Reusable Workflows

Reusable workflows allow you to define a workflow once and reuse it in multiple repositories or workflows. This can help reduce duplication and make it easier to maintain your CI/CD pipelines.

Example:

```yaml
jobs:
  reusable-workflow:
    uses: ./.github/workflows/reusable-workflow.yml
    with:
      some-input: some-value
```

In this example, the `reusable-workflow` job uses a reusable workflow defined in the `.github/workflows/reusable-workflow.yml` file. You can pass inputs to the reusable workflow using the `with` keyword.

Reusable workflows can also be stored in a separate repository in the same organization or in another organization in the same enterprise. This can be useful if you want to share workflows across multiple repositories.

Example:

```yaml
name: Reusable Workflow

on:
  workflow_call:
    inputs:
      some-input:
        description: 'An example input'
        required: true
        type: string

jobs:
  example-job:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Print input
        run: echo "The input value is ${{ inputs.some-input }}"
```
