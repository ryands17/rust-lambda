import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'

export class RustLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // Function that calls Rust
    new lambda.Function(this, 'rust-hello', {
      code: lambda.Code.fromAsset('resources'),
      runtime: lambda.Runtime.PROVIDED_AL2,
      handler: 'not.required',
      timeout: cdk.Duration.seconds(10),
      memorySize: 128,
      environment: {
        RUST_BACKTRACE: '1',
      },
    })
  }
}
