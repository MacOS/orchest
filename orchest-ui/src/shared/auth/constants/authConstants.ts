// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

export const OVERRIDE_PREFIX = 'OVERRIDE_';

export const createOverrideRole = (role: string): string => {
  return `${OVERRIDE_PREFIX}${role}`;
};
