// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { OrchLogo } from '@/shared/components/OrchLogo';
import styles from './PageLoader.module.css';

export const PageLoader: React.FC = () => (
  <div className={styles.container}>
    <OrchLogo size={64} />
  </div>
);