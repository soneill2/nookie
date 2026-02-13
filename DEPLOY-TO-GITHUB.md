# Deploy Your Valentine Site to GitHub (Go Live)

Your site is a static site. To put it online with **GitHub Pages**, use one of these methods.

---

## Option 1: Upload via GitHub Website (no Git needed)

1. **Create a new repository**
   - Go to [github.com](https://github.com) and sign in.
   - Click the **+** (top right) → **New repository**.
   - Name it (e.g. `valentine-website`).
   - Choose **Public**, leave "Add a README" **unchecked**.
   - Click **Create repository**.

2. **Upload your project**
   - On the new repo page, click **"uploading an existing file"** (or drag-and-drop).
   - Open this folder on your PC:  
     `c:\Users\penci\Documents\Building\valentine-website-2025-main`
   - Select **all** files and folders (e.g. `index.html`, `config.js`, `script.js`, `styles.css`, `theme.js`, `images` folder, etc.) and drag them into the browser, or use **choose your files**.
   - Click **Commit changes**.

3. **Turn on GitHub Pages**
   - In the repo, go to **Settings** → **Pages** (left sidebar).
   - Under **Source**, choose **Deploy from a branch**.
   - Under **Branch**, select **main** (or **master**), folder **/ (root)**.
   - Click **Save**.

4. **Your live URL**
   - After 1–2 minutes, your site will be at:  
     `https://<your-github-username>.github.io/<repo-name>/`  
   - Example: `https://jane.github.io/valentine-website/`

---

## Option 2: Use Git (after installing Git)

1. **Install Git**  
   Download and install from [git-scm.com](https://git-scm.com/download/win). Restart your terminal/IDE after installing.

2. **Create a new repo on GitHub**  
   Same as Option 1 step 1 (name it e.g. `valentine-website`, Public, no README).

3. **In a terminal**, run (replace `YOUR_USERNAME` and `REPO_NAME` with yours):

   ```powershell
   cd "c:\Users\penci\Documents\Building\valentine-website-2025-main"
   git init
   git add .
   git commit -m "Valentine website with floating images"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**  
   Same as Option 1 step 3 (Settings → Pages → Deploy from branch **main**, root).

---

## Important for GitHub Pages

- **Repo name in the URL**  
  If your repo is `valentine-website`, the site URL will be:  
  `https://<username>.github.io/valentine-website/`  
  So your `config.js` and any links that assume the site is at the "root" will still work; GitHub Pages serves your `index.html` as the main page.

- **Images**  
  Your `images` folder is included in the upload, so paths like `images/IMG_0035.JPG` in `config.js` will work once the repo is pushed.

- **HTTPS**  
  GitHub Pages uses HTTPS. If you use `musicUrl` in `config.js`, the file must be served over HTTPS (e.g. Cloudinary) for it to play in the browser.
