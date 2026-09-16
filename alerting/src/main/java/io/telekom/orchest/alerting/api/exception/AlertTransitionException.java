// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

package io.telekom.orchest.alerting.api.exception;

/** Raised when a requested lifecycle transition is illegal for the current alert state. */
public class AlertTransitionException extends RuntimeException {

  /**
   * @param message description of the illegal transition attempt
   */
  public AlertTransitionException(String message) {
    super(message);
  }
}
