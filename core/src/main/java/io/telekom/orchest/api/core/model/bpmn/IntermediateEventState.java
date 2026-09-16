// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

package io.telekom.orchest.api.core.model.bpmn;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

/** Lifecycle states for an intermediate catch event registration. */
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public enum IntermediateEventState {
  REGISTERED,
  COMPLETED
}
