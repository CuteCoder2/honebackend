import HttpException from "@/utils/exceptions/HttpException"
import WatchModel from "../models/WatchModel"
import { WatchesDataTypes } from "@/helpers/types/models/modelsTypes"
import { SchemaTypes } from "mongoose"

export default class WatchService {
    private model = WatchModel

    private getWatches = async ({devices , des , shape , id , screen }:WatchesDataTypes)=>{
        try {
            const watches = this.model.find({})
            if(screen){
                watches.where({screen:screen})
            }
            if(devices){
                devices.map(device => {
                    watches.where({devices:new RegExp(device , 'i')})
                });
            }
            if(des){
                watches.where({devices:new RegExp(des , 'i')})
            }
            if(shape){
                watches.where({shape:shape})
            }
            if(id){
                watches.where({_id:id})
            }
            return await watches
        } catch (error) {
            return new HttpException(400 , "product not found")
        }
    }

    private create = async (data:WatchesDataTypes)=>{
        try {
            const watch = await this.model.create({
                screen:data.screen,
                compatibleDevice: data.devices,   
                description:data.des,
                shape:data.shape,
                specialControl:data.specialCon
            })
            return watch
        } catch (error) {
            return new HttpException(400 , "failed to create product")
        }
    }

    private update = async (id:typeof SchemaTypes.ObjectId,data:WatchesDataTypes)=>{
        try {
            const watches = this.model.find({})
            if(data.screen){
                watches.where({screen:screen})
            }
            if(data.devices){
                data.devices.map(device => {
                    watches.where({devices:new RegExp(device , 'i')})
                });
            }
            if(data.des){
                watches.where({devices:new RegExp(data.des , 'i')})
            }
            if(data.shape){
                watches.where({shape:data.shape})
            }
            if(id){
                watches.where({_id:id})
            }
            return await watches
        } catch (error) {
            return new HttpException(400 , "product not found")
        }
    }
}