import UserInterface from "../../../utils/interfaces/UserInterface";

declare global {
    namespace Express{
        export interface Request {
            user : UserInterface
        }
    }
}


