#!/usr/bin/env bash
set -euo pipefail

if rg --line-number --glob '*.tsx' --glob '*.ts' '\bJSX\.Element\b|:\s*JSX\.Element' src/app src/components; then
  echo
  echo "Found forbidden global JSX namespace usage in src/app or src/components."
  echo "Prefer inferred return types for components, or React.JSX.Element when explicit typing is required."
  exit 1
fi

echo "No global JSX namespace usage found in src/app or src/components."
