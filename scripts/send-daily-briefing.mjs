#!/usr/bin/env node
/**
 * World Monitor — Global Daily Briefing Email Sender
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs
 */

const RECIPIENTS = [
  'johnmcbride2928@gmail.com',
];

const TESTING_RECIPIENTS = [
  'johnmcbride2928@gmail.com',
];
const RESEND_KEY = process.env.RESEND_API_KEY;

if (!RESEND_KEY) {
  console.error('Error: RESEND_API_KEY environment variable is required.');
  process.exit(1);
}

const today = new Date().toLocaleDateString('en-US', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
});

const html = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 720px; margin: 0 auto; background: #0a0a0a; color: #e0e0e0; padding: 0;">
  <div style="background: linear-gradient(90deg, #1e40af, #7c3aed, #dc2626); height: 4px;"></div>
  <div style="padding: 32px 28px;">

    <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 28px;">
      <tr>
        <td style="width: 36px; height: 36px; border-radius: 50%; border: 1px solid #222; text-align: center; vertical-align: middle; background: #111;">
          <span style="font-size: 18px; color: #7c3aed;">&#9678;</span>
        </td>
        <td style="padding-left: 10px;">
          <div style="font-size: 15px; font-weight: 800; color: #fff; letter-spacing: -0.5px;">WORLD MONITOR</div>
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Daily Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Global Events &mdash; 24-Hour Market Intelligence</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Markets &bull; Equities &bull; Commodities &bull; Risk Assessment</p>
    </div>

    <!-- ===================== EVENT 1: IRAN-US DOHA TALKS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Persian Gulf / Geopolitics / Energy &mdash; July 1&ndash;2</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran-US Indirect Talks in Doha Report &ldquo;Positive Progress&rdquo; on Hormuz; Negotiations Pause for Ayatollah Khamenei&rsquo;s Funeral</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The United States and Iran concluded a round of <strong>indirect technical talks in Doha</strong>, mediated by Qatar and Pakistan, with the Qatari government announcing &ldquo;positive progress&rdquo; on the Strait of Hormuz and compliance with the June 17 memorandum of understanding (MoU). A new <strong>communication channel</strong> between Washington and Tehran will be established to monitor and report ceasefire breaches. However, talks are now <strong>paused for at least one week</strong> for the funeral of Ayatollah Ali Khamenei, the former Supreme Leader killed by a US-Israeli strike at the start of the war.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Hormuz shipping flows have surpassed <strong>10 million bbl/day</strong> with UAE exports restored to 3.9M bbl/day, driving Brent crude down to <strong>$70.60/bbl</strong> (&minus;1.36%) and WTI to <strong>$67.59/bbl</strong> (&minus;1.44%) &mdash; their lowest since late February. However, Iran continues to assert it will impose <strong>tolls on Strait of Hormuz transit</strong> when the 60-day toll-free period expires in mid-August, with VP Vance calling any Iranian tolling mechanism &ldquo;unacceptable.&rdquo; The Hormuz toll dispute remains the hardest open issue and presents significant tail risk.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent $70.60/bbl, WTI $67.59/bbl &mdash; both at lowest since February. Peace progress is bearish for crude, but mid-August toll deadline presents asymmetric upside risk. Gold surged +2.18% above $4,100/oz on combined safe-haven demand. Indian equities rallied (Nifty +0.71%) as falling crude benefits net importers.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> GLD (SPDR Gold &mdash; above $4,100, +2.18%) &bull; INDA (iShares India ETF &mdash; falling oil bullish) &bull; INFY (Infosys &mdash; +5.32% on Nifty) &bull; TLT (20+ Year Treasury &mdash; rate repricing)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> USO (U.S. Oil Fund &mdash; crude at 4-month lows) &bull; BNO (Brent Oil Fund) &bull; XLE (Energy Select SPDR) &bull; XOM (ExxonMobil) &bull; CVX (Chevron)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: EU CUSTOMS DUTY ON CHINESE E-COMMERCE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Europe / Trade Policy / E-Commerce &mdash; July 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">EU&rsquo;s New &euro;3 Customs Duty on Low-Value Imports Takes Effect &mdash; Directly Targets Shein, Temu &amp; AliExpress Business Models</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          As of July 1, 2026, the European Union began enforcing a <strong>flat &euro;3 customs duty per product category</strong> on every low-value parcel (under &euro;150) imported from outside the bloc. A parcel with three different product types faces a &euro;9 charge. This closes a two-decade loophole that allowed nearly <strong>5.9 billion items &mdash; roughly 12 million parcels per day</strong> &mdash; to enter the EU duty-free in 2025. The measure is a direct strike at the consumer-to-manufacturer (C2M) model of Chinese ultra-fast-fashion platforms.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The &euro;3 levy acts as an <strong>effective ~10% tariff</strong> on a typical &euro;30 order, fundamentally disrupting the low-cost margin structure. Both Shein and Temu have <strong>dramatically reduced Google Shopping ad visibility in the EU</strong>, with Shein nearly exiting EU ad auctions entirely. The duty is explicitly temporary (July 2026&ndash;July 2028), after which the EU&rsquo;s permanent customs reform replaces it with <strong>standard product-category tariffs of 0&ndash;17%</strong> on all imports regardless of value. Platforms with EU-based warehouses can avoid the per-item duty on locally fulfilled orders.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Trade:</strong> Structurally shifts the competitive landscape in EU e-commerce. Chinese platforms face margin compression or reduced EU volumes. European domestic retailers benefit from reduced price undercutting. This is the opening salvo &mdash; permanent tariffs in 2028 will be even more impactful.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> ZAL.DE (Zalando &mdash; European e-commerce benefits from reduced Chinese competition) &bull; ITX.MC (Inditex/Zara &mdash; fast-fashion competitor) &bull; H&amp;M (European retail) &bull; AMZN (Amazon &mdash; EU fulfillment advantage)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> PDD (PDD Holdings/Temu &mdash; core EU growth strategy disrupted) &bull; BABA (Alibaba/AliExpress) &bull; KWEB (KraneShares China Internet ETF) &bull; SHEIN (pre-IPO valuation pressure)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: SOUTH AFRICA XENOPHOBIC CRISIS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Africa / Diplomacy / Political Risk &mdash; June 30&ndash;July 2</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">South Africa&rsquo;s Xenophobic Crisis Deepens &mdash; 900+ Arrested in Anti-Migrant Protests as Nigeria, Ghana &amp; Mozambique Escalate Diplomatic Confrontation</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          South African police arrested <strong>more than 900 people</strong> during nationwide anti-migrant protests on June 30, organized by a coalition of 20+ civil society groups who set an unofficial &ldquo;deadline&rdquo; for undocumented migrants to leave the country. Of <strong>120 marches held across South Africa</strong>, 108 were peaceful while 12 turned violent with looting and one person shot dead. The Western Cape recorded the highest arrests (215) followed by the Eastern Cape (208).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The crisis has escalated into a <strong>multi-nation diplomatic confrontation</strong>: Nigeria is documenting losses suffered by its nationals and seeking compensation, with <strong>632 Nigerians already repatriated</strong>; Ghana accused South Africa of killing one of its citizens; and Kenya, Malawi, Lesotho, Zimbabwe, and Mozambique have all issued <strong>travel warnings</strong>. The African Union and United Nations have condemned the violence. With unemployment above <strong>32%</strong>, the unrest signals deeper structural economic problems and threatens South Africa&rsquo;s role as the continent&rsquo;s largest economy.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Regional:</strong> South African rand under pressure from political instability and deteriorating foreign relations. FDI sentiment weakened. Potential trade retaliation from African trading partners threatens intra-continental commerce. Tourism sector at risk as multiple nations issue travel warnings.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> GLD (SPDR Gold &mdash; safe-haven) &bull; GFI (Gold Fields &mdash; gold price tailwind offsets SA risk) &bull; AU (AngloGold Ashanti &mdash; global operations hedge)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> EZA (iShares South Africa ETF &mdash; political instability, FDI risk) &bull; AFK (VanEck Africa Index ETF &mdash; regional tensions) &bull; NGE (Global X Nigeria ETF &mdash; repatriation costs) &bull; SBSW (Sibanye Stillwater &mdash; SA country risk premium)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: DAMASCUS CAFE BOMBING ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Middle East / Security / Syria &mdash; July 2</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">IED Bombing at Crowded Damascus Cafe Kills 9, Wounds 22 Near Palace of Justice &mdash; Worst Attack Since Assad&rsquo;s Fall</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          An improvised explosive device detonated inside a cafe on <strong>al-Nasser Street in Damascus&rsquo;s al-Marjah district</strong> at 3:24 PM local time on July 2, killing at least <strong>9 people and injuring 22</strong>. Security sources report that a person entered the cafe, placed the IED under a table, and left &mdash; possibly intending to reach the nearby <strong>Palace of Justice</strong> where trials of former Assad officials are underway. No group has claimed responsibility.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This is the <strong>most significant security incident in Damascus</strong> since President Ahmad al-Sharaa&rsquo;s forces toppled the Assad regime in December 2024, and the <strong>deadliest bombing since a suicide attack on a church last year</strong>. Analysts describe it as a major breach that underscores the fragility of Syria&rsquo;s post-war transition. The attack raises questions about reconstruction timelines, investor confidence in Syria&rsquo;s stabilization, and the capacity of the new government to secure its own capital.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Regional:</strong> Adds to the broader Middle East instability narrative alongside the Iran situation. Delays Syria reconstruction investment and increases security costs. Turkish contracting firms with Syria exposure face elevated risk. Contributes to geopolitical risk premium supporting gold and safe-haven assets.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> GLD (SPDR Gold &mdash; Middle East uncertainty supports safe-haven) &bull; LMT (Lockheed Martin &mdash; security spending) &bull; RTX (Raytheon &mdash; defense demand)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> TUR (iShares Turkey ETF &mdash; Syria reconstruction risk) &bull; GULF (WisdomTree Middle East Dividend) &bull; Syrian sovereign reconstruction bonds (delayed timeline)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: GLOBAL SEMICONDUCTOR CRASH ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Global / Technology / Markets &mdash; July 1&ndash;2</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Global Semiconductor Rout: SOXX Plunges 12.9% in 2 Days; Asian Chip Stocks Devastated &mdash; KOSPI &minus;7.9%, SK Hynix &minus;14.6%, Samsung &minus;9.1%</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The global semiconductor sector suffered its <strong>sharpest two-day decline since March 2025</strong>, with the iShares Semiconductor ETF (SOXX) plunging <strong>12.9%</strong> and the leveraged SOXL crashing <strong>16% in a single session</strong>. The selloff was triggered by <strong>Broadcom&rsquo;s (AVGO) disappointing AI chip sales guidance</strong>, which sent its shares down nearly 13%. The Philadelphia Semiconductor Index fell as much as 6% on Thursday before partially recovering.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The rout hit <strong>Asian markets hardest</strong>: South Korea&rsquo;s KOSPI dropped <strong>7.9%</strong>, with SK Hynix collapsing <strong>14.6%</strong> and Samsung Electronics losing <strong>9.1%</strong>. Taiwan&rsquo;s Taiex also plunged on TSMC-linked selling. Japan&rsquo;s Nikkei 225 was dragged down by chip-related names. Despite the carnage, SOXX remains up <strong>82% year-to-date</strong> &mdash; this is violent profit-taking after the strongest H1 semiconductor run in memory, not a fundamental breakdown. The Dow Jones paradoxically hit an <strong>all-time high above 52,900</strong> as investors rotated from growth/tech into cyclicals, amplified by weak US jobs data repricing the Fed path.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Tech/Semis:</strong> Massive growth-to-value rotation underway. Weak US jobs data (57K vs 115K expected) collapsed Fed September hike probability below 50%, benefiting rate-sensitive sectors. Asian markets bore the brunt as the rout hit during their trading hours. Dow at all-time highs while Nasdaq struggles &mdash; a rare divergence signaling regime change in market leadership.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> IWM (Russell 2000 &mdash; small-caps benefit from rate repricing) &bull; TLT (20+ Year Treasury &mdash; bond rally on dovish shift) &bull; GLD (Gold &mdash; $4,100+ on weaker dollar) &bull; EEM (EM ETF &mdash; dollar weakness) &bull; DIA (Dow Jones ETF &mdash; record highs)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> SOXX (iShares Semiconductor &mdash; &minus;12.9% in 2 days) &bull; SOXL (3x Semi Bull &mdash; &minus;16% single day) &bull; AVGO (Broadcom &mdash; &minus;13%, guidance miss) &bull; 000660.KS (SK Hynix &mdash; &minus;14.6%) &bull; 005930.KS (Samsung &mdash; &minus;9.1%) &bull; EWY (iShares South Korea ETF &mdash; KOSPI &minus;7.9%)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The great rotation is here.</strong> The Dow hitting all-time highs while semiconductors suffer their worst two-day rout since March 2025 is a textbook growth-to-value regime shift. Weak US jobs data (57K vs 115K expected) killed the September rate hike, making rate-sensitive cyclicals, small-caps (IWM), and bonds (TLT) the beneficiaries. If you&rsquo;re overweight mega-cap tech, consider trimming &mdash; this is profit-taking from an 82% YTD run, and the rotation has room to run.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Oil&rsquo;s peace dividend is real but fragile.</strong> Brent at $70.60 reflects genuine progress on Hormuz reopening, but the mid-August toll deadline is a ticking bomb. Iran insisting on transit fees while VP Vance calls it &ldquo;unacceptable&rdquo; sets up a binary outcome. Energy shorts work until they don&rsquo;t &mdash; the asymmetry favors holding some call protection on crude. India (INDA) and other net importers are the clearest beneficiaries of falling oil.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Europe is reshoring its trade defenses.</strong> The EU&rsquo;s &euro;3 customs duty is the opening move &mdash; permanent 0&ndash;17% tariffs arrive in 2028. PDD (Temu) and BABA (AliExpress) face structural margin compression in their fastest-growing international market. European domestic retailers (Zalando, Inditex) are the mirror beneficiaries. This is a multi-year theme, not a one-day trade.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Gold is the thread connecting everything.</strong> At $4,100+ and climbing, gold benefits from Middle East instability (Iran, Syria), geopolitical fragmentation (South Africa), and now a dovish Fed repricing. GLD is the multi-catalyst safe-haven play of this cycle.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; July 2, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Dow Jones</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">~52,900 (+0.46%, all-time high)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+0.49%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq Composite</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">+0.40% (lagging on chip rout)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">KOSPI (South Korea)</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">&minus;7.9% (SK Hynix &minus;14.6%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nifty 50 (India)</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">24,130 (+0.52%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">STOXX 600 (Europe)</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">Down (AI stock selloff)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">SOXX (Semiconductors)</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">&minus;12.9% over 2 days</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$70.60/bbl (&minus;1.36%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">WTI Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$67.59/bbl (&minus;1.44%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Gold</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">$4,100+/oz (+2.18%)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">US Markets</td>
          <td style="color: #888; text-align: right; padding: 6px 0;">Closed Fri Jul 3 (July 4 holiday)</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; CBS News &bull; NBC News &bull; Bloomberg &bull; Reuters &bull; CNBC &bull; Euronews &bull; France 24 &bull; Washington Post &bull; TheStreet &bull; Benzinga &bull; Yahoo Finance &bull; South China Morning Post &bull; Al-Monitor &bull; Rappler &bull; RFERL &bull; EU Council &bull; TechTimes &bull; Human Rights Watch &bull; World Weather Attribution &bull; WMO &bull; OkayAfrica
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only and does not constitute financial advice. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR GENERAL DISTRIBUTION
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #7c3aed; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

import { execSync } from 'node:child_process';

const useTestingMode = RESEND_KEY && !process.env.RESEND_DOMAIN_VERIFIED;
const recipients = useTestingMode ? TESTING_RECIPIENTS : RECIPIENTS;

const payload = JSON.stringify({
  from: 'World Monitor <onboarding@resend.dev>',
  to: recipients,
  subject: `[World Monitor] Global Daily Intelligence Briefing — ${today}`,
  html,
});

try {
  const result = execSync(
    `curl -s -w "\\n%{http_code}" --connect-timeout 30 -X POST https://api.resend.com/emails ` +
    `-H "Content-Type: application/json" ` +
    `-H "Authorization: Bearer ${RESEND_KEY}" ` +
    `-d @-`,
    { input: payload, encoding: 'utf8', timeout: 60000 },
  );
  const lines = result.trim().split('\n');
  const httpCode = lines.pop();
  const body = lines.join('\n');

  if (!httpCode.startsWith('2')) {
    console.error(`Resend API error ${httpCode}: ${body}`);
    process.exit(1);
  }

  const data = JSON.parse(body);
  console.log(`Email sent successfully to ${recipients.join(', ')}`);
  console.log('Resend ID:', data.id);
  if (useTestingMode) {
    console.log('\nNote: Sent in testing mode to verified email only.');
    console.log(`Target recipients (requires verified domain): ${RECIPIENTS.join(', ')}`);
  }
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
