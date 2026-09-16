// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { ROUTES } from '@/shared/constants/routes';
import React from 'react';
import { Navigate } from 'react-router-dom';

/** Legacy /alerts route — alerts now live under Dashboard → Alerts. */
const AlertsPage: React.FC = () => (
  <Navigate to={`${ROUTES.DASHBOARD}?view=alerts`} replace />
);

export default AlertsPage;
