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
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; May 2, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">S&P 500</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">7,230.12 (+0.29%, All-Time High)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Nasdaq</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">25,114.44 (+0.89%, Record Close)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Dow Jones</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">49,499.27 (-0.31%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Nikkei 225</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">59,513.12 (+0.38%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">USD/JPY</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">&yen;155 (Yen +2.5% post-intervention)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Brent Crude</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">$110.23/bbl (-0.2%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px;">WTI Crude</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right;">$103.27/bbl (-2.0%)</td>
        </tr>
      </table>
    </div>

    <!-- EVENT 1: UAE Leaves OPEC -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Global / Energy &mdash; May 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">UAE Exits OPEC After Six Decades &mdash; Plans to Boost Oil Output to 5 Million bpd</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The United Arab Emirates has officially left OPEC and the broader OPEC+ alliance effective <strong>May 1, 2026</strong>, ending six decades of membership. The departure follows years of tension over production quotas. The UAE plans to expand output capacity from <strong>3.4 million barrels per day to 5 million bpd by 2027</strong>, an increase of roughly <strong>1.6 million bpd</strong> &mdash; equivalent to 1.5% of global oil supply.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Energy Minister Suhail al-Mazrouei cited <strong>&ldquo;national interests&rdquo;</strong> as the driving factor, freeing the UAE from cartel-imposed production caps. The exit comes during the Iran war, which currently constrains Gulf exports through the Strait of Hormuz. However, analysts warn that once the conflict subsides, the UAE could <strong>flood the market</strong> with its massive spare capacity, fundamentally undermining OPEC&rsquo;s ability to control global oil prices. Saudi Arabia is now increasingly isolated as the cartel&rsquo;s anchor producer.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            A structural shift for oil markets. Short-term: limited immediate impact due to Hormuz blockade constraints. Medium-term: <strong>bearish for oil prices</strong> once conflict resolves, as the UAE&rsquo;s uncapped production will increase global supply. <strong>ADNOC Distribution [ADNOCDIST.AD]</strong> and UAE-linked equities benefit from production upside. Saudi Aramco&rsquo;s pricing power weakens. Energy supermajors <strong>Shell [SHEL]</strong>, <strong>BP [BP]</strong>, and <strong>TotalEnergies [TTE]</strong> with UAE joint ventures may see partnership shifts. <strong>iShares MSCI UAE ETF [UAE]</strong> is the direct play. Longer-dated oil futures could see downward pressure as markets price in higher future supply.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 2: Japan Yen Intervention -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Asia-Pacific / Currency &mdash; May 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Spends $34.5 Billion Intervening in Currency Markets &mdash; Yen Surges 2.5%</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Bank of Japan launched its <strong>first currency intervention since July 2024</strong>, spending an estimated <strong>&yen;5.4 trillion ($34.5 billion)</strong> to prop up the yen after it breached the <strong>&yen;160-to-the-dollar red line</strong>. The yen surged more than <strong>2.5%</strong> in a matter of hours, its biggest single-day gain in three years, moving rapidly from above &yen;160 to the &yen;155 range.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Finance officials had issued a <strong>&ldquo;final warning&rdquo;</strong> to speculators before the intervention. The yen&rsquo;s weakness has been driven by <strong>wide US-Japan interest rate differentials</strong> and exacerbated by surging oil import costs from the Iran conflict. Bloomberg analysts warn the rally <strong>risks fading quickly</strong> without sustained follow-up intervention, as fundamental rate differentials remain unchanged. The move risks friction with Washington, as the Trump administration opposes currency manipulation by trade partners.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Massive FX volatility creates both risk and opportunity. Japanese exporters <strong>Toyota [TM/7203.T]</strong>, <strong>Sony [SONY/6758.T]</strong>, and <strong>Nintendo [NTDOY/7974.T]</strong> face earnings headwinds from a stronger yen. Conversely, Japanese importers and domestically-focused firms benefit. The <strong>Nikkei 225</strong> and <strong>WisdomTree Japan Hedged Equity ETF [DXJ]</strong> are directly impacted. FX carry traders shorting the yen face severe squeeze risk. <strong>Invesco CurrencyShares Japanese Yen Trust [FXY]</strong> is the direct currency play. Watch for BoJ rate decision signals &mdash; any hint of tightening would amplify the yen rally.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 3: US Troop Withdrawal from Germany -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Europe / NATO &amp; Security &mdash; May 1&ndash;2</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Pentagon Orders 5,000 US Troops Out of Germany &mdash; NATO Alliance Under Strain</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The United States will withdraw approximately <strong>5,000 troops from Germany</strong> over the next 6 to 12 months, the Pentagon confirmed Friday. The withdrawal includes <strong>one brigade combat team</strong> and supporting forces. The decision follows a public clash between President Trump and German Chancellor <strong>Friedrich Merz</strong>, who criticized Washington&rsquo;s strategy in the Iran conflict, calling the US approach <strong>&ldquo;humiliating.&rdquo;</strong>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The move alarmed Republican lawmakers, with senior senators calling it <strong>&ldquo;reckless&rdquo;</strong> and warning it undermines European security at a critical moment. Major US military medical facilities like <strong>Landstuhl</strong> will remain operational, as they are crucial for treating wounded soldiers from the Iran war. The withdrawal deepens questions about NATO&rsquo;s cohesion and could accelerate European efforts to build independent defense capabilities. Germany is now expected to <strong>fast-track its own rearmament program</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            European defense stocks are the clear winners. <strong>Rheinmetall [RHM.DE]</strong>, <strong>BAE Systems [BA.L]</strong>, <strong>Leonardo [LDO.MI]</strong>, and <strong>Thales [HO.PA]</strong> stand to benefit from accelerated EU defense spending. The <strong>Euro STOXX 600</strong> could see sector rotation into defense and away from US-dependent sectors. The euro may weaken against the dollar on geopolitical uncertainty. German defense ETFs and the broader <strong>iShares MSCI Germany ETF [EWG]</strong> deserve monitoring. US defense contractors <strong>Lockheed Martin [LMT]</strong> and <strong>RTX Corp [RTX]</strong> may face reduced European contract visibility.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 4: Myanmar Suu Kyi House Arrest -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Southeast Asia / Political &mdash; May 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Myanmar Transfers Aung San Suu Kyi from Prison to House Arrest &mdash; Junta Seeks Legitimacy</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Myanmar&rsquo;s military junta announced that detained opposition leader <strong>Aung San Suu Kyi</strong> has been transferred from prison to house arrest, more than <strong>five years after the February 2021 coup</strong> that removed her from power. The move was part of a prisoner amnesty marking a Buddhist holiday, reducing her sentence to <strong>18 years and 9 months</strong>, of which more than 13 years remain to be served.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The order came from President <strong>Min Aung Hlaing</strong>, the former military chief who led the coup. Her son, <strong>Kim Aris</strong>, stated bluntly: <strong>&ldquo;Moving her is not freeing her&rdquo;</strong> and said she remains a hostage. Lawyers cannot confirm she has actually been moved, and the location of her house arrest has not been disclosed. Human rights groups view this as an <strong>image rehabilitation exercise</strong> by the junta, which has faced intensifying resistance from armed opposition groups across the country.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Limited direct market impact, but important for Southeast Asian geopolitics. If the junta successfully rehabilitates its image, Western sanctions could eventually ease, reopening Myanmar&rsquo;s natural gas reserves and rare earth mineral deposits to foreign investment. <strong>PTTEP [PTTEP.BK]</strong> (Thailand) and <strong>Woodside Energy [WDS]</strong> have Myanmar gas exposure. Watch the <strong>iShares MSCI Frontier &amp; Select EM ETF [FM]</strong> for broader frontier market sentiment. Japanese conglomerates with Myanmar projects, including <strong>Mitsubishi Corp [8058.T]</strong>, could benefit from any thaw.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 5: Global May Day Protests + Iran War Fallout -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Global / Labor &amp; Energy Crisis &mdash; May 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Millions March on May Day as Iran War Fuels Global Energy Crisis &mdash; Demands for Peace and Wages</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          May Day 2026 saw the <strong>largest coordinated global protests in years</strong>, with millions taking to the streets across every continent. Unlike typical labor rallies, this year&rsquo;s demonstrations were dominated by fury over the <strong>Iran war&rsquo;s economic fallout</strong>: surging fuel prices, rising food costs, and shrinking purchasing power. Major demonstrations were held in <strong>Paris, Berlin, Seoul, Jakarta, Istanbul, S&atilde;o Paulo, Melbourne, and London</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Workers demanded <strong>higher wages to match energy-driven inflation</strong>, peace in the Middle East, and government intervention on fuel costs. In Europe, unions called for emergency price caps on energy. In Southeast Asia, garment and factory workers protested collapsing real wages. The IMF&rsquo;s recent downgrade of global growth &mdash; titled <strong>&ldquo;Global Economy in the Shadow of War&rdquo;</strong> &mdash; underscored the protesters&rsquo; grievances: the war economy is enriching energy producers while crushing workers and consumers.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Rising social unrest signals growing political pressure on governments to intervene in energy markets &mdash; potentially through price caps, windfall taxes, or subsidies. European energy firms <strong>Equinor [EQNR]</strong>, <strong>Shell [SHEL]</strong>, and <strong>TotalEnergies [TTE]</strong> face windfall tax risk. Wage pressure will compress margins in labor-intensive sectors: retail (<strong>Carrefour [CA.PA]</strong>, <strong>Tesco [TSCO.L]</strong>), hospitality, and manufacturing. Consumer staples (<strong>Nestl&eacute; [NESN.SW]</strong>, <strong>Unilever [UL]</strong>) benefit as defensive plays. If protests escalate, watch for supply chain disruptions in European and Asian manufacturing hubs.
          </p>
        </div>
      </div>
    </div>

    <!-- KEY TAKEAWAY -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The post-OPEC oil order is being born in wartime.</strong> The UAE&rsquo;s exit from OPEC is the most structurally significant energy event in years &mdash; but its impact is masked by the Iran war&rsquo;s Hormuz blockade. Once the conflict ends, a wave of uncapped UAE supply hitting the market could crash oil prices, creating a whiplash reversal for energy stocks currently riding $110+ Brent.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Sectors to favor:</strong> European defense (RHM.DE, BA.L, LDO.MI) as NATO fractures force EU self-reliance; Japanese domestic equities (post-intervention yen strength); frontier markets (FM) if Myanmar thaw materializes; consumer staples (NESN, UL) as defensive plays against inflation-driven unrest.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Sectors to watch with caution:</strong> Japanese exporters (TM, SONY) facing yen headwinds; energy supermajors if UAE flooding risk gets priced in; European labor-intensive sectors exposed to wage pressure; any company with significant Strait of Hormuz logistics dependency.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; Bloomberg &bull; CNBC &bull; CNN &bull; NPR &bull; The Japan Times &bull; The Diplomat &bull; Reuters &bull; Washington Post &bull; Military Times &bull; Breaking Defense &bull; Gulf News &bull; The Motley Fool &bull; Morning Star &bull; PBS &bull; Stars and Stripes &bull; IMF World Economic Outlook
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
