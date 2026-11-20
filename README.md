# BitterRadish overview

The public BitterRadish portfolio, prepared for GitHub Pages. The default homepage is the messy desk; `directory.html` keeps the Craigslist-style alternative. Galleries and YouTube videos open in the integrated media browser.

## Publish

In repository **Settings → Pages**, choose **Deploy from a branch**, **main**, and **/(root)**, then Save.
The GitHub Pages address will be `https://johncwilkins.github.io/overview/`. No build or dependencies are required. No custom domain has been configured.

## Update content

Edit `projects.json` in GitHub and commit to main. Upload cover images to `media/` and use relative image paths such as `media/croquet.jpg`. GIF, JPEG, PNG and WebP are supported.

To add a project, copy an existing project object, give it a unique `id`, and set its `title`, `description`, `url`, `image` and `category`. Categories include `games`, `interactive`, `creative`, and `workbench`. Set `featured` to true for priority placement. Array order controls project order.

For an integrated gallery, use `type: "gallery"`, `category: "galleries"`, and `photos: [{"id":"photo-1","url":"media/photo.jpg","caption":"Optional caption"}]`. For YouTube, use `type: "video"`, `category: "videos"`, and the full YouTube URL. With an empty `image`, the YouTube thumbnail is used.

This is a snapshot of the 16 publicly published entries on November 20, 2026. It includes the published images and five gallery photographs. Unpublished/private content and credentials are excluded.

## Admin limitation

GitHub Pages serves static files. The former ChatGPT-sign-in admin, database and upload service do not execute here. `admin.html` links to GitHub's editing and upload screens. Changes made in the original site's admin do not automatically update this copy.

`server-source/` retains the original application-specific code for a later server migration. The original hosted site is unchanged.
