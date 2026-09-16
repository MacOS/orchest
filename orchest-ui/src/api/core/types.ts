// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { AxiosRequestConfig } from "axios";

export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  success: boolean;
  timestamp: string;
}

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
  errors?: Record<string, string[]>;
  timestamp: string;
}

export interface ApiRequestConfig extends AxiosRequestConfig {
  retry?: number;
  retryDelay?: number;
  skipAuthHeader?: boolean;
  _retry?: boolean;
}
