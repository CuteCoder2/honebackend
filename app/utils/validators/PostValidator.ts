import joi from "joi"

const create = joi.object({
    title:joi.string().required(),
    body:joi.string().required(),
})

const update = joi.object({
    title:joi.string().required(),
    body:joi.string().required(),
})

export default  {create , update}