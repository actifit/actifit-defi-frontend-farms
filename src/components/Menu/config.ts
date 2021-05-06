import { MenuEntry, menuStatus } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.actifit.io/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.actifit.io/#/pool',
      },
    ],
  },
  {
    label: 'Workouts',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Shakes',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
     label: 'Lottery',
     icon: 'TicketIcon',
     href: '',
     status: menuStatus.SOON,
   },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: '',
    status: menuStatus.SOON,
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Actifit',
        href: 'https://actifit.io',
      },
      {
        label: 'AFIT - PancakeSwap',
        href: 'https://pancakeswap.info/token/0x4516bb582f59befcbc945d8c2dac63ef21fba9f6',
      },
      {
        label: 'AFITX - PancakeSwap',
        href: 'https://pancakeswap.info/token/0x246d22ff6e0b90f80f2278613e8db93ff7a09b95',
      },
      // {
      //  label: 'CoinGecko',
      //  href: 'https://www.coingecko.com/en/coins/actifit',
      // },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/actifit/',
      },
      {
        label: 'AFIT - AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x4516bb582f59befcbc945d8c2dac63ef21fba9f6',
      },
      {
        label: 'AFITX - AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x246d22ff6e0b90f80f2278613e8db93ff7a09b95',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/actifit/",
      },
      {
        label: "Docs",
        href: "https://docs.actifit.io/",
      },
      {
        label: "Blog",
        href: "https://hive.blog/@actifit",
      },
      {
        label: 'BSC Scan AFIT',
        href: 'https://bscscan.com/token/0x4516bb582f59befcbc945d8c2dac63ef21fba9f6',
      },
      {
        label: 'BSC Scan AFITX',
        href: 'https://bscscan.com/token/0x246d22ff6e0b90f80f2278613e8db93ff7a09b95',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //  href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
 {
    label: 'Audit',
    icon: 'AuditIcon',
    href: '',
    status: menuStatus.SOON,
  },
]

export default config
