import { InjectionToken } from '@angular/core';
import { WebApp as WebAppType } from '@twa-dev/types';

export const WEB_APP = new InjectionToken<WebAppType>('Telegram WebApp object')