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

    <!-- ===================== EVENT 1: IRAN LAUNCHES MISSILES AT ISRAEL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Geopolitics / Energy &mdash; June 7</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran Launches Missiles at Israel; Strait of Hormuz Crisis Deepens as Peace Talks Collapse</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Iran launched missiles at Israel on June 7, marking the <strong>first such bombardment since the fragile ceasefire took effect in early April</strong>. The strike came in retaliation after Israel hit Beirut&rsquo;s southern suburbs without warning, defying Washington&rsquo;s requests to stand down. Iran has <strong>suspended peace talks</strong> with the United States and threatened to &ldquo;completely block&rdquo; the Strait of Hormuz and the Strait of Mandeb.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Strait of Hormuz has been effectively closed since March 4, 2026, in what the IEA calls <strong>&ldquo;the largest supply disruption in the history of the global oil market.&rdquo;</strong> Pre-conflict vessel traffic of ~3,000 ships/month now stands at roughly 5% of normal levels. Brent crude, which had moderated from $120+ to ~$92 on ceasefire optimism, is reversing sharply higher on today&rsquo;s escalation.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent crude surging back toward $100+ on collapsed ceasefire. WTI following. Energy complex broadly bid. <strong>Gold</strong> rallying on safe-haven demand. U.S. Treasuries bid (yields falling). Global equities under severe pressure from renewed war premium.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> XOM, CVX, COP (oil majors) &bull; Shell (SHEL), BP &bull; Saudi Aramco (2222.SR) &bull; XLE, XOP (energy ETFs) &bull; LMT, RTX, NOC (U.S. defense) &bull; Elbit Systems (ESLT) &bull; GLD, IAU (gold ETFs)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> UAL, DAL, AAL (airlines &mdash; fuel costs) &bull; JETS (airline ETF) &bull; Consumer discretionary &bull; Shipping/logistics exposed to Persian Gulf routes &bull; Emerging market equities broadly
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: PERU PRESIDENTIAL RUNOFF ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Latin America / Politics / Commodities &mdash; June 7</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Peru Presidential Runoff Today: Fujimori vs. Sanchez &mdash; World&rsquo;s #2 Copper Producer at a Crossroads</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Peru is holding its <strong>presidential runoff election today</strong> between hard-right candidate <strong>Keiko Fujimori</strong> (Popular Force, 17.19% in round one) and leftist <strong>Roberto Sanchez</strong> (Together for Peru, 12.03%). This is Fujimori&rsquo;s fourth consecutive runoff attempt. The first round saw long lines, delayed results, and accusations of fraud.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Peru is the <strong>world&rsquo;s second-largest copper producer</strong> and a major silver and zinc exporter. The outcome will determine the country&rsquo;s economic orientation &mdash; Fujimori represents market-friendly policies while Sanchez represents <strong>nationalization and state intervention in mining</strong>. The result carries enormous implications for global copper supply at a time when EV and AI data center demand is surging.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Scenario A (Fujimori wins):</strong> Lima Stock Exchange rally, Peruvian sol strengthens, mining stocks stable. <strong>Scenario B (Sanchez wins):</strong> Copper/silver spike on supply fears, capital flight from Peru, mining stocks pressured.<br/><br/>
            <strong style="color: #eab308;">&#9679; WATCH:</strong> FCX (Freeport-McMoRan &mdash; major Peru operations) &bull; SCCO (Southern Copper) &bull; BHP (BHP Group) &bull; GLEN (Glencore) &bull; COPX (copper miners ETF) &bull; SLV (silver ETF) &bull; EPU (iShares Peru ETF &mdash; directly exposed to outcome)<br/>
            <strong>Broader EM:</strong> ILF (Latin America ETF) &bull; EEM (EM broad) &mdash; sentiment indicator for region
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: TROPICAL STORM JANGMI JAPAN ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">East Asia / Natural Disaster / Supply Chains &mdash; June 6&ndash;7</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Tropical Storm Jangmi Batters Japan: 800,000 Evacuated, Tokyo Infrastructure Paralyzed, Supply Chains Disrupted</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Tropical Storm Jangmi struck Japan triggering the <strong>highest-level flood warning (Level 5)</strong> after the Kozagawa River overflowed. At least <strong>23 people injured</strong>, 57 homes damaged, <strong>nearly 60,000 homes lost power</strong> (48,000 in Okinawa/Kagoshima, 12,000 in Kanto). Evacuation advisories issued for <strong>more than 800,000 residents</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Hundreds of flights cancelled at Haneda Airport</strong>, rail services across the Tokyo metropolitan area severely disrupted. As the world&rsquo;s third-largest economy, major disruptions to Japan&rsquo;s infrastructure directly affect global supply chains, manufacturing output, and trade flows. Automotive and electronics production in affected regions faces potential multi-day shutdowns.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Insurance:</strong> Japanese insurers face claims spike; global reinsurers exposed. <strong>Supply chains:</strong> Automotive and electronics production at risk. Yen under mild pressure from economic disruption but offset by safe-haven flows from Middle East tensions.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> Tokio Marine (8766.T) &bull; MS&amp;AD (8725.T) &bull; Sompo Holdings (8630.T) &mdash; insurance claims &bull; Toyota (7203.T), Honda (7267.T) &mdash; production disruption risk &bull; Sony (6758.T) &mdash; electronics supply chain<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> Munich Re (MUV2.DE), Swiss Re (SREN.SW) &mdash; reinsurance rate hardening &bull; Japanese construction firms (Obayashi 1802.T, Kajima 1812.T) &mdash; rebuilding demand<br/>
            <strong>ETFs:</strong> EWJ (iShares Japan) short-term pressure &bull; DXJ (WisdomTree Japan Hedged) similar
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: ALBANIA PROTESTS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Europe / Civil Unrest / ESG &mdash; June 2&ndash;7</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">&ldquo;Flamingo Revolution&rdquo;: Mass Protests Rock Albania for Sixth Day Over Kushner-Backed &euro;1.4B Luxury Resort</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Thousands of Albanians have taken to the streets for a <strong>sixth consecutive day</strong> protesting a <strong>&euro;1.4 billion luxury resort project</strong> backed by Jared Kushner and Ivanka Trump. The project would transform Sazan island (a former communist military base) and Zvernec into luxury tourist destinations. Protesters oppose the <strong>destruction of protected habitats</strong> for endangered species.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Albania&rsquo;s anti-corruption body (SPAK) has launched a probe into controversial 2024 legislative changes that stripped the area&rsquo;s protected environmental status. The &ldquo;flamingo revolution&rdquo; represents a convergence of <strong>anti-corruption sentiment, environmental protection, and questions about foreign political influence</strong> in EU-aspirant nations. The protests have implications for Albania&rsquo;s EU accession path and signal growing public resistance to politically-connected mega-development projects globally.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Direct impact limited</strong> but thematically significant for ESG investing and political-risk premiums in frontier markets. Albanian sovereign bonds may widen on political instability. Broader signal for luxury/hospitality development projects facing environmental resistance.<br/><br/>
            <strong style="color: #eab308;">&#9679; THEMATIC:</strong> ESG-focused ETFs (ESGU, SUSA) &mdash; reinforces regulatory/social resistance to environmentally destructive projects &bull; Frontier market bonds &mdash; political risk repricing &bull; European hospitality REITs &mdash; regulatory environment tightening for coastal development<br/>
            <strong>Broader signal:</strong> Growing pattern of public resistance to large-scale luxury development without environmental safeguards
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: PEPFAR CUTS AFRICA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Africa / Public Health / Pharmaceuticals &mdash; June 6&ndash;7</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PEPFAR Funding Collapse Creating Health Emergency Across Sub-Saharan Africa; Lives Already Lost</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Healthcare providers in <strong>South Africa and Mozambique</strong> report that the cancellation of U.S. PEPFAR funding has already <strong>endangered vulnerable people and cost lives</strong>. PEPFAR &mdash; credited with saving over 25 million lives since 2003 &mdash; is the largest health intervention by any single nation in history. Its disruption threatens to reverse decades of progress on HIV/AIDS across sub-Saharan Africa.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The funding cuts affect <strong>HIV/AIDS treatment, maternal health, and broader healthcare infrastructure</strong> across a region of 1.4 billion people. Health experts warn of potential emergence of <strong>drug-resistant HIV strains</strong> as treatment is interrupted, increased mortality rates, and broader public health destabilization. This represents a fundamental shift in global health engagement with long-term implications for African economic development and stability.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Pharmaceuticals:</strong> Firms supplying antiretrovirals face revenue uncertainty. Long-term pandemic resurgence risk supports biotech/vaccine names. Reduced health stability in Africa threatens FDI and mining operations on the continent.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> GILD (Gilead &mdash; major ARV supplier to Africa) &bull; GSK (ViiV Healthcare subsidiary) &bull; Cipla (500087.NS &mdash; Indian generic ARV maker) &bull; Aurobindo Pharma (524804.NS) &mdash; African program revenue at risk<br/>
            <strong style="color: #eab308;">&#9679; LONG-TERM RISK:</strong> AFK (VanEck Africa ETF) &bull; Mining companies with African operations (Anglo American, Glencore, Gold Fields) &mdash; workforce health and operating stability &bull; BNTX, MRNA (pandemic preparedness plays if drug resistance spreads)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Middle East has escalated to a new level.</strong> Iran&rsquo;s direct missile strike on Israel collapses ceasefire optimism that had brought oil down 20% from its peak. Energy longs (XLE, XOM, COP, CVX) are the clearest trade. Defense stocks (LMT, RTX, NOC) benefit. Airlines and consumer discretionary face renewed headwinds. Gold&rsquo;s safe-haven bid accelerates &mdash; GLD above $2,800/oz is the base case while Hormuz remains closed.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Peru&rsquo;s election is a binary event for copper.</strong> A Sanchez victory would threaten nationalization of the world&rsquo;s #2 copper producer at the worst possible time for supply. FCX, SCCO, and copper futures are the direct exposures. A Fujimori win would be a relief rally. Watch EPU closely tonight.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Japan&rsquo;s storm adds supply-chain risk to an already fragile backdrop.</strong> Toyota, Honda, and Sony production disruptions layer onto existing global semiconductor tightness. Insurance stocks (Tokio Marine, Munich Re) face near-term claims pressure but benefit from rate hardening. The combination of Middle East escalation + Japan disruption + Peru uncertainty creates a powerful &ldquo;risk-off&rdquo; cocktail &mdash; VIX likely elevated, Treasuries and gold bid.
      </p>
    </div>

    <!-- ===================== RISK DASHBOARD ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Risk Dashboard &mdash; June 7, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Geopolitical Risk</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0; font-weight: 700;">EXTREME &mdash; Iran-Israel active conflict</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Energy Supply</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0; font-weight: 700;">CRITICAL &mdash; Hormuz at 5% capacity</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Commodity Supply (Copper)</td>
          <td style="color: #eab308; text-align: right; padding: 6px 0; font-weight: 700;">ELEVATED &mdash; Peru election binary</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Asia-Pacific Supply Chains</td>
          <td style="color: #eab308; text-align: right; padding: 6px 0; font-weight: 700;">ELEVATED &mdash; Japan storm disruption</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Safe Haven Demand</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0; font-weight: 700;">STRONG &mdash; Gold, Treasuries, CHF bid</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Global Health (Africa)</td>
          <td style="color: #eab308; text-align: right; padding: 6px 0; font-weight: 700;">DETERIORATING &mdash; PEPFAR collapse</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CBS News &bull; NPR &bull; NBC News &bull; Al Jazeera &bull; CNBC &bull; The Japan Times &bull; Insurance Business Asia &bull; Wikipedia (Strait of Hormuz crisis) &bull; International Energy Agency &bull; Reuters &bull; Bloomberg &bull; Financial Times
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
