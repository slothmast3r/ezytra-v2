import * as migration_20260412_182757 from './20260412_182757';
import * as migration_20260412_190431 from './20260412_190431';
import * as migration_20260412_231641 from './20260412_231641';
import * as migration_20260418_120456 from './20260418_120456';
import * as migration_20260418_120648 from './20260418_120648';
import * as migration_20260419_203056_add_image_sizes from './20260419_203056_add_image_sizes';

export const migrations = [
  {
    up: migration_20260412_182757.up,
    down: migration_20260412_182757.down,
    name: '20260412_182757',
  },
  {
    up: migration_20260412_190431.up,
    down: migration_20260412_190431.down,
    name: '20260412_190431',
  },
  {
    up: migration_20260412_231641.up,
    down: migration_20260412_231641.down,
    name: '20260412_231641',
  },
  {
    up: migration_20260418_120456.up,
    down: migration_20260418_120456.down,
    name: '20260418_120456',
  },
  {
    up: migration_20260418_120648.up,
    down: migration_20260418_120648.down,
    name: '20260418_120648',
  },
  {
    up: migration_20260419_203056_add_image_sizes.up,
    down: migration_20260419_203056_add_image_sizes.down,
    name: '20260419_203056_add_image_sizes'
  },
];
