export type Video = {
    _id: string;
    url: string;
    name: string;
    artist: string;
    genre: string;
    views: string;
    image: string;
    thumbnail: string;
    _v: string;
}
export type VideosFromServer = {
    videos: Video[]
}
export type Playlist = {
    name: string;
    video: []
}

export type ReducerInitialState = {
    likedVideos: [];
    historyVideos: [];
    playlists: Playlist[];
    allVideos: Video[]

}