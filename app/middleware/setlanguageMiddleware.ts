import { NextFunction, Request, Response } from "express";
import i18n from "@/i18n";


const SetLocaleMiddleWares = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const app_locale = i18n.getLocales()
        const accepted_lang = req.acceptsLanguages(...app_locale)
        if (accepted_lang) {
            req.locale = accepted_lang
        }
        next()
    } catch (error) {
        return next(error)
    }
}

export default SetLocaleMiddleWares