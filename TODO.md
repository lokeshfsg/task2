# TODO

- [x] Search backend upload/multer configuration for banner video upload size limits.
- [x] Increase banner multipart upload limit in `project-root/backend/middleware/upload.js`.
- [x] Increase Express JSON/urlencoded limits in `project-root/backend/server.js` to avoid "payload/file too large" errors.
- [ ] Run backend locally and test banner upload in dashboard (try a file slightly above old limit, e.g. 20–30MB).
- [ ] If still failing, inspect frontend request/headers and confirm expected error message mapping.
- [x] Updated code formatting for `upload.js` after initial edit.


