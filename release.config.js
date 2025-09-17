export default {
  branches: ["main"], // or master if that's your default branch
  plugins: [
    "@semantic-release/commit-analyzer", // figure out version bump
    "@semantic-release/release-notes-generator", // generate changelog
    ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md" }],
    ["@semantic-release/npm", { npmPublish: true }],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "CHANGELOG.md"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/github",
  ],
};
