#!/bin/bash

# Git Workflow Automation Script

COMMAND=$1
ARG=$2

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

ensure_clean_working_tree() {
  if ! git diff-index --quiet HEAD --; then
    echo -e "${RED}Error: Working tree is not clean. Please commit or stash changes first.${NC}"
    exit 1
  fi
}

update_branches() {
    echo -e "${BLUE}Fetching latest changes...${NC}"
    git fetch --all
    git checkout dev && git pull origin dev
    git checkout test && git pull origin test
    git checkout main && git pull origin main
}

case $COMMAND in
  "feature-start")
    if [ -z "$ARG" ]; then
      echo -e "${RED}Usage: ./scripts/git-workflow.sh feature-start <feature-name>${NC}"
      exit 1
    fi
    ensure_clean_working_tree
    echo -e "${BLUE}Starting feature '$ARG' from dev...${NC}"
    git checkout dev
    git pull origin dev
    git checkout -b "feature/$ARG"
    echo -e "${GREEN}Feature branch 'feature/$ARG' created.${NC}"
    ;;

  "feature-finish")
    current_branch=$(git branch --show-current)
    if [[ "$current_branch" != feature/* ]]; then
        if [ -z "$ARG" ]; then
            echo -e "${RED}Error: You are not on a feature branch, and no branch name provided.${NC}"
            echo "Usage: ./scripts/git-workflow.sh feature-finish <feature-name> (or run from the branch)"
            exit 1
        else
            BRANCH_NAME="feature/$ARG"
        fi
    else
        BRANCH_NAME="$current_branch"
    fi

    ensure_clean_working_tree
    echo -e "${BLUE}Finishing feature '$BRANCH_NAME'...${NC}"
    
    # Merge into dev
    git checkout dev
    git pull origin dev
    git merge --no-ff "$BRANCH_NAME" -m "merge: finish feature $BRANCH_NAME"
    
    echo -e "${BLUE}Pushing dev to origin...${NC}"
    git push origin dev
    
    echo -e "${BLUE}Deleting local branch '$BRANCH_NAME'...${NC}"
    git branch -d "$BRANCH_NAME"
    
    echo -e "${GREEN}Feature '$BRANCH_NAME' finished and merged to dev.${NC}"
    ;;

  "promote-dev-test")
    ensure_clean_working_tree
    echo -e "${BLUE}Promoting dev to test...${NC}"
    
    git checkout test
    git pull origin test
    git merge dev --no-ff -m "merge: promote dev to test"
    
    echo -e "${BLUE}Pushing test to origin...${NC}"
    git push origin test
    
    git checkout dev
    echo -e "${GREEN}Successfully promoted dev to test.${NC}"
    ;;

  "promote-test-main")
    ensure_clean_working_tree
    echo -e "${BLUE}Promoting test to main...${NC}"
    
    git checkout main
    git pull origin main
    git merge test --no-ff -m "merge: promote test to main"
    
    echo -e "${BLUE}Pushing main to origin...${NC}"
    git push origin main
    
    git checkout dev
    echo -e "${GREEN}Successfully promoted test to main.${NC}"
    ;;
    
  "sync")
    update_branches
    git checkout dev
    echo -e "${GREEN}All branches synced with remote.${NC}"
    ;;

  *)
    echo "Usage: $0 {feature-start|feature-finish|promote-dev-test|promote-test-main|sync}"
    exit 1
    ;;
esac
