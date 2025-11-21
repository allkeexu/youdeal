<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1ZS7OSA_btrNPyDWi15xrFDa8a7yI21Yd

## Run Locally

**Prerequisites:**  Node.js (version 20+)

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the app:
   ```bash
   npm run dev
   ```

## 部署到 Cloudflare Pages

本项目已经配置为可以直接部署到 Cloudflare Pages。

### 部署方式

#### 方式一：通过 Git 集成（推荐）

1. 将代码推送到 GitHub/GitLab 仓库
2. 登录 Cloudflare Dashboard
3. 进入 **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
4. 选择你的代码仓库
5. 配置构建设置：
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`（默认）
   - **Node version**: `20`
6. 点击 **Save and Deploy** 开始部署

#### 方式二：使用 Wrangler CLI

1. 安装 Wrangler（如果尚未安装）:
   ```bash
   npm install -g wrangler
   ```

2. 登录 Cloudflare:
   ```bash
   wrangler login
   ```

3. 构建项目:
   ```bash
   npm run build
   ```

4. 部署到 Cloudflare Pages:
   ```bash
   npm run deploy
   ```
   或者直接使用：
   ```bash
   wrangler pages deploy dist
   ```

### 项目配置说明

- **构建输出目录**: `dist/`
- **Functions 目录**: `functions/` (用于 Cloudflare Pages Functions)
- **SPA 路由支持**: `public/_redirects` 文件已配置，支持单页应用路由
- **API 端点**: `/api/submit` (位于 `functions/api/submit.ts`)

### 注意事项

- 确保 `functions/` 目录在项目根目录下（已配置）
- `public/_redirects` 文件会在构建时自动复制到 `dist/` 目录
- 如果需要使用 D1 数据库，请在 Cloudflare Dashboard 中绑定数据库并在 `functions/api/submit.ts` 中配置
