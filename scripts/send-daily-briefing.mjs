#!/usr/bin/env node
/**
 * World Monitor — Okinawa Daily Briefing Email Sender
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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Daily Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Defense &bull; Energy &bull; Health &bull; Financial Markets</p>
    </div>

    <!-- ===================== EVENT 1: TRUMP-XI BEIJING SUMMIT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / Trade &mdash; May 13</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Trump Lands in Beijing for High-Stakes Summit with Xi Jinping &mdash; Trade, Taiwan, Iran on the Table</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President Trump arrived in Beijing today for a state visit with Chinese President Xi Jinping, accompanied by a delegation of major U.S. corporate executives including <strong>Elon Musk (Tesla), Tim Cook (Apple), Jensen Huang (Nvidia), Kelly Ortberg (Boeing), and Larry Fink (BlackRock)</strong>. Talks scheduled for Thursday and Friday will focus on trade tensions, Taiwan, AI chip export controls, and Iran.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The White House signaled discussions on establishing a <strong>US-China Board of Trade</strong> and a parallel <strong>Board of Investment</strong>. A major <strong>Boeing aircraft order from China</strong> is widely anticipated &mdash; prediction markets place odds at 87.5%. Senator Steve Daines summarized expected deals as <strong>&ldquo;Boeing, beef and beans.&rdquo;</strong> Nvidia is seeking relaxation of U.S. chip export restrictions that have blocked its most advanced AI processors from the Chinese market.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>NVDA +2.7%</strong> on hopes of eased chip restrictions. <strong>Micron (MU) +3.5%, Qualcomm (QCOM) +3.2%</strong> riding the same wave. <strong>Boeing (BA)</strong> up 8.84% over the past month on China order anticipation. <strong>Tesla (TSLA)</strong> gaining on Musk&rsquo;s direct participation. A breakthrough on trade could lift the entire semiconductor and industrial sectors; failure risks a sharp reversal. Watch <strong>SOX (semiconductor index), KWEB (China internet ETF), and agricultural commodity futures</strong> (soybeans, beef) for directional signals.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: IRAN CEASEFIRE FRAGILITY / HORMUZ ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Energy / Geopolitics &mdash; May 12&ndash;13</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran Ceasefire on the Brink &mdash; Strait of Hormuz Fire Exchange Sends Oil Past $104; War Cost Hits $29 Billion</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The fragile US-Iran ceasefire (declared April 8) is teetering after <strong>three U.S. destroyers came under attack by Iranian missiles, drones, and small boats</strong> while transiting the Strait of Hormuz. Iran&rsquo;s chief negotiator warned Washington must accept Tehran&rsquo;s latest peace plan or risk the truce collapsing entirely. The Pentagon disclosed the war&rsquo;s cost has climbed to <strong>$29 billion</strong>, up from the $25 billion reported to Congress two weeks ago.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Ship traffic through the Strait of Hormuz &mdash; through which <strong>20% of the world&rsquo;s oil passes</strong> &mdash; remains far below pre-war levels. U.S. wholesale prices (PPI) surged <strong>6% year-over-year</strong> in April, largely driven by energy costs from the conflict. CPI inflation accelerated to <strong>3.8%</strong>, exceeding wage growth and squeezing consumers globally. Snack packaging is turning black-and-white as the war disrupts ink ingredient supply chains.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Brent crude at $104.01, WTI at $97.97</strong> &mdash; both up 2.7% on ceasefire collapse fears. Energy stocks benefit: <strong>Exxon (XOM), Chevron (CVX), ConocoPhillips (COP)</strong> are outperforming. <strong>10Y Treasury yield spiked to 4.473%</strong> (highest since July 2025) on inflation data, pressuring rate-sensitive growth stocks and REITs. The <strong>Dow fell 0.14%</strong> while tech held up. Defense contractors <strong>Lockheed Martin (LMT), RTX (RTX), Northrop Grumman (NOC)</strong> continue to benefit from elevated conflict spending. Airlines (<strong>DAL, UAL, AAL</strong>) face margin compression from fuel costs.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: RUSSIA SARMAT ICBM TEST ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Defense / Nuclear Posture &mdash; May 12</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Russia Successfully Tests RS-28 Sarmat &ldquo;Satan 2&rdquo; ICBM &mdash; Combat Deployment by Year-End</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Russia&rsquo;s Strategic Missile Forces conducted a <strong>successful test launch of the Sarmat ICBM</strong> from Plesetsk Cosmodrome on May 12. Putin confirmed the missile &mdash; dubbed <strong>&ldquo;Satan 2&rdquo;</strong> by NATO &mdash; will be placed on <strong>combat duty by the end of 2026</strong>. The first regiment will be stationed at the <strong>Uzhur unit in the Krasnoyarsk region</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Sarmat can carry <strong>multiple nuclear warheads</strong> along both traditional ballistic and suborbital trajectories, with an operational range exceeding <strong>35,000 km</strong>. Development has been plagued by delays, including a <strong>catastrophic silo explosion during a failed test in late 2024</strong>. Ukrainian analysts note the test is intended to &ldquo;compensate for international embarrassment&rdquo; from battlefield setbacks. The test comes amid stalled Ukraine ceasefire negotiations and rising NATO-Russia tensions.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Nuclear saber-rattling boosts the defense sector: <strong>Lockheed Martin (LMT)</strong> benefits from renewed missile defense urgency, <strong>Northrop Grumman (NOC)</strong> from Sentinel ICBM program acceleration, and <strong>L3Harris (LHX)</strong> from ISR/missile-warning contracts. European defense names <strong>Rheinmetall (RHM.DE), BAE Systems (BA.L), Leonardo (LDO.MI)</strong> gain from NATO rearmament pressure. Gold (&dollar;2,420+) and <strong>Swiss franc</strong> strengthen as geopolitical safe havens. European natural gas futures (TTF) remain elevated on energy security concerns.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: EU SANCTIONS ON ISRAELI SETTLERS & HAMAS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">European Politics / Middle East &mdash; May 12</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">EU Breaks Years-Long Deadlock &mdash; Unanimously Sanctions Israeli Settlers and Hamas Leaders After Hungary&rsquo;s Orb&aacute;n Era Ends</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The European Union reached a <strong>unanimous political agreement</strong> on Monday to sanction both <strong>extremist Israeli settlers in the West Bank</strong> and <strong>10 Hamas leaders</strong>. The breakthrough came after <strong>P&eacute;ter Magyar</strong> was sworn in as Hungary&rsquo;s new prime minister, ending <strong>16 years of Viktor Orb&aacute;n&rsquo;s</strong> rule and his consistent veto of such measures.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A UN-EU assessment estimates Gaza reconstruction at <strong>$71.4 billion</strong>, with the territory set back <strong>77 years</strong> in development. The EU Foreign Affairs Council stressed the importance of implementing the peace plan under <strong>UNSCR 2803</strong> and ensuring humanitarian aid access. The Irish foreign minister declared the EU &ldquo;cannot continue to be bystanders.&rdquo; Discussions on suspending the <strong>EU-Israel trade agreement</strong> were shelved for now but remain under active pressure.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Limited direct market impact, but signals a <strong>geopolitical regime change in Europe</strong>. Hungary&rsquo;s political shift removes a key EU veto player, enabling faster collective action on foreign policy, defense, and trade. Watch for effects on <strong>EU-Israel trade flows</strong> (Israel&rsquo;s TA-35 index sensitive to EU tensions). <strong>European construction/infrastructure firms</strong> could eventually benefit from $71.4B Gaza reconstruction. The broader message: EU decision-making velocity is increasing, which matters for future sanctions regimes (including on Russia). <strong>Euro (EUR/USD)</strong> may see marginal strengthening on improved EU cohesion signals.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: HANTAVIRUS CRUISE SHIP OUTBREAK ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Global Health / Travel &mdash; May 10&ndash;13</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Andes Hantavirus Outbreak on Cruise Ship MV Hondius &mdash; 11 Cases, 3 Dead Across 23 Countries</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A deadly <strong>Andes hantavirus</strong> outbreak on the Dutch-flagged cruise ship <strong>MV Hondius</strong> has reached <strong>11 cases (9 confirmed, 2 probable)</strong> with <strong>3 deaths</strong>. Passengers from <strong>23 countries</strong> were aboard. A French woman is critically ill and being treated with an artificial lung. The ship docked in <strong>Tenerife, Canary Islands</strong> on May 10 for full evacuation; 17 American passengers were flown to the <strong>University of Nebraska Medical Center&rsquo;s National Quarantine Unit</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Andes hantavirus is the <strong>only hantavirus capable of person-to-person transmission</strong>, though it requires close, prolonged contact. The CDC classified the outbreak as a <strong>Level 3 emergency response</strong> (lowest alert level), and the WHO assesses overall global risk as <strong>low</strong>. The ECDC noted the outbreak is linked to exposure during a South Atlantic expedition near Argentina and Chile.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Cruise stocks took an immediate hit: <strong>Carnival (CCL), Royal Caribbean (RCL), Norwegian Cruise Line (NCLH)</strong> all fell 2&ndash;3% in the regular session with further 1% declines overnight. The sell-off appears <strong>overblown</strong> given WHO&rsquo;s low-risk assessment &mdash; this is a niche expedition vessel, not a mainstream cruise line. Likely a <strong>buying opportunity</strong> on cruise names if the outbreak remains contained. Watch for contagion into broader travel/leisure: <strong>Booking Holdings (BKNG), Expedia (EXPE), airline stocks</strong>. Biotech/diagnostics names with hantavirus exposure are niche but could see speculative volume.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #eab308; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Market Snapshot &mdash; May 13 Close</p>
    </div>

    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 13px;">
          <tr style="border-bottom: 1px solid #222;">
            <td style="color: #888; padding: 8px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Index</td>
            <td style="color: #888; padding: 8px 0; text-align: right; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Level</td>
            <td style="color: #888; padding: 8px 0; text-align: right; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Change</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="color: #fff; padding: 10px 0; font-weight: 600;">S&amp;P 500</td>
            <td style="color: #fff; padding: 10px 0; text-align: right;">7,444.25</td>
            <td style="color: #22c55e; padding: 10px 0; text-align: right; font-weight: 600;">+0.58% (ATH)</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="color: #fff; padding: 10px 0; font-weight: 600;">Nasdaq</td>
            <td style="color: #fff; padding: 10px 0; text-align: right;">26,402.34</td>
            <td style="color: #22c55e; padding: 10px 0; text-align: right; font-weight: 600;">+1.20% (ATH)</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="color: #fff; padding: 10px 0; font-weight: 600;">Dow Jones</td>
            <td style="color: #fff; padding: 10px 0; text-align: right;">49,693.20</td>
            <td style="color: #dc2626; padding: 10px 0; text-align: right; font-weight: 600;">-0.14%</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="color: #fff; padding: 10px 0; font-weight: 600;">Brent Crude</td>
            <td style="color: #fff; padding: 10px 0; text-align: right;">$104.01</td>
            <td style="color: #22c55e; padding: 10px 0; text-align: right; font-weight: 600;">+2.7%</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="color: #fff; padding: 10px 0; font-weight: 600;">WTI Crude</td>
            <td style="color: #fff; padding: 10px 0; text-align: right;">$97.97</td>
            <td style="color: #22c55e; padding: 10px 0; text-align: right; font-weight: 600;">+2.7%</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="color: #fff; padding: 10px 0; font-weight: 600;">10Y Treasury</td>
            <td style="color: #fff; padding: 10px 0; text-align: right;">4.473%</td>
            <td style="color: #dc2626; padding: 10px 0; text-align: right; font-weight: 600;">Highest since Jul &rsquo;25</td>
          </tr>
          <tr>
            <td style="color: #fff; padding: 10px 0; font-weight: 600;">USD/JPY</td>
            <td style="color: #fff; padding: 10px 0; text-align: right;">&yen;156.5</td>
            <td style="color: #dc2626; padding: 10px 0; text-align: right; font-weight: 600;">Yen weakening</td>
          </tr>
        </table>
        <p style="color: #888; font-size: 11px; margin: 16px 0 0; line-height: 1.6;">
          <strong style="color: #ccc;">Key narrative:</strong> Tech/AI enthusiasm is overpowering inflation fears. The S&amp;P 500 and Nasdaq hit new all-time highs despite PPI surging 6% YoY and CPI at 3.8%. Investors are &ldquo;hiding in chips&rdquo; as AI demand is seen as immune to macro headwinds. Senate confirmed <strong>Kevin Warsh</strong> as Fed Chair &mdash; replacing Jerome Powell (term expires May 15). Warsh&rsquo;s hawkish reputation could reshape rate expectations.
        </p>
      </div>
    </div>

    <!-- ===================== STOCKS TO WATCH ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #7c3aed; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Stocks to Watch This Week</p>
    </div>

    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
          <tr style="border-bottom: 1px solid #222;">
            <td style="color: #888; padding: 8px 0; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">Ticker</td>
            <td style="color: #888; padding: 8px 0; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">Catalyst</td>
            <td style="color: #888; padding: 8px 0; text-align: right; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">Direction</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="color: #fff; padding: 8px 0; font-weight: 700;">NVDA</td>
            <td style="color: #bbb; padding: 8px 0;">China chip export relaxation hopes from Beijing summit</td>
            <td style="color: #22c55e; padding: 8px 0; text-align: right;">Bullish</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="color: #fff; padding: 8px 0; font-weight: 700;">BA</td>
            <td style="color: #bbb; padding: 8px 0;">87.5% odds of major China aircraft order announcement</td>
            <td style="color: #22c55e; padding: 8px 0; text-align: right;">Bullish</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="color: #fff; padding: 8px 0; font-weight: 700;">XOM / CVX</td>
            <td style="color: #bbb; padding: 8px 0;">Hormuz ceasefire fragility keeping oil above $100</td>
            <td style="color: #22c55e; padding: 8px 0; text-align: right;">Bullish</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="color: #fff; padding: 8px 0; font-weight: 700;">LMT / NOC / RTX</td>
            <td style="color: #bbb; padding: 8px 0;">Russia ICBM test + $29B Iran war spend + NATO rearmament</td>
            <td style="color: #22c55e; padding: 8px 0; text-align: right;">Bullish</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="color: #fff; padding: 8px 0; font-weight: 700;">CCL / RCL / NCLH</td>
            <td style="color: #bbb; padding: 8px 0;">Hantavirus sell-off likely overblown &mdash; watch for recovery</td>
            <td style="color: #eab308; padding: 8px 0; text-align: right;">Neutral / Dip Buy</td>
          </tr>
          <tr style="border-bottom: 1px solid #1a1a1a;">
            <td style="color: #fff; padding: 8px 0; font-weight: 700;">DAL / UAL / AAL</td>
            <td style="color: #bbb; padding: 8px 0;">Fuel cost margin compression from $100+ oil</td>
            <td style="color: #dc2626; padding: 8px 0; text-align: right;">Bearish</td>
          </tr>
          <tr>
            <td style="color: #fff; padding: 8px 0; font-weight: 700;">GLD / GDX</td>
            <td style="color: #bbb; padding: 8px 0;">Geopolitical risk premium: Russia ICBM + Iran + new Fed Chair</td>
            <td style="color: #22c55e; padding: 8px 0; text-align: right;">Bullish</td>
          </tr>
        </table>
      </div>
    </div>

    <!-- KEY TAKEAWAY -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The world is navigating three simultaneous crises</strong> &mdash; a potential collapse of the Iran ceasefire threatening global energy supply, a nuclear-armed Russia escalating its strategic posture, and the world&rsquo;s two largest economies attempting to de-escalate trade tensions face-to-face in Beijing.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Markets are schizophrenic:</strong> The S&amp;P 500 and Nasdaq are hitting all-time highs while inflation is reaccelerating (PPI +6%, CPI +3.8%), oil is above $100, and Treasury yields are at 2026 highs. The AI/semiconductor narrative is acting as a shield, but the gap between tech exuberance and macro deterioration is widening dangerously.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Fed transition is underrated.</strong> Kevin Warsh replaces Jerome Powell this Friday. Warsh is more hawkish, and his first public comments on rates could reset market expectations for the remainder of 2026. This alone could be the catalyst that pops the tech bubble or reinforces it.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Trump-Xi communiqu&eacute; language on tariffs/chips (Thu-Fri) &bull; Iran ceasefire status &amp; Hormuz shipping traffic &bull; Kevin Warsh&rsquo;s first statement as Fed Chair (after May 15) &bull; Hantavirus case count trajectory &bull; European defense budget reactions to Sarmat deployment
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CNN &bull; CNBC &bull; Al Jazeera &bull; The Washington Post &bull; NPR &bull; Reuters &bull; Bloomberg &bull; TheStreet &bull; The Moscow Times &bull; Kyiv Independent &bull; ECDC &bull; WHO &bull; CDC &bull; Fortune &bull; Fox News &bull; Democracy Now &bull; Euronews &bull; CaixaBank Research &bull; Crestwood Advisors &bull; 24/7 Wall Street &bull; Taiwan News &bull; Times of Israel
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only and does not constitute financial advice.<br/>
        Sources verified across multiple outlets where possible.
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #7c3aed; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

import { execSync } from 'node:child_process';

const recipients = RECIPIENTS;

const payload = JSON.stringify({
  from: 'World Monitor <onboarding@resend.dev>',
  to: recipients,
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
  console.log(`Email sent successfully to ${recipients.join(', ')}`);
  console.log('Resend ID:', data.id);
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
