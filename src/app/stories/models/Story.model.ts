export class Story {

    title: string;
    author: string;
    url: string;
    publishedAt: Date;
    imageUrl: string;

    constructor(title: string, author: string, url: string, publishedAt: Date, imageUrl: string = '') {
        this.title = title;
        this.author = author;
        this.url = url;
        this.imageUrl = imageUrl;
        this.publishedAt = publishedAt;
    }
}