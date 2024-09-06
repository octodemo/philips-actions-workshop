# Security and Best Practices

In this section, we will cover security and best practices for GitHub Actions workflows, including secrets and variables management, security hardening for workflows, and reusable workflows vs composite actions.

## Secrets and Variables Management

Managing secrets and variables securely is crucial for protecting sensitive information in your workflows.

### Using Secrets

Secrets are encrypted environment variables that you can create in your repository or organization settings. They are used to store sensitive information such as API keys, tokens, and passwords.

Example:

```yaml
jobs:
  use-secrets:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use secrets
        run: echo "Using secrets"
        env:
          SECRET_VALUE: ${{ secrets.MY_SECRET }}
```

In this example, the `MY_SECRET` secret is accessed using the `${{ secrets.MY_SECRET }}` syntax and assigned to the `SECRET_VALUE` environment variable.

### Using Variables

Variables are used to store non-sensitive information that can be reused across multiple steps in a workflow or across multiple repos in an organization.

Example:

```yaml
jobs:
  use-variables:
    runs-on: ubuntu-latest
    env:
      MY_VARIABLE: ${{ vars.MY_VARIABLE }}
    steps:
      - uses: actions/checkout@v2
      - name: Use variables
        run: echo $MY_VARIABLE
```

In this example, the `MY_VARIABLE` variable is accessed using the `${{ vars.MY_VARIABLE }}` syntax and assigned to the `MY_VARIABLE` environment variable.

## Security Hardening for Workflows

Security hardening for workflows involves implementing best practices to protect your workflows from potential security threats.

### Setting Permissions to Edit Workflows

Restricting permissions to edit workflows can help prevent unauthorized changes to your workflows.

To restrict permissions to edit workflows you can create a [Repository Ruleset](https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets) of the type [Push ruleset](https://docs.github.com/en/enterprise-cloud@latest/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets#push-rulesets) and add a rule to restrict the `workflows` directory.

The organization owners can define who can bypass these rules.

### Setting Scopes for Self-Hosted Runners

Setting scopes for self-hosted runners can help limit the access of self-hosted runners to specific repositories or organizations.

Example:

```yaml
jobs:
  self-hosted-runner:
    runs-on: self-hosted
    steps:
      - uses: actions/checkout@v2
      - name: Self-hosted runner
        run: echo "Using self-hosted runner with limited scope"
```

### Runner Groups

Runner groups allow you to organize and manage your self-hosted runners more effectively.

Example:

```yaml
jobs:
  runner-groups:
    runs-on: self-hosted
    steps:
      - uses: actions/checkout@v2
      - name: Runner groups
        run: echo "Using runner groups"
```

## Reusable Workflows vs Composite Actions

Reusable workflows and composite actions are two approaches to creating reusable components in GitHub Actions.

### Reusable Workflows

Reusable workflows allow you to define a workflow once and reuse it in multiple repositories or workflows.

Example:

```yaml
jobs:
  reusable-workflow:
    uses: ./.github/workflows/reusable-workflow.yml
    with:
      some-input: some-value
```

### Composite Actions

Composite actions allow you to combine multiple steps into a single action.

Example:

```yaml
jobs:
  composite-action:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run composite action
        uses: ./.github/actions/composite-action
        with:
          name: 'GitHub Actions Workshop'
```

In this example, the `composite-action` job uses a composite action defined in the `.github/actions/composite-action` directory.