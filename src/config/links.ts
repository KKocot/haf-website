export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Get Started', href: '#getting-started' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const socialLinks = [
  { label: 'GitLab', href: 'https://gitlab.syncad.com/hive/haf', icon: 'gitlab' },
  { label: 'Hive', href: 'https://hive.io', icon: 'hive' },
] as const;

export const externalLinks = {
  gitlab: 'https://gitlab.syncad.com/hive/haf',
  docs: 'https://gitlab.syncad.com/hive/haf/-/tree/develop/docs',
  hive: 'https://hive.io',
  docker: 'https://gitlab.syncad.com/hive/haf_api_node',
  hivemind: 'https://gitlab.syncad.com/hive/hivemind',
} as const;
