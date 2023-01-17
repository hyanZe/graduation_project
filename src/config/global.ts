// noinspection AllyPlainJsInspection


export const isProduction = process.env.NODE_ENV === 'production';
export const logLevel = isProduction ? 'warn' : 'trace';

export const enum TokenType {
  Cookie = 'cookie',
  Header = 'header',
}

export const appTitle = 'MovingKite-Admin';
export const localeHeader = 'Accept-Language';
export const zoneidHeader = 'Zone-Id';

export const disableI18n = isProduction;
export const localeDeclare = 'en-US';
// export const localeDefault = process.env.VUE_APP_I18N_LOCALE || localeDeclare;
// export const localeFallback = process.env.VUE_APP_I18N_FALLBACK_LOCALE || localeDeclare;

export const tokenName = 'session';
export const tokenSend = TokenType.Header;

export const httpNoAuthn = 401;
export const httpNoPerms = 403;
export const httpDoubler = 202;
export const httpCaptcha = 406;
export const httpRighter = 409;

export const passLenMin = 6;

export const captchaQuest = 'quest-captcha-image';
export const captchaCheck = 'check-captcha-image';

export const pathLogin = '/login';
export const pathIndex = '/order-list';

export const oauthLogin = isProduction ? [] : ['github'];
export const oauthSuccess = 'oauth successfully';

export const pageSize = 25;
export const cachingView = 10;
