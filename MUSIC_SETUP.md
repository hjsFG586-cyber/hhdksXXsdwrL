# Music Player Setup

The music player is now configured with a dark gothic track!

## How to Change the Song

### Option 1: Use a Direct MP3 URL

1. Open `app/components/SimpleMusicPlayer.tsx`
2. Find this line (around line 18):
   ```typescript
   const audioUrl = "YOUR_URL_HERE";
   ```
3. Replace with any direct MP3 URL

### Option 2: Host Your Own File

1. Download a dark romance/gothic MP3 file
2. Place it in the `/public` folder (e.g., `public/dark-romance.mp3`)
3. Update the URL to: `const audioUrl = "/dark-romance.mp3";`

## Where to Find Dark Gothic/Romance Music

### Free Music Sites (Royalty-Free):
- **Pixabay Music**: https://pixabay.com/music/search/gothic/
  - Search for "gothic", "dark ambient", "dark romance"
  - Click download to get direct MP3 link
  
- **Free Music Archive**: https://freemusicarchive.org/
  - Search for "gothic", "darkwave", "dark ambient"
  
- **Incompetech**: https://incompetech.com/music/
  - Filter by "Dark" or "Dramatic"

### Recommended Dark Romance Tracks:
- Search Pixabay for: "gothic love", "dark romance", "vampire", "dark ambient"
- Look for tracks with keywords: haunting, melancholic, ethereal, mysterious

## Current Track

The player is currently using a dark gothic ambient track from Pixabay.

## Features

- ✅ Plays audio from MP3 files
- ✅ Loop enabled by default
- ✅ Volume set to 70% (adjustable)
- ✅ Animated visualizer when playing
- ✅ Hover to see track info
- ✅ Click to play/pause
- ✅ Console logging for debugging

## Adjusting Volume

To change the volume, modify the `volume` property:
```typescript
audio.volume = 0.7;  // 0.0 to 1.0 (70% volume)
```

## Example: Adding Your Own Song

1. Download a song (e.g., `dark-love.mp3`)
2. Put it in `/public/dark-love.mp3`
3. Change the code:
```typescript
const audioUrl = "/dark-love.mp3";
```
4. Refresh the page

## Troubleshooting

- **No sound**: Check browser console (F12) for errors
- **File not found**: Make sure the MP3 URL is correct and accessible
- **CORS error**: Use files from your own domain or public CDNs that allow CORS
