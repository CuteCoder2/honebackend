import { I18n } from "i18n"
import path from "path";


const i18n = new I18n({
  locales: ['en', 'fr'],
  defaultLocale: 'fr',
  directory: path.join('./', 'locales')
});

export default  i18n;
export const __ =  i18n.__
export const __n =  i18n.__n