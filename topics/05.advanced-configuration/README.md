# Advanced Configuration

In this section, we will cover advanced configuration topics for GitHub Actions workflows, including environment variables and conditional execution.

## Environment Variables

Environment variables are used to store configuration values that can be accessed by your workflows and actions. They can be defined at different levels, such as repository, workflow, job, or step.

### Defining Environment Variables

You can define environment variables in your workflow file using the `env` keyword.

Example:

```yaml
jobs:
  environment-variables:
    runs-on: ubuntu-latest
    env:
      MY_VARIABLE: "Hello, World!"
    steps:
      - uses: actions/checkout@v2
      - name: Print environment variable
        run: echo $MY_VARIABLE
```

In this example, the `MY_VARIABLE` environment variable is defined at the job level and accessed using the `$MY_VARIABLE` syntax.

### Using Environment Variables in Steps

You can also define environment variables at the step level.

Example:

```yaml
jobs:
  environment-variables:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set environment variable
        run: echo "MY_VARIABLE=Hello, World!" >> $GITHUB_ENV
      - name: Print environment variable
        run: echo $MY_VARIABLE
```

In this example, the `MY_VARIABLE` environment variable is defined in the first step and accessed in the second step.

## Conditional Execution

Conditional execution allows you to run steps or jobs based on specific conditions. This can be useful for controlling the flow of your workflows.

### Using `if` Expressions

You can use the `if` keyword to define conditions for steps or jobs.

Example:

```yaml
jobs:
  conditional-execution:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run on push events
        if: github.event_name == 'push'
        run: echo "This step runs only on push events"
      - name: Run on pull request events
        if: github.event_name == 'pull_request'
        run: echo "This step runs only on pull request events"
```

In this example, the first step runs only on push events, and the second step runs only on pull request events.

### Combining Conditions

You can combine multiple conditions using logical operators such as `&&` (AND) and `||` (OR).

Example:

```yaml
jobs:
  conditional-execution:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run on push to main branch
        if: github.event_name == 'push' && github.ref == 'refs/heads/main'
        run: echo "This step runs only on push events to the main branch"
      - name: Run on pull request to main branch
        if: github.event_name == 'pull_request' && github.base_ref == 'main'
        run: echo "This step runs only on pull request events to the main branch"
```

In this example, the first step runs only on push events to the main branch, and the second step runs only on pull request events to the main branch.
