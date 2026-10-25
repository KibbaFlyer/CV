declare module "../api/lyrics" {
    const fetchLyrics: (artist: string, title: string) => Promise<unknown>;
    export default fetchLyrics;
  }