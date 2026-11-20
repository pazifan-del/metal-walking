'use strict';

// ═══════════════════════════════════════════════════════
//  CHARACTER DATA
// ═══════════════════════════════════════════════════════
const TAKASAKI = {
  id: 'takasaki', name: 'タカサキ・サンダー', title: '雷神の右腕',
  stand: 'assets/images/takasaki_action.jfif',
  action: 'assets/images/takasaki_action.jfif',
  amp: 'MEGA',
  quotes: [
    '俺の魂のランダム・スター、その耳に焼き付けろ！',
    '雷よ！轟け！これがメタルの洗礼だ！',
    'もっと速く！限界を超えろ！',
    '歩くことは戦うことだ！止まるな！',
  ]
};

const OZ = {
  id: 'oz', name: 'オズ・ザ・ダークネス', title: '闇の帝王',
  stand: 'assets/images/oz_throne.jfif',
  action: 'assets/images/oz_throne.jfif',
  amp: 'MEGA',
  quotes: [
    '闇の宴へようこそ。狂乱の時間だ！',
    '20,000歩！お前は本物のメタル戦士だ！',
    '俺の王国へ来い。ここが終点だ……いや、始まりだ！',
  ]
};

// 日替わりローテーション対象（26キャラ）
const ROTATION_POOL = [
  {
    id: 'zakk', name: 'ジャック・ベルセルク', title: '荒ぶる野獣',
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
    id: 'angus', name: 'アンガス・ジュニア', title: 'シューズなき王',
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
    id: 'ynge', name: 'インゲ・ヴァルム', title: 'ネオクラ貴公子',
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
    id: 'slash', name: 'スラッシャー・ハット', title: '帽子の孤高',
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
    id: 'eddie', name: 'エド・フランケン', title: '笑顔のタッピング魔術師',
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
    id: 'marty', name: 'マーティ・ジャパン', title: '日本を愛した男',
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
    id: 'hide', name: 'ヒデ・スパイダー', title: '玩具箱の王子',
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
    id: 'bucket', name: 'バケット・チキン', title: 'から揚げ桶の狂気',
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
    id: 'lemmy', name: 'レミー・アイアンフィスト', title: '鉄拳のベーシスト',
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
    id: 'vai', name: 'スティーヴ・マエストロ', title: '7弦の超人',
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
    id: 'iommi', name: 'トニー・ブラッカー', title: '暗黒の開祖',
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
    id: 'paul', name: 'ポール・ドリル', title: 'ドリルヘッドの奇人',
    stand: 'assets/images/paul_stand.webp',
    action: 'assets/images/paul_action.webp',
    amp: 'LANCE + MARS',
    quotes: [
      'ドリルで穴を開けろ！それが俺の哲学だ！',
      'クレイジーなリフ！クレイジーな一歩！',
    ]
  },
  {
    id: 'petrucci', name: 'ペトルーシ・マッスル', title: '7弦の筋肉神',
    stand: 'assets/images/petrucci_stand.webp',
    action: 'assets/images/petrucci_action.webp',
    amp: 'HEAVEY + MARS',
    quotes: [
      'プログレッシブな筋肉！歩数もプログレだ！',
      '複雑なリズムも、身体が覚えれば恐くない！',
    ]
  },
  {
    id: 'mick', name: 'ミック・サターン', title: '不死身のドラマー',
    stand: 'assets/images/mick_stand.webp',
    action: 'assets/images/mick_action.webp',
    amp: 'MARS + MEGA',
    quotes: [
      '俺は何者も止められない！永遠に叩き続けるぜ！',
      'ドラムは爆発だ！リズムは鉄だ！',
    ]
  },
  {
    id: 'dave', name: 'デイヴ・オメガ', title: 'ラスタカラーの戦士',
    stand: 'assets/images/dave_stand.webp',
    action: 'assets/images/dave_action.webp',
    amp: 'HEAVEY',
    quotes: [
      '俺を追い出したことを後悔させてやる！',
      'スラッシュは俺が始めた！歩数も俺がリードする！',
    ]
  },
  {
    id: 'joe', name: 'ジョー・サーファー', title: 'サーフ系超人',
    stand: 'assets/images/joe_stand.webp',
    action: 'assets/images/joe_action.webp',
    amp: 'HEAVEY + MARS',
    quotes: [
      '波に乗れ！ギターと歩数は波乗りと同じだ！',
      'ブルーステールが空を切る！',
    ]
  },
  {
    id: 'schenker', name: 'マイケル・シャドウ', title: 'UFOの影',
    stand: 'assets/images/schenker_stand.webp',
    action: 'assets/images/schenker_action.webp',
    amp: 'MARS',
    quotes: [
      'Vシェイプが空を切る！歩けば宇宙が見える！',
      'UFOの速さで歩け！',
    ]
  },
  {
    id: 'zappa', name: 'フランク・マエストロZ', title: '実験音楽の神',
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
    stand: 'assets/images/mateus_stand.webp',
    action: 'assets/images/mateus_action.webp',
    amp: 'FENDERX + MARS',
    quotes: [
      'インスタ映えするフレーズ！しかしガチで上手い！',
      '指が追いつかない速さで歩け！',
    ]
  },
  {
    id: 'nuno', name: 'ヌーノ・ファンク', title: '16ビートの弦上の武士',
    stand: 'assets/images/nuno_stand.webp',
    action: 'assets/images/nuno_action.jfif',
    amp: 'MEGA + MARS',
    quotes: [
      'ただ速いだけじゃつまらない。リズムと一体になって、ギターを跳ねさせるんだ！',
      '弾きまくれ！パーカッシブな16ビートカッティング！',
    ]
  },
  {
    id: 'page', name: 'ジミー・パジェント', title: 'ダブルネックの魔道師',
    stand: 'assets/images/page_stand.jfif',
    action: 'assets/images/page_action.jfif',
    amp: 'MARS',
    quotes: [
      'バイオリンの弓が奏でる混沌の魔術！サイケデリックな爆音の渦に溺れるがいい！！',
      '歴史を創る音がここにある。ダブルネックの重低音を味わえ！',
    ]
  },
  {
    id: 'jimi', name: 'ジミ・エクスペリア', title: '逆弦の革命児',
    stand: 'assets/images/jimi_stand.jfif',
    action: 'assets/images/jimi_action.jfif',
    amp: 'MARS',
    quotes: [
      '右手の世界を、左の指でひっくり返す。歪んだブルースが魂の叫びさ！',
      '手だけじゃねえ、歯で弾き、魂で燃やす！',
    ]
  },
  {
    id: 'mika', name: 'ミカミカ', title: '轟音の女神',
    stand: 'assets/images/mika_stand.jfif',
    action: 'assets/images/mika_action.jfif',
    amp: 'HEAVEY + MEGA',
    quotes: [
      '魂のシャウトとリフで、今夜のステージを焼き尽くすよ！',
      '全開シャウト＆爆音ギター！まだまだ熱くなれるよね！！',
    ]
  },
  {
    id: 'tak', name: 'タック・ダブルV', title: '轟音ニッポンの誇り',
    stand: 'assets/images/tak_stand.jfif',
    action: 'assets/images/tak_action.jfif',
    amp: 'MARS',
    quotes: [
      '日本のロックの底力を見せてやる！轟音のメロディを聴け！',
      '歌うように弾く、これが俺のスタイルさ！',
    ]
  },
  {
    id: 'beach', name: 'ビーチ・ブラックモア', title: 'ハイウェイの疾風',
    stand: 'assets/images/beach_stand.jfif',
    action: 'assets/images/beach_action.jfif',
    amp: 'MARS',
    quotes: [
      '30年以上の時を経て、あの潮風のステージに再び。私のストラトが爆音を呼び覚ます！',
      '海を揺るがすハイウェイスターの咆哮！半世紀の指先を受け取れ！！',
    ]
  },
];

const ALL_CHARS = [TAKASAKI, ...ROTATION_POOL, OZ];

// 3000歩ごとのマイルストーン（最大20000歩）
const MILESTONE_STEPS = [3000, 6000, 9000, 12000, 15000, 18000];
const MAX_STEPS = 20000;

// 累計歩数ベースのストーリーイベント
const STORY_EVENTS = [
  {
    at: 5000, type: 'amp_glow',
    title: 'アンプが唸る！',
    desc: '累計5,000歩達成！\nアンプの管球が赤く輝く。\nお前の足音がステージを揺らす！',
  },
  {
    at: 10000, type: 'overdrive',
    title: '⚡ OVERDRIVE MODE ⚡',
    desc: '累計10,000歩突破！\nヘドバン炸裂！\nOVERDRIVE MODE 突入！',
  },
  {
    at: 15000, type: 'audience',
    title: '観客が沸き立つ！',
    desc: '累計15,000歩！\n会場が揺れる！\n5万人の観客がお前の名を叫ぶ！',
  },
  {
    at: 20000, type: 'finale',
    title: '👑 LEGEND STATUS 👑',
    desc: '累計20,000歩！！\n闇の帝王・オズ・ザ・ダークネスが降臨！\nお前は伝説となった！',
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
//  MAIN APP
// ═══════════════════════════════════════════════════════
class MetalWalkingApp {
  constructor() {
    this.audio = new AudioEngine();
    this.detector = new StepDetector(() => this.addSteps(1));

    this.state = this._loadState();
    this._checkDayReset();

    this.dailyPool = this._getDailyPool();
    this.headbangInterval = null;
    this.showingStand = true;
    this.quoteTimer = null;
    this.eventQueue = [];
    this.debugTapCount = 0;
    this.debugTapTimer = null;

    this._bindUI();
    this._render();
    this._startDetector();
  }

  // ── State ───────────────────────────────────────────
  _defaultState() {
    return {
      totalSteps: 0,
      todaySteps: 0,
      todayDate: this._today(),
      seenCharIds: ['takasaki'],
      triggeredEvents: [],
      history: [],
    };
  }

  _loadState() {
    try {
      const s = JSON.parse(localStorage.getItem('metalwalk_state'));
      if (s) {
        // migrate old format
        if (s.unlockedIds && !s.seenCharIds) s.seenCharIds = s.unlockedIds;
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
      if (this.state.todaySteps > 0) {
        const char = this._currentChar();
        this.state.history.unshift({ date: this.state.todayDate, steps: this.state.todaySteps, charId: char.id });
        if (this.state.history.length > 90) this.state.history.length = 90;
      }
      this.state.todaySteps = 0;
      this.state.todayDate = today;
      this._saveState();
    }
  }

  // ── Daily Rotation ──────────────────────────────────
  _getDayIndex() { return Math.floor(Date.now() / 86400000); }

  _getDailyPool() {
    const pool = [...ROTATION_POOL];
    let seed = this._getDayIndex() * 1664525 + 1013904223;
    for (let i = pool.length - 1; i > 0; i--) {
      seed = Math.imul(seed, 1664525) + 1013904223;
      const j = ((seed >>> 0) % (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, 6);
  }

  // ── Character Logic ─────────────────────────────────
  _getMilestoneIdx(steps) {
    let idx = -1;
    for (let i = 0; i < MILESTONE_STEPS.length; i++) {
      if (steps >= MILESTONE_STEPS[i]) idx = i;
    }
    return idx;
  }

  _currentChar() {
    // After 20000 total cumulative steps → show oz
    if (this.state.totalSteps >= MAX_STEPS && this.state.seenCharIds.includes('oz')) {
      return OZ;
    }
    const idx = this._getMilestoneIdx(this.state.todaySteps);
    if (idx < 0) return TAKASAKI;
    return this.dailyPool[idx];
  }

  _quoteForChar(char) {
    const idx = Math.floor(this.state.todaySteps / 1000) % char.quotes.length;
    return char.quotes[idx];
  }

  // ── Core Step Logic ─────────────────────────────────
  addSteps(n) {
    const prevToday = this.state.todaySteps;
    const prevTotal = this.state.totalSteps;
    this.state.todaySteps += n;
    this.state.totalSteps += n;

    // Check daily milestones (char reveals)
    const prevIdx = this._getMilestoneIdx(prevToday);
    const currIdx = this._getMilestoneIdx(this.state.todaySteps);
    for (let i = prevIdx + 1; i <= currIdx; i++) {
      const newChar = this.dailyPool[i];
      if (!this.state.seenCharIds.includes(newChar.id)) {
        this.state.seenCharIds.push(newChar.id);
      }
      this._triggerCharReveal(newChar, MILESTONE_STEPS[i]);
    }

    // Check cumulative story events
    STORY_EVENTS.forEach(ev => {
      if (this.state.totalSteps >= ev.at && prevTotal < ev.at &&
          !this.state.triggeredEvents.includes(ev.at)) {
        this.state.triggeredEvents.push(ev.at);
        this._triggerStoryEvent(ev);
      }
    });

    this._saveState();
    this._updateMainUI();
    this.audio.step();

    // Show quote at every 1000-step boundary
    if (Math.floor(this.state.todaySteps / 1000) > Math.floor(prevToday / 1000)) {
      this._showQuote();
    }
  }

  // ── UI Rendering ────────────────────────────────────
  _render() {
    this._updateMainUI();
    this._renderZukan();
    this._renderHistory();
    this._applyOverdriveState();
    this._applyFireState();
  }

  _updateMainUI() {
    const char = this._currentChar();

    document.getElementById('step-number').textContent = this.state.todaySteps.toLocaleString();
    document.getElementById('header-today').textContent = `今日: ${this.state.todaySteps.toLocaleString()} 歩`;
    document.getElementById('header-total').textContent = `累計: ${this.state.totalSteps.toLocaleString()} 歩`;

    // Character image
    const img = document.getElementById('char-img');
    if (img.dataset.charId !== char.id) {
      this._stopHeadbang();
      img.src = char.stand;
      img.dataset.charId = char.id;
      this.showingStand = true;
      if (this._overdriveActive) this._startHeadbang();
    }
    document.getElementById('char-name-display').textContent = char.name;
    document.getElementById('char-title-display').textContent = char.title;

    // Milestone progress (today's steps toward next milestone)
    const currMilestoneIdx = this._getMilestoneIdx(this.state.todaySteps);
    const nextMilestone = MILESTONE_STEPS[currMilestoneIdx + 1];
    const prevMilestone = currMilestoneIdx >= 0 ? MILESTONE_STEPS[currMilestoneIdx] : 0;
    const nextChar = currMilestoneIdx + 1 < this.dailyPool.length ? this.dailyPool[currMilestoneIdx + 1] : null;

    let pct, labelText;
    if (nextMilestone) {
      const range = nextMilestone - prevMilestone;
      const progress = this.state.todaySteps - prevMilestone;
      pct = Math.min(100, Math.round((progress / range) * 100));
      labelText = nextChar ? `NEXT: ${nextChar.name} @ ${nextMilestone.toLocaleString()}歩` : `NEXT @ ${nextMilestone.toLocaleString()}歩`;
    } else {
      pct = 100;
      labelText = '今日のラインナップ制覇！';
    }

    document.getElementById('milestone-fill').style.width = pct + '%';
    document.getElementById('milestone-next').textContent = labelText;
    document.getElementById('milestone-pct').textContent = pct + '%';
  }

  get _overdriveActive() { return this.state.totalSteps >= 10000; }
  get _fireActive() { return this.state.totalSteps >= MAX_STEPS; }

  _applyOverdriveState() {
    const od = this._overdriveActive;
    document.getElementById('char-wrap').classList.toggle('overdrive', od);
    if (od && !this.headbangInterval) this._startHeadbang();
    else if (!od && this.headbangInterval) this._stopHeadbang();
  }

  _applyFireState() {
    document.getElementById('fire-overlay').classList.toggle('show', this._fireActive);
  }

  _startHeadbang() {
    const char = this._currentChar();
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
    const char = this._currentChar();
    img.src = char.stand;
    this.showingStand = true;
  }

  // ── Quote ───────────────────────────────────────────
  _showQuote() {
    const char = this._currentChar();
    const q = this._quoteForChar(char);
    this.audio.quote();
    const popup = document.getElementById('quote-popup');
    document.getElementById('quote-char-name').textContent = char.name + '：';
    document.getElementById('quote-text').textContent = `「${q}」`;
    popup.classList.add('show');
    clearTimeout(this.quoteTimer);
    this.quoteTimer = setTimeout(() => popup.classList.remove('show'), 4000);
  }

  // ── Events ──────────────────────────────────────────
  _triggerStoryEvent(ev) {
    if (ev.type === 'overdrive') {
      this.audio.overdrive();
      this._applyOverdriveState();
    }
    if (ev.type === 'finale') {
      this.audio.boss();
      this._applyFireState();
      if (!this.state.seenCharIds.includes('oz')) this.state.seenCharIds.push('oz');
      this._saveState();
      this._renderZukan();
    }
    this._showEventOverlay(ev, ev.type === 'finale' ? OZ : null);
  }

  _triggerCharReveal(char, stepsAt) {
    this.audio.unlock();
    this._stopHeadbang();
    const img = document.getElementById('char-img');
    img.src = char.stand;
    img.dataset.charId = char.id;
    document.getElementById('char-name-display').textContent = char.name;
    document.getElementById('char-title-display').textContent = char.title;
    if (this._overdriveActive) this._startHeadbang();
    this._showEventOverlay({
      title: `🎸 ${char.name}`,
      desc: `「${char.title}」が登場！\n${stepsAt.toLocaleString()}歩達成！\n\n${char.quotes[0]}`,
    }, char);
    this._renderZukan();
  }

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

  // ── Zukan ────────────────────────────────────────────
  _renderZukan() {
    const grid = document.getElementById('zukan-grid');
    grid.innerHTML = '';

    // 今日のラインナップヘッダー
    const header = document.createElement('div');
    header.className = 'zukan-daily-header';
    const dayNames = ['日', '月', '火', '水', '木', '金', '土'];
    const wd = new Date().getDay();
    header.textContent = `📅 今日（${dayNames[wd]}曜日）のラインナップ`;
    grid.appendChild(header);

    const dailyRow = document.createElement('div');
    dailyRow.className = 'zukan-daily-row';
    this.dailyPool.forEach((char, i) => {
      const tile = document.createElement('div');
      const reached = this.state.todaySteps >= MILESTONE_STEPS[i];
      tile.className = 'daily-tile' + (reached ? ' reached' : '');
      tile.innerHTML = `
        <div class="daily-tile-step">${(MILESTONE_STEPS[i] / 1000).toFixed(0)}k</div>
        <img src="${char.stand}" alt="${char.name}" loading="lazy">
        <div class="daily-tile-name">${char.name.split('・')[0]}</div>
      `;
      if (reached) tile.addEventListener('click', () => this._openCharModal(char));
      dailyRow.appendChild(tile);
    });
    grid.appendChild(dailyRow);

    // 全キャラ図鑑
    const allHeader = document.createElement('div');
    allHeader.className = 'zukan-daily-header';
    allHeader.textContent = '📖 全キャラ図鑑';
    grid.appendChild(allHeader);

    ALL_CHARS.forEach(char => {
      const seen = this.state.seenCharIds.includes(char.id);
      const card = document.createElement('div');
      card.className = 'zukan-card' + (seen ? '' : ' locked');

      const img = document.createElement('img');
      img.className = 'zukan-card-img';
      img.src = seen ? char.stand : 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
      img.loading = 'lazy';
      img.alt = char.name;

      const info = document.createElement('div');
      info.className = 'zukan-card-info';
      info.innerHTML = `
        <div class="zukan-card-name">${seen ? char.name : '???'}</div>
        <div class="zukan-card-title">${seen ? char.title : '未出会い'}</div>
        ${seen ? `<div class="zukan-card-amp">${char.amp}</div>` : ''}
      `;
      card.appendChild(img);
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
      char.id === 'oz' ? '解放条件: 累計20,000歩' :
      char.id === 'takasaki' ? '初期キャラクター' :
      '日替わりラインナップ';

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

  // ── History ─────────────────────────────────────────
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
      div.innerHTML = `
        <div>
          <div class="history-date">${item.date}</div>
          ${char ? `<div class="history-char">${char.name}</div>` : ''}
        </div>
        <div class="history-steps">${item.steps.toLocaleString()}<br><span style="font-size:5px">歩</span></div>
      `;
      list.appendChild(div);
    });
  }

  // ── UI Binding ───────────────────────────────────────
  _bindUI() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const screen = btn.dataset.screen;
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.getElementById('screen-' + screen).classList.add('active');
        btn.classList.add('active');
        if (screen === 'zukan') this._renderZukan();
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

    document.getElementById('step-counter-block').addEventListener('click', () => {
      this.debugTapCount++;
      clearTimeout(this.debugTapTimer);
      if (this.debugTapCount >= 5) {
        this.debugTapCount = 0;
        document.getElementById('debug-panel').classList.toggle('show');
      } else {
        this.debugTapTimer = setTimeout(() => { this.debugTapCount = 0; }, 1500);
      }
    });

    document.getElementById('dbg-100').addEventListener('click', () => { this.addSteps(100); this.audio.powerChord(); });
    document.getElementById('dbg-1000').addEventListener('click', () => { this.addSteps(1000); this.audio.powerChord(); });
    document.getElementById('dbg-5000').addEventListener('click', () => { this.addSteps(5000); this.audio.overdrive(); });
    document.getElementById('dbg-10000').addEventListener('click', () => { this.addSteps(10000); this.audio.boss(); });
    document.getElementById('dbg-reset').addEventListener('click', () => {
      if (confirm('本当にリセットしますか？')) this._reset();
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
    this.state = this._defaultState();
    this.dailyPool = this._getDailyPool();
    this._stopHeadbang();
    this._saveState();
    this._render();
    document.getElementById('fire-overlay').classList.remove('show');
    document.getElementById('debug-panel').classList.remove('show');
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
