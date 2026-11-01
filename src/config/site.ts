/**
 * as-folio site configuration
 *
 * This file replaces _config.yml from al-folio.
 * Update the values below to personalize your site.
 * All configuration is fully typed — your editor will catch mistakes.
 */

// ─── Navigation types (exported for use in Navbar.astro / SearchTrigger) ────

/** A simple navigation link. */
export type NavLeaf = { label: string; href: string };

/**
 * A dropdown group. `label` is the trigger text; `children` are the menu items.
 * Maximum supported depth is 2 levels (group → item). Do not nest further.
 */
export type NavDropdown = { label: string; children: NavLeaf[] };

/** A top-level nav entry — either a plain link or a dropdown group. */
export type NavItem = NavLeaf | NavDropdown;

export const site = {
  // ─── Derived deployment values ────────────────────────────────────────────

  /** Site origin from Astro's resolved `site` option. */
  url: import.meta.env.SITE.replace(/\/$/, ''),

  /** Base path from Astro's resolved `base` option. */
  base: import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, ''),

  // ─── Identity ──────────────────────────────────────────────────────────────

  /** Site title. Shown in the browser tab and navbar. */
  title: 'Shuta Kobayashi / 小林秀太',

  /** Site description. Used in meta tags. */
  description:
    'Personal academic website of Shuta Kobayashi, a Ph.D. student at Kyoto University researching nonequilibrium statistical mechanics, stochastic thermodynamics, and machine learning.',

  /** Language code for the site. */
  lang: 'en',

  /** Header language switch and Japanese homepage content. */
  languages: {
    /** Show a link to the other language in the header (JA or EN). */
    enabled: true,
    label: 'Language / 言語',
    options: [
      { code: 'ja', label: 'JA', name: '日本語', href: '/ja/' },
      { code: 'en', label: 'EN', name: 'English', href: '/' },
    ],
    japanese: {
      /** Metadata and headings for Japanese copies of the bibliography pages. */
      publications: { title: '論文', description: '研究論文とプレプリント' },
      presentations: {
        title: '発表',
        description: '学会発表と講演',
        /** Use Japanese conference and presentation format headings. */
        localizedHeadings: true,
        /** Conference category headings for the Japanese presentations page. */
        sections: { international: '国際学会', domestic: '国内学会' },
        /** Presentation format headings for the Japanese presentations page. */
        formats: { oral: '口頭発表', poster: 'ポスター発表', other: 'その他' },
      },
      description:
        '京都大学大学院理学研究科の博士課程に在籍する小林秀太の個人ウェブサイト。非平衡統計力学、確率熱力学、機械学習を研究しています。',
      subtitle: '京都大学大学院 博士後期課程1年 / 非平衡統計力学 · 確率熱力学 · 機械学習',
      photoCaption: 'ボルツマン像、ウィーン · 2026年10月',
      news: 'ニュース',
    },
  },

  // ─── Author ────────────────────────────────────────────────────────────────

  author: {
    /** Full name shown in navbar, about page heading, and footer. */
    name: 'Shuta Kobayashi',

    /** Short email address (used in social links). */
    email: 'kobayashi.shuta.76k@st.kyoto-u.ac.jp',

    /** Path to profile photo. Place image in public/assets/img/. */
    avatar: '/assets/img/prof_pic.jpg',

    /**
     * Subtitle below your name on the about page.
     * HTML is supported.
     */
    subtitle: `
      Ph.D. Student at
      <a href="https://www.kyoto-u.ac.jp/en/">Kyoto University</a>

      <span class="hidden min-[576px]:inline">&nbsp;/&nbsp;</span>

      <span class="block min-[576px]:inline whitespace-nowrap">
        nonequilibrium statistical mechanics
      </span>

      <span class="hidden min-[576px]:inline">&nbsp;·&nbsp;</span>

      <span class="block min-[576px]:inline whitespace-nowrap">
        stochastic thermodynamics
      </span>

      <span class="hidden min-[576px]:inline">&nbsp;·&nbsp;</span>

      <span class="block min-[576px]:inline whitespace-nowrap">
        machine learning
      </span>
    `,

    /**
     * Address block below profile photo.
     * HTML is supported.
     */
    moreInfo: `<p>Boltzmann statue, Vienna · October 2026</p>`,
  },

  // ─── Social links ──────────────────────────────────────────────────────────
  //
  // Supported platforms (set to undefined to hide):
  //   email, x_username, linkedin_username, github_username, gitlab_username,
  //   scholar_userid, orcid_id, inspire_id, researchgate_username,
  //   arxiv_id, youtube_id, instagram_username, mastodon_url,
  //   bluesky_handle, medium_username, cv_pdf, rss_icon

  socials: {
    email: 'kobayashi.shuta.76k@st.kyoto-u.ac.jp',
    x_username: 'ShidAreTree63',
    linkedin_username: undefined as string | undefined,
    github_username: undefined as string | undefined,
    gitlab_username: undefined as string | undefined,
    /** Google Scholar user ID — the part after user= in your Scholar URL */
    scholar_userid: 'KTbu-yAAAAAJ&hl=ja',
    orcid_id: undefined as string | undefined,
    /** Inspire HEP author ID */
    inspire_id: undefined as string | undefined,
    researchgate_username: undefined as string | undefined,
    arxiv_id: 'kobayashi_s_1',
    youtube_id: undefined as string | undefined,
    instagram_username: undefined as string | undefined,
    mastodon_url: undefined as string | undefined,
    bluesky_handle: undefined as string | undefined,
    medium_username: undefined as string | undefined,
    /** Path to CV PDF in public/assets/pdf/ */
    cv_pdf: undefined as string | undefined,
    /** Show RSS icon in social links */
    rss_icon: false,
  },

  // ─── Navigation ────────────────────────────────────────────────────────────

  navbar: {
    /** Header control labels for each language. */
    labels: {
      en: {
        search: 'Search',
        placeholder: 'Search…',
        menu: 'Toggle navigation',
        theme: 'Toggle theme',
      },
      ja: { search: '検索', placeholder: '検索…', menu: 'メニューを開閉', theme: '配色を切り替え' },
    },
    /** Use Japanese navigation labels and routes on Japanese pages. */
    localized: true,
    /** Navigation shown on Japanese pages when localized is enabled. */
    japaneseItems: [
      { label: 'ホーム', href: '/ja/' },
      { label: '論文', href: '/ja/publications/' },
      { label: '発表', href: '/ja/presentations/' },
      { label: 'おしらせ', href: '/ja/news/' },
      { label: '経歴', href: '/ja/cv/' },
    ] as NavItem[],
    /** News section link label on the English homepage. */
    newsLabel: 'news',
    /** Fix navbar to top of viewport. */
    fixed: true,
    /** Show social icons in navbar (about page only). */
    socialIcons: false,
    /**
     * Top-level navigation items.
     * Use `{ label, href }` for a plain link.
     * Use `{ label, children: [...] }` for a dropdown group (max 2 levels).
     *
     * `href` values are relative to the site root (base is prepended automatically).
     */
    items: [
      { label: 'about', href: '/' },
      { label: 'publications', href: '/publications/' },
      { label: 'presentations', href: '/presentations/' },
      { label: 'news', href: '/news/' },
      { label: 'cv', href: '/cv/' },
    ] as NavItem[],
  },

  // ─── Footer ────────────────────────────────────────────────────────────────

  footer: {
    /**
     * Text shown in footer. HTML is supported.
     * Leave empty string to hide.
     */
    text: `Powered by <a href="https://github.com/dadangnh/as-folio" target="_blank" rel="noopener noreferrer">as-folio</a>.
      Inspired by <a href="https://github.com/alshedivat/al-folio" target="_blank" rel="noopener noreferrer">al-folio</a>.
      Hosted by <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub Pages</a>.`,
    /** Show "Last updated" timestamp in footer. */
    lastUpdated: false,
    /** Path to impressum/legal page (EU GDPR). Leave undefined to hide. */
    impressum: undefined as string | undefined,
    /**
     * Footer display mode:
     * 'sticky'  — always visible at the bottom of the viewport (al-folio default)
     * 'normal'  — sits at the natural bottom of page content (only visible when scrolled down)
     * 'hidden'  — footer is not rendered at all
     */
    position: 'normal' as 'sticky' | 'normal' | 'hidden',
  },

  // ─── CV page ───────────────────────────────────────────────────────────────

  cv: {
    /** Use the Japanese RenderCV data and labels on /ja/cv/. */
    localized: true,
    /** Japanese CV headings, metadata, and interface labels. */
    japaneseLabels: {
      title: '経歴',
      description: '学歴・職歴・研究支援',
      basics: '基本情報',
      label: '所属・身分',
      work: '職歴',
      fellowships: '研究支援・フェローシップ',
      languages: '言語',
      name: '氏名',
      email: 'メールアドレス',
      phone: '電話番号',
      location: '所在地',
      website: 'ウェブサイト',
      summary: '概要',
      education: '学歴',
      publications: '論文',
      selectedPublications: '主要論文',
      awards: '受賞',
      honors: '栄誉・受賞',
      skills: 'スキル',
      interests: '関心分野',
      download: '経歴PDFをダウンロード',
      sections: '経歴の項目',
      present: '現在',
      areaSeparator: '・',
    },
    /**
     * Which CV data format to render.
     * 'rendercv' → reads src/data/cv.yml (RenderCV YAML format)
     * 'jsonresume' → reads src/data/resume.json (JSONResume format)
     */
    format: 'rendercv' as 'rendercv' | 'jsonresume',
    /** Path to CV PDF for the download button in public/assets/pdf/. Leave empty to hide. */
    pdfPath: '',
    /** Show fellowship entries from cv.yml when present. */
    showFellowships: true,
    /** Show cv.languages in the CV contact information when present. */
    showLanguages: true,
    /** Show cv.label as a title or occupation in the Basics table. */
    showLabel: true,
    /** Headings and navigation labels for additional CV sections. */
    labels: {
      title: 'cv',
      description: 'Curriculum vitae',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      website: 'Website',
      summary: 'Professional Summary',
      education: 'Education',
      publications: 'Publications',
      selectedPublications: 'Selected Publications',
      awards: 'Awards',
      honors: 'Honors & Awards',
      skills: 'Skills',
      interests: 'Interests',
      download: 'Download CV PDF',
      sections: 'CV sections',
      present: 'Present',
      areaSeparator: ' in ',
      basics: 'Basics',
      label: 'Label',
      work: 'Work',
      fellowships: 'Fellowships',
      languages: 'Languages',
    },
  },

  // ─── Blog ──────────────────────────────────────────────────────────────────

  blog: {
    /** Name shown in the blog page heading. */
    name: 'shuta-kobayashi.github.io',
    description:
      'Personal academic website of Shuta Kobayashi, a Ph.D. student at Kyoto University researching nonequilibrium statistical mechanics, stochastic thermodynamics, and machine learning.',
    /** Number of posts per page. */
    postsPerPage: 5,
    /**
     * Tags shown as badges on the blog listing page header.
     * Users can click them to filter posts by tag.
     */
    displayTags: ['formatting', 'images', 'links', 'math', 'code', 'blockquotes'],
    /** Categories shown as badges on the blog listing page header. */
    displayCategories: [] as string[],
    /**
     * External post sources (fetched at build time).
     * Each entry is either an RSS feed URL or a list of individual post objects.
     */
    externalSources: [] as Array<{
      name: string;
      rssUrl?: string;
      posts?: Array<{ url: string; publishedDate: string }>;
      categories?: string[];
      tags?: string[];
    }>,
    /** Average reading speed (words per minute) used for reading-time estimates. */
    wordsPerMinute: 200 as number,
    /** Message shown on the blog listing page when no posts exist. */
    emptyMessage: 'No posts yet. Check back soon!',
  },

  // ─── About page sections ──────────────────────────────────────────────────

  announcements: {
    /** Display announcements in the page language; false uses English on all pages. */
    localized: true,
    /** Show a link to all news below the homepage announcements. */
    showArchiveLink: true,
    /** Metadata, empty-state copy, and homepage archive link labels for each language. */
    labels: {
      en: {
        title: 'News',
        description: 'News and announcements',
        empty: 'No announcements yet.',
        archiveLink: 'View past news',
      },
      ja: {
        title: 'おしらせ',
        description: '活動報告とおしらせ',
        empty: 'おしらせはまだありません。',
        archiveLink: '過去のニュースはこちら',
      },
    },
    /** Show news/announcements section on the about page. */
    enabled: true,
    /** Enable vertical scroll if more than 3 items. */
    scrollable: true,
    /** Max news items to show (undefined = show all). */
    limit: 5 as number | undefined,
  },

  latestPosts: {
    /** Show latest blog posts section on the about page. */
    enabled: true,
    scrollable: true,
    limit: 3 as number | undefined,
  },

  selectedPapers: {
    /** Show selected publications section on the about page. */
    enabled: true,
  },

  // ─── Features ─────────────────────────────────────────────────────────────

  features: {
    /** Enable dark/light mode toggle in navbar. */
    darkmode: true,
    /** Enable ⌘K search. */
    search: false,
    /** Enable reading progress bar on blog posts. */
    progressBar: true,
    /** Show back-to-top button. */
    backToTop: true,
    /** Enable automatic masonry layout for project cards. */
    masonry: true,
    /** Enable click-to-zoom on images (medium-zoom). */
    mediumZoom: true,
    /** Show styled CSS tooltips on hover for project card icons and publication annotations.
     *  When false, the browser's native title-attribute tooltip is used instead. */
    tooltips: false,
    /** Enable GDPR-compliant cookie consent dialog. */
    cookieConsent: false,
    /** Enable newsletter subscription form. */
    newsletter: false,
    /**
     * Enable video embedding for BibTeX entries.
     * If false, video links open in a new tab instead.
     */
    videoEmbedding: false,
    /**
     * Enable Astro View Transitions for smooth page-to-page animations.
     * Disable if you prefer full page reloads (e.g. for accessibility reasons).
     */
    viewTransitions: true,
    /** Show social sharing links (X, LinkedIn, Facebook, email) at the bottom of blog posts. */
    socialShare: true,
  },

  // ─── Giscus comments ──────────────────────────────────────────────────────
  // Follow setup at https://giscus.app/ then fill in the values below.

  giscus: {
    /** Set to true once you've configured the fields below. */
    enabled: false,
    /**
     * When true, Giscus is hidden behind a "Load comments" button — the
     * giscus.app script is only fetched after the user opts in.
     * Recommended for GDPR compliance (giscus sets third-party cookies).
     * Default: true.
     */
    lazyLoad: true,
    repo: '' as `${string}/${string}`,
    repoId: '',
    category: 'Comments',
    categoryId: '',
    /** How to map discussions to pages. */
    mapping: 'title' as 'pathname' | 'url' | 'title' | 'og:title',
    strict: true,
    reactionsEnabled: true,
    inputPosition: 'bottom' as 'top' | 'bottom',
    darkTheme: 'dark',
    lightTheme: 'light',
    lang: 'en',
  },

  // ─── Analytics ────────────────────────────────────────────────────────────

  analytics: {
    /** Google Analytics 4 measurement ID (format: G-XXXXXXXXXX). */
    ga4: '' as string,
    /** Cronitor RUM analytics site ID. */
    cronitor: '' as string,
    /** Pirsch analytics site ID. */
    pirsch: '' as string,
    /** OpenPanel analytics client ID. */
    openpanel: '' as string,
    /** Google Search Console verification ID. */
    googleVerification: '' as string,
    /** Bing Webmaster verification ID. */
    bingVerification: '' as string,
  },

  // ─── Open Graph ───────────────────────────────────────────────────────────

  og: {
    /** Include Open Graph meta tags. */
    enabled: true,
    /** Default OG image path (in public/). */
    image: '' as string,
  },

  // ─── Newsletter ───────────────────────────────────────────────────────────

  newsletter: {
    /** Loops.so form endpoint. */
    endpoint: '' as string,
  },

  // ─── Teaching page ────────────────────────────────────────────────────────

  teaching: {
    /**
     * Google Calendar ID for the "Upcoming Events" section.
     * Set to a calendar address like 'user@gmail.com' to show the embed.
     * Leave empty string to hide the calendar section entirely.
     */
    calendarId: 'test@gmail.com' as string,
    /** Timezone for the Google Calendar embed (e.g., 'America/New_York'). */
    timezone: 'America/New_York' as string,
  },

  // ─── Publications ─────────────────────────────────────────────────────────

  publications: {
    /** Heading shown on the English publications page. */
    title: 'publications',
    /**
     * Show badges for individual publication entries.
     * Can be disabled globally here; also toggleable per entry in BibTeX.
     */
    badges: {
      altmetric: true,
      dimensions: true,
      googleScholar: true,
      inspirehep: true,
    },
    /**
     * Max number of authors shown before "and N more..." link.
     * Set to undefined to always show all authors.
     */
    maxAuthorLimit: 3 as number | undefined,
    /** Enable thumbnail images for publications (if `preview` set in BibTeX). */
    thumbnails: true,
    /**
     * Last name used to underline your name in publication author lists.
     * Defaults to the last word of `site.author.name` when not set.
     * Override explicitly if your publications use a different name form.
     */
    authorLastName: undefined as string | undefined,
    /** Path prefix (relative to public/) for publication preview images. */
    previewDir: '/assets/img/publication_preview/',
    /** Path prefix (relative to public/) for publication PDFs and supplements. */
    pdfDir: '/assets/pdf/',
    /** UI labels — override for non-English sites. */
    labels: {
      abstract: 'Abs',
      bibtex: 'Bib',
      arxiv: 'arXiv',
      supp: 'Supp',
      noResults: 'No publications to display.',
    },
  },

  // ─── Presentations ───────────────────────────────────────────────────────

  presentations: {
    /** Sort by year and month, newest first; unknown months go last within the year. */
    sortByMonth: true,
    /** Display YYYY-MM when a valid BibTeX month is provided. */
    showMonth: true,
    /** Also underline full-name aliases configured below. */
    highlightAuthorAliases: true,
    /** Alternate full names used for the site owner in presentation author lists. */
    authorAliases: ['小林秀太'],
    /** Page title and heading for the presentation list. */
    title: 'presentations',
    /** Description used in page metadata. */
    description: 'Conference presentations and talks.',
    /** Group presentations by the international/domestic BibTeX keywords. */
    groupByConference: true,
    /** Show year headings within conference sections. */
    groupByYear: false,
    /** Split each conference section by oral/poster in the BibTeX abbr field. */
    groupByFormat: true,
    /** Presentation format headings. */
    formats: {
      oral: 'Oral',
      poster: 'Poster',
      other: 'Other',
    },
    /** Conference section headings. */
    sections: {
      international: 'International Conferences',
      domestic: 'Domestic Conferences (Japan)',
    },
    /** Enable thumbnails and venue badges in the presentation list. */
    thumbnails: false,
    /** UI labels for the presentation empty state. */
    labels: {
      noResults: 'No presentations to display.',
    },
  },

  // ─── Repositories ────────────────────────────────────────────────────────

  repositories: {
    /** Show GitHub user stats cards. */
    githubUsers: true,
    /** Show GitHub repository pin cards. */
    githubRepos: true,
    /** Show GitHub trophy stats (repo_trophies). Disabled by default — the service has known reliability issues. */
    trophies: false,
    /** Theme for light mode (from github-readme-stats themes). */
    themeLight: 'default' as string,
    /** Theme for dark mode. */
    themeDark: 'dark' as string,
    /** Trophy card theme for light mode (from github-profile-trophy themes). */
    trophyThemeLight: 'flat' as string,
    /** Trophy card theme for dark mode. */
    trophyThemeDark: 'gitdimmed' as string,
  },

  // ─── Comments ─────────────────────────────────────────────────────────────

  comments: {
    /**
     * Disqus shortname — the subdomain part of YOUR-SHORTNAME.disqus.com.
     * Required when a post sets `disqus: true` in frontmatter.
     * Leave empty string if not using Disqus.
     */
    disqusShortname: '' as string,
  },

  // ─── Page copy ────────────────────────────────────────────────────────────

  pages: {
    projects: {
      /** Description shown below the "projects" heading on the projects page. */
      description: 'A growing collection of your cool projects.',
    },
    teaching: {
      /** Description shown below the "teaching" heading on the teaching page. */
      description: 'Course materials, schedules, and resources for classes taught.',
    },
  },

  // ─── Theme defaults ───────────────────────────────────────────────────────

  theme: {
    /**
     * Default color theme.
     * 'system' follows OS preference.
     */
    default: 'system' as 'light' | 'dark' | 'system',

    /**
     * Primary accent color used for links, active nav items, badges, and highlights.
     * Accepts any CSS color string (hex, hsl, rgb, etc.).
     * Set to 'auto' to use the built-in defaults (purple in light mode, cyan in dark mode).
     *
     * Example presets:
     *   Purple (default): { light: '#b509ac', dark: '#2698ba' }
     *   Blue:             { light: '#0076df', dark: '#68c0d9' }
     *   Red:              { light: '#ff3636', dark: '#f29105' }
     *   Green:            { light: '#009f06', dark: '#b7d12a' }
     *   Orange:           { light: '#f29105', dark: '#efcc00' }
     *   Custom hover:     { light: '#0076df', dark: '#68c0d9', hoverLight: '#0a53be', hoverDark: '#9fd8ea' }
     */
    color: {
      light: 'auto' as string,
      dark: 'auto' as string,
      hoverLight: 'auto' as string,
      hoverDark: 'auto' as string,
    },
  },
} as const;

export type SiteConfig = typeof site;
