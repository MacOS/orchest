// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import type { AlertState } from '@/api/domains/alerts';

export type AlertAction = 'acknowledge' | 'silence' | 'unmute' | 'resolve';

export function getAvailableAlertActions(state: AlertState): AlertAction[] {
  switch (state) {
    case 'FIRING':
      return ['acknowledge', 'silence', 'resolve'];
    case 'ACKNOWLEDGED':
      return ['silence', 'resolve'];
    case 'SILENCED':
      return ['unmute', 'resolve'];
    case 'RESOLVED':
      return [];
    default:
      return [];
  }
}
