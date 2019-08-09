export class  Video{
    //here we initialize the property which we used ,to send the server params.
    constructor(
        public videoId:string,
        public title:string,
        public thumnailUrl:string,
        public channelTitle:string,
        public channelId:string,
        public publishedAt:string,
        public description:string 
    )
{
    this.videoId=videoId;
    this.title=title;
    this.thumnailUrl=thumnailUrl;
    this.channelTitle=channelTitle;
    this.channelId=channelId;
    this.publishedAt=publishedAt;
    this.description=description;
}
}