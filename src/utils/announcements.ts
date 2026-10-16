import { site } from '@config/site';
import { getCollection } from 'astro:content';

export async function getAnnouncements(lang: 'en' | 'ja') {
  const contentLanguage = site.announcements.localized ? lang : 'en';
  return (await getCollection('announcements'))
    .filter((entry) => !entry.data.hidden && entry.data.lang === contentLanguage)
    .sort((a, b) => {
      if (a.data.pinned !== b.data.pinned) return a.data.pinned ? -1 : 1;
      return b.data.date.getTime() - a.data.date.getTime();
    });
}
