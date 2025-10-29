# 🚀 Git Setup and Push Guide

Follow these steps to push your project to GitHub:

## Step 1: Initialize Git Repository

Open your terminal in the `community-reporting-tool` folder and run:

```bash
cd community-reporting-tool
git init
```

## Step 2: Add All Files

```bash
git add .
```

## Step 3: Create Initial Commit

```bash
git commit -m "Initial commit: Community Based Reporting Tool with React"
```

## Step 4: Create GitHub Repository

### Option A: Using GitHub Website
1. Go to https://github.com/new
2. Repository name: `community-reporting-tool`
3. Description: `A modern React-based community incident reporting and monitoring platform`
4. Choose Public or Private
5. **DO NOT** initialize with README (we already have one)
6. Click "Create repository"

### Option B: Using GitHub CLI (if installed)
```bash
gh repo create community-reporting-tool --public --source=. --remote=origin
```

## Step 5: Connect to GitHub Repository

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/community-reporting-tool.git
```

## Step 6: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

## 🎉 Done!

Your project is now on GitHub! Visit:
```
https://github.com/YOUR_USERNAME/community-reporting-tool
```

---

## 📝 Future Updates

When you make changes, use these commands:

```bash
# Check status
git status

# Add changes
git add .

# Commit with message
git commit -m "Your commit message here"

# Push to GitHub
git push
```

---

## 🔧 Troubleshooting

### If you get authentication errors:

#### Using HTTPS:
You'll need a Personal Access Token (PAT):
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select scopes: `repo`
4. Copy the token
5. Use it as password when pushing

#### Using SSH (Recommended):
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to SSH agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub: Settings → SSH and GPG keys → New SSH key
```

Then change remote to SSH:
```bash
git remote set-url origin git@github.com:YOUR_USERNAME/community-reporting-tool.git
```

---

## 📦 Additional Commands

### Create a new branch
```bash
git checkout -b feature/new-feature
```

### Switch branches
```bash
git checkout main
```

### Merge branch
```bash
git checkout main
git merge feature/new-feature
```

### View commit history
```bash
git log --oneline
```

### Undo last commit (keep changes)
```bash
git reset --soft HEAD~1
```

---

## 🌟 Best Practices

1. **Commit Often** - Small, focused commits
2. **Write Clear Messages** - Describe what and why
3. **Use Branches** - For new features
4. **Pull Before Push** - Stay updated
5. **Review Changes** - Before committing

### Good Commit Messages:
```bash
git commit -m "Add search functionality to dashboard"
git commit -m "Fix: Resolve image upload bug"
git commit -m "Update: Improve form validation"
git commit -m "Refactor: Optimize complaint loading"
```

---

## 📚 Resources

- [GitHub Docs](https://docs.github.com)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Happy Coding! 🚀**
