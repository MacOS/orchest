// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

/** Fixed ambient orb background + grain overlay. Mount once at app root. */
export function AmbientBackground() {
  return (
    <>
      <div className="ambient-canvas" aria-hidden="true" />
      <div className="ambient-grain" aria-hidden="true" />
    </>
  );
}
