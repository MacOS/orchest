// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { PageTransition } from '@/shared/components';
import { Outlet, useLocation } from 'react-router-dom';

/** Wraps route outlet with fade+slide page transition. */
export function AnimatedOutlet() {
  const location = useLocation();

  return (
    <PageTransition key={location.pathname}>
      <Outlet />
    </PageTransition>
  );
}
