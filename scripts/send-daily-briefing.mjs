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
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Defense &bull; Energy &bull; Elections &bull; Biotech &bull; Financial Markets</p>
    </div>

    <!-- ===================== EVENT 1: ISRAEL-LEBANON ESCALATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Israel-Lebanon / Military Escalation &mdash; May 31</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Israel Seizes Beaufort Castle, Crosses Litani River in Deepest Lebanon Incursion in 26 Years</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Israeli Golani Brigade troops captured the <strong>12th-century Beaufort Castle</strong> &mdash; a commanding hilltop fortress 700 metres above sea level overlooking the Litani River &mdash; and raised the Israeli flag. Prime Minister <strong>Netanyahu ordered forces to &ldquo;deepen and expand&rdquo;</strong> their hold on areas previously controlled by Hezbollah, and Defense Minister <strong>Katz confirmed troops will remain permanently</strong> as part of a southern Lebanon security zone.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Israeli forces have <strong>crossed the Litani River</strong> &mdash; far beyond the UN-designated boundary &mdash; leaving a trail of destroyed villages in the deepest incursion since the 2006 war. This effectively nullifies the <strong>April ceasefire</strong> mediated by Washington. <strong>Egypt condemned the move as &ldquo;blatant aggression.&rdquo;</strong> Hezbollah reported conducting <strong>22 attacks against Israeli positions</strong> in the preceding 24 hours, including FPV drone strikes. Over <strong>1.2 million displaced</strong> and more than <strong>3,300 killed</strong> according to Lebanese authorities. Israel appears to be racing to inflict maximum damage before any Iran deal constrains operations.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Defense stocks surge:</strong> <strong>LMT</strong> (Lockheed Martin) received a $4.76B PAC-3 contract in April; <strong>RTX</strong> (Raytheon) is up 110% since March 2023 with $5.36B in LTAMDS contracts; <strong>NOC</strong> (Northrop Grumman). Israeli firm <strong>ESLT</strong> (Elbit Systems) benefits directly. Over <strong>$21.5B in Foreign Military Sales</strong> greenlit for the Middle East in Q1 2026. Israel&rsquo;s defense budget is up 65% to $46.5B. Oil maintains a regional risk premium. <strong>Bearish for:</strong> <strong>EIS</strong> (iShares MSCI Israel ETF), regional airlines, Lebanese sovereign bonds. Defense ETFs <strong>ITA</strong>, <strong>XAR</strong>, and <strong>SHLD</strong> remain strong buys on continued conflict.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: IRAN DEAL / OIL MARKETS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Iran / Strait of Hormuz / Global Energy &mdash; May 29&ndash;31</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran Ceasefire Deal in Limbo &mdash; Oil Posts Biggest Monthly Drop in Six Years as Brent Falls 19%</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Negotiators reached a <strong>60-day memorandum of understanding</strong> to pause the three-month-old war, reopen the <strong>Strait of Hormuz</strong> to unrestricted shipping, and require Iran to remove all mines within 30 days. In exchange, the U.S. would lift its port blockade and issue sanctions waivers. However, <strong>Trump left a White House Situation Room meeting without announcing approval</strong>. Iran&rsquo;s state media disputed key terms, insisting the nuclear issue &ldquo;was not part of the preliminary agreement.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Strait of Hormuz normally carries <strong>~20% of global energy supply (~20 million barrels/day)</strong> and remains effectively closed. <strong>Brent crude has dropped ~19% in May to $92.56</strong> on deal optimism &mdash; the largest monthly decline in six years. But it surged 3%+ on May 26 after Iran vowed retaliation. Analysts forecast oil stays in the <strong>$90&ndash;$100 range</strong> until clarity emerges. Deal collapse sends crude above $120; deal signing could push it toward $75.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>This is the single largest variable for global markets entering June.</strong> Energy sector (<strong>XLE</strong>) led all S&amp;P 500 sectors in 2026, up 30.3% YTD, but faces rapid mean-reversion if Hormuz reopens. <strong>If deal signed:</strong> Bearish for <strong>XOM</strong>, <strong>CVX</strong>, <strong>COP</strong>, <strong>OXY</strong>, <strong>SHEL</strong>, <strong>BP</strong>. Bullish for airlines (<strong>DAL</strong>, <strong>UAL</strong>, <strong>IAG.L</strong>), consumer discretionary (<strong>XLY</strong>), and emerging markets. <strong>If deal collapses:</strong> Oil spikes above $120 &mdash; tanker stocks <strong>FRO</strong> (Frontline), <strong>STNG</strong> (Scorpio Tankers) whipsaw. Defense stocks (<strong>LMT</strong>, <strong>RTX</strong>) jump; European defense (<strong>RHM.DE</strong>, <strong>LDO.MI</strong>) which fell 3&ndash;5% on deal hopes would reverse. 10-year Treasury yield dropped 11 bps last week on deal optimism &mdash; reversal would hit growth stocks.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: RUSSIA-UKRAINE ESCALATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Russia-Ukraine / Europe / Military Escalation &mdash; May 30&ndash;31</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Zelenskyy Warns Russia Preparing &ldquo;Massive&rdquo; New Attack After Oreshnik Hypersonic Missile Strikes on Kyiv</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Ukrainian President <strong>Zelenskyy warned on May 30</strong> that intelligence indicates Russia is preparing a new <strong>&ldquo;massive&rdquo; attack</strong>. This follows a devastating bombardment on May 24 &mdash; one of the heaviest since the war began &mdash; involving <strong>90 missiles (including the nuclear-capable Oreshnik hypersonic ballistic missile) and 600 strike drones</strong> targeting the Kyiv region. Four were killed and over 80 wounded. It was the <strong>third time Russia deployed the Oreshnik</strong>, which can hit targets 3,500 miles away.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Russia&rsquo;s Foreign Ministry had warned foreign nationals to leave Kyiv, signaling plans for <strong>&ldquo;systematic strikes&rdquo; on decision-making centres</strong>. In a <strong>May 31 CBS interview</strong>, Zelenskyy said Russia has been at a territorial standstill since December 2025 and Ukraine has a <strong>six-month negotiation window</strong>, expressing hope that U.S. envoys Witkoff and Kushner would visit Kyiv. <strong>Romania expelled the Russian consul</strong> in Constan&#539;a, and European intelligence agencies report Russia is taking &ldquo;more operational risks&rdquo; across the continent.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>European defense is the clearest trade.</strong> <strong>RHM.DE</strong> (Rheinmetall), <strong>BA.L</strong> (BAE Systems), <strong>LDO.MI</strong> (Leonardo), <strong>HO.PA</strong> (Thales), and <strong>SAAB-B.ST</strong> (Saab) all benefit from accelerating European rearmament budgets. European natural gas futures (<strong>TTF</strong>) and <strong>EQNR</strong> (Equinor) rise on supply disruption fears. <strong>Grain commodities</strong> &mdash; wheat futures and <strong>DBA</strong> (Invesco DB Agriculture Fund) &mdash; spike on any escalation threatening Ukraine&rsquo;s export corridors. <strong>Bearish for:</strong> <strong>VGK</strong> (Vanguard FTSE Europe ETF) and <strong>EZU</strong> (iShares Eurozone ETF) as war risk and a potential ECB June rate hike create headwinds for European equities. Safe havens <strong>GLD</strong> (gold) and <strong>TLT</strong> (Treasuries) benefit.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: COLOMBIA PRESIDENTIAL ELECTION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Latin America / Colombia / Presidential Election &mdash; May 31</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Colombia Votes Today &mdash; First-Round Results Point to Runoff Between Left-Wing Cepeda and Right-Wing De la Espriella</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Colombians are voting today in the <strong>first round of their presidential election</strong> to replace incumbent leftist President <strong>Gustavo Petro</strong>, who is constitutionally barred from running again. With <strong>71% of votes counted</strong>, results point to a runoff on <strong>June 21</strong> between three main contenders: left-wing Senator <strong>Iv&aacute;n Cepeda</strong> (Pacto Hist&oacute;rico, ~44.6% in polls), far-right outsider <strong>Abelardo de la Espriella</strong> (~31.6%), and centre-right Senator <strong>Paloma Valencia</strong> (~14%).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Prediction markets assign a <strong>64% probability to De la Espriella winning</strong> the eventual presidency. Neither candidate appears likely to clear the 50% threshold needed to avoid a runoff. The election is a referendum on <strong>Petro&rsquo;s leftist reform agenda</strong> and has major implications for Colombia&rsquo;s energy, mining, and fiscal policies. Violence and corruption are the top voter concerns. Colombian equities trade at a <strong>deeply discounted P/E of 7.9</strong>, making this election a potential catalyst.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>This is the most significant emerging market political event this week.</strong> <strong>If De la Espriella (right-wing) wins:</strong> Bullish for <strong>CIB</strong> (Bancolombia ADR), <strong>EC</strong> (Ecopetrol ADR), and <strong>ICOL</strong> (iShares MSCI Colombia ETF) &mdash; markets expect fiscal conservatism and business-friendly policies. Colombian peso (COP) strengthens. <strong>If Cepeda (left-wing) wins:</strong> Bearish for <strong>EC</strong> (Ecopetrol) as he may restrict new oil exploration; capital outflows, peso weakness, and regulatory headwinds for extractive industries. <strong>Broader EM impact:</strong> <strong>ILF</strong> (iShares Latin America 40 ETF), <strong>EEM</strong> (iShares Emerging Markets), and <strong>VWO</strong> (Vanguard EM) see sentiment spillover. At a P/E of 7.9, Colombian stocks are a deep-value play if political risk clears.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: PANCREATIC CANCER BREAKTHROUGH ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Global Health / Biotech / ASCO 2026 &mdash; May 30&ndash;31</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Revolution Medicines&rsquo; Pancreatic Cancer Pill Nearly Doubles Survival &mdash; Presented at ASCO Plenary Session</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Revolution Medicines (RVMD)</strong> presented Phase 3 results for <strong>daraxonrasib</strong> at the American Society of Clinical Oncology annual meeting, simultaneously published in the <strong>New England Journal of Medicine</strong>. The oral KRAS inhibitor <strong>nearly doubled median overall survival</strong> in advanced pancreatic cancer &mdash; <strong>13.2 months vs. 6.7 months</strong> for chemotherapy &mdash; cutting the risk of death by <strong>60%</strong>. All primary and secondary endpoints were met.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Pancreatic cancer has a 5-year survival rate below 13% and is the <strong>7th leading cause of cancer death globally</strong>. KRAS mutations drive over 90% of cases but had eluded treatment for decades until now. The FDA granted <strong>Breakthrough Therapy designation</strong> and selected daraxonrasib for its National Priority Voucher program. Revolution Medicines is already <strong>shipping the drug to patients</strong> under an early access program. RVMD shares are up <strong>~274% over the past year</strong>. The company is widely viewed as a <strong>major acquisition target</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>The most significant oncology breakthrough of 2026 and a potential blockbuster M&amp;A catalyst.</strong> <strong>RVMD</strong> (Revolution Medicines) is the primary play &mdash; up 274% YoY with acquisition speculation intensifying. Likely acquirers: <strong>LLY</strong> (Eli Lilly), <strong>MRK</strong> (Merck), <strong>BMY</strong> (Bristol-Myers Squibb), <strong>AZN</strong> (AstraZeneca), <strong>RHHBY</strong> (Roche) &mdash; all have oncology pipelines that benefit from a KRAS franchise. Competitor <strong>ERAS</strong> (Erasca) benefits from sector enthusiasm for KRAS therapies. Broader <strong>XBI</strong> (SPDR S&amp;P Biotech ETF), <strong>IBB</strong> (iShares Biotech ETF), and <strong>ARKG</strong> (ARK Genomic Revolution ETF) get tailwinds. <strong>XLV</strong> (Health Care Select SPDR) sees positive sentiment. Standard-of-care shift away from traditional chemo.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What Markets Are Pricing</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Iran deal is the single biggest binary event for global markets.</strong> Brent crude has swung 19% on deal speculation alone. A signed MOU crushes energy stocks and lifts everything else; a collapse reverses the trade. The S&amp;P 500 closed at a record 7,580 and the Dow broke 51,000 for the first time last week, but June is historically the worst month for stocks in a midterm year &mdash; fragile ground for nine consecutive weekly gains.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Geopolitical risk is multi-front and escalating simultaneously.</strong> Israel&rsquo;s deepest Lebanon incursion in 26 years, Russia&rsquo;s threatened massive attack on Kyiv with hypersonic weapons, and Colombia&rsquo;s pivotal election all inject volatility. Defense stocks (<strong>LMT, RTX, NOC, RHM.DE, BA.L</strong>) remain the consensus hedge across all three theatres. The correlation of geopolitical shocks means &ldquo;diversified&rdquo; portfolios may be less diversified than they appear.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Biotech is the bright spot.</strong> Revolution Medicines&rsquo; pancreatic cancer breakthrough could trigger the biggest pharma M&amp;A event of 2026. The KRAS inhibitor class is now validated at the Phase 3 level with NEJM publication &mdash; expect capital rotation into precision oncology. Watch <strong>RVMD</strong>, <strong>ERAS</strong>, and <strong>XBI</strong>.
      </p>
    </div>

    <!-- ===================== STOCKS WATCHLIST ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Stocks &amp; ETFs to Watch This Week</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 8px 0; font-weight: 700; width: 80px;">BULLISH</td>
          <td style="color: #22c55e; padding: 8px 0;">LMT, RTX, NOC, ESLT, RHM.DE, BA.L, RVMD, ERAS, XBI, GLD, ITA, DBA</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 8px 0; font-weight: 700;">BEARISH</td>
          <td style="color: #ef4444; padding: 8px 0;">VGK, EZU, EIS (if Lebanon escalates), EC (if Cepeda wins Colombia)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 8px 0; font-weight: 700;">BINARY</td>
          <td style="color: #eab308; padding: 8px 0;">XOM, CVX, SHEL, BP (oil direction) &bull; DAL, UAL, IAG.L (inverse oil) &bull; CIB, ICOL (Colombia election) &bull; FRO, STNG (tanker routes)</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        NPR &bull; CNN &bull; Axios &bull; CNBC &bull; Al Jazeera &bull; Bloomberg &bull; France 24 &bull; Euronews &bull; CBS News &bull; Meduza &bull; Times of Israel &bull; Daily News Egypt &bull; STAT News &bull; Washington Post &bull; New England Journal of Medicine &bull; ColombiaOne &bull; AS/COA &bull; BioPharma Dive &bull; Sportico &bull; Time
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Sources verified across multiple outlets.<br/>
        NOT FINANCIAL ADVICE // FOR GENERAL DISTRIBUTION
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #7c3aed; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

import { execSync } from 'node:child_process';

const payload = JSON.stringify({
  from: 'World Monitor <onboarding@resend.dev>',
  to: RECIPIENTS,
  subject: `[World Monitor] Global Daily Briefing — ${today}`,
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
  console.log(`Email sent successfully to ${RECIPIENTS.join(', ')}`);
  console.log('Resend ID:', data.id);
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
