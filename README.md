# 個人頁面專案

這是一個使用 React + TypeScript + Vite 構建的個人頁面專案。

## 環境要求

本專案需要 Node.js 22 或更高版本。

### 安裝 Node.js 環境

#### 1. 安裝 nvm (Node Version Manager)

**Windows 系統:**
1. 前往 [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) 下載最新版本
2. 下載 `nvm-setup.zip` 並解壓執行安裝檔
3. 重新啟動命令提示字元或 PowerShell

**macOS/Linux 系統:**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
# 或使用 wget
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

#### 2. 安裝 Node.js 22
```bash
# 安裝 Node.js 22 (最新穩定版本)
nvm install 22

# 設定為預設版本
nvm use 22

# 驗證安裝
node --version
npm --version
```

> **注意**: npm 會隨 Node.js 一起自動安裝，無需單獨安裝。

## 開發環境設置

### 安裝依賴
```bash
npm install
```

### 本地開發
```bash
npm run dev
```

### 構建專案
```bash
npm run build
```

## 部署到 GitHub Pages

### 快速部署
```bash
npm run deploy
```

### 部署說明
`npm run deploy` 指令會執行以下步驟：
1. 執行 `predeploy` 腳本自動構建專案 (`npm run build`)
2. 使用 `gh-pages` 工具將 `dist` 目錄的內容部署到 GitHub Pages
3. 部署完成後，網站將可在 https://richiumu.github.io/ 訪問

> **注意**: 部署前請確保已經將代碼推送到 GitHub repository，並且有適當的 GitHub Pages 權限設定。

## 技術棧
- React 19
- TypeScript
- Vite
- Recharts (圖表庫) 