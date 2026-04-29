# AGENTS.md

## Repository Overview

Single-package TypeScript calculator CLI. All code lives in `calculator/` subdirectory.

## Project Structure

```
calculator/
├── src/index.ts    # Entry point: interactive CLI calculator
├── package.json    # Scripts and dependencies
└── tsconfig.json   # TypeScript config (nodenext, strict)
```

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm start` | Run the calculator via ts-node (prompts for 2 numbers + operation) |
| `npm install` | Install dependencies |

## Key Dependencies

- `prompt-sync` - Synchronous CLI prompts
- `ts-node` - Direct TypeScript execution

## TypeScript Configuration

- **Module**: `nodenext`
- **Target**: `esnext`
- **Strict mode**: Enabled with `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`
- Source maps and declarations enabled

## Running the Application

```bash
cd calculator
npm start
```

The CLI will prompt for:
1. First number
2. Second number
3. Operation (`+`, `-`, `*`, `/`)

Outputs the result or validation error.

## Notes

- No test runner configured (`npm test` exits with error)
- No build step configured - runs directly via ts-node
- Division by zero is handled with an error message
