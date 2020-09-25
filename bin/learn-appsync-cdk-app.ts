#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LearnAppsyncCdkAppStack } from '../lib/learn-appsync-cdk-app-stack';

const app = new cdk.App();
new LearnAppsyncCdkAppStack(app, 'LearnAppsyncCdkAppStack');
