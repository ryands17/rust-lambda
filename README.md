# Rust runtime for Lambda with the CDK

This is a CDK project that deploys a Rust function using the Rust runtime for Lambda. This creates a basic handler that logs some data sent as input.

## Prerequisites

- Follow instructions mentioned in [this post](https://aws.amazon.com/blogs/opensource/rust-runtime-for-aws-lambda/) that explains how to build Rust funcitons for AWS Lambda.

- Create a `cdk.context.json` with the `region` key to specify the region of your choice (default is `us-east-2`).

```json
{
  "region": "us-east-1"
}
```

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `yarn build` compile typescript to js
- `yarn watch` watch for changes and compile
- `yarn test` perform the jest unit tests
- `yarn deploy` deploy this stack to your default AWS account/region
- `yarn cdk diff` compare deployed stack with current state
- `yarn cdk synth` emits the synthesized CloudFormation template
