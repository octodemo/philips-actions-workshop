# Basic Workflow

This section covers the basics of creating and using GitHub Actions workflows. It includes a simple CI pipeline example and introduces key concepts such as workflows, jobs, steps, and actions.

## Contents

Workflows are defined using YAML files that are stored in the `.github/workflows` directory of your repository. Each workflow file is executed in response to specific events.

## Example Workflow

Below is an example of a basic CI pipeline executed on every push to the `main` branch. The pipeline runs on the latest version of Ubuntu and includes three steps: checking out the repository, setting up Node.js, and running tests.

```yaml
name: 01. Basic Workflow
on:
  push:
    branches:
      - main
jobs:
  test:
    runs-on: ubuntu-latest # For all examples, change the runner type for Philips' self-hosted runners labels
    defaults: # This sets the default folder for all steps in the job
      run:
        working-directory: sample-app
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

## Exercise: Create Your First GitHub Actions Workflow

Follow these steps to create and run your first GitHub Actions workflow:

1. **Create a new repository**:
  - Go to GitHub org provided by the Philips team and create a new repository.

2. **Add a workflow file**:
  - In your repository, create a new directory called `.github/workflows`.
  - Inside this directory, create a new file named `01.basic-workflow.yml`.

3. **Define the workflow**:
  - Create a workflow that builds a NodeJS project on every push to the `main` branch.
  - Set the default directory to be `sample-app`.

4. **Push the changes**:
  - Commit and push the changes to the `main` branch of your repository.

5. **Observe the workflow execution**:
  - Go to the "Actions" tab in your GitHub repository.
  - You should see the workflow running. Wait for it to complete.

6. **Check the results**:
  - Once the workflow completes, check the logs to ensure all steps were executed successfully.

By completing this exercise, you will have created a basic CI pipeline using GitHub Actions.
