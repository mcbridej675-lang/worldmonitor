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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Markets &bull; Regulation &bull; Trade Impact</p>
    </div>

    <!-- MARKET SNAPSHOT -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; April 30, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">S&P 500</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">7,209.01 (All-Time High)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Dow Jones</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">49,652.14 (+1.62%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Nasdaq</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">24,892.31 (+0.89%, Record Close)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Nikkei 225</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">59,284.92 (-1.06%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Hang Seng</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">Down 1.27%</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Brent Crude</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">$118/bbl (+6%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px;">TTF Natural Gas</td>
          <td style="padding: 6px 0; color: #ea580c; font-size: 12px; font-weight: 700; text-align: right;">&euro;47/MWh</td>
        </tr>
      </table>
    </div>

    <!-- EVENT 1: Gaza Flotilla -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Humanitarian &mdash; Apr 30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Israel Seizes Gaza-Bound Aid Flotilla in International Waters &mdash; 175 Activists Detained</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Israeli naval forces intercepted <strong>22 vessels</strong> of the Global Sumud Flotilla more than <strong>600 nautical miles from Gaza</strong>, near the Greek island of Crete. Approximately <strong>175 crew members were detained</strong> as drones, communications jamming technology, and armed raiding parties halted the humanitarian fleet in international waters. The flotilla was carrying food and medical supplies intended to break Israel&rsquo;s blockade of Gaza.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Turkey condemned the seizure as <strong>&ldquo;an act of piracy.&rdquo;</strong> Spain&rsquo;s PM Pedro S&aacute;nchez called it illegal, stating <strong>&ldquo;Israel is once again violating international law by attacking a civilian flotilla in waters that do not belong to it.&rdquo;</strong> Amnesty International called it a &ldquo;brazen interception.&rdquo; Israel&rsquo;s Foreign Minister said detained activists would be taken to Greece.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Escalates geopolitical risk premiums in energy markets. <strong>Brent crude already at $118/bbl</strong> remains elevated amid broader Middle East instability. Defense stocks (<strong>Elbit Systems [ESLT], Rafael via Israel Aerospace Industries, BAE Systems [BA.L]</strong>) see continued demand. Shipping and logistics firms with Mediterranean exposure face heightened insurance costs. Turkish equities and lira could face volatility if Ankara escalates diplomatic response. Watch <strong>ZIM Integrated Shipping [ZIM]</strong> and <strong>Frontline [FRO]</strong> for shipping rate impacts.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 2: South Korea Yoon Sentence -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Asia-Pacific / Political &mdash; Apr 30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">South Korea: Appeals Court Sentences Ex-President Yoon Suk Yeol to 7 Years &mdash; On Top of Life Sentence</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Seoul High Court increased former President Yoon Suk Yeol&rsquo;s sentence to <strong>7 years</strong> for obstructing justice, up from a previous 5-year term. The court reversed an earlier partial acquittal, finding him <strong>guilty on all counts</strong> including resisting arrest and illegally bypassing a Cabinet meeting before his brief imposition of martial law in December 2024. This sentence is <strong>in addition to a life sentence</strong> he already received on rebellion charges.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Separately, prosecutors have requested a <strong>30-year prison term</strong> in another trial over allegations Yoon ordered drone flights over Pyongyang to create justifiable conditions for martial law. His legal team has announced an appeal to the Supreme Court. The political crisis stemming from his December 2024 martial law attempt remains <strong>the most serious challenge to South Korean democracy in decades</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The legal resolution provides political clarity, which markets generally welcome. The <strong>KOSPI</strong> may see modest relief as institutional uncertainty fades. <strong>Samsung Electronics [005930.KS]</strong>, <strong>SK Hynix [000660.KS]</strong>, and <strong>Hyundai Motor [005380.KS]</strong> are bellwethers for Korean political stability sentiment. The Korean won (KRW) could strengthen slightly against the dollar as the country moves past constitutional crisis. Watch <strong>iShares MSCI South Korea ETF [EWY]</strong> for broader index exposure.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 3: EU vs Meta -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Europe / Tech Regulation &mdash; Apr 29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">EU Accuses Meta of Failing to Protect Minors on Facebook &amp; Instagram &mdash; Fines Up to 6% of Revenue</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The European Commission formally accused <strong>Meta Platforms</strong> of violating the Digital Services Act (DSA) by failing to prevent children under 13 from accessing Facebook and Instagram. Key findings: minors can <strong>input false birthdates with no verification</strong>, the reporting tool for minor accounts requires <strong>up to 7 clicks</strong> to access, and Meta is inadequately assessing risks of children being exposed to age-inappropriate content.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Separately, <strong>Australia announced plans to tax Meta, Google, and TikTok</strong> a proportion of their revenue to fund news journalism, with draft legislation expected by July. This compounds the global regulatory tightening on Big Tech, with the EU&rsquo;s DSA enforcement representing the most consequential regulatory action. Violations can result in <strong>fines of up to 6% of worldwide annual revenue</strong> &mdash; potentially billions of dollars for Meta.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Meta Platforms [META]</strong> faces potential fines exceeding $8B based on 2025 revenue. This creates a regulatory overhang that could pressure shares and drag the broader tech sector. <strong>Alphabet [GOOGL]</strong> and <strong>TikTok parent ByteDance</strong> (private) face similar DSA scrutiny. Australia&rsquo;s proposed revenue tax adds another cost layer. Regulatory compliance spending will increase across the sector &mdash; watch <strong>Snap [SNAP]</strong>, <strong>Pinterest [PINS]</strong>, and other social platforms for contagion effects. Age-verification tech companies are potential beneficiaries.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 4: Iran War / Oil Blockade -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Global / Energy &amp; Security &mdash; Apr 29&ndash;30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran Blockade Enters Third Week &mdash; Pentagon Reveals $25B War Cost; Brent Crude Surges to $118</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Day 61 of the conflict in the Middle East. Top Pentagon officials testified before Congress for the first time since Operation Epic Fury began, revealing the war has cost approximately <strong>$25 billion</strong>. The two-week-old naval blockade has prevented <strong>38 ships from entering or leaving Iranian ports</strong>. President Trump told aides to prepare for a <strong>months-long blockade</strong>, insisting there will be no letup until Iran agrees to end its nuclear weapons program.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Brent crude has surged to <strong>$118/barrel (+6%)</strong>, with TTF gas at <strong>&euro;47/MWh</strong>. California gasoline prices hit <strong>$6/gallon</strong>, a 30% increase since the conflict began. Iran&rsquo;s foreign minister is conducting a regional diplomatic tour despite cancellation of US envoys&rsquo; visits. The IMF titled its April World Economic Outlook <strong>&ldquo;Global Economy in the Shadow of War&rdquo;</strong>, downgrading global growth forecasts.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The single largest driver of global market volatility. <strong>Energy supermajors</strong> are direct beneficiaries: <strong>ExxonMobil [XOM]</strong>, <strong>Chevron [CVX]</strong>, <strong>Shell [SHEL]</strong>, <strong>TotalEnergies [TTE]</strong>, <strong>BP [BP]</strong>. Oil services firms <strong>Halliburton [HAL]</strong> and <strong>Schlumberger [SLB]</strong> benefit from sustained high prices. Airlines (<strong>Delta [DAL]</strong>, <strong>United [UAL]</strong>, <strong>Ryanair [RYAAY]</strong>) face fuel cost headwinds. Defense contractors <strong>Lockheed Martin [LMT]</strong>, <strong>RTX Corp [RTX]</strong>, <strong>Northrop Grumman [NOC]</strong> see sustained demand. Consumer discretionary and transport sectors face margin compression from elevated fuel costs.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 5: IMF Downgrade + Earnings Divergence -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Global / Economy &amp; Earnings &mdash; Apr 30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">IMF Downgrades Global Growth Amid War &mdash; But Corporate Earnings Defy Pessimism</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The IMF&rsquo;s April 2026 World Economic Outlook, titled <strong>&ldquo;Global Economy in the Shadow of War,&rdquo;</strong> downgraded global growth forecasts citing the Iran conflict, energy price spikes, and trade disruptions. The report warns of persistent inflation driven by elevated energy costs and disrupted supply chains through the Strait of Hormuz.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Yet corporate earnings painted a sharply different picture. <strong>Caterpillar</strong> beat expectations and raised guidance, sending shares up <strong>~10%</strong>. <strong>Qualcomm</strong> surged <strong>16%</strong> on a Q2 earnings beat. <strong>Eli Lilly</strong> jumped <strong>7%</strong> after blowing past expectations and raising full-year sales outlook. <strong>Alphabet</strong> reported strong results. The S&P 500 hit a new all-time high at 7,209, highlighting a stark divergence between macro pessimism and micro-level corporate strength &mdash; particularly in tech and healthcare.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The macro-micro divergence is the key theme. <strong>Caterpillar [CAT]</strong> (+10%) signals infrastructure/industrial resilience. <strong>Qualcomm [QCOM]</strong> (+16%) validates AI chip demand beyond Nvidia. <strong>Eli Lilly [LLY]</strong> (+7%) confirms the GLP-1/obesity drug boom is accelerating. <strong>Alphabet [GOOGL]</strong> strength underpins big tech. However, the IMF downgrade suggests this earnings-driven rally may face headwinds from energy-driven inflation, consumer spending pullbacks, and potential emerging market debt stress. Watch for rotation from cyclicals into defensive names if oil stays above $115.
          </p>
        </div>
      </div>
    </div>

    <!-- KEY TAKEAWAY -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The global economy is splitting in two.</strong> Corporate earnings in the US are historically strong &mdash; S&P 500 at all-time highs &mdash; while the IMF warns of weakening global growth, $118 oil, and geopolitical escalation. This divergence is unsustainable. Either energy costs will eventually drag down corporate margins, or the conflict will resolve and oil will correct. Position accordingly.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Sectors to favor:</strong> Energy (XOM, CVX, SHEL), Defense (LMT, RTX, NOC), Healthcare/GLP-1 (LLY), Semiconductors (QCOM, NVDA), and age-verification/regtech companies as EU enforcement intensifies.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Sectors to watch with caution:</strong> Airlines (DAL, UAL, RYAAY), social media (META, SNAP) facing regulatory headwinds, consumer discretionary exposed to fuel inflation, and emerging market equities sensitive to IMF growth downgrades.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; Amnesty International &bull; Reuters &bull; NPR &bull; CNN &bull; CNBC &bull; The Japan Times &bull; The Manila Times &bull; Euronews &bull; NBC News &bull; ABC News &bull; Democracy Now &bull; IMF World Economic Outlook &bull; Council on Foreign Relations &bull; CaixaBank Research &bull; Fox News &bull; Morning Star
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Not financial advice. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR GENERAL DISTRIBUTION
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
