# aws-codebuild-starter-node-express-typescript

## 1. Coding steps

Clone/Download this repo.

**Buildspec (/buildspec.yml):**
CodeBuild will use this to first install TypeScript, install dependencies, build the project, run tests, then copy the required files (artifacts) to the ElasticBeanstalk instances.

You can modifiy the steps in this file, however the indentation is very important.

You can read more details on the buildspec file [here](https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html).

## Steps to take on AWS

### 1. Elastic Beanstalk

- create new application

- Create new environment
  - Web server environment
  - Platform: Node.js

### 2. CodePipeline

- Create Pipeline
  - Source Provider: GitHub
    - Select Repo/Branch
    - Use GitHub webhooks
- Build provider: AWS CodeBuild
  - Create project
    - OS: Ubuntu
    - Runtime: Standard
    - Image: 4.0
    - Buildspec: Use a buildspec file
      Deploy provider: AWS Elastic Beanstalk
  - Application and Environment name: (Select options created in step 1)

_AWS CodePipeline will now begin using the specified repo/branch_
