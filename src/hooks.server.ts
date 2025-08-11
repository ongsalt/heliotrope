import { sequence } from '@sveltejs/kit/hooks';
import { iocHook } from './core/ioc-hook';

export const handle = sequence(iocHook)
