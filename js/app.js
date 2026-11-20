'use strict';

// ═══════════════════════════════════════════════════════
//  CHARACTER DATA — 全28キャラ（stars: レア度 / weight: 排出重み）
// ═══════════════════════════════════════════════════════
const ALL_CHARS = [
  // ── 5★ SSR ──────────────────────────────────────────
  {
    id: 'oz', name: 'オズ・ザ・ダークネス', title: '闇の帝王',
    stars: 5, weight: 15,
    stand: 'assets/images/oz_throne.jfif',
    action: 'assets/images/oz_throne.jfif',
    amp: 'MEGA',
    quotes: [
      '闇の宴へようこそ。狂乱の時間だ！',
      '20,000歩！お前は本物のメタル戦士だ！',
      '俺の王国へ来い。ここが終点だ……いや、始まりだ！',
    ]
  },
  {
    id: 'jimi', name: 'ジミ・エクスペリア', title: '逆弦の革命児',
    stars: 5, weight: 15,
    stand: 'assets/images/jimi_stand.jfif',
    action: 'assets/images/jimi_action.jfif',
    amp: 'MARS',
    quotes: [
      '右手の世界を、左の指でひっくり返す。歪んだブルースが魂の叫びさ！',
      '手だけじゃねえ、歯で弾き、魂で燃やす！',
    ]
  },
  // ── 4★ SR ───────────────────────────────────────────
  {
    id: 'zakk', name: 'ジャック・ベルセルク', title: '荒ぶる野獣',
    stars: 4, weight: 24,
    stand: 'assets/images/zakk_stand.jfif',
    action: 'assets/images/zakk_action.jfif',
    amp: 'HEAVEY + MARS',
    quotes: [
      '練習しろ。言い訳はゴミ箱に捨てろ！',
      '風車ヘドバン炸裂！魂のリフを浴びろ！',
      '限界？そんな言葉はオレの辞書にない！',
    ]
  },
  {
    id: 'eddie', name: 'エド・フランケン', title: '笑顔のタッピング魔術師',
    stars: 4, weight: 24,
    stand: 'assets/images/eddie_stand.webp',
    action: 'assets/images/eddie_action.webp',
    amp: 'MARS + HEAVEY',
    quotes: [
      'タッピング！これが俺の発明だ！信じろ！',
      '両手が踊る！指が叫ぶ！魔法が始まる！',
      '笑顔でプレイ！それがすべて！',
    ]
  },
  {
    id: 'nuno', name: 'ヌーノ・ファンク', title: '16ビートの弦上の武士',
    stars: 4, weight: 24,
    stand: 'assets/images/nuno_stand.webp',
    action: 'assets/images/nuno_action.jfif',
    amp: 'MEGA + MARS',
    quotes: [
      'ただ速いだけじゃつまらない。リズムと一体になって、ギターを跳ねさせるんだ！',
      '弾きまくれ！パーカッシブな16ビートカッティング！',
    ]
  },
  {
    id: 'hide', name: 'ヒデ・スパイダー', title: '玩具箱の王子',
    stars: 4, weight: 24,
    stand: 'assets/images/hide_stand.jfif',
    action: 'assets/images/hide_action.jfif',
    amp: 'ORBIT + MARS',
    quotes: [
      'オモチャ箱をひっくり返したような世界へようこそ！',
      'もっとデカい声で！限界ぶっちぎって踊れ！！',
      'ピンクのカオス！それが俺のスタイルだ！',
    ]
  },
  {
    id: 'page', name: 'ジミー・パジェント', title: 'ダブルネックの魔道師',
    stars: 4, weight: 24,
    stand: 'assets/images/page_stand.jfif',
    action: 'assets/images/page_action.jfif',
    amp: 'MARS',
    quotes: [
      'バイオリンの弓が奏でる混沌の魔術！サイケデリックな爆音の渦に溺れるがいい！！',
      '歴史を創る音がここにある。ダブルネックの重低音を味わえ！',
    ]
  },
  // ── 3★ R ────────────────────────────────────────────
  {
    id: 'slash', name: 'スラッシャー・ハット', title: '帽子の孤高',
    stars: 3, weight: 36,
    stand: 'assets/images/slash_stand.jfif',
    action: 'assets/images/slash_action.jfif',
    amp: 'MARS',
    quotes: [
      '派手な小細工はいらねえ、魂の"ブルース"を鳴らせ',
      '夜空を突き刺す咆哮のソロを聴け！',
      'シンプルこそ最強。だが奥深い…',
    ]
  },
  {
    id: 'vai', name: 'スティーヴ・マエストロ', title: '7弦の超人',
    stars: 3, weight: 36,
    stand: 'assets/images/vai_stand.webp',
    action: 'assets/images/vai_action.webp',
    amp: 'MEGA + BLUE&LIGHT',
    quotes: [
      '7弦は宇宙への扉だ！歩数も7次元だ！',
      '音楽は神との対話。ギターは祈り。',
      '完璧な音符のように、完璧な一歩を！',
    ]
  },
  {
    id: 'ynge', name: 'インゲ・ヴァルム', title: 'ネオクラ貴公子',
    stars: 3, weight: 36,
    stand: 'assets/images/ynge_stand.jfif',
    action: 'assets/images/ynge_action.jfif',
    amp: 'MARS',
    quotes: [
      'Less is more? 少ない方が良いわけないだろ！',
      'More is more! 神速スウィープ解禁だ！',
      'ヴィヴァルディが泣いて喜ぶ歩数だ！',
    ]
  },
  {
    id: 'bucket', name: 'バケット・チキン', title: 'から揚げ桶の狂気',
    stars: 3, weight: 36,
    stand: 'assets/images/bucket_stand.jfif',
    action: 'assets/images/bucket_stand.jfif',
    amp: 'MEGA',
    quotes: [
      '……（無言で超高速のキルスイッチとロボットタッピングを繰り出す）',
      '……（静寂。そして嵐）',
      '……（桶の奥から声なき叫びが響く）',
    ]
  },
  {
    id: 'beach', name: 'ビーチ・ブラックモア', title: 'ハイウェイの疾風',
    stars: 3, weight: 36,
    stand: 'assets/images/beach_stand.jfif',
    action: 'assets/images/beach_action.jfif',
    amp: 'MARS',
    quotes: [
      '30年以上の時を経て、あの潮風のステージに再び。私のストラトが爆音を呼び覚ます！',
      '海を揺るがすハイウェイスターの咆哮！半世紀の指先を受け取れ！！',
    ]
  },
  {
    id: 'iommi', name: 'トニー・ブラッカー', title: '暗黒の開祖',
    stars: 3, weight: 36,
    stand: 'assets/images/iommi_stand.jfif',
    action: 'assets/images/iommi_stand.jfif',
    amp: 'MEGA',
    quotes: [
      '重く、暗く……これぞ真のヘヴィ・サウンドだ',
      '俺のリフが世界を変えた。お前の一歩が歴史を変える。',
      '暗黒の祝福を受けよ。歩け、戦士よ。',
    ]
  },
  {
    id: 'dave', name: 'デイヴ・オメガ', title: 'ラスタカラーの戦士',
    stars: 3, weight: 36,
    stand: 'assets/images/dave_stand.webp',
    action: 'assets/images/dave_action.webp',
    amp: 'HEAVEY',
    quotes: [
      '俺を追い出したことを後悔させてやる！',
      'スラッシュは俺が始めた！歩数も俺がリードする！',
    ]
  },
  // ── 2★ UC ───────────────────────────────────────────
  {
    id: 'angus', name: 'アンガス・ジュニア', title: 'シューズなき王',
    stars: 2, weight: 50,
    stand: 'assets/images/angus_stand.jfif',
    action: 'assets/images/angus_action.jfif',
    amp: 'MEGA',
    quotes: [
      'Duck walk time! ここからが本番だぜ！',
      '高電圧ロック！止まるな！走れ！',
      '学校なんて退屈だぜ！爆音のロックンロールでぶっ飛ぼう！',
    ]
  },
  {
    id: 'lemmy', name: 'レミー・アイアンフィスト', title: '鉄拳のベーシスト',
    stars: 2, weight: 50,
    stand: 'assets/images/lemmy_stand.webp',
    action: 'assets/images/lemmy_action.webp',
    amp: 'MARS',
    quotes: [
      'ベースをもっとデカくしろ！それがロックだ！',
      '俺は止まらない。歩き続ける。鉄の意志で！',
      '100万ワットで吹き飛ばせ！',
    ]
  },
  {
    id: 'marty', name: 'マーティ・ジャパン', title: '日本を愛した男',
    stars: 2, weight: 50,
    stand: 'assets/images/marty_stand.webp',
    action: 'assets/images/marty_action.webp',
    amp: 'BLUE&LIGHT + HEAVEY',
    quotes: [
      'ニッポン最高！歩けば魂がシャープになる！',
      '日本の歩道は世界一だ！オリエンタルメタル！',
      '歩数とペンタトニック、同じくらい美しい！',
    ]
  },
  {
    id: 'mick', name: 'ミック・サターン', title: '不死身のドラマー',
    stars: 2, weight: 50,
    stand: 'assets/images/mick_stand.webp',
    action: 'assets/images/mick_action.webp',
    amp: 'MARS + MEGA',
    quotes: [
      '俺は何者も止められない！永遠に叩き続けるぜ！',
      'ドラムは爆発だ！リズムは鉄だ！',
    ]
  },
  {
    id: 'petrucci', name: 'ペトルーシ・マッスル', title: '7弦の筋肉神',
    stars: 2, weight: 50,
    stand: 'assets/images/petrucci_stand.webp',
    action: 'assets/images/petrucci_action.webp',
    amp: 'HEAVEY + MARS',
    quotes: [
      'プログレッシブな筋肉！歩数もプログレだ！',
      '複雑なリズムも、身体が覚えれば恐くない！',
    ]
  },
  {
    id: 'schenker', name: 'マイケル・シャドウ', title: 'UFOの影',
    stars: 2, weight: 50,
    stand: 'assets/images/schenker_stand.webp',
    action: 'assets/images/schenker_action.webp',
    amp: 'MARS',
    quotes: [
      'Vシェイプが空を切る！歩けば宇宙が見える！',
      'UFOの速さで歩け！',
    ]
  },
  {
    id: 'tak', name: 'タック・ダブルV', title: '轟音ニッポンの誇り',
    stars: 2, weight: 50,
    stand: 'assets/images/tak_stand.jfif',
    action: 'assets/images/tak_action.jfif',
    amp: 'MARS',
    quotes: [
      '日本のロックの底力を見せてやる！轟音のメロディを聴け！',
      '歌うように弾く、これが俺のスタイルさ！',
    ]
  },
  // ── 1★ C ────────────────────────────────────────────
  {
    id: 'takasaki', name: 'タカサキ・サンダー', title: '雷神の右腕',
    stars: 1, weight: 36,
    stand: 'assets/images/takasaki_action.jfif',
    action: 'assets/images/takasaki_action.jfif',
    amp: 'MEGA',
    quotes: [
      '俺の魂のランダム・スター、その耳に焼き付けろ！',
      '雷よ！轟け！これがメタルの洗礼だ！',
      'もっと速く！限界を超えろ！',
      '歩くことは戦うことだ！止まるな！',
    ]
  },
  {
    id: 'paul', name: 'ポール・ドリル', title: 'ドリルヘッドの奇人',
    stars: 1, weight: 36,
    stand: 'assets/images/paul_stand.webp',
    action: 'assets/images/paul_action.webp',
    amp: 'LANCE + MARS',
    quotes: [
      'ドリルで穴を開けろ！それが俺の哲学だ！',
      'クレイジーなリフ！クレイジーな一歩！',
    ]
  },
  {
    id: 'joe', name: 'ジョー・サーファー', title: 'サーフ系超人',
    stars: 1, weight: 36,
    stand: 'assets/images/joe_stand.webp',
    action: 'assets/images/joe_action.webp',
    amp: 'HEAVEY + MARS',
    quotes: [
      '波に乗れ！ギターと歩数は波乗りと同じだ！',
      'ブルーステールが空を切る！',
    ]
  },
  {
    id: 'zappa', name: 'フランク・マエストロZ', title: '実験音楽の神',
    stars: 1, weight: 36,
    stand: 'assets/images/zappa_stand.webp',
    action: 'assets/images/zappa_action.webp',
    amp: 'ORBIT + BENDER',
    quotes: [
      '芸術は実験だ。歩くことも芸術だ。',
      '変拍子で歩け！それが俺のビートだ！',
    ]
  },
  {
    id: 'angelo', name: 'アンジェロ・マエストロ', title: 'ダブルネックの鬼',
    stars: 1, weight: 36,
    stand: 'assets/images/angelo_stand.webp',
    action: 'assets/images/angelo_action.webp',
    amp: 'HEAVEY + MEGA',
    quotes: [
      '二刀流！ダブルネックで二倍の威力！',
      '12弦の轟音を受け取れ！',
    ]
  },
  {
    id: 'mateus', name: 'マテウス・アジアン', title: 'アジア系SNS王',
    stars: 1, weight: 36,
    stand: 'assets/images/mateus_stand.webp',
    action: 'assets/images/mateus_action.webp',
    amp: 'FENDERX + MARS',
    quotes: [
      'インスタ映えするフレーズ！しかしガチで上手い！',
      '指が追いつかない速さで歩け！',
    ]
  },
  {
    id: 'mika', name: 'ミカミカ', title: '轟音の女神',
    stars: 1, weight: 36,
    stand: 'assets/images/mika_stand.jfif',
    action: 'assets/images/mika_action.jfif',
    amp: 'HEAVEY + MEGA',
    quotes: [
      '魂のシャウトとリフで、今夜のステージを焼き尽くすよ！',
      '全開シャウト＆爆音ギター！まだまだ熱くなれるよね！！',
    ]
  },
];

// ═══════════════════════════════════════════════════════
//  AUDIO ENGINE
// ═══════════════════════════════════════════════════════
class AudioEngine {
  constructor() { this.ctx = null; }

  _ctx() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (this.ctx.state === 'suspended') this.ctx.resume();
    return this.ctx;
  }

  _play(fn) {
    try { fn(this._ctx()); } catch (e) { /* silent */ }
  }

  step() {
    this._play(ctx => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.frequency.value = 80; o.type = 'sawtooth';
      g.gain.setValueAtTime(0.08, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      o.start(); o.stop(ctx.currentTime + 0.08);
    });
  }

  powerChord() {
    this._play(ctx => {
      const t = ctx.currentTime;
      [110, 165, 220, 277].forEach(f => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type = 'sawtooth'; o.frequency.value = f;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.12, t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
        o.start(t); o.stop(t + 0.5);
      });
    });
  }

  unlock() {
    this._play(ctx => {
      let t = ctx.currentTime;
      [220, 277, 330, 440, 554, 660].forEach(f => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type = 'square'; o.frequency.value = f;
        g.gain.setValueAtTime(0.15, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
        o.start(t); o.stop(t + 0.18);
        t += 0.1;
      });
    });
  }

  overdrive() {
    this._play(ctx => {
      const t = ctx.currentTime;
      [82, 110, 165, 220, 294, 370, 440].forEach((f, i) => {
        const o = ctx.createOscillator(), dist = ctx.createWaveShaper(), g = ctx.createGain();
        const curve = new Float32Array(256);
        for (let j = 0; j < 256; j++) {
          const x = (j * 2) / 256 - 1;
          curve[j] = (Math.PI + 400) * x / (Math.PI + 400 * Math.abs(x));
        }
        dist.curve = curve;
        o.connect(dist); dist.connect(g); g.connect(ctx.destination);
        o.type = 'sawtooth'; o.frequency.value = f;
        const s = t + i * 0.05;
        g.gain.setValueAtTime(0.08, s);
        g.gain.exponentialRampToValueAtTime(0.001, s + 1.0);
        o.start(s); o.stop(s + 1.0);
      });
    });
  }

  boss() {
    this._play(ctx => {
      const t = ctx.currentTime;
      [55, 82, 110, 138].forEach(f => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type = 'sawtooth'; o.frequency.value = f;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.1, t + 0.3);
        g.gain.exponentialRampToValueAtTime(0.001, t + 2.5);
        o.start(t); o.stop(t + 2.5);
      });
    });
  }

  quote() {
    this._play(ctx => {
      const t = ctx.currentTime;
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.type = 'triangle';
      o.frequency.setValueAtTime(440, t);
      o.frequency.exponentialRampToValueAtTime(880, t + 0.15);
      g.gain.setValueAtTime(0.1, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
      o.start(t); o.stop(t + 0.3);
    });
  }
}

// ═══════════════════════════════════════════════════════
//  STEP DETECTOR
// ═══════════════════════════════════════════════════════
class StepDetector {
  constructor(onStep) {
    this.onStep = onStep;
    this.lastMag = 0;
    this.threshold = 12;
    this.cooldown = 350;
    this.lastStep = 0;
    this.active = false;
  }

  async start() {
    if (typeof DeviceMotionEvent === 'undefined') return false;
    if (typeof DeviceMotionEvent.requestPermission === 'function') return false;
    this._attach();
    return true;
  }

  async requestIOS() {
    try {
      const res = await DeviceMotionEvent.requestPermission();
      if (res === 'granted') { this._attach(); return true; }
    } catch (e) { /* */ }
    return false;
  }

  _attach() {
    window.addEventListener('devicemotion', e => this._handle(e), { passive: true });
    this.active = true;
  }

  _handle(e) {
    const a = e.accelerationIncludingGravity;
    if (!a) return;
    const mag = Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
    const delta = Math.abs(mag - this.lastMag);
    this.lastMag = mag;
    const now = Date.now();
    if (delta > this.threshold && now - this.lastStep > this.cooldown) {
      this.lastStep = now;
      this.onStep();
    }
  }
}

// ═══════════════════════════════════════════════════════
//  MAIN APP — おみくじシステム
// ═══════════════════════════════════════════════════════
class MetalWalkingApp {
  constructor() {
    this.audio = new AudioEngine();
    this.detector = new StepDetector(() => this.addSteps(1));
    this.headbangInterval = null;
    this.showingStand = true;
    this.quoteTimer = null;
    this.eventQueue = [];
    this.debugTapCount = 0;
    this.debugTapTimer = null;

    this.state = this._loadState();
    this._checkDayReset();

    // 今日まだ引いていなければ自動抽選
    this.isNewDraw = !this.state.dailyFortune;
    if (!this.state.dailyFortune) {
      this.state.dailyFortune = this._drawFortune();
      this._addToCollection(this.state.dailyFortune.charId);
      this._saveState();
    }

    this._bindUI();
    this._render();
    this._startDetector();
    this._syncFromURL();
  }

  // ── おみくじ抽選 ──────────────────────────────────────
  _drawFortune() {
    const totalW = ALL_CHARS.reduce((s, c) => s + c.weight, 0);
    let r = Math.random() * totalW;
    let char = ALL_CHARS[0];
    for (const c of ALL_CHARS) {
      r -= c.weight;
      if (r <= 0) { char = c; break; }
    }

    const LEVELS = [
      { label: '大吉', weight: 10 },
      { label: '中吉', weight: 20 },
      { label: '小吉', weight: 25 },
      { label: '吉',   weight: 20 },
      { label: '末吉', weight: 15 },
      { label: '凶',   weight: 10 },
    ];
    const totalLW = LEVELS.reduce((s, l) => s + l.weight, 0);
    let lr = Math.random() * totalLW;
    let level = LEVELS[LEVELS.length - 1];
    for (const l of LEVELS) {
      lr -= l.weight;
      if (lr <= 0) { level = l; break; }
    }

    return {
      date: this._today(),
      charId: char.id,
      level: level.label,
      rif:      this._rand5(),
      headbang: this._rand5(),
      practice: this._rand5(),
      live:     this._rand5(),
      quoteIdx: Math.floor(Math.random() * char.quotes.length),
    };
  }

  _rand5() { return Math.ceil(Math.random() * 5); }

  _addToCollection(id) {
    if (!this.state.collection.includes(id)) this.state.collection.push(id);
  }

  // ── State ───────────────────────────────────────────
  _defaultState() {
    return {
      dailyFortune: null,
      collection: [],
      todaySteps: 0,
      totalSteps: 0,
      todayDate: this._today(),
      history: [],
    };
  }

  _loadState() {
    try {
      const s = JSON.parse(localStorage.getItem('metalwalk_state'));
      if (s) {
        // 旧フォーマット移行
        if (s.seenCharIds && !s.collection) s.collection = s.seenCharIds;
        return { ...this._defaultState(), ...s };
      }
    } catch { /* */ }
    return this._defaultState();
  }

  _saveState() {
    try { localStorage.setItem('metalwalk_state', JSON.stringify(this.state)); } catch { /* */ }
  }

  _today() { return new Date().toISOString().slice(0, 10); }

  _checkDayReset() {
    const today = this._today();
    if (this.state.todayDate !== today) {
      if (this.state.dailyFortune) {
        this.state.history.unshift({
          date: this.state.todayDate,
          charId: this.state.dailyFortune.charId,
          level: this.state.dailyFortune.level,
          todaySteps: this.state.todaySteps,
        });
        if (this.state.history.length > 90) this.state.history.length = 90;
      }
      this.state.todaySteps = 0;
      this.state.todayDate = today;
      this.state.dailyFortune = null;
      this._saveState();
    }
  }

  // ── 歩数（サブ機能）────────────────────────────────
  addSteps(n) {
    const prevTotal = this.state.totalSteps;
    const prevToday = this.state.todaySteps;
    this.state.todaySteps += n;
    this.state.totalSteps += n;
    this._saveState();
    this._updateStepDisplay();
    this.audio.step();

    if (this.state.totalSteps >= 10000 && prevTotal < 10000) {
      this._applyOverdriveState();
      this.audio.overdrive();
    }
    if (this.state.totalSteps >= 20000 && prevTotal < 20000) {
      this._applyFireState();
      this.audio.boss();
    }
    if (Math.floor(this.state.todaySteps / 1000) > Math.floor(prevToday / 1000)) {
      this._showQuote();
    }
  }

  _syncFromURL() {
    const params = new URLSearchParams(location.search);
    const healthSteps = parseInt(params.get('steps'), 10);
    if (!healthSteps || isNaN(healthSteps) || healthSteps <= 0) return;
    if (healthSteps > this.state.todaySteps) {
      this.addSteps(healthSteps - this.state.todaySteps);
    }
    history.replaceState(null, '', location.pathname);
  }

  // ── Render ───────────────────────────────────────────
  _render() {
    this._updateMainUI();
    this._renderZukan();
    this._renderHistory();
    this._applyOverdriveState();
    this._applyFireState();
    if (this.isNewDraw) {
      this.isNewDraw = false;
      setTimeout(() => this._showFortuneReveal(), 600);
    }
  }

  _updateMainUI() {
    const fortune = this.state.dailyFortune;
    if (!fortune) return;
    const char = ALL_CHARS.find(c => c.id === fortune.charId);
    if (!char) return;

    document.getElementById('header-today').textContent = `今日: ${this.state.todaySteps.toLocaleString()} 歩`;
    document.getElementById('header-total').textContent = `累計: ${this.state.totalSteps.toLocaleString()} 歩`;

    // レア度バー
    const starsEl = document.getElementById('fortune-stars');
    starsEl.textContent = '★'.repeat(char.stars) + '☆'.repeat(5 - char.stars);
    starsEl.className = `rarity-${char.stars}`;
    const rarEl = document.getElementById('fortune-rarity-label');
    rarEl.textContent = this._rarityLabel(char.stars);
    rarEl.className = `rarity-${char.stars}`;

    // キャラ画像
    const img = document.getElementById('char-img');
    if (img.dataset.charId !== char.id) {
      this._stopHeadbang();
      img.src = char.stand;
      img.dataset.charId = char.id;
      this.showingStand = true;
      if (this._overdriveActive) this._startHeadbang();
    }

    // キャラ名
    document.getElementById('char-name-display').textContent = char.name;
    document.getElementById('char-title-display').textContent = char.title;

    // 運勢レベル
    const levelEl = document.getElementById('fortune-level');
    levelEl.textContent = fortune.level;
    levelEl.className = this._fortuneLevelClass(fortune.level);

    // カテゴリ評価
    document.getElementById('fr-rif').textContent      = this._starsStr(fortune.rif);
    document.getElementById('fr-headbang').textContent = this._starsStr(fortune.headbang);
    document.getElementById('fr-practice').textContent = this._starsStr(fortune.practice);
    document.getElementById('fr-live').textContent     = this._starsStr(fortune.live);

    // セリフ
    document.getElementById('fortune-quote').textContent =
      `「${char.quotes[fortune.quoteIdx || 0]}」`;

    // 歩数
    document.getElementById('step-number').textContent = this.state.todaySteps.toLocaleString();
  }

  _updateStepDisplay() {
    document.getElementById('step-number').textContent = this.state.todaySteps.toLocaleString();
    document.getElementById('header-today').textContent = `今日: ${this.state.todaySteps.toLocaleString()} 歩`;
    document.getElementById('header-total').textContent = `累計: ${this.state.totalSteps.toLocaleString()} 歩`;
  }

  _starsStr(n) { return '★'.repeat(n) + '☆'.repeat(5 - n); }

  _rarityLabel(stars) {
    return { 5: 'SSR', 4: 'SR', 3: 'R', 2: 'UC', 1: 'C' }[stars] || '';
  }

  _fortuneLevelClass(level) {
    const map = { '大吉': 'fl-daikichi', '中吉': 'fl-chukichi', '小吉': 'fl-shokichi',
                  '吉': 'fl-kichi', '末吉': 'fl-suekichi', '凶': 'fl-kyo' };
    return map[level] || '';
  }

  // ── Overdrive & Fire ────────────────────────────────
  get _overdriveActive() { return this.state.totalSteps >= 10000; }
  get _fireActive()      { return this.state.totalSteps >= 20000; }

  _applyOverdriveState() {
    const od = this._overdriveActive;
    document.getElementById('char-wrap').classList.toggle('overdrive', od);
    if (od && !this.headbangInterval) this._startHeadbang();
  }

  _applyFireState() {
    document.getElementById('fire-overlay').classList.toggle('show', this._fireActive);
  }

  _startHeadbang() {
    const fortune = this.state.dailyFortune;
    if (!fortune) return;
    const char = ALL_CHARS.find(c => c.id === fortune.charId);
    if (!char) return;
    const img = document.getElementById('char-img');
    img.classList.add('overdrive-on');
    if (char.stand === char.action) {
      img.classList.add('headbang-css');
    } else {
      this.headbangInterval = setInterval(() => {
        img.src = this.showingStand ? char.action : char.stand;
        this.showingStand = !this.showingStand;
      }, 150);
    }
  }

  _stopHeadbang() {
    clearInterval(this.headbangInterval);
    this.headbangInterval = null;
    const img = document.getElementById('char-img');
    img.classList.remove('overdrive-on', 'headbang-css');
  }

  // ── 運勢リビール ──────────────────────────────────────
  _showFortuneReveal() {
    const fortune = this.state.dailyFortune;
    if (!fortune) return;
    const char = ALL_CHARS.find(c => c.id === fortune.charId);
    if (!char) return;

    if (char.stars === 5)      this.audio.boss();
    else if (char.stars === 4) this.audio.overdrive();
    else if (char.stars >= 3)  this.audio.unlock();
    else                       this.audio.powerChord();

    const s = '★'.repeat(char.stars) + '☆'.repeat(5 - char.stars);
    this._showEventOverlay({
      title: `${s}  ${fortune.level}  ${s}`,
      desc: `${char.name}\n「${char.title}」\n${this._rarityLabel(char.stars)}\n\n${char.quotes[fortune.quoteIdx || 0]}`,
    }, char);
  }

  // ── セリフポップアップ ──────────────────────────────
  _showQuote() {
    const fortune = this.state.dailyFortune;
    if (!fortune) return;
    const char = ALL_CHARS.find(c => c.id === fortune.charId);
    if (!char) return;
    this.audio.quote();
    document.getElementById('quote-char-name').textContent = char.name + '：';
    document.getElementById('quote-text').textContent = `「${char.quotes[fortune.quoteIdx || 0]}」`;
    const popup = document.getElementById('quote-popup');
    popup.classList.add('show');
    clearTimeout(this.quoteTimer);
    this.quoteTimer = setTimeout(() => popup.classList.remove('show'), 4000);
  }

  // ── イベントオーバーレイ ────────────────────────────
  _showEventOverlay(ev, char = null) {
    const overlay = document.getElementById('event-overlay');
    if (overlay.classList.contains('show')) {
      this.eventQueue.push([ev, char]);
      return;
    }
    document.getElementById('event-title').textContent = ev.title;
    document.getElementById('event-desc').textContent = ev.desc || '';
    const preview = document.getElementById('event-char-preview');
    if (char) { preview.src = char.stand; preview.style.display = 'block'; }
    else { preview.style.display = 'none'; }
    overlay.classList.add('show');
  }

  _closeEventOverlay() {
    document.getElementById('event-overlay').classList.remove('show');
    if (this.eventQueue.length > 0) {
      const [ev, char] = this.eventQueue.shift();
      setTimeout(() => this._showEventOverlay(ev, char), 350);
    }
  }

  // ── 図鑑 ──────────────────────────────────────────────
  _renderZukan() {
    const grid = document.getElementById('zukan-grid');
    grid.innerHTML = '';

    const collected = this.state.collection.length;
    const header = document.createElement('div');
    header.className = 'zukan-daily-header';
    header.textContent = `📖 ${collected} / ${ALL_CHARS.length} キャラ収集`;
    grid.appendChild(header);

    const sorted = [...ALL_CHARS].sort((a, b) => {
      if (b.stars !== a.stars) return b.stars - a.stars;
      const ac = this.state.collection.includes(a.id) ? 0 : 1;
      const bc = this.state.collection.includes(b.id) ? 0 : 1;
      return ac - bc;
    });

    sorted.forEach(char => {
      const seen = this.state.collection.includes(char.id);
      const card = document.createElement('div');
      card.className = `zukan-card rarity-border-${char.stars}${seen ? '' : ' locked'}`;

      const starsDiv = document.createElement('div');
      starsDiv.className = `zukan-stars rarity-${char.stars}`;
      starsDiv.textContent = '★'.repeat(char.stars) + '☆'.repeat(5 - char.stars);
      card.appendChild(starsDiv);

      const img = document.createElement('img');
      img.className = 'zukan-card-img';
      img.src = seen
        ? char.stand
        : 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
      img.loading = 'lazy';
      img.alt = char.name;
      card.appendChild(img);

      const info = document.createElement('div');
      info.className = 'zukan-card-info';
      info.innerHTML = `
        <div class="zukan-card-name">${seen ? char.name : '???'}</div>
        <div class="zukan-card-title">${seen ? char.title : '未発見'}</div>
        ${seen ? `<div class="zukan-card-amp">${char.amp}</div>` : ''}
      `;
      card.appendChild(info);

      if (!seen) {
        const lock = document.createElement('div');
        lock.className = 'lock-badge';
        lock.textContent = '🔒';
        card.appendChild(lock);
      }

      if (seen) card.addEventListener('click', () => this._openCharModal(char));
      grid.appendChild(card);
    });
  }

  _openCharModal(char) {
    document.getElementById('modal-name').textContent = char.name;
    document.getElementById('modal-title').textContent = char.title;
    document.getElementById('modal-amp').textContent = `AMP: ${char.amp}`;
    document.getElementById('modal-quote').textContent = `「${char.quotes[0]}」`;
    document.getElementById('modal-unlock').textContent =
      `${'★'.repeat(char.stars)}  ${this._rarityLabel(char.stars)}`;

    const standImg = document.getElementById('modal-stand-img');
    const actionImg = document.getElementById('modal-action-img');
    standImg.src = char.stand;
    actionImg.src = char.action;
    standImg.classList.add('selected');
    actionImg.classList.remove('selected');
    standImg.onclick = () => { standImg.classList.add('selected'); actionImg.classList.remove('selected'); };
    actionImg.onclick = () => { actionImg.classList.add('selected'); standImg.classList.remove('selected'); };
    document.getElementById('char-modal').classList.add('show');
  }

  // ── 履歴 ──────────────────────────────────────────────
  _renderHistory() {
    const list = document.getElementById('history-list');
    list.innerHTML = '';
    if (this.state.history.length === 0) {
      list.innerHTML = '<div style="padding:16px;font-size:7px;color:#666;text-align:center">まだ履歴がありません</div>';
      return;
    }
    this.state.history.forEach(item => {
      const char = ALL_CHARS.find(c => c.id === item.charId);
      const div = document.createElement('div');
      div.className = 'history-item';
      const starsStr = char ? '★'.repeat(char.stars) : '';
      div.innerHTML = `
        <div>
          <div class="history-date">${item.date}</div>
          ${char ? `<div class="history-char rarity-${char.stars}">${starsStr} ${char.name}</div>` : ''}
        </div>
        <div style="text-align:right">
          <div class="history-fortune ${this._fortuneLevelClass(item.level)}">${item.level}</div>
          ${item.todaySteps ? `<div class="history-steps">${item.todaySteps.toLocaleString()}<span style="font-size:5px">歩</span></div>` : ''}
        </div>
      `;
      list.appendChild(div);
    });
  }

  // ── UI バインド ──────────────────────────────────────
  _bindUI() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const screen = btn.dataset.screen;
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.getElementById('screen-' + screen).classList.add('active');
        btn.classList.add('active');
        if (screen === 'zukan')   this._renderZukan();
        if (screen === 'history') this._renderHistory();
      });
    });

    document.getElementById('event-close-btn').addEventListener('click', () => this._closeEventOverlay());
    document.getElementById('modal-close').addEventListener('click', () => {
      document.getElementById('char-modal').classList.remove('show');
    });

    document.getElementById('ios-allow-btn').addEventListener('click', async () => {
      const granted = await this.detector.requestIOS();
      if (granted) document.getElementById('ios-modal').classList.remove('show');
    });
    document.getElementById('ios-skip-btn').addEventListener('click', () => {
      document.getElementById('ios-modal').classList.remove('show');
    });

    document.getElementById('health-sync-btn').addEventListener('click', () => {
      const input = prompt('ヘルスケアの今日の歩数を入力してください', this.state.todaySteps);
      if (input === null) return;
      const n = parseInt(input, 10);
      if (isNaN(n) || n < 0) return;
      if (n > this.state.todaySteps) this.addSteps(n - this.state.todaySteps);
    });

    document.getElementById('auto-sync-info-btn').addEventListener('click', () => {
      document.getElementById('auto-sync-modal').classList.add('show');
    });
    document.getElementById('auto-sync-close').addEventListener('click', () => {
      document.getElementById('auto-sync-modal').classList.remove('show');
    });

    document.getElementById('reset-btn').addEventListener('click', () => {
      if (confirm('データをリセットしますか？\n（収集した図鑑・運勢履歴がすべて消えます）')) {
        this._reset();
      }
    });

    // 歩数表示エリアを3回タップでデバッグパネル
    document.getElementById('step-counter-block').addEventListener('click', () => {
      this.debugTapCount++;
      clearTimeout(this.debugTapTimer);
      if (this.debugTapCount >= 3) {
        this.debugTapCount = 0;
        document.getElementById('debug-panel').classList.toggle('show');
      } else {
        this.debugTapTimer = setTimeout(() => { this.debugTapCount = 0; }, 1500);
      }
    });

    document.getElementById('dbg-100').addEventListener('click',   () => { this.addSteps(100);   this.audio.powerChord(); });
    document.getElementById('dbg-1000').addEventListener('click',  () => { this.addSteps(1000);  this.audio.powerChord(); });
    document.getElementById('dbg-5000').addEventListener('click',  () => { this.addSteps(5000);  this.audio.overdrive(); });
    document.getElementById('dbg-10000').addEventListener('click', () => { this.addSteps(10000); this.audio.boss(); });
    document.getElementById('dbg-reset').addEventListener('click', () => {
      if (confirm('本当にリセットしますか？')) this._reset();
    });
    document.getElementById('dbg-redraw').addEventListener('click', () => {
      this.state.dailyFortune = this._drawFortune();
      this._addToCollection(this.state.dailyFortune.charId);
      this._saveState();
      this._updateMainUI();
      this._showFortuneReveal();
    });
  }

  async _startDetector() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const started = await this.detector.start();
    if (!started && isIOS && typeof DeviceMotionEvent !== 'undefined' &&
        typeof DeviceMotionEvent.requestPermission === 'function') {
      document.getElementById('ios-modal').classList.add('show');
    }
  }

  _reset() {
    this._stopHeadbang();
    this.state = this._defaultState();
    this.state.dailyFortune = this._drawFortune();
    this._addToCollection(this.state.dailyFortune.charId);
    this._saveState();

    document.getElementById('fire-overlay').classList.remove('show');
    document.getElementById('char-wrap').classList.remove('overdrive');
    document.getElementById('debug-panel').classList.remove('show');

    this._updateMainUI();
    this._renderZukan();
    this._renderHistory();
    setTimeout(() => this._showFortuneReveal(), 500);
  }
}

// ═══════════════════════════════════════════════════════
//  BOOT
// ═══════════════════════════════════════════════════════
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new MetalWalkingApp();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});
