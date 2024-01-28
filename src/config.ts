import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import type { RawSubscription } from './types';

const subsConfig: RawSubscription = {
  id: 1,
  version: 0,
  name: '自用订阅',
  author: 'ZhReimu',
  supportUri: 'https://github.com/ZhReimu/subscription',
  updateUrl:
    'https://ghproxy.net/https://raw.githubusercontent.com/ZhReimu/subscription/master/dist/gkd.json5',
  checkUpdateUrl:
    'https://ghproxy.net/https://raw.githubusercontent.com/ZhReimu/subscription/master/dist/gkd.version.json',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
