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

    <!-- ===================== EVENT 1: KOSPI CRASH ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">East Asia / Markets / Semiconductors &mdash; June 23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">South Korea&rsquo;s KOSPI Crashes ~10%, Triggering Circuit Breakers Twice in Worst Session Since 2020</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          South Korea&rsquo;s benchmark <strong>KOSPI index plunged 9.99% (910 points)</strong> to close at 8,203, triggering market-wide <strong>circuit breakers that halted trading twice</strong> in a single session. Samsung Electronics fell 12.3% and SK Hynix dropped 12.5% as foreign investors dumped <strong>5.79 trillion won (~$3.8 billion)</strong> in shares.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Three catalysts converged: the overnight <strong>U.S. tech selloff</strong>, <strong>MSCI&rsquo;s decision to exclude South Korea</strong> from its Developed Markets index review, and a violent unwinding of leveraged AI-related positions. Despite the crash, the KOSPI remains up ~78% year-to-date after tripling over the past year &mdash; raising the question of whether this is a healthy correction or the start of a deeper unwind.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Contagion event for global semiconductors and AI-linked equities.</strong> Expect continued volatility in chip stocks globally, pressure on Asian currencies (Korean won weakened significantly), and a rotation out of momentum/growth into value/small-cap names. The Russell 2000 hit a record above 3,000 as capital fled mega-cap tech.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Samsung Electronics (005930.KS, -12.3%) &bull; SK Hynix (000660.KS, -12.5%) &bull; NVIDIA (NVDA, -4.1%) &bull; EWY (iShares Korea ETF) &bull; SOXX / SMH (semiconductor ETFs, -6.5%)<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> IWM (Russell 2000 ETF &mdash; record high on rotation) &bull; Defensive sectors (utilities, healthcare)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: IRAN OIL SANCTIONS LIFTED ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Middle East / Geopolitics / Energy &mdash; June 23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Washington Grants Iran 60-Day Oil Sanctions Waiver as Strait of Hormuz Reopens; Brent Crude Slides to 3-Month Low</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The U.S. Treasury issued a <strong>60-day sanctions waiver</strong> allowing the production, delivery, and sale of Iranian oil &mdash; a key condition of the June 17 memorandum of understanding between Tehran and Washington. VP JD Vance called the first day of formal negotiations in Switzerland <strong>&ldquo;very, very good,&rdquo;</strong> though Iran disputes Vance&rsquo;s claim that Tehran agreed to allow IAEA nuclear inspectors to return.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A deconfliction cell was established for the <strong>Strait of Hormuz</strong>, and Iran has shipped <strong>over 30 million barrels</strong> in the past week alone. <strong>Brent crude dropped to $77.2/barrel</strong>, its lowest in nearly three months. However, Lebanon&rsquo;s Hezbollah insists on <strong>full Israeli withdrawal</strong> from southern Lebanon, and Iran briefly re-closed the Strait over Israel-Hezbollah fighting &mdash; underscoring how fragile this peace framework remains.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent crude fell to $77.2 (-3.5%), WTI to ~$73.4. The return of Iranian supply (potentially 1.5&ndash;2M bbl/day) is <strong>structurally bearish</strong> for oil. Lower energy costs are disinflationary &mdash; positive for bonds and rate-sensitive sectors, negative for energy producers. Gulf state fiscal positions face pressure if oil stays below $80.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> XOM (ExxonMobil &mdash; compressed margins) &bull; BP (at-risk war-era gains) &bull; COP (ConocoPhillips) &bull; XLE (Energy Select Sector ETF) &bull; PetroChina (0857.HK)<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> UAL, DAL, AAL (airlines &mdash; lower fuel costs) &bull; Consumer discretionary (inflation relief) &bull; TLT (long bonds benefit from disinflation)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: UK PM STARMER RESIGNS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Europe / Politics / Currencies &mdash; June 22&ndash;23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">UK Prime Minister Keir Starmer Resigns; Andy Burnham Tipped as Britain&rsquo;s Seventh Leader in a Decade</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Less than two years after winning a landslide election that promised to end political chaos, <strong>Keir Starmer announced his resignation</strong> on June 22. Months of pressure from Labour MPs, dismal council election results in May, and the rapid rise of <strong>Reform UK</strong> made his position untenable. Britain will soon have its <strong>seventh prime minister in ten years</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Andy Burnham</strong>, former Mayor of Greater Manchester, surged to <strong>97% probability on Polymarket</strong> as the next PM after winning the Makerfield by-election with 54.8% of the vote. Nominations open July 9, with a new leader expected by September. The pound weakened to <strong>~$1.319</strong> and 86.76p/EUR, though analysts noted the transition was &ldquo;well anticipated and largely priced.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>GBP/USD:</strong> Pound weakened to ~$1.319. Gilt markets cautiously stable &mdash; investors focused on fiscal credibility over political identity. FTSE 100 relatively insulated due to heavy international earner weighting. Risk: a protracted leadership contest or Burnham pivoting toward higher spending could widen gilt spreads.<br/><br/>
            <strong style="color: #ef4444;">&#9660; SLIGHT DOWN:</strong> EWU (iShares UK ETF &mdash; political uncertainty drag) &bull; Barclays (BARC.L / BCS &mdash; sensitive to gilt yield volatility) &bull; UK domestic banks broadly<br/>
            <strong style="color: #22c55e;">&#9650; NEUTRAL/UP:</strong> Unilever (ULVR.L / UL &mdash; weaker pound boosts overseas earnings) &bull; Shell (SHEL.L &mdash; dollar-denominated revenue)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: EUROPE HEATWAVE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Europe / Climate / Energy &mdash; June 22&ndash;23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Deadly Heatwave Shatters Records Across Europe &mdash; France Records Hottest Day in History, 40 Drowning Deaths, Blackouts in Italy</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          An exceptional &ldquo;heat dome&rdquo; pushed temperatures <strong>14&ndash;18&deg;C above normal</strong> across Europe. France recorded its <strong>hottest day in history</strong>, with readings exceeding 40&deg;C in multiple cities. At least <strong>40 people drowned</strong> seeking relief in unsupervised swimming areas. Italy issued its highest-level heat alert for 15 cities, Turin experienced blackouts from grid strain, and Spain&rsquo;s San Sebasti&aacute;n hit 40&deg;C &mdash; double its June average.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          European <strong>day-ahead power prices surged 2&ndash;3x</strong> in affected regions, though record solar generation (50 GW in Germany alone) partially offset grid strain. Agricultural commodities face crop stress across southern Europe. The <strong>ECB estimates heat-related shocks generate stagflationary pressures</strong> &mdash; inflation rising alongside reduced economic output &mdash; with annual tax revenue losses of up to 1.8% in France.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Power &amp; Commodities:</strong> European power prices spiked 2&ndash;3x. Wheat futures under pressure from crop stress in southern France, Spain, Italy. Tourism revenue may shift as Mediterranean destinations become dangerously hot. Insurers face elevated claims from deaths, infrastructure damage, and wildfire risk.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> Enel (ENEL.MI &mdash; Europe&rsquo;s largest utility, benefits from surging power prices + solar capacity) &bull; Enphase (ENPH), SolarEdge (SEDG) &mdash; solar demand narrative &bull; European renewable energy ETFs<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Munich Re (MUV2.DE &mdash; rising reinsurance claims) &bull; European agricultural stocks &bull; Tourism-dependent equities in southern Europe
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: GLOBAL AI SELLOFF ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Global / Technology / Semiconductors &mdash; June 23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">AI Bubble Fears Intensify as Nasdaq Drops 2.2% &mdash; Micron Crashes 13%, Alphabet Falls 5% in Global Semiconductor Rout</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Wall Street&rsquo;s AI trade unraveled for a second consecutive day as the <strong>Nasdaq shed 580 points (-2.21%)</strong> to 25,587. <strong>Micron plunged 13%</strong> ahead of Wednesday earnings, Alphabet fell 5%, AMD dropped 5.8%, and NVIDIA slid 4.1%. The <strong>VanEck Semiconductor ETF (SMH) dropped 6.5%</strong>. NPR openly asked whether AI is &ldquo;one big bubble.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The catalyst was not a single event but a <strong>convergence</strong>: hawkish Fed signals (year-end rate projection raised to 3.8%), <strong>Bank of America&rsquo;s rate hike warning note</strong>, mounting skepticism about hyperscalers&rsquo; debt-funded AI spending, and the KOSPI crash amplifying global risk-off sentiment. The S&amp;P 500 fell 1.44% to 7,365 while the Dow held relatively flat at -0.09%. <strong>Micron&rsquo;s Wednesday earnings</strong> are now the most important near-term catalyst for the entire sector.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Indices:</strong> S&amp;P 500 -1.44% (7,365), Nasdaq -2.21% (25,587), Dow -0.09% (51,665). This is the most significant test of the AI narrative since the trade began. Money is rotating into the Russell 2000 (record 3,000+). If Micron&rsquo;s Wednesday earnings disappoint, expect a multi-week correction.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> MU (Micron, -13% &mdash; pivotal earnings Wednesday) &bull; GOOGL (Alphabet, -5%) &bull; AMD (-5.8%) &bull; NVDA (NVIDIA, -4.1%) &bull; SMH (VanEck Semi ETF, -6.5%) &bull; MRVL (Marvell) &bull; AVGO (Broadcom)<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> IWM (Russell 2000 ETF &mdash; record high) &bull; XLU (Utilities Select &mdash; defensive rotation) &bull; TLT (long bonds &mdash; risk-off bid)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Great Rotation is accelerating.</strong> Capital is fleeing mega-cap AI/tech at historic velocity &mdash; KOSPI circuit breakers, Nasdaq down 2.2%, $1.3T+ wiped from semiconductors. Meanwhile, the Russell 2000 hit a record above 3,000. This isn&rsquo;t just profit-taking; it&rsquo;s a structural reassessment of the AI trade. Micron&rsquo;s Wednesday earnings are the make-or-break catalyst.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Geopolitical de-escalation is reshaping commodities.</strong> Iran&rsquo;s 60-day sanctions waiver and Hormuz reopening are structurally bearish for oil &mdash; Brent at $77 vs. $96+ just weeks ago. This is massively disinflationary. Airlines, consumer discretionary, and long bonds are the beneficiaries. Energy longs face a fundamental re-rating. But the fragile ceasefire (Hezbollah&rsquo;s withdrawal demands, nuclear inspection disputes) means tail risk remains.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Europe is under dual pressure.</strong> Political instability in the UK (PM #7 in a decade) adds currency risk, while the unprecedented heatwave is creating stagflationary pressures across the continent. Renewable energy producers and utilities are the clear winners; insurers and agriculture face headwinds. Watch Enel and Munich Re as barometers.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 23, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">7,365.47 (-1.44%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">25,587.04 (-2.21%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Dow Jones</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">51,665.49 (-0.09%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">KOSPI</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">8,203 (-9.99%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Russell 2000</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">3,000+ (Record High)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Brent Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$77.20 (-3.5%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">WTI Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$73.40 (-3.2%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">GBP/USD</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$1.319 (Weakened)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">SMH (Semiconductor ETF)</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">$625.62 (-6.5%)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Fed Funds Target</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">3.50%&ndash;3.75% (Held)</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Bloomberg &bull; CNBC &bull; Al Jazeera &bull; TheStreet &bull; Yahoo Finance &bull; Reuters &bull; NPR &bull; CNN &bull; France 24 &bull; Euronews &bull; CBS News &bull; Trading Economics &bull; PBS News &bull; IndexBox &bull; Business Standard &bull; BBC &bull; Investtech &bull; 24/7 Wall St &bull; Intellectia &bull; City National
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
