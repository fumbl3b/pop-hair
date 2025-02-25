# Deployment Guide for Pop Hair Salon Website

This document outlines the steps to deploy the Pop Hair Salon website using Vercel and GitHub.

## Prerequisites

1. GitHub account
2. Vercel account (can sign up with GitHub)
3. Git installed locally
4. Node.js installed (for Vercel CLI)

## Step 1: Push to GitHub

1. Create a new repository on GitHub named "pop-hair-salon"

2. Push your local repository to GitHub:
```bash
git remote add origin https://github.com/yourusername/pop-hair-salon.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy with Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended for first deployment)

1. Log in to [Vercel](https://vercel.com)
2. Click "New Project"
3. Import your "pop-hair-salon" repository
4. Keep all default settings (the vercel.json file will configure everything)
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from your project directory:
```bash
cd /path/to/pop-hair-salon
vercel
```

4. Follow the CLI prompts to complete deployment

## Step 3: Configure Custom Domain (Optional)

1. Go to your project settings in the Vercel dashboard
2. Click on "Domains"
3. Add your custom domain (e.g., pophairsalon.com)
4. Follow the instructions to set up DNS records

## Updating the Website

When you make changes to the website:

1. Commit your changes locally:
```bash
git add -A
git commit -m "Description of changes"
```

2. Push to GitHub:
```bash
git push origin main
```

3. Vercel will automatically deploy the new changes from the main branch

## Additional Configuration

- **Environment Variables**: Add via Vercel dashboard if needed
- **Build Settings**: Modify vercel.json for custom build configurations
- **Deployment Previews**: Vercel automatically creates preview deployments for pull requests

## Troubleshooting

- Check Vercel deployment logs for errors
- Verify that all assets are properly referenced with relative paths
- Ensure vercel.json is properly configured
- Test locally before pushing changes