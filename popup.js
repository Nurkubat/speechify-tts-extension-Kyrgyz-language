document.getElementById('tts-btn').onclick = async function() {
  const text = document.getElementById('tts-text').value.trim();
  if (!text) return alert('Текст жазыңыз!');
  const selectedRadio = document.querySelector('input[name="voice"]:checked');
  const voiceId = selectedRadio ? selectedRadio.value : "2a9c46a8-00b1-4e8a-88f6-1036104b2887";
  const response = await fetch("https://api.sws.speechify.com/v1/audio/stream", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 2gwH9XgNUqjMQ6DWmZGCrliLwo9iMTUcYHRf2WwtKHg=",
      "Accept": "audio/mpeg",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      input: text,
      voice_id: voiceId,
      language: "ky-KG",
      model: "simba-multilingual"
    })
  });
  if (!response.ok) {
    alert('API Error: ' + response.status);
    return;
  }
  const audioBlob = await response.blob();
  const audioUrl = URL.createObjectURL(audioBlob);
  const audio = document.getElementById('tts-audio');
  audio.src = audioUrl;
  audio.style.display = 'block';
  audio.play();
};
