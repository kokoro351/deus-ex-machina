export default function App() {
return ( <div className="min-h-screen bg-black text-cyan-200 flex items-center justify-center p-8"> <div className="max-w-xl border border-cyan-900 rounded-2xl p-8 bg-zinc-950 shadow-2xl"> <div className="text-sm tracking-[0.3em] text-cyan-400 mb-3">
DEUS EX MACHINA </div>

```
    <h1 className="text-4xl font-bold mb-4">
      海底都市 SECTOR-7
    </h1>

    <p className="text-zinc-300 leading-relaxed mb-6">
      人類は海面上の文明を失った。
      <br />
      生き残った者達は、深海都市SECTOR-7へ沈んだ。
      <br />
      巨大隔壁、酸素循環塔、海底発電炉。
      <br />
      あなたは管理官として、
      日々「何を切り捨てるか」を選択する。
    </p>

    <div className="rounded-2xl overflow-hidden border border-cyan-900 bg-black mb-6">
      <img
        src="https://raw.githubusercontent.com/kokoro351/deus-ex-machina-assets/main/prologue_city_sector7.png"
        alt="sector7"
        className="w-full object-cover"
      />
    </div>

    <div className="space-y-3">
      <button className="w-full bg-cyan-950 hover:bg-cyan-900 border border-cyan-700 rounded-xl px-4 py-3 transition">
        START
      </button>

      <button className="w-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 transition">
        LOAD
      </button>
    </div>

    <div className="mt-6 text-xs text-zinc-500 leading-relaxed">
      神成長度が100%へ到達した時、
      <br />
      DEUS EX MACHINAは顕現する。
    </div>
  </div>
</div>
```

)
}
