// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import * as replaceOptions from 'bpmn-js/lib/features/replace/ReplaceOptions';

const ALL_OPTIONS = Object.values(replaceOptions).flat();

export function getReplaceOptions(element) {
  return ALL_OPTIONS;
}