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
    static async createApplication(name,email,phone){
        return api.post('/applications/create',{name,email,phone})
    }
    static async getApplications(){
        return api.get('/applications/get_applications')
    }
    static async deleteApplication(id){
        return api.post('/applications/delete',{id})
    }
    static async getUsers(){
        return api.get('/get_users')
    }
    static async banUser(email){
        return api.post('/ban_user',{email})
    }
}