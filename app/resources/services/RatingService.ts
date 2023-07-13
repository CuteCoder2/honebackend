import HttpException from "@/utils/exceptions/HttpException"
import RatingModel from "../models/RatingModel"
import { ratingData } from "@/helpers/types/models/modelsTypes"
import { SchemaTypes } from "mongoose"

export default class RatingService {
    private model = RatingModel

    private rate = async (data: ratingData) => {
        try {
            const { product, rating, user } = data
            const rate = await this.model.create({ product, user, rating })
            return rate
        } catch (error) {
            return new HttpException(400, "failed to rate rating")
        }
    }

    private updateRate = async (id: typeof SchemaTypes.ObjectId, rating: number) => {
        try {
            const rate = await this.model.findById(id)
            if (!rate) return new HttpException(400, "model not found")
            rate.rating = rating
            await rate.save()
            return rate
        } catch (error) {
            return new HttpException(400, "failed to update rating")
        }
    }

    private productRating = async (id: typeof SchemaTypes.ObjectId,) => {

        try {
            const ratings = await this.model.find({product : id}) 
            return ratings
        } catch (error) {
            return new HttpException(400, "failed to delete rating")
        }
    }


    private deleteRating = async (id: typeof SchemaTypes.ObjectId) => {
        try {
            const rate = await this.model.deleteOne({_id:id})
            return rate
        } catch (error) {
            return new HttpException(400, "failed to delete rating")
        }
    }

}