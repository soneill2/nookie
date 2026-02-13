# Deploy Valentine website to GitHub from the terminal
# Run this in PowerShell after installing Git and creating an empty repo on GitHub.

$projectPath = "c:\Users\penci\Documents\Building\valentine-website-2025-main"

# Find Git (check PATH and common install locations)
$gitExe = $null
if (Get-Command git -ErrorAction SilentlyContinue) { $gitExe = "git" }
elseif (Test-Path "C:\Program Files\Git\bin\git.exe") { $gitExe = "C:\Program Files\Git\bin\git.exe" }
elseif (Test-Path "C:\Program Files (x86)\Git\bin\git.exe") { $gitExe = "C:\Program Files (x86)\Git\bin\git.exe" }

if (-not $gitExe) {
    Write-Host "Git was not found. Please install it first:" -ForegroundColor Yellow
    Write-Host "  https://git-scm.com/download/win" -ForegroundColor Cyan
    Write-Host "`nAfter installing, close this window, open a NEW PowerShell, then run this script again." -ForegroundColor Yellow
    exit 1
}

Set-Location $projectPath

if (-not (Test-Path .git)) {
    Write-Host "Initializing git and creating first commit..." -ForegroundColor Green
    & $gitExe init
    & $gitExe add .
    & $gitExe commit -m "Valentine website with floating images"
} else {
    Write-Host "Git repo already exists. Adding any new changes..." -ForegroundColor Green
    & $gitExe add .
    $status = & $gitExe status --porcelain
    if ($status) {
        & $gitExe commit -m "Update Valentine website"
    }
}

Write-Host "`nFirst create an EMPTY repo on GitHub:" -ForegroundColor Yellow
Write-Host "  1. Go to https://github.com/new" -ForegroundColor White
Write-Host "  2. Enter a name (e.g. valentine-website), leave README UNchecked" -ForegroundColor White
Write-Host "  3. Create repository" -ForegroundColor White
Write-Host ""

$user = Read-Host "Enter your GitHub username"
$repo = Read-Host "Enter your repository name (e.g. valentine-website)"

& $gitExe remote remove origin 2>$null
& $gitExe remote add origin "https://github.com/$user/$repo.git"
& $gitExe branch -M main
Write-Host "`nPushing to GitHub (you may be asked to sign in)..." -ForegroundColor Green
& $gitExe push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nDone! Enable GitHub Pages:" -ForegroundColor Green
    Write-Host "  Repo -> Settings -> Pages -> Source: Deploy from branch -> main -> Save" -ForegroundColor White
    Write-Host "  Your site will be at: https://$user.github.io/$repo/" -ForegroundColor Cyan
}
