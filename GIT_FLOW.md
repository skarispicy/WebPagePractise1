# Git Workflow & Strategy

This project follows a structured Git flow to ensure stability and code quality.

## Branches

- **`dev` (Primary Feature Branch):** The main branch for development. All feature branches start from here and merge back into here.
- **`test` (Testing Environment):** Used for integration testing. Code is promoted here from `dev`.
- **`main` (Production):** The stable, production-ready branch. Code is promoted here from `test`.

## Workflow

1.  **Start a Feature:**
    Create a new branch off `dev`.
    ```bash
    npm run git:feature-start <feature-name>
    ```

2.  **Develop:**
    Make changes, commit frequently using the [Commit Convention](./COMMIT_CONVENTION.md).

3.  **Finish a Feature:**
    Merge the feature branch back into `dev` and delete the feature branch.
    ```bash
    npm run git:feature-finish
    ```

4.  **Promote to Test:**
    Merge `dev` into `test` for QA/Testing.
    ```bash
    npm run git:promote-dev
    ```

5.  **Promote to Main:**
    Merge `test` into `main` for release.
    ```bash
    npm run git:promote-main
    ```

## Branch Protection Rules (Recommended)

Configure these settings in your remote repository (e.g., GitHub, GitLab):

### `main`
- **Require pull request reviews before merging:** Yes (at least 1 approval).
- **Require status checks to pass before merging:** Yes (CI/Build).
- **Require signed commits:** Optional.
- **Do not allow bypassing settings:** Yes.
- **Restrict pushes:** Only allow pushes via Pull Requests (or admin only).

### `test`
- **Require status checks:** Yes.
- **Restrict pushes:** Developers.

### `dev`
- **Protect branch:** Prevent force pushes.
