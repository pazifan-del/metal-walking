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
      '俺の王国へ来い。ここが終点だ……いや、始まりだ！',
      'コウモリの頭を噛んだのは完全に事故だ。でも二口目は意図的だった。',
      '鳩を会議室に持っていって頭を噛んだ。もうその会議には呼ばれていない。',
      'シャロンが全部決めてくれる。俺はギターを弾くだけだ。まあ最高の役割分担だ。',
      '俺が生きてるのは奇跡だ。医者も言ってた。俺も同意する。何回死にかけたか覚えてない。',
      'プリンス・オブ・ダークネスだ。だが家では妻の言うことを聞く。これは矛盾しない。',
      'ドラッグはやめた。アルコールもやめた。……そうは言ってない。',
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
      'ギターに火をつけた。保険は入ってなかった。でもカッコよかった。',
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
      '酒は飲み物ではない。栄養素だ。',
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
      'タッピングを発明した。特許を取らなかった。全員に盗まれた。まあいいか。',
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
      'バラードを書いたせいでメタルバンドだと思われなくなった。でも俺はメタルだ。絶対に。ちょっと待って、あのバラードは名曲だ。',
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
      'ピンクは男の色だ。文句あるか。',
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
      '俺の趣味はオカルトだ。音楽との関係は聞かないでくれ。',
      '俺の家はアレイスター・クロウリーの邸宅だ。なぜ買ったか？聞くな。',
      '弓でギターを弾くアイデアはどこから来たか？教えない。',
      '音楽と魔術は同じだ。聴衆を魔法にかける。俺はずっとそれをやってきた。',
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
      '帽子は一度も外したことがない。シャワー中も。なぜかって？それは俺だけの秘密だ。',
    ]
  },
  {
    id: 'vai', name: 'スティーヴ・マエストロ', title: '7弦の超人',
    stars: 3, weight: 36,
    stand: 'assets/images/vai_stand.webp',
    action: 'assets/images/vai_action.webp',
    amp: 'MEGA + BLUE&LIGHT',
    quotes: [
      '7弦は宇宙への扉だ！',
      '音楽は神との対話。ギターは祈り。',
      '完璧な音符のように、完璧な一歩を！',
      '毎日10時間練習する。残り14時間は？また練習してる。',
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
      'ヴィヴァルディが泣いて喜ぶ！',
      'Less is more？バカを言うな。More is more だ。',
      '飛行機の中で寝てたら水をかけられた。熱湯をかけ返した。正当防衛だ。',
      '俺に影響を受けたギタリスト？世界中にいる。俺に影響を与えたギタリスト？いない。',
      '俺みたいな奴は他にいない。神様が確認済みだ。',
      '俺より上手い奴が出てきたら教えてくれ。まあ絶対いないけど。',
      '謙虚さ？俺の辞書にはない。いや、辞書自体が俺を謙虚だと書いている。',
      '俺のことが嫌いでも構わない。でも俺のギターは好きになるはずだ。',
      'バッハ、ヴィヴァルディ、パガニーニ……そして俺。その次が誰かは知らない。',
      '謙遜とは才能のない奴の言い訳だ。',
      '昨日より上手くなった。今日も上手くなった。明日も上手くなる。神も嫉妬するだろう。',
      'フュージョンは嫌いだ。魂がない。ロックには魂がある。フュージョンにはない。',
      '俺はフュージョンをやる連中とは違う。あいつらは音符を弾く。俺は感情を爆発させる。',
      'ジャズ・フュージョン？眠くなるだけだ。俺のネオクラシカルを聴け。目が覚める。',
      '批評家は俺のことを理解できない。理解できないからこそ批評家をやってるんだ。',
      'フェラーリが速い。俺の指も速い。これは偶然ではない。',
      '俺が先にやった。誰かが同じことをやったら、それは俺のコピーだ。',
      '俺の体型のことを言う奴がいる。指が動けばそれでいい。体型は関係ない。',
      '俺はスウェーデン人だが、魂はルネサンスのイタリアだ。',
      '俺に影響を与えた現代のギタリストは一人もいない。ゼロだ。バッハとパガニーニだけだ。',
      '速さに限界はない。俺がその証拠だ。',
      '誰かが俺を超えると言う。面白い。見てみよう。まだ誰も来ていない。',
      '俺はアルバムを出しすぎと言われる。名作を出しすぎているだけだ。',
      'ネオクラシカルは俺が作った。誰も否定できない。俺しかいなかったから。',
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
      'KFCのバケツは最高のヘルメットだ。揚げ鶏のパワーを感じながら弾く。',
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
      '海を揺るがすハイウェイスターの咆哮！',
      '波とリフは繋がってる。サーフィンとメタルは同じだ。いや、全然違う。でも同じだ。',
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
      '俺のリフが世界を変えた。',
      '暗黒の祝福を受けよ。',
      '右手の指先をなくした。チューニングを下げた。ヘビーメタルが誕生した。怪我も無駄にはならない。',
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
      'スラッシュは俺が始めた！',
      'あのバンドを首になった。それで俺のバンドを作った。全然悔しくない。ホントに。ちょっとだけ。',
      '俺がまだあのバンドにいたら、今頃もっと売れてたはずだ。まあ向こうも売れてたけど。',
      '俺の政治的意見が嫌いな奴は俺のギターを聴けばいい。それで仲直りだ。',
      'あのバンドとは仲直りした。いや、してない。いや、した。まあどっちでもいい。……してない。',
      '俺がスラッシュメタルを作った。これは歴史的事実だ。',
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
      'この制服、30年洗ってない。なぜか。ロックの臭いがするからだ。',
      '引退？俺のスーツが引退を許さない。スーツに聞いてくれ。',
      '毎晩全力でやる。なぜか？俺に引退という概念がないからだ。チャックに習った。',
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
      '俺は止まらない。鉄の意志で！',
      '100万ワットで吹き飛ばせ！',
      '医者に酒とタバコをやめろと言われた。医者を変えた。',
      'Everything louder than everything else。これが俺の人生哲学だ。',
      '酒とタバコとスロットマシン。これが健康の三本柱だ。',
      '年をとってロックをやめる？逆だ。ロックをやめたら年をとる。',
      '俺は30年、同じバーの同じ席に座ってる。バーが俺に合わせた。',
      'Jack Daniel\'sは血液型だ。O型でもA型でもない。Jack型だ。',
      'うるさいのは美徳だ。静かなのは死んでる証拠だ。',
      '健康的な生活？それが何かは知ってる。俺には関係ない話だが。',
      '俺たちはもっとデカく、もっとうるさく、もっと速くやった。それだけだ。それで十分だ。',
    ]
  },
  {
    id: 'marty', name: 'マーティ・ジャパン', title: '日本を愛した男',
    stars: 2, weight: 50,
    stand: 'assets/images/marty_stand.webp',
    action: 'assets/images/marty_action.webp',
    amp: 'BLUE&LIGHT + HEAVEY',
    quotes: [
      'ニッポン最高！魂がシャープになる！',
      '日本の歩道は世界一だ！オリエンタルメタル！',
      'ペンタトニック、美しい！',
      '本場のメタルバンドを辞めて日本のアイドルポップをやることにした。後悔は全くない。最高の判断だ。',
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
      '俺だけ30年シラフでやってきた。だから正気を保ってる。でも周りが全員狂ってるから結局同じだ。',
      '強直性脊椎炎と闘いながら50年やってきた。文句言うな。お前の腰痛は甘えだ。',
      '俺はバンドで一番地味だ。しかし俺がいなければバンドは成立しない。',
    ]
  },
  {
    id: 'petrucci', name: 'ペトルーシ・マッスル', title: '7弦の筋肉神',
    stars: 2, weight: 50,
    stand: 'assets/images/petrucci_stand.webp',
    action: 'assets/images/petrucci_action.webp',
    amp: 'HEAVEY + MARS',
    quotes: [
      'プログレッシブな筋肉！',
      '複雑なリズムも、身体が覚えれば恐くない！',
      'バンドで意見をすり合わせたら3年かかった。次のアルバムは1人で作る。',
    ]
  },
  {
    id: 'schenker', name: 'マイケル・シャドウ', title: 'UFOの影',
    stars: 2, weight: 50,
    stand: 'assets/images/schenker_stand.webp',
    action: 'assets/images/schenker_action.webp',
    amp: 'MARS',
    quotes: [
      'Vシェイプが空を切る！宇宙が見える！',
      'UFOの速さで！',
      'バンドを何度辞めたか覚えてない。再加入した回数も覚えてない。趣味みたいなもんだ。',
      '俺は自由だ。バンドという檻に入れられない。入ってもすぐ出る。これは哲学だ。',
      'UFOを辞めた。スコーピオンズを辞めた。また戻った。また辞めた。これが俺のスタイルだ。',
      '契約書にサインする前に読め。俺は読まない。だから何度も辞める羽目になる。',
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
      'B\'zの曲を外国人に聞かせたら「これどこの国の音楽？」と聞かれた。日本だと言ったら黙った。',
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
      'アメリカ進出して英語のインタビューを受けた。半分しかわからんかった。全部「イエス！ロック！」で乗り切った。',
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
      'クレイジーなリフ！クレイジーな人生！',
      '速弾きの秘訣？ドリルを使えばもっと速い。半分本気だ。',
    ]
  },
  {
    id: 'joe', name: 'ジョー・サーファー', title: 'サーフ系超人',
    stars: 1, weight: 36,
    stand: 'assets/images/joe_stand.webp',
    action: 'assets/images/joe_action.webp',
    amp: 'HEAVEY + MARS',
    quotes: [
      '波に乗れ！ギターは波乗りと同じだ！',
      'ブルーステールが空を切る！',
      '俺の生徒が俺より売れた。まあ、俺が教えたから当然か。',
    ]
  },
  {
    id: 'zappa', name: 'フランク・マエストロZ', title: '実験音楽の神',
    stars: 1, weight: 36,
    stand: 'assets/images/zappa_stand.webp',
    action: 'assets/images/zappa_action.webp',
    amp: 'ORBIT + BENDER',
    quotes: [
      '芸術は実験だ。人生も実験だ。',
      '変拍子で生きろ！それが俺のビートだ！',
      'アメリカ議会で音楽検閲に反対するスピーチをした。議員たちはロックをわかってなかった。今もわかってない。',
      'ジャズは死んでいない。ただ臭うだけだ。',
      '親に聴かせたくない音楽が、一番聴く価値がある。',
      '俺は作曲家だ。ロックはたまたま俺が通った道だ。しかし最高の道だった。',
      '政府が音楽を検閲する国は、政府が腐ってる証拠だ。難しくない。',
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
      '俺の名前を聞いて笑う奴がいる。ギターを聴かせると笑わなくなる。',
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
      '指が追いつかない速さ！',
      'ピックは使わない。指で弾く。理由？ピックを落とすのが怖いからだ。',
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
      '大吉が出ない日は存在しない。なぜなら私が引くから。',
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

  nakiSound() {
    this._play(ctx => {
      const t = ctx.currentTime;
      // 泣きの1回 — 悲しげなサウンドから上昇
      [220, 196, 220, 294, 440].forEach((f, i) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type = 'triangle'; o.frequency.value = f;
        const s = t + i * 0.12;
        g.gain.setValueAtTime(0.1, s);
        g.gain.exponentialRampToValueAtTime(0.001, s + 0.3);
        o.start(s); o.stop(s + 0.3);
      });
    });
  }
}

// ═══════════════════════════════════════════════════════
//  MAIN APP — メタルおみくじ
// ═══════════════════════════════════════════════════════
class MetalOmikujiApp {
  constructor() {
    this.audio = new AudioEngine();
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

    if (this.isNewDraw) {
      this.isNewDraw = false;
      setTimeout(() => this._showFortuneReveal(), 600);
    }
  }

  // ── おみくじ抽選 ──────────────────────────────────────
  _drawFortune(usedRetry = false) {
    const totalW = ALL_CHARS.reduce((s, c) => s + c.weight, 0);
    let r = Math.random() * totalW;
    let char = ALL_CHARS[0];
    for (const c of ALL_CHARS) {
      r -= c.weight;
      if (r <= 0) { char = c; break; }
    }

    // ライブモード時は凶・末吉なし
    const LEVELS = this.state.liveMode ? [
      { label: '大吉', weight: 15 },
      { label: '中吉', weight: 30 },
      { label: '小吉', weight: 30 },
      { label: '吉',   weight: 25 },
    ] : [
      { label: '大吉', weight: 10 },
      { label: '中吉', weight: 20 },
      { label: '小吉', weight: 25 },
      { label: '吉',   weight: 20 },
      { label: '末吉', weight: 15 },
      { label: '凶',   weight: 10 },
    ];
    // ミカミカ・オズ・レミー・ジミは固定大吉
    const DAIKICHI_CHARS = ['mika', 'oz', 'lemmy', 'jimi'];
    let level;
    if (DAIKICHI_CHARS.includes(char.id)) {
      level = LEVELS[0]; // 大吉
    } else {
      const totalLW = LEVELS.reduce((s, l) => s + l.weight, 0);
      let lr = Math.random() * totalLW;
      level = LEVELS[LEVELS.length - 1];
      for (const l of LEVELS) {
        lr -= l.weight;
        if (lr <= 0) { level = l; break; }
      }
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
      usedRetry,
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
      todayDate: this._today(),
      history: [],
      liveMode: false,
      useActionImg: false,
    };
  }

  _loadState() {
    try {
      const s = JSON.parse(localStorage.getItem('metalwalk_state'));
      if (s) {
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
          usedRetry: this.state.dailyFortune.usedRetry || false,
        });
        if (this.state.history.length > 90) this.state.history.length = 90;
      }
      this.state.todayDate = today;
      this.state.dailyFortune = null;
      this._saveState();
    }
  }

  // ── Render ───────────────────────────────────────────
  _render() {
    this._updateMainUI();
    this._renderZukan();
    this._renderHistory();
  }

  _updateMainUI() {
    const fortune = this.state.dailyFortune;
    if (!fortune) return;
    const char = ALL_CHARS.find(c => c.id === fortune.charId);
    if (!char) return;

    // レア度バー
    document.getElementById('fortune-stars').textContent      = '★'.repeat(char.stars) + '☆'.repeat(5 - char.stars);
    document.getElementById('fortune-stars').className        = `rarity-${char.stars}`;
    document.getElementById('fortune-rarity-label').textContent = this._rarityLabel(char.stars);
    document.getElementById('fortune-rarity-label').className   = `rarity-${char.stars}`;

    // キャラ画像（タップで stand/action 切り替え）
    const img = document.getElementById('char-img');
    img.src = this.state.useActionImg ? char.action : char.stand;
    img.dataset.charId = char.id;
    img.title = 'タップで切り替え';

    // キャラ名
    document.getElementById('char-name-display').textContent  = char.name;
    document.getElementById('char-title-display').textContent = char.title;

    // 運勢レベル
    const levelEl = document.getElementById('fortune-level');
    levelEl.textContent = fortune.level;
    levelEl.className   = this._fortuneLevelClass(fortune.level);

    // カテゴリ評価
    document.getElementById('fr-rif').textContent      = this._starsStr(fortune.rif);
    document.getElementById('fr-headbang').textContent = this._starsStr(fortune.headbang);
    document.getElementById('fr-practice').textContent = this._starsStr(fortune.practice);
    document.getElementById('fr-live').textContent     = this._starsStr(fortune.live);

    // セリフ
    document.getElementById('fortune-quote').textContent =
      `「${char.quotes[fortune.quoteIdx || 0]}」`;

    // 泣きの1回ボタン（テスト中: 常に表示）
    document.getElementById('nakino-btn').style.display  = '';
    document.getElementById('nakino-used').style.display = 'none';

    // ライブモードUI
    this._updateLiveModeUI();
  }

  _updateLiveModeUI() {
    const btn  = document.getElementById('live-mode-btn');
    const wrap = document.getElementById('live-mode-wrap');
    if (this.state.liveMode) {
      btn.textContent = '🎸 LIVE MODE ON';
      btn.classList.add('live-on');
      wrap.classList.add('live-on');
      document.getElementById('app').classList.add('live-mode');
    } else {
      btn.textContent = '🎸 今日ライブあり';
      btn.classList.remove('live-on');
      wrap.classList.remove('live-on');
      document.getElementById('app').classList.remove('live-mode');
    }
  }

  _starsStr(n)      { return '★'.repeat(n) + '☆'.repeat(5 - n); }
  _rarityLabel(s)   { return { 5:'SSR', 4:'SR', 3:'R', 2:'UC', 1:'C' }[s] || ''; }

  _fortuneLevelClass(level) {
    return { '大吉':'fl-daikichi', '中吉':'fl-chukichi', '小吉':'fl-shokichi',
             '吉':'fl-kichi', '末吉':'fl-suekichi', '凶':'fl-kyo' }[level] || '';
  }

  // ── 運勢リビール ──────────────────────────────────────
  _showFortuneReveal(isRetry = false) {
    const fortune = this.state.dailyFortune;
    if (!fortune) return;
    const char = ALL_CHARS.find(c => c.id === fortune.charId);
    if (!char) return;

    if (isRetry)              this.audio.nakiSound();
    else if (char.stars === 5) this.audio.boss();
    else if (char.stars === 4) this.audio.overdrive();
    else if (char.stars >= 3)  this.audio.unlock();
    else                       this.audio.powerChord();

    const s      = '★'.repeat(char.stars) + '☆'.repeat(5 - char.stars);
    const prefix = isRetry ? '😭 泣きの1回！\n' : '';
    this._showEventOverlay({
      title: `${s}  ${fortune.level}  ${s}`,
      desc:  `${prefix}${char.name}\n「${char.title}」\n${this._rarityLabel(char.stars)}\n\n${char.quotes[fortune.quoteIdx || 0]}`,
    }, char);
  }

  // ── イベントオーバーレイ ────────────────────────────
  _showEventOverlay(ev, char = null) {
    const overlay = document.getElementById('event-overlay');
    if (overlay.classList.contains('show')) {
      this.eventQueue.push([ev, char]);
      return;
    }
    document.getElementById('event-title').textContent = ev.title;
    document.getElementById('event-desc').textContent  = ev.desc || '';
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
    document.getElementById('modal-name').textContent    = char.name;
    document.getElementById('modal-title').textContent   = char.title;
    document.getElementById('modal-amp').textContent     = `AMP: ${char.amp}`;
    document.getElementById('modal-quote').textContent   = `「${char.quotes[0]}」`;
    document.getElementById('modal-unlock').textContent  = `${'★'.repeat(char.stars)}  ${this._rarityLabel(char.stars)}`;

    const standImg  = document.getElementById('modal-stand-img');
    const actionImg = document.getElementById('modal-action-img');
    standImg.src  = char.stand;
    actionImg.src = char.action;
    standImg.classList.add('selected');
    actionImg.classList.remove('selected');
    standImg.onclick  = () => { standImg.classList.add('selected');  actionImg.classList.remove('selected'); };
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
      const div  = document.createElement('div');
      div.className = 'history-item';
      const starsStr = char ? '★'.repeat(char.stars) : '';
      div.innerHTML = `
        <div>
          <div class="history-date">${item.date}</div>
          ${char ? `<div class="history-char rarity-${char.stars}">${starsStr} ${char.name}</div>` : ''}
          ${item.usedRetry ? '<div class="history-retry">😭 泣きの1回使用</div>' : ''}
        </div>
        <div style="text-align:right">
          <div class="history-fortune ${this._fortuneLevelClass(item.level)}">${item.level}</div>
        </div>
      `;
      list.appendChild(div);
    });
  }

  // ── UI バインド ──────────────────────────────────────
  _bindUI() {
    // ナビ
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

    // 泣きの1回
    document.getElementById('nakino-btn').addEventListener('click', () => {
      if (confirm('もう一回引く？（テスト中: 何回でも可）')) {
        this.state.dailyFortune = this._drawFortune(false);
        this._addToCollection(this.state.dailyFortune.charId);
        this._saveState();
        this._updateMainUI();
        this._showFortuneReveal(true);
      }
    });

    // キャラ画像タップ → stand/action 切り替え
    document.getElementById('char-img').addEventListener('click', () => {
      const fortune = this.state.dailyFortune;
      if (!fortune) return;
      const char = ALL_CHARS.find(c => c.id === fortune.charId);
      if (!char || char.stand === char.action) return;
      this.state.useActionImg = !this.state.useActionImg;
      this._saveState();
      const img = document.getElementById('char-img');
      img.src = this.state.useActionImg ? char.action : char.stand;
      img.classList.add('img-switch');
      setTimeout(() => img.classList.remove('img-switch'), 300);
    });

    // ライブモードボタン
    document.getElementById('live-mode-btn').addEventListener('click', () => {
      this.state.liveMode = !this.state.liveMode;
      if (this.state.liveMode) {
        // ライブモードON → actionイメージに自動切り替え
        this.state.useActionImg = true;
      }
      this._saveState();
      this._updateLiveModeUI();
      // 画像更新
      const fortune = this.state.dailyFortune;
      if (fortune) {
        const char = ALL_CHARS.find(c => c.id === fortune.charId);
        if (char) {
          const img = document.getElementById('char-img');
          img.src = this.state.useActionImg ? char.action : char.stand;
        }
      }
    });

    // タイトルエリアを3回タップでデバッグパネル
    document.getElementById('app-title').addEventListener('click', () => {
      this.debugTapCount++;
      clearTimeout(this.debugTapTimer);
      if (this.debugTapCount >= 3) {
        this.debugTapCount = 0;
        document.getElementById('debug-panel').classList.toggle('show');
      } else {
        this.debugTapTimer = setTimeout(() => { this.debugTapCount = 0; }, 1500);
      }
    });

    // デバッグボタン
    document.getElementById('dbg-redraw').addEventListener('click', () => {
      this.state.dailyFortune = this._drawFortune();
      this._addToCollection(this.state.dailyFortune.charId);
      this._saveState();
      this._updateMainUI();
      this._showFortuneReveal();
    });
    document.getElementById('dbg-reset').addEventListener('click', () => {
      if (confirm('全データをリセットしますか？')) this._reset();
    });
  }

  _reset() {
    this.state = this._defaultState();
    this.state.dailyFortune = this._drawFortune();
    this._addToCollection(this.state.dailyFortune.charId);
    this._saveState();
    this._render();
    document.getElementById('debug-panel').classList.remove('show');
    setTimeout(() => this._showFortuneReveal(), 500);
  }
}

// ═══════════════════════════════════════════════════════
//  BOOT
// ═══════════════════════════════════════════════════════
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new MetalOmikujiApp();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});
