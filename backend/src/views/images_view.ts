import Image from '../models/image';

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://192.168.0.22:5000/uploads/${image.path}`
        }
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
}