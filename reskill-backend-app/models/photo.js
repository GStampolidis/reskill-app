class Photo {
    constructor(id, albumId, title, url, thumbnailUrl) {
        this.id = id;
        this.title = title;
        this.albumId = albumId;
        this.url = url;
        this.thumbnailUrl = thumbnailUrl; 
    }
}

module.exports = Photo;