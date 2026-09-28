// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

export enum ProcessInstanceState {
  TRIGGERED = 'TRIGGERED',
  STARTED = 'STARTED',
  ACTIVE = 'ACTIVE',
  RUNNING = 'RUNNING',
  PENDING = 'PENDING',
  INCIDENT = 'INCIDENT',
  FAILED = 'FAILED',
  HOLD = 'HOLD',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  TERMINATED = 'TERMINATED'
}
