import * as migration_20260412_182757 from './20260412_182757';
import * as migration_20260412_190431 from './20260412_190431';

export const migrations = [
  {
    up: migration_20260412_182757.up,
    down: migration_20260412_182757.down,
    name: '20260412_182757',
  },
  {
    up: migration_20260412_190431.up,
    down: migration_20260412_190431.down,
    name: '20260412_190431'
  },
];
