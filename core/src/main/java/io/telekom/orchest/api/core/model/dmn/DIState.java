// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

package io.telekom.orchest.api.core.model.dmn;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

/** Lifecycle states of a decision instance evaluation. */
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public enum DIState {
  EXECUTED,
  FAILED;
}
