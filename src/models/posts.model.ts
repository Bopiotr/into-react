export interface PostModel {
    date: string,
    message: string,
    attachment?: {
        type: string,
        url: string,
    }
}

export type Posts = Readonly<{ posts: PostModel[] }>;
