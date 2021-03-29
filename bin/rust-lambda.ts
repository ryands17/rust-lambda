#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import { RustLambdaStack } from '../lib/rust-lambda-stack'

const app = new cdk.App()
new RustLambdaStack(app, 'RustLambdaStack', {
  env: { region: app.node.tryGetContext('region') || 'us-east-2' },
})
