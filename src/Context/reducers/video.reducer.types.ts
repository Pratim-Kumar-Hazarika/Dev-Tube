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
    video: Video[]
}

export type PlayListName = string

export type ReducerInitialState = {
    likedVideos: Video[];
    dislikedVideos :Video[];
    playlistNames:PlayListName[]
    historyVideos:Video [];
    playlists: Playlist[];
    allVideos: Video[];

}