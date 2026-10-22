# 洪晓斌 · Xiaobin Hong

中英双语个人学术主页。参考 xiang-kai.github.io 的学术信息结构，使用独立编写的 HTML、CSS 和 JavaScript。

## 本地查看

直接双击 `dist/index.html`，或在本目录运行：

```powershell
python -m http.server 8765 --bind 127.0.0.1 --directory dist
```

在浏览器访问 `http://127.0.0.1:8765/`。不需要安装 Node 依赖或构建。

## 内容维护

- `dist/content.js`：姓名、双语简介、学术链接、研究方向、新闻、论文、项目、教育与奖励。
- `dist/styles.css`：配色、字体和响应式布局。
- `dist/assets/`：证件照与论文插图。
- `dist/app.js`：语言切换、论文筛选及页面内容呈现。
- `.github/workflows/pages.yml`：GitHub Pages 自动发布配置。

英文为默认语言，访问者可以切换为中文。浏览器允许本地存储时会记住选择。当前单位、职务、城市和邮箱按本人要求暂不展示。在投论文题目、原始简历及录用邮件没有放入发布目录。

论文插图来自作者提供的材料或正式论文，保留原图内容；PDF 按正式论文页面、DOI 或 arXiv 链接提供。

精选论文优先展示近五年成果，目前为 2024–2026 年的 12 篇。9 篇展示原论文 framework 或机制总览图；没有可用原图的论文使用文字条目。News 分别记录录用和正式发表进展，完整论文列表链接到 Google Scholar。

## 发布到 GitHub Pages

当前账号是 `XiaobinHong`，用户主页仓库应命名为 `XiaobinHong.github.io`。

推荐方法：

1. 在该账号中创建上述名称的仓库。
2. 将本目录内的 `dist/`、`.github/`、README 和 `.gitignore` 推送到仓库的 `main` 分支。不要把上级目录的个人材料或 `.work/` 推送进去。
3. 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
4. 运行 **Actions → Deploy academic homepage → Run workflow**。之后修改并推送到 `main` 会自动发布。
5. 部署目标地址为 `https://xiaobinhong.github.io/`。首次发布以 Actions 的成功结果为准。

另一个方法：只上传 `dist/` 中的全部文件和 `assets/` 文件夹到仓库根目录，Pages 选择 **Deploy from a branch → main → /(root)**。此方法不需要本项目的 workflow。

如果选择下载包 `homepage-upload.zip`，先解压，再上传其中的文件；不要把 ZIP 本身作为网页文件上传。

## 用户名与域名

截至 2026-10-22，`KrisHong` 对应的 GitHub 账号已存在。GitHub 用户名必须选择未被使用的名称；账号的显示名称可以与用户名不同。

若以后更换为其他可用用户名：

1. 将主页仓库重命名为 `新用户名.github.io`。
2. 修改 `dist/content.js` 的个人 GitHub 链接。
3. 更新本地 Git remote 和各学术资料上的个人链接。
4. 检查旧论文代码链接是否仍可访问；旧仓库可能有跳转，但旧个人资料页不会跳转。

也可保留账号，另行使用自己的域名。

官方依据：

- https://docs.github.com/en/account-and-profile/concepts/username-changes
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
