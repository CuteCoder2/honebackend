import i18n from "@/i18n";
import { NextFunction, Request, Response } from "express";


const SetAppLocaleMiddleWares = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const user = req.user
        const app_locale = i18n.getLocale()
        if (user) {
            const user_locale = user.locale
            if (user_locale !== app_locale) {
                i18n.setLocale(user_locale)
            }
        } else {
            const request_locale = req.locale
            i18n.setLocale(request_locale)
        }
        next()
    } catch (error) {
        return next(error)
    }
}

export default SetAppLocaleMiddleWares