// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { executedPathsTour } from '@/features/process-management/tours/executed-paths.tour'
import { TourConfig } from './types'

// ponytail: register tours here as features add them
export const tours: TourConfig[] = [executedPathsTour]
