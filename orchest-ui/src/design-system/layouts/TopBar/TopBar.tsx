// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import React from "react";
import { GlobalSearchBar } from "../GlobalSearchBar/GlobalSearchBar";
import { TenantSelector } from "../TenantSelector/TenantSelector";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { ApprovalsBellButton } from "./ApprovalsBellButton";
import styles from "./TopBar.module.css";

export const TopBar: React.FC = () => {
  return (
    <header className={styles.topBar}>
      <div className={styles.spacer} />
      <div className={styles.searchArea}>
        <GlobalSearchBar />
      </div>
      <div className={styles.rightArea}>
        <TenantSelector />
        <ApprovalsBellButton />
        <ThemeToggle />
      </div>
    </header>
  );
};
