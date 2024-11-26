import React from "react";

export const CollapseArrow = ({
  htmlColor,
}: {
  htmlColor?: string;
}): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        fill={htmlColor ? htmlColor : "#9E9E9E"}
        d="M11 18l-1.41-1.41L16.17 12l-6.58-6.59L11 4l6 6-6 6z"
      />
      <path
        fill={htmlColor ? htmlColor : "#9E9E9E"}
        d="M17.59 18L19 16.59 14.42 12l4.58-4.59L17.59 6l-6 6 6 6z"
      />
    </svg>
  );
};

export const ExpandArrow = ({
  htmlColor,
}: {
  htmlColor?: string;
}): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        fill={htmlColor ? htmlColor : "#9E9E9E"}
        d="M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6-6-6z"
      />
      <path
        fill={htmlColor ? htmlColor : "#9E9E9E"}
        d="M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6-6-6z"
      />
    </svg>
  );
};

export declare const pxToRem: (...values: number[]) => string;

/**
 * Creates an object with test and QA IDs.
 *
 * @param {string} testId - The test ID to be used for both 'data-testid' and 'data-qa' attributes.
 * @param {string} [testKey='data-testid'] - The key to be used for the test ID attribute.
 * @returns {Object} An object with the specified test key and test ID.
 */
export declare const generateTestId: (
  testId?: string,
  testKey?: string
) => { [key: string]: string } | undefined;
