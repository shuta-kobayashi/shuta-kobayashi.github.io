import { afterEach, describe, expect, it, vi } from 'vitest';

const config = vi.hoisted(() => ({
  base: '',
  languages: {
    options: [
      { code: 'en', href: '/' },
      { code: 'ja', href: '/ja/' },
    ],
  },
}));

vi.mock('@config/site', () => ({ site: config }));

import { languageHref } from './languages';

afterEach(() => {
  config.base = '';
});

describe('languageHref', () => {
  it.each(['/', '/news/', '/publications/', '/presentations/', '/cv/', '/publications/paper/'])(
    'keeps the corresponding page when switching languages: %s',
    (page) => {
      expect(languageHref(page, 'ja')).toBe(`/ja${page}`);
      expect(languageHref(`/ja${page}`, 'en')).toBe(page);
    },
  );

  it('preserves the deployment base without duplicating the language prefix', () => {
    config.base = '/portfolio';
    expect(languageHref('/portfolio/ja/cv/', 'en')).toBe('/portfolio/cv/');
    expect(languageHref('/portfolio/publications/', 'ja')).toBe('/portfolio/ja/publications/');
  });

  it('uses the target homepage for pages without a translation', () => {
    expect(languageHref('/blog/', 'ja')).toBe('/ja/');
    expect(languageHref('/blog/', 'en')).toBe('/');
  });
});
