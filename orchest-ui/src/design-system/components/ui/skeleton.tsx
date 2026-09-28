// SPDX-FileCopyrightText: 2026 Deutsche Telekom AG
//
// SPDX-License-Identifier: Apache-2.0

import clsx from "clsx"
import styles from "./skeleton.module.css"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(styles.skeleton, className)}
      {...props}
    />
  )
}

export { Skeleton }
