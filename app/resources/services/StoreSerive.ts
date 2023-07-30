import { storeDataType } from "@/helpers/types/models/modelsTypes";
import StoreModel from "@/resources/models/StoreModel";
import HttpException from "@/utils/exceptions/HttpException";
import { SchemaTypes } from "mongoose";

export default class StoreService {
    private model = StoreModel

    public filterStores = async ({ name, lon, lat, dob }: storeDataType) => {
        try {
            const stores = this.model.find()
            if (name) {
                stores.where({ 'name': new RegExp(name, "i") })
            }
            if (lon && lat) {
                stores.where('location.lon').gte(lon)
                    .where('location.lat').gte(lat)
            }
            if (dob) {
                stores.where('dob').equals(dob)
            }
            return await stores
        } catch (error) {
            return new HttpException(500, "failed to get resources")
        }
    }

    public createStore = async (user: typeof SchemaTypes.ObjectId, { contacts, description, dob, email, img, imgs, lat, logo, lon, name,private_policy }: storeDataType) => {
        try {
            const store = await this.model.create({
                name: name,
                img: img,
                logo: logo,
                imgs: imgs,
                description: description,
                location: {
                    lon: lon,
                    lat: lat,
                },
                contact: contacts,
                email: email,
                dob: dob,
                owner: user,
                private_policy: private_policy
            })
            return store
        } catch (error) {
            return new HttpException(500, "failed to create resource")
        }
    }
    public updateStoreInfo = async (id:typeof SchemaTypes.ObjectId , {contacts ,description , dob , email , img , imgs , lat ,  logo , lon , name , private_policy} : storeDataType) => {
        try {
            const store = await this.model.findById(id)
            if(!store) return new HttpException(404 , "resource not found")
            if(contacts){
                store.contacts.push(...contacts)
            }
            if(contacts){
                store.contacts.push(...contacts)
            }
            if(description){
                store.description = description
            }
            if(dob){
                store.dob = dob
            }
            if(email){
                store.email = email
            }
            if(img){
                store.img = img
            }
            if(imgs){
                store.imgs.push(...imgs)
            }
            if(logo){
                store.logo = logo
            }
            if(lon && lat){
                store.location.lon = lon
                store.location.lat = lat
            }
            if(name){
                store.name = name
            }
            if(private_policy){
                store.private_policy = private_policy
            }
            return await store.save()
        } catch (error) {
            return new HttpException(500 , "failed to update resource")
        }
    }
}