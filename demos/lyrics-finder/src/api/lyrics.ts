const fetchLyrics = async (artist: string, title: string): Promise<{ lyrics?: string; error?: string }> => {
  try {
    const response = await fetch(
      `https://api.lyrics.ovh/v1/${encodeURIComponent(artist.trim())}/${encodeURIComponent(title.trim())}`,
      { signal: AbortSignal.timeout(15000) }
    );
    if (!response.ok) return { error: response.status === 404 ? 'Lyrics not found.' : 'The lyrics service is unavailable. Please try again.' };
    const data = await response.json();
    return typeof data.lyrics === 'string' ? { lyrics: data.lyrics } : { error: 'Lyrics not found.' };
  } catch {
    return { error: 'Could not reach the lyrics service. Please try again.' };
  }
};

export default fetchLyrics;
