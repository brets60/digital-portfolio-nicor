import React, { useState } from 'react';
import { Play, Camera, ShieldAlert, Cpu } from 'lucide-react';
import { playTactileClick } from '../utils/sound';

interface IncidentLog {
  id: string;
  timestamp: string;
  speed: number;
  limit: number;
  status: 'VIOLATION' | 'COMPLIANT';
  snapshotId: string;
}

export const SpeedRadarSimulator: React.FC = () => {
  const [speed, setSpeed] = useState<number>(44);
  const [speedLimit, setSpeedLimit] = useState<number>(30);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [carPosition, setCarPosition] = useState<number>(0);
  const [lastEvent, setLastEvent] = useState<{ speed: number; violation: boolean } | null>(null);
  const [flashWarning, setFlashWarning] = useState<boolean>(false);
  const [logs, setLogs] = useState<IncidentLog[]>([
    {
      id: 'EVT-904',
      timestamp: '14:22:18',
      speed: 48,
      limit: 30,
      status: 'VIOLATION',
      snapshotId: 'IMG_48KPH_CAM01.JPG'
    },
    {
      id: 'EVT-903',
      timestamp: '14:19:05',
      speed: 26,
      limit: 30,
      status: 'COMPLIANT',
      snapshotId: 'IMG_26KPH_CAM01.JPG'
    }
  ]);

  const runSimulation = () => {
    if (isSimulating) return;
    playTactileClick(900, 0.05, 0.05);
    setIsSimulating(true);
    setCarPosition(0);
    setFlashWarning(false);

    let pos = 0;
    const interval = setInterval(() => {
      pos += 5;
      setCarPosition(pos);

      if (pos >= 100) {
        clearInterval(interval);
        setIsSimulating(false);

        const isViolation = speed > speedLimit;
        setLastEvent({ speed, violation: isViolation });

        if (isViolation) {
          setFlashWarning(true);
          playTactileClick(400, 0.1, 0.08);
          setTimeout(() => setFlashWarning(false), 2500);
        }

        const newLog: IncidentLog = {
          id: `EVT-${Math.floor(1000 + Math.random() * 9000)}`,
          timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }),
          speed,
          limit: speedLimit,
          status: isViolation ? 'VIOLATION' : 'COMPLIANT',
          snapshotId: `IMG_${speed}KPH_CAM01.JPG`
        };
        setLogs(prev => [newLog, ...prev.slice(0, 4)]);
      }
    }, 40);
  };

  return (
    <div className="rounded-lg border border-paper-border dark:border-paper-dark-border bg-paper-surface dark:bg-paper-dark-surface p-6 font-mono text-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-paper-border dark:border-paper-dark-border gap-2">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-accent-blue" />
          <span className="font-bold uppercase tracking-wider text-ink-charcoal dark:text-ink-light">
            SPEED DETECTION TEST BENCH
          </span>
        </div>
        <span className="text-[11px] text-ink-subtle">
          ESP32-CAM • Arduino • Python (OpenCV)
        </span>
      </div>

      {/* Roadway Visualization */}
      <div className="my-6 p-4 rounded bg-paper-card dark:bg-paper-dark-card border border-paper-border dark:border-paper-dark-border relative overflow-hidden">
        {/* Road Surface */}
        <div className="h-24 bg-zinc-900 rounded relative flex items-center px-4 overflow-hidden">
          {/* Tripwire A */}
          <div className="absolute left-[30%] top-0 bottom-0 w-[2px] bg-sky-400/60 flex flex-col justify-between py-1">
            <span className="text-[8px] text-sky-400 -translate-x-1/2 bg-zinc-900 px-1">POINT A</span>
            <span className="text-[8px] text-sky-400 -translate-x-1/2 bg-zinc-900 px-1">0.0m</span>
          </div>

          {/* Tripwire B */}
          <div className="absolute left-[70%] top-0 bottom-0 w-[2px] bg-emerald-400/60 flex flex-col justify-between py-1">
            <span className="text-[8px] text-emerald-400 -translate-x-1/2 bg-zinc-900 px-1">POINT B</span>
            <span className="text-[8px] text-emerald-400 -translate-x-1/2 bg-zinc-900 px-1">10.0m</span>
          </div>

          {/* Center Line */}
          <div className="absolute left-0 right-0 top-1/2 border-b border-dashed border-zinc-700 -translate-y-1/2" />

          {/* Vehicle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 transition-all duration-75 flex items-center"
            style={{ left: `${Math.min(92, Math.max(2, carPosition))}%` }}
          >
            <div className="px-3 py-1 rounded bg-accent-blue text-white font-mono text-[10px] font-bold shadow-lg flex items-center gap-1.5 whitespace-nowrap">
              <span>🚗 {speed} km/h</span>
            </div>
          </div>

          {/* Strobe Warning Overlay */}
          {flashWarning && (
            <div className="absolute inset-0 bg-red-600/30 animate-pulse pointer-events-none flex items-center justify-center">
              <span className="bg-red-600 text-white font-bold px-3 py-1.5 rounded text-xs tracking-wider uppercase flex items-center gap-2 shadow-lg">
                <ShieldAlert className="w-4 h-4 animate-bounce" />
                ⚠️ WARNING: SPEED LIMIT EXCEEDED
              </span>
            </div>
          )}
        </div>

        {/* Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-center font-sans">
          <div className="p-2 rounded bg-paper-surface dark:bg-paper-dark-surface border border-paper-border dark:border-paper-dark-border">
            <span className="text-[10px] text-ink-subtle block uppercase font-mono">SPEED LIMIT</span>
            <span className="font-bold text-sm text-ink-charcoal dark:text-ink-light">{speedLimit} km/h</span>
          </div>
          <div className="p-2 rounded bg-paper-surface dark:bg-paper-dark-surface border border-paper-border dark:border-paper-dark-border">
            <span className="text-[10px] text-ink-subtle block uppercase font-mono">MEASURED SPEED</span>
            <span className={`font-bold text-sm ${speed > speedLimit ? 'text-red-500' : 'text-emerald-500'}`}>
              {lastEvent ? `${lastEvent.speed} km/h` : '--'}
            </span>
          </div>
          <div className="p-2 rounded bg-paper-surface dark:bg-paper-dark-surface border border-paper-border dark:border-paper-dark-border">
            <span className="text-[10px] text-ink-subtle block uppercase font-mono">WARNING LIGHTS</span>
            <span className="font-bold text-sm text-ink-charcoal dark:text-ink-light">
              {flashWarning ? '⚡ FLASHING' : 'OFF'}
            </span>
          </div>
          <div className="p-2 rounded bg-paper-surface dark:bg-paper-dark-surface border border-paper-border dark:border-paper-dark-border">
            <span className="text-[10px] text-ink-subtle block uppercase font-mono">CAMERA SNAPSHOT</span>
            <span className="font-bold text-sm text-ink-charcoal dark:text-ink-light flex items-center justify-center gap-1">
              <Camera className="w-3.5 h-3.5 text-accent-blue" />
              {lastEvent?.violation ? 'SAVED' : 'STANDBY'}
            </span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded bg-paper-surface dark:bg-paper-dark-surface border border-paper-border dark:border-paper-dark-border mb-6 font-sans">
        <div>
          <label className="flex justify-between text-xs text-ink-primary dark:text-ink-light font-medium mb-1">
            <span>Test Vehicle Speed:</span>
            <span className="font-bold text-accent-blue font-mono">{speed} km/h</span>
          </label>
          <input
            type="range"
            min={10}
            max={80}
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-full h-1.5 bg-paper-border dark:bg-paper-dark-border rounded-lg appearance-none cursor-pointer accent-accent-blue"
          />
          <div className="flex justify-between text-[11px] text-ink-subtle mt-1 font-mono">
            <span>10 km/h</span>
            <span>45 km/h</span>
            <span>80 km/h</span>
          </div>
        </div>

        <div>
          <label className="flex justify-between text-xs text-ink-primary dark:text-ink-light font-medium mb-1">
            <span>Speed Limit:</span>
            <span className="font-bold font-mono">{speedLimit} km/h</span>
          </label>
          <input
            type="range"
            min={20}
            max={50}
            step={5}
            value={speedLimit}
            onChange={(e) => setSpeedLimit(Number(e.target.value))}
            className="w-full h-1.5 bg-paper-border dark:bg-paper-dark-border rounded-lg appearance-none cursor-pointer accent-ink-charcoal dark:accent-ink-light"
          />
          <div className="flex justify-between text-[11px] text-ink-subtle mt-1 font-mono">
            <span>20 km/h (School)</span>
            <span>30 km/h (Lane)</span>
            <span>50 km/h (Road)</span>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mb-6">
        <button
          onClick={runSimulation}
          disabled={isSimulating}
          className="w-full py-3 px-4 rounded bg-accent-blue text-white font-bold uppercase tracking-wider text-xs hover:bg-accent-blue-vibrant transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          {isSimulating ? 'Tracking Vehicle Speed...' : 'Simulate Car Passing By'}
        </button>
      </div>

      {/* Event Log */}
      <div>
        <div className="text-[11px] uppercase text-ink-subtle mb-2 font-bold flex items-center justify-between font-mono">
          <span>RECENT LOGGED EVENTS (SQLITE)</span>
          <span className="text-accent-blue">AUTO-SAVED</span>
        </div>
        <div className="overflow-x-auto border border-paper-border dark:border-paper-dark-border rounded">
          <table className="w-full text-left text-[11px]">
            <thead className="bg-paper-card dark:bg-paper-dark-card border-b border-paper-border dark:border-paper-dark-border text-ink-subtle font-mono">
              <tr>
                <th className="p-2">EVENT</th>
                <th className="p-2">TIME</th>
                <th className="p-2">SPEED</th>
                <th className="p-2">LIMIT</th>
                <th className="p-2">STATUS</th>
                <th className="p-2">FILE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-paper-border dark:divide-paper-dark-border">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-paper-surface/50">
                  <td className="p-2 font-bold font-mono">{log.id}</td>
                  <td className="p-2 text-ink-subtle">{log.timestamp}</td>
                  <td className="p-2 font-bold font-mono">{log.speed} km/h</td>
                  <td className="p-2 font-mono">{log.limit} km/h</td>
                  <td className="p-2">
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                        log.status === 'VIOLATION'
                          ? 'bg-red-500/10 text-red-600 dark:text-red-400'
                          : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                      }`}
                    >
                      {log.status === 'VIOLATION' ? 'OVERSPEED' : 'SAFE'}
                    </span>
                  </td>
                  <td className="p-2 font-mono text-[10px] text-ink-subtle">{log.snapshotId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
