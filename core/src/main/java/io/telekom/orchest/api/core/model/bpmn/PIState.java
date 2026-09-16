// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

package io.telekom.orchest.api.core.model.bpmn;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

/** Lifecycle states of a process instance from creation to completion or termination. */
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public enum PIState {
  STARTED,
  RUNNING,
  HOLD,
  INCIDENT,
  COMPLETED,
  TERMINATED,
  CANCELLED,
  FAILED;
}
