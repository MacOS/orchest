// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import equal from 'fast-deep-equal';

export function deepEqual(a: unknown, b: unknown): boolean {
  return equal(a, b);
}
