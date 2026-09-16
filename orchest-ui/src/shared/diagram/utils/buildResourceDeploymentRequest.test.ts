// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { describe, expect, it } from 'vitest';
import { buildResourceDeploymentRequest } from './buildResourceDeploymentRequest';

describe('buildResourceDeploymentRequest', () => {
  it('includes compensateFlow true with default deployment fields', () => {
    expect(buildResourceDeploymentRequest('<bpmn/>', true)).toEqual({
      resourceUTF8XML: '<bpmn/>',
      partitionCount: 1,
      bypassWorkerValidation: true,
      approvers: [],
      compensateFlow: true,
    });
  });

  it('includes compensateFlow false when off', () => {
    expect(buildResourceDeploymentRequest('<bpmn/>', false).compensateFlow).toBe(false);
  });
});
