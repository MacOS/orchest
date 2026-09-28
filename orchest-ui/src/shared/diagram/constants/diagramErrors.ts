// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

export const createDiagramErrorContext = (engine: string): string => {
  return `diagram-viewer-import-${engine}`;
};

export const ERROR_SEVERITY = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low',
} as const;
