// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import ReplaceMenu from './ReplaceMenu';
import UnlinkEntryProvider from './UnlinkEntryProvider';

export default {
  __init__: [ 'unlinkEntryProvider' ],
  replaceMenu: [ 'type', ReplaceMenu ],
  unlinkEntryProvider: [ 'type', UnlinkEntryProvider ]
};