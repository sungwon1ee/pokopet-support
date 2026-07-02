export type Lang = 'ko' | 'en' | 'ja';

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'ko', label: '한국어' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
];

export const EMAIL = 'malang.laboratory@gmail.com';

/** App Store link. Leave empty until published — the button shows "Coming Soon". */
export const APP_STORE_URL = '';

/** Prefix a public/ asset path with Vite's base URL so it works from any deploy path. */
export const asset = (p: string) => import.meta.env.BASE_URL + p;

export interface Pet { img: string; name: string; desc: string; }
export interface Feature { icon: string; title: string; desc: string; }
export interface Faq { q: string; a: string; }
export interface PrivacyBlock { heading: string; body: string[]; list?: string[]; }

export interface Copy {
  tagline: string;
  appStore: { small: string; soon: string; download: string };
  intro: { title: string; lead: string; pets: Pet[] };
  features: { title: string; items: Feature[] };
  support: { title: string; intro: string; faqTitle: string; faqs: Faq[] };
  privacy: { title: string; updated: string; intro: string; blocks: PrivacyBlock[] };
  footer: string;
}

/** Rich text markers used in privacy copy: **bold** and [label](href). */
const emailLink = `[${EMAIL}](mailto:${EMAIL})`;

export const COPY: Record<Lang, Copy> = {
  ko: {
    tagline: '내 Mac에 머무는 작은 펫',
    appStore: { small: 'Mac App Store', soon: '출시 예정', download: '다운로드' },
    intro: {
      title: 'pokoPet이란?',
      lead: '화면 위를 돌아다니고, 창을 기어오르고, 당신에게 반응하는 귀여운 macOS 데스크톱 펫이에요. 일하는 동안 곁을 지켜주는 작은 친구를 만나보세요.',
      pets: [
        { img: 'assets/cat.png', name: '고양이', desc: '장난감을 좋아하는 친절한 고양이. 하지만 언제 펀치를 날릴지 몰라요.' },
        { img: 'assets/lizard.png', name: '도마뱀', desc: '무슨 생각을 하는지 알 수 없는 도마뱀. 유일하게 벽을 타고 다녀요.' },
        { img: 'assets/otter.png', name: '해달', desc: '온순하고 귀여운 해달. 세상에서 조개껍데기를 가장 좋아해요.' },
      ],
    },
    features: {
      title: '주요 기능',
      items: [
        { icon: '✨', title: '살아있는 움직임', desc: '걷고, 뛰고, 폴짝 뛰고, 창을 기어오르고, 공을 쫓아다녀요.' },
        { icon: '🧶', title: '같이 놀기', desc: '드래그해서 옮기면 반응하고, 클릭하면 귀여운 리액션을 보여줘요.' },
        { icon: '🎀', title: '아이템 & 꾸미기', desc: '먹이를 주고 아이템을 착용시켜 나만의 펫으로 꾸며보세요.' },
        { icon: '⚙️', title: '내 맘대로 설정', desc: '메뉴바 아이콘으로 크기(60~120%)와 표시 여부를 간편하게 조절해요.' },
        { icon: '🔒', title: '완전한 프라이버시', desc: '모든 동작이 기기 안에서만 이뤄져요. 수집·전송하는 데이터가 없어요.' },
        { icon: '🪶', title: '가볍고 자연스럽게', desc: '작업을 방해하지 않고 데스크톱 위에서 자연스럽게 함께해요.' },
      ],
    },
    support: {
      title: '지원 (Support)',
      intro: 'pokoPet 사용 중 문제가 생겼거나 궁금한 점, 건의사항이 있으면 이메일로 편하게 연락 주세요. 보통 2~3일 안에 답장드립니다.',
      faqTitle: '자주 묻는 질문',
      faqs: [
        { q: '메뉴바 아이콘이 안 보여요.', a: 'macOS 메뉴바 우측 상단을 확인해 주세요. 아이콘을 통해 설정과 사용 가이드를 열 수 있습니다. 펫을 우클릭해도 메뉴를 열 수 있어요.' },
        { q: '펫을 숨기거나 종료하려면?', a: '메뉴바 아이콘 또는 펫 우클릭 메뉴를 이용하세요.' },
        { q: '펫 크기를 바꾸고 싶어요.', a: '설정 패널에서 크기를 60~120%로 조절할 수 있습니다.' },
      ],
    },
    privacy: {
      title: '개인정보처리방침',
      updated: '최종 업데이트: 2026년 7월 2일',
      intro: 'pokoPet은 이용자의 개인정보를 소중히 여깁니다. 이 방침은 앱이 어떤 정보를 다루는지 설명합니다.',
      blocks: [
        {
          heading: '수집하는 정보',
          body: ['pokoPet은 **어떠한 개인정보도 수집·저장·전송하지 않습니다.** 앱은 이용자의 Mac에서만 동작하며, 외부 서버로 데이터를 보내지 않습니다.'],
          list: ['계정 생성이나 로그인이 필요하지 않습니다.', '분석 도구, 광고 SDK, 추적 기술을 사용하지 않습니다.', '네트워크 통신을 하지 않습니다.'],
        },
        { heading: '기기 내 저장', body: ['펫 설정(크기, 표시 여부 등) 같은 환경설정은 이용자의 기기에만 로컬로 저장되며, 언제든지 앱을 삭제하면 함께 제거됩니다.'] },
        { heading: '아동 개인정보', body: ['pokoPet은 아동을 포함한 어떤 이용자로부터도 개인정보를 수집하지 않습니다.'] },
        { heading: '방침 변경', body: ['본 방침이 변경될 경우 이 페이지에서 업데이트하고 상단의 날짜를 갱신합니다.'] },
        { heading: '문의', body: [`개인정보처리방침에 대한 문의는 ${emailLink} 으로 연락 주세요.`] },
      ],
    },
    footer: 'Sungwon Lee / @malang.lab',
  },

  en: {
    tagline: 'A tiny pet for your Mac',
    appStore: { small: 'Mac App Store', soon: 'Coming Soon', download: 'Download' },
    intro: {
      title: 'What is pokoPet?',
      lead: 'A cute macOS desktop pet that wanders across your screen, climbs your windows, and reacts to you. Meet a little companion that keeps you company while you work.',
      pets: [
        { img: 'assets/cat.png', name: 'Cat', desc: 'A friendly cat who loves toys — but you never know when a punch might fly.' },
        { img: 'assets/lizard.png', name: 'Lizard', desc: 'An inscrutable lizard — the only one who can climb your walls.' },
        { img: 'assets/otter.png', name: 'Sea Otter', desc: 'A gentle, adorable sea otter that loves sea shells most of all.' },
      ],
    },
    features: {
      title: 'Highlights',
      items: [
        { icon: '✨', title: 'Lively movement', desc: 'Walks, runs, hops, climbs your windows, and chases a ball.' },
        { icon: '🧶', title: 'Play together', desc: 'Drag it around and it reacts; click it for cute little reactions.' },
        { icon: '🎀', title: 'Items & dress-up', desc: 'Feed your pet and equip items to make it your own.' },
        { icon: '⚙️', title: 'Make it yours', desc: 'Resize (60–120%) and toggle visibility right from the menu bar icon.' },
        { icon: '🔒', title: 'Fully private', desc: 'Everything runs on-device. No data is collected or sent anywhere.' },
        { icon: '🪶', title: 'Light & natural', desc: 'Lives on your desktop without getting in the way of your work.' },
      ],
    },
    support: {
      title: 'Support',
      intro: 'If you run into any issue with pokoPet, or have a question or suggestion, feel free to reach out by email. We usually reply within 2–3 days.',
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { q: "I can't find the menu bar icon.", a: 'Check the top-right of your macOS menu bar. The icon lets you open Settings and the usage guide. You can also right-click the pet to open its menu.' },
        { q: 'How do I hide or quit the pet?', a: 'Use the menu bar icon, or right-click the pet.' },
        { q: 'Can I resize the pet?', a: 'Yes — you can adjust the size from 60% to 120% in the Settings panel.' },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      updated: 'Last updated: July 2, 2026',
      intro: 'pokoPet respects your privacy. This policy explains what information the app handles.',
      blocks: [
        {
          heading: 'Information We Collect',
          body: ['pokoPet **does not collect, store, or transmit any personal data.** The app runs entirely on your Mac and does not send any data to external servers.'],
          list: ['No account or sign-in is required.', 'No analytics, advertising SDKs, or tracking technologies are used.', 'The app does not make any network connections.'],
        },
        { heading: 'On-Device Storage', body: ['Preferences such as pet settings (size, visibility, etc.) are stored locally on your device only, and are removed when you delete the app.'] },
        { heading: "Children's Privacy", body: ['pokoPet does not collect personal information from any user, including children.'] },
        { heading: 'Changes to This Policy', body: ['If this policy changes, we will update this page and revise the date at the top.'] },
        { heading: 'Contact', body: [`For any questions about this Privacy Policy, contact ${emailLink}.`] },
      ],
    },
    footer: 'Sungwon Lee / @malang.lab',
  },

  ja: {
    tagline: 'Macに住む小さなペット',
    appStore: { small: 'Mac App Store', soon: '近日公開', download: 'ダウンロード' },
    intro: {
      title: 'pokoPetとは？',
      lead: '画面の上を歩き回り、ウィンドウをよじ登り、あなたに反応するかわいいmacOSデスクトップペット。作業のあいだ、そばに寄り添う小さな友だちに出会いましょう。',
      pets: [
        { img: 'assets/cat.png', name: 'ネコ', desc: 'おもちゃが好きなやさしいネコ。でも、いつパンチが飛んでくるかは分かりません。' },
        { img: 'assets/lizard.png', name: 'トカゲ', desc: '何を考えているのか分からないトカゲ。唯一、壁を登れます。' },
        { img: 'assets/otter.png', name: 'ラッコ', desc: 'おとなしくてかわいいラッコ。世界で一番、貝殻が好きです。' },
      ],
    },
    features: {
      title: '主な機能',
      items: [
        { icon: '✨', title: 'いきいきとした動き', desc: '歩く、走る、跳ねる、ウィンドウを登る、ボールを追いかける。' },
        { icon: '🧶', title: '一緒に遊ぶ', desc: 'ドラッグして動かすと反応し、クリックするとかわいいリアクション。' },
        { icon: '🎀', title: 'アイテム & きせかえ', desc: 'エサをあげたりアイテムを持たせて、自分だけのペットに。' },
        { icon: '⚙️', title: '自由に設定', desc: 'メニューバーのアイコンからサイズ（60〜120%）や表示を調整。' },
        { icon: '🔒', title: '完全なプライバシー', desc: 'すべて端末内で動作。収集・送信するデータはありません。' },
        { icon: '🪶', title: '軽くて自然', desc: '作業のじゃまをせず、デスクトップの上で自然に一緒に過ごします。' },
      ],
    },
    support: {
      title: 'サポート (Support)',
      intro: 'pokoPetの使用中に問題が起きたり、ご質問・ご要望があれば、お気軽にメールでご連絡ください。通常2〜3日以内に返信します。',
      faqTitle: 'よくある質問',
      faqs: [
        { q: 'メニューバーのアイコンが見つかりません。', a: 'macOSメニューバーの右上をご確認ください。アイコンから設定や使い方を開けます。ペットを右クリックしてもメニューを開けます。' },
        { q: 'ペットを隠す・終了するには？', a: 'メニューバーのアイコン、またはペットの右クリックメニューをご利用ください。' },
        { q: 'ペットのサイズを変えたい。', a: '設定パネルでサイズを60〜120%に調整できます。' },
      ],
    },
    privacy: {
      title: 'プライバシーポリシー',
      updated: '最終更新日: 2026年7月2日',
      intro: 'pokoPetはユーザーのプライバシーを尊重します。本ポリシーは、アプリがどのような情報を扱うかを説明します。',
      blocks: [
        {
          heading: '収集する情報',
          body: ['pokoPetは**いかなる個人情報も収集・保存・送信しません。** アプリはお使いのMac上でのみ動作し、外部サーバーへデータを送信しません。'],
          list: ['アカウント作成やログインは不要です。', '分析ツール、広告SDK、トラッキング技術は使用しません。', 'ネットワーク通信を行いません。'],
        },
        { heading: '端末内の保存', body: ['ペット設定（サイズ、表示など）などの環境設定は、お使いの端末にのみローカルに保存され、アプリを削除すると一緒に削除されます。'] },
        { heading: '子どものプライバシー', body: ['pokoPetは、子どもを含むいかなるユーザーからも個人情報を収集しません。'] },
        { heading: 'ポリシーの変更', body: ['本ポリシーを変更する場合は、このページを更新し、上部の日付を改訂します。'] },
        { heading: 'お問い合わせ', body: [`本プライバシーポリシーに関するお問い合わせは ${emailLink} までご連絡ください。`] },
      ],
    },
    footer: 'Sungwon Lee / @malang.lab',
  },
};
