// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import clsx from 'clsx';
import { Loader2 } from 'lucide-react';
import React from 'react';
import styles from './loading-icon.module.css';

interface LoadingIconProps {
    className?: string;
    size?: number;
}

const LoadingIcon: React.FC<LoadingIconProps> = ({ className, size = 16 }) => {
    return (
        <Loader2
            className={clsx(styles.spin, className)}
            size={size}
        />
    );
};

export { LoadingIcon };
