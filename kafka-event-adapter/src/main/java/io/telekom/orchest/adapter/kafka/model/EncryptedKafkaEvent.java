// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

package io.telekom.orchest.adapter.kafka.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Wrapper DTO holding an encrypted event payload for Kafka transport. */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EncryptedKafkaEvent {
  private String event;
}
