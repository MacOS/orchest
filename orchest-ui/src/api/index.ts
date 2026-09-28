// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

export { apiClient, BaseApiService, BaseDefinitionService, httpClient, type ApiError, type ApiRequestConfig, type ApiResponse, type PagedResponse } from './core';

export * from './domains';

export { aiService, aiService as api } from './external';

export * from './types';
