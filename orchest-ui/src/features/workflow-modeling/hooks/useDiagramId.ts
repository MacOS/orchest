// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useDiagramId = (): string => {
  const diagramId = useMemo(() => `diagram-${uuidv4()}`, []);
  return diagramId;
};
