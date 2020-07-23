import 'core-js/features/reflect';
import 'zone.js/dist/zone';

(window as any).global = window;
(window as any).process = {
  env: { DEBUG: undefined },
};