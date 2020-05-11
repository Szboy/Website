module.exports = {
  title: "PGM Documentation",
  tagline: "Documentation for PGM, the original Minecraft PvP Game Manager",
  url: "https://pgm.dev/",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "Electroid", // Usually your GitHub org/user name.
  projectName: "PGM", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "PGM Documentation",
      logo: {
        alt: "Logo",
        src: "img/logo.png",
      },
      links: [
        {
          label: "XML",
          position: "left",
          items: [
            {
              to: "docs/modules/general/main",
              label: "Modules",
            },
            {
              to: "docs/reference/items/inventory",
              label: "Reference",
            },
            {
              to: "docs/guides/xml-pointers/regions",
              label: "Guides",
            },
            {
              to: "docs/examples/airship-battle",
              label: "Examples",
            },
          ],
        },
        {
          to: "downloads",
          label: "Downloads",
          position: "left",
        },
        {
          href: "https://github.com/Electroid/PGM",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              to: "docs/modules/general/main",
              label: "Modules",
            },
            {
              to: "docs/reference/items/inventory",
              label: "Reference",
            },
            {
              to: "docs/guides/xml-pointers/regions",
              label: "Guides",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/CvJGbrV",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/OvercastPGM",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Downloads",
              to: "downloads",
            },
            {
              label: "GitHub",
              href: "https://github.com/Electroid/PGM",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The PGM project and its contributors`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Electroid/PGM/edit/docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
