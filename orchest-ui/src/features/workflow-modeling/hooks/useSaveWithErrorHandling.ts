// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { useCallback } from 'react';
import { globalErrorHandler } from '@/shared/error/globalErrorHandler';

export const useSaveWithErrorHandling = (
  saveCallback: (id: string, xml: string) => void,
  diagramId: string
) => {
  return useCallback(
    (xml: string) => {
      try {
        saveCallback(diagramId, xml);
      } catch (error) {
        globalErrorHandler.handleError(
          error instanceof Error ? error : new Error(String(error)),
          'runtime',
          { operation: 'saving diagram' }
        );
      }
    },
    [saveCallback, diagramId]
  );
};
