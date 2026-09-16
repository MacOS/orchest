// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

package io.telekom.orchest.api.core.model.bpmn;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

/** Lifecycle states of a BPMN node (activity, gateway, or event) during execution. */
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public enum NodeState {
  TRIGGERED,
  REGISTERED,
  STARTED,
  PENDING,
  INCIDENT,
  FAILED,
  COMPLETED,
  CANCELLED,
  SKIPPED
}
