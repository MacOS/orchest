// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

/**
 * Shared types for BPMN Generator feature
 */

export interface BpmnProcess {
  id?: string;
  name?: string;
  xml?: string;
  [key: string]: unknown;
}

export interface BpmnJsonData {
  elements?: Array<{
    id: string;
    name?: string;
    type: string;
    [key: string]: unknown;
  }>;
  [key: string]: unknown;
}

export interface BpmnCanvas {
  zoom: (mode: string) => void;
}
