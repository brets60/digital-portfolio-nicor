// Subtle Web Audio API tactile feedback (zero external audio file dependencies)

let audioCtx: AudioContext | null = null;
let soundMuted = true; // Default muted for respectful interaction

export function toggleAudio(forceState?: boolean): boolean {
  if (forceState !== undefined) {
    soundMuted = !forceState;
  } else {
    soundMuted = !soundMuted;
  }
  if (!soundMuted && !audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  return !soundMuted;
}

export function isAudioEnabled(): boolean {
  return !soundMuted;
}

export function playTactileClick(freq = 800, duration = 0.02, volume = 0.03) {
  if (soundMuted || typeof window === 'undefined') return;
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(volume, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch {
    // Graceful fallback if browser restricts audio
  }
}
