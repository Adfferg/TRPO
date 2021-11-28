import api from "../http";

export default class ProfileService{
    static async setAvatar(email,data){
        return api.post('/set_avatar',{email,data})
    }
    static async getUserInfo(_id){
        return api.post('/get_user_info',{_id})
    }
    static async cloudinaryDestroyOld(id){
        return api.post('/cloudinary/destroy',{id})
    }
    static async sendActivationLink(email){
        return api.post('/send_activationlink',{email})
    }
}