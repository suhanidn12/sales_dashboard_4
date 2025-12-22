# Deploy to Vercel - Step by Step Guide

## Method 1: Using Vercel CLI (Fastest - 5 minutes)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
This will open a browser window. Login with your GitHub account.

### Step 3: Deploy from Project Directory
```bash
cd /home/shree/sales-dashboard
vercel
```

### Step 4: Follow Prompts
- Set up and deploy? **Yes**
- Which scope? **Your account**
- Link to existing project? **No**
- Project name? **sales-dashboard** (or press Enter)
- Directory? **./** (press Enter)
- Override settings? **No**

### Step 5: Get Your Live URL
After deployment completes, you'll get a URL like:
```
https://sales-dashboard.vercel.app
```

This is your LIVE LINK to submit!

---

## Method 2: Using Vercel Website (Recommended - More Control)

### Step 1: Push Code to GitHub

First, make sure your code is on GitHub:

```bash
cd /home/shree/sales-dashboard

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Sales Dashboard"

# Create repository on GitHub first, then:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sales-dashboard.git
git push -u origin main
```

### Step 2: Go to Vercel Website

1. Visit: **https://vercel.com**
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub

### Step 3: Import Your Project

1. Click **"Add New Project"** button
2. You'll see your GitHub repositories
3. Find **"sales-dashboard"** and click **"Import"**

### Step 4: Configure Project

Vercel will auto-detect Next.js settings:
- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `./` (leave as is)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

**Just click "Deploy"** - no changes needed!

### Step 5: Wait for Deployment

- Vercel will build your project (takes 2-3 minutes)
- You'll see build logs in real-time
- When done, you'll see: **"Congratulations! Your project has been deployed"**

### Step 6: Get Your Live URL

You'll get a URL like:
```
https://sales-dashboard-abc123.vercel.app
```

**This is your LIVE LINK!** Copy it and submit it.

---

## After Deployment

### View Your Site
- Click on your project in Vercel dashboard
- Click the URL to open your live site
- Test all features work correctly

### Update Your README
Add your live URL to README.md:
```markdown
## Live Demo
🔗 **Live Site**: https://sales-dashboard-abc123.vercel.app
```

### Automatic Deployments
- Every time you push to GitHub, Vercel automatically redeploys
- You get a new URL for each deployment
- Production URL stays the same

---

## Troubleshooting

### Build Fails?
- Check build logs in Vercel dashboard
- Make sure `npm run build` works locally first
- Check Node.js version (need 20.9.0+)

### Environment Variables?
- If you add `.env` files later, add them in Vercel dashboard
- Go to Project Settings → Environment Variables

### Custom Domain?
- Vercel gives you free domain: `your-project.vercel.app`
- You can add custom domain in Project Settings → Domains

---

## Quick Commands Summary

```bash
# Method 1: CLI
npm install -g vercel
vercel login
vercel

# Method 2: Website
# 1. Push to GitHub
git push origin main
# 2. Go to vercel.com
# 3. Import project
# 4. Deploy
```

---

**Your live URL will look like:**
`https://sales-dashboard.vercel.app`

**Submit this URL for your interview task!**



