// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

export {
    apiClient, httpClient, type ApiError, // Alias for backwards compatibility
    type ApiRequestConfig,
    type ApiResponse,
    type PagedResponse
} from './httpClient'

export { httpClient as default } from './httpClient'

export {
    BaseApiService,
    BaseDefinitionService
} from './BaseApiService'

