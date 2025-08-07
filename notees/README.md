# 🚀 Automated Git Auto-Commit & Push to GitHub Every 15 Minutes (Windows)

Keep your project changes backed up and versioned on GitHub—**hands-free**!  
This guide explains how to set up your Windows system to **automatically commit and push** all changes in your local folder (`notees`) to GitHub every 15 minutes using a batch script and Windows Task Scheduler.

---

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [1. Initialize Local Git Repository](#1-initialize-local-git-repository)
  - [2. Create a GitHub Repository](#2-create-a-github-repository)
  - [3. Connect Local Repo to GitHub](#3-connect-local-repo-to-github)
  - [4. Set Up SSH Authentication](#4-set-up-ssh-authentication)
  - [5. Create the Auto-Commit Batch Script](#5-create-the-auto-commit-batch-script)
  - [6. Test the Script](#6-test-the-script)
  - [7. Automate with Windows Task Scheduler](#7-automate-with-windows-task-scheduler)
- [FAQ](#faq)
- [Troubleshooting & Tips](#troubleshooting--tips)

---

## 🌟 Features

- **Automatic commit & push:** No manual steps required after setup.
- **Customizable frequency:** Default every 15 minutes (adjustable).
- **SSH authentication:** No password prompts, fully automated.
- **Simple to disable or modify.**
- **Works on any Windows folder/repo.**

---

## 🛠 Prerequisites

- Windows PC
- [Git](https://git-scm.com/download/win) installed and available in PATH
- [VS Code](https://code.visualstudio.com/) or your favorite terminal
- GitHub account

---

## 🏗 Setup Instructions

### 1. Initialize Local Git Repository

Open your terminal (or VS Code) in your project folder and run:

```bash
git init
````

---

### 2. Create a GitHub Repository

1. Go to [GitHub.com](https://github.com/) and sign in.
2. Click **+** (top right) → **New repository**.
3. Name it (e.g., `notees`). Leave options unchecked (no README, .gitignore).
4. Click **Create repository**.

---

### 3. Connect Local Repo to GitHub

Replace the placeholders with your GitHub details:

```bash
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git add .
git commit -m "Initial commit"
git push -u origin main
```

---

### 4. Set Up SSH Authentication

#### a. **Check for existing SSH keys:**

```bash
ls ~/.ssh
```

If you see `id_ed25519.pub` or similar, you're good! If not, generate:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

#### b. **Copy your public key:**

```bash
cat ~/.ssh/id_ed25519.pub | clip
```

#### c. **Add key to GitHub:**

1. Go to [GitHub SSH Keys Settings](https://github.com/settings/keys).
2. Click **New SSH key**.
3. Paste your key and give it a title.
4. Save.

#### d. **Test SSH connection:**

```bash
ssh -T git@github.com
```

You should see a message like:
`Hi YOUR_USERNAME! You've successfully authenticated...`

---

### 5. Create the Auto-Commit Batch Script

1. Open Notepad.

2. Paste:

   ```bat
   @echo off
   cd /d "C:\Users\YOUR_USERNAME\path\to\notees"
   git add .
   git diff --cached --quiet || git commit -m "Auto-commit at %DATE% %TIME%"
   git push origin main
   ```

   * Change the folder path and branch name (`main`) as needed.

3. Save as `commit_push.bat` (anywhere convenient, e.g., Desktop or inside your project).

---

### 6. Test the Script

* Open Command Prompt.
* Run your script:

  ```cmd
  commit_push.bat
  ```
* Check your GitHub repo to confirm that changes were committed and pushed.

---

### 7. Automate with Windows Task Scheduler

#### a. **Open Task Scheduler**

* Press `Win + S`, search for **Task Scheduler**, open it.

#### b. **Create Basic Task**

* Click **Create Basic Task...**
* Name: `Auto Git Commit Push Notees`
* **Next**

#### c. **Trigger**

* Select **Daily**
* Set a **start time** (e.g., 09:00 AM)
* **Next**

#### d. **Action**

* Select **Start a program**
* **Browse** to your `commit_push.bat`
* **Next**

#### e. **Before clicking Finish**

* Check **Open the Properties dialog for this task when I click Finish**
* **Finish**

#### f. **Set Repeat Interval**

* In the properties dialog, go to **Triggers** tab.
* Edit the trigger.
* Set **Repeat task every:** `15 minutes`
* Set **For a duration of:** `Indefinitely` (or your working hours)
* Click **OK** to save.

#### g. **Save and Close**

* Click **OK** to finish setup.

---

## ❓ FAQ

**Q: Will this commit files outside my project folder?**
A: No. Only files in the specified directory (and subdirectories).

**Q: Will it commit untracked files?**
A: Yes, if you’ve used `git add .` and the files are inside your project.

**Q: How do I stop the automation?**
A: Open Task Scheduler, right-click your task, and choose **Disable** or **Delete**.

**Q: Can I adjust the commit frequency?**
A: Yes. Edit your task's trigger in Task Scheduler and set a new interval.

**Q: What if I'm prompted for credentials?**
A: Make sure you're using SSH authentication and your remote URL is SSH-based (`git@github.com:...`).

---

## 🛟 Troubleshooting & Tips

* **Script doesn't run:** Double-check the file path in the script and make sure Git is installed.
* **Commits not appearing:** Make sure the script is actually running (check Task Scheduler history).
* **Log file for debugging:**
  Add this to your script to save output:

  ```bat
  git push origin main >> "C:\Users\YOUR_USERNAME\path\to\notees\auto_commit_log.txt" 2>&1
  ```
* **Check Task Scheduler history for errors.**
* **Manual test**: Always run the batch file manually once before automating.

---

## 📝 License

This automation is free to use and modify for personal and team projects.

---