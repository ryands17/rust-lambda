# Rust runtime for Lambda with the CDK

[![Build Status](https://github.com/ryands17/rust-lambda/actions/workflows/main.yml/badge.svg)](https://github.com/ryands17/rust-lambda/actions/workflows/main.yml)

This is a CDK project that deploys a Rust function using the Rust runtime for Lambda. This creates a basic handler that logs some data sent as input.

**Update**: I have updated the Lambda function to use the newly introduced [Graviton Processor](https://aws.amazon.com/blogs/aws/aws-lambda-functions-powered-by-aws-graviton2-processor-run-your-functions-on-arm-and-get-up-to-34-better-price-performance/) for faster and cheaper workloads.

## Prerequisites

- Follow instructions mentioned in [this post](https://aws.amazon.com/blogs/opensource/rust-runtime-for-aws-lambda/) that explains how to build Rust functions for AWS Lambda.

**_Note_**: As we are using `arm` as the architecture, we need to add the following target:

```
rustup target add aarch64-unknown-linux-musl
```

And then follow the instructions as specified [in this post](https://john-millikin.com/notes-on-cross-compiling-rust) for cross-compilation.

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
