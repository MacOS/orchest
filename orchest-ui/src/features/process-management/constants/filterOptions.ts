// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { PROCESS_FILTER_ALL_VALUE } from '@/shared/utils/filterUtils';

export const ALL_PROCESSES_OPTION = {
  value: PROCESS_FILTER_ALL_VALUE,
  label: 'All Processes',
} as const;

export const ALL_VERSIONS_OPTION = {
  value: 'all',
  label: 'All Versions'
} as const;
