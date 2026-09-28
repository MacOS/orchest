// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

package io.telekom.orchest.connectorservice.config.kms;

import de.telekom.solutions.kmsclient.EnableKMS;
import org.springframework.context.annotation.Configuration;

/** Enables KMS integration for the connector service module. */
@Configuration
@EnableKMS
public class KmsConfigurations {}
