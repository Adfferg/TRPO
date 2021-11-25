import Axios from "axios";

export default class CloudinaryService {
  static async postImage(image) {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset",
    );
    const imagePosted = await Axios.post(
      process.env.REACT_APP_CLOUDINARY_LINK,
      formData
    );
    return imagePosted;
  }
}
