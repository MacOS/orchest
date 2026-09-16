// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { FilterValue, ProcessStatus } from '@/shared/constants/status';

export const STATUS_OPTIONS = [
  { value: FilterValue.ALL, label: 'All Status' },
  { value: ProcessStatus.RUNNING, label: 'Running' },
  { value: ProcessStatus.COMPLETED, label: 'Completed' },
  { value: ProcessStatus.FAILED, label: 'Failed' },
  { value: ProcessStatus.HOLD, label: 'Hold' },
  { value: ProcessStatus.INCIDENT, label: 'Incident' },
  { value: ProcessStatus.CANCELLED, label: 'Cancelled' }
] as const;
