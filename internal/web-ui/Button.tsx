/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React = require("react");
import { VoidCallback } from "@internal/typescript-helpers";

const {css, cx} = require("emotion");

export default function Button(
	props: {
		className?: string;
		children: React.ReactNode;
		onClick: VoidCallback;
	},
) {
	return <div onClick={props.onClick}
	className={cx(
		css`
          display: inline-block;
          background-color: #121212;
          border-radius: 5px;
          cursor: pointer;
          border: 1px solid #303030;
          padding: 10px;
          line-height: 20px;

          &:hover {
            background-color: #1c1c1c;
          }
        `,
		props.className,
	)}>
		{props.children}
	</div>;
}
