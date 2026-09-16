// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './shared/error/globalErrorHandler'; // Initialize global error handler
import { logger } from './shared/utils/logger';
import { setupCSPReporting } from './shared/utils/securityUtils';

logger.info('Current MODE:', import.meta.env.MODE || 'unknown');

// SECURITY: Setup CSP violation reporting
setupCSPReporting();

createRoot(document.getElementById("root")!).render(<App />);
