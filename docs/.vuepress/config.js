module.exports = {
  title: 'CP Wiki',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css',
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      description: 'lucifer1004的CP笔记',
    },
    '/en/': {
      lang: 'en-US',
      description: "lucifer1004's CP notes",
    },
  },
  themeConfig: {
    repo: 'lucifer1004/cp-wiki',
    locales: {
      '/': {
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        selectText: '选择语言 | Language',
        ariaLabel: '选择语言',
        label: '🇨🇳 简体中文',
        nav: require('./nav/zh'),
        sidebar: require('./sidebar/zh'),
      },
      '/en/': {
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        selectText: 'Language',
        ariaLabel: 'Select language',
        label: '🇬🇧 English',
        nav: require('./nav/en'),
        sidebar: 'auto',
      },
    },
    editLinks: true,
    docsDir: 'docs',
    smoothScroll: true,
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('@iktakahiro/markdown-it-katex'));
    },
  },
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'blog',
            dirname: '_blogs',
            path: '/_blog/',
            itemPermalink: '/blog/:year/:month/:day/:slug',
            itemLayout: 'Layout',
          },
        ],
      },
    ],
    ['autometa', {}],
    [
      'sitemap',
      {
        hostname: 'https://cp-wiki.vercel.app',
      },
    ],
    [
      '@vuepress/medium-zoom',
      {
        selector: '.theme-default-content > p > img',
        options: {
          margin: 16,
          background: '#eaf4fc',
        },
      },
    ],
  ],
  extraWatchFiles: [
    '.vuepress/nav/*.js',
    '.vuepress/sidebar/*.js',
    '.vuepress/layouts/*.vue',
  ],
};
