// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

package io.telekom.orchest.alerting.api.exception;

/** Raised when an alert id does not exist. */
public class AlertNotFoundException extends RuntimeException {

  /**
   * @param id the alert identifier that was not found
   */
  public AlertNotFoundException(String id) {
    super("Alert not found: " + id);
  }
}
