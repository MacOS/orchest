// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { SpinnerLoader } from '@/shared/components/Loader/Loader';
import styles from './PaginationLoadingOverlay.module.css';

interface PaginationLoadingOverlayProps {
  columns: number;
  rows?: number;
}

export const PaginationLoadingOverlay: React.FC<PaginationLoadingOverlayProps> = (_props) => {
  return (
    <div className={styles.overlay}>
      <SpinnerLoader size="lg" />
    </div>
  );
};
