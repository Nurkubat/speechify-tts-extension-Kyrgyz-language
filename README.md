# Speechify TTS Test

This Chrome extension allows you to test the Speechify TTS API using the Kyrgyz language (language: ky-KG).

## Features
- Enter text in the provided text area.
- Click the "Оку" button to convert text to speech.
- Plays the audio output directly in the extension.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/speechify-tts-extension.git
   cd speechify-tts-extension
   ```

2. **Add your Speechify API key:**
   - Open `popup.js`.
   - Replace `YOUR_API_KEY_HERE` with your actual Speechify API key:
     ```javascript
     "Authorization": "Bearer YOUR_API_KEY_HERE",
     ```

3. **Load the extension in Chrome:**
   - Go to `chrome://extensions/`.
   - Enable "Developer mode".
   - Click "Load unpacked" and select the extension folder.

## Important Note
- Do not share your API key publicly. Keep it secure and private.
- If you plan to share this extension, ensure your API key is not included in the code.

## License
This project is licensed under the MIT License.
