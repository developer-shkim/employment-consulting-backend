import { SetMetadata } from '@nestjs/common';
import { getMetadata } from 'reflect-metadata/no-conflict';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
