const cloudinary = require("../cloudinary/cloudinary");

class CloudinaryService {
  async destroy(id) {
    try {
      await cloudinary.uploader.destroy(id);
    } catch (e) {}
  }
}

module.exports = new CloudinaryService();
