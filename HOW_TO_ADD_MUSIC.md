# How to Add Your Own Dark Romance Music

## Quick Steps (Recommended)

1. **Download a dark romance/gothic MP3 file**
   - Go to https://pixabay.com/music/search/gothic/
   - Search for: "dark romance", "gothic", "dark ambient", "vampire"
   - Click on a track you like
   - Click the "Download" button (free, no account needed)

2. **Add the file to your project**
   - Save the downloaded MP3 file
   - Put it in your project's `/public` folder
   - Rename it to something simple like `dark-romance.mp3`

3. **Update the code**
   - Open `app/components/SimpleMusicPlayer.tsx`
   - Find line 18 (the `audioUrl` line)
   - Change it to:
   ```typescript
   const audioUrl = "/dark-romance.mp3";
   ```

4. **Refresh your browser**
   - The music should now play!

## Example

If you download a file called "gothic-love-song.mp3":

1. Put it in `/public/gothic-love-song.mp3`
2. Change the code to:
```typescript
const audioUrl = "/gothic-love-song.mp3";
```
3. Done!

## Recommended Tracks from Pixabay

Search these terms on Pixabay Music:
- "dark ambient"
- "gothic romance"
- "vampire"
- "dark love"
- "melancholic"
- "haunting"

All tracks on Pixabay are free and royalty-free!

## Current Issue

The external URL might not work due to CORS restrictions. Using a local file (in `/public` folder) is the most reliable method.
