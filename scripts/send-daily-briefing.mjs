#!/usr/bin/env node
/**
 * Daily Global Intelligence Briefing — Email Sender
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs
 *
 * Or set RESEND_API_KEY in your .env file and run:
 *   node scripts/send-daily-briefing.mjs
 */

const RECIPIENT = process.argv[2] || 'johnmcbride2928@gmail.com';
const RESEND_KEY = process.env.RESEND_API_KEY;

if (!RESEND_KEY) {
  console.error('Error: RESEND_API_KEY environment variable is required.');
  console.error('Usage: RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs [email]');
  process.exit(1);
}

const today = new Date().toLocaleDateString('en-US', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
});

const html = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 720px; margin: 0 auto; background: #0a0a0a; color: #e0e0e0; padding: 0;">
  <div style="background: linear-gradient(90deg, #4ade80, #22d3ee); height: 4px;"></div>
  <div style="padding: 32px 28px;">

    <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 28px;">
      <tr>
        <td style="width: 36px; height: 36px; border-radius: 50%; border: 1px solid #222; text-align: center; vertical-align: middle; background: #111;">
          <span style="font-size: 18px; color: #4ade80;">&#9678;</span>
        </td>
        <td style="padding-left: 10px;">
          <div style="font-size: 15px; font-weight: 800; color: #fff; letter-spacing: -0.5px;">WORLD MONITOR</div>
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Daily Global Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #4ade80; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">March 31, 2026</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &amp; Market Impact</p>
    </div>

    <!-- Event 1 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Middle East &mdash; Day 31</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">1. Massive US-Israel Strikes Hit Isfahan; Iran&rsquo;s Parliament Approves Strait of Hormuz Toll</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A new wave of US-Israeli strikes hit Tehran and Isfahan overnight, with bunker-busters triggering massive secondary explosions near Mount Soffeh &mdash; believed to be a military site. NASA fire-tracking satellites confirmed a major blast at Isfahan. Meanwhile, Iran&rsquo;s parliament approved a plan to institute a toll on Strait of Hormuz transit, formalizing the chokehold on 20% of global oil supply. Trump renewed threats to &ldquo;completely obliterate&rdquo; Iranian power plants and desalination facilities if the Strait is not reopened immediately.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Pakistan-hosted peace talks continue: Trump claims Iran accepted &ldquo;most of&rdquo; a 15-point plan. Iran denies any negotiations while military operations continue. The USS Tripoli with 3,500 Marines arrived in-theater, raising fears of ground operations. The OECD cut global growth to 2.9%; the IEA calls this the biggest oil shock in history.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 6px;">
            <strong>Oil:</strong> Brent settled ~$112/bbl, briefly spiking to $116. Pre-war was ~$72. Analysts warn $200 if war extends to June.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 6px;">
            <strong>Bonds:</strong> 10Y Treasury yield fell to 4.22% as rate-cut expectations surged &mdash; CME FedWatch now pricing 68% chance of June cut (up from 42%).
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #4ade80;">Winners:</strong> LMT (+40% YTD, ATH), RTX, NOC, LHX (defense); XOM (ATH), CVX (+23% YTD), OXY (+30% YTD), SHEL, COP &nbsp;|&nbsp;
            <strong style="color: #f87171;">Losers:</strong> DAL, UAL, AAL (fuel costs); FDX, UPS (logistics margins crushed)
          </p>
        </div>
      </div>
    </div>

    <!-- Event 2 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Lebanon / UN</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">2. Three UN Peacekeepers Killed in Lebanon in 48 Hours &mdash; Emergency UNSC Session Called</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Two UN peacekeepers were killed when their convoy was struck by an &ldquo;explosion of undetermined origin&rdquo; in southern Lebanon &mdash; the third peacekeeper death in two days. The UN Security Council convened an emergency session. Israel continues expanding its ground invasion northward into Lebanon to push back Hezbollah, which entered the war on March 2. At least 1,189 people have been killed in Israeli strikes on Lebanon since then, including 124 children. UN humanitarian coordinator Tom Fletcher warned the world to prepare for &ldquo;a new addition&rdquo; to occupied territory.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 6px;">
            <strong>Risk premium:</strong> Further escalation risk feeds into oil and gold safe-haven bids. UNSC fracture could widen sanctions/diplomatic fallout.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #4ade80;">Winners:</strong> GOLD, NEM, AEM (gold miners); GLD, IAU (gold ETFs); defense stocks (LMT, RTX) &nbsp;|&nbsp;
            <strong style="color: #f87171;">Losers:</strong> TEVA (Israel-based pharma, geopolitical risk); Lebanese sovereign bonds (already in default)
          </p>
        </div>
      </div>
    </div>

    <!-- Event 3 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Europe / NATO</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">3. NATO Fractures &mdash; Italy Blocks US Base Access, France Pushes Back on Iran Campaign</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Italy denied permission for US military aircraft to land at the Sigonella air base in Sicily before flying to the Middle East &mdash; a stunning break from a key NATO ally. France also pushed back against US-Israeli military operations, as Trump criticized European NATO members as &ldquo;unhelpful.&rdquo; This marks the deepest transatlantic rift since the 2003 Iraq War. Separately, EU foreign policy chief Kaja Kallas and several EU ministers arrived in Kyiv to mark the 4th anniversary of the Bucha massacre, reinforcing that Europe&rsquo;s strategic focus remains on Ukraine, not Iran.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Ukrainian drones damaged Russia&rsquo;s Baltic Sea port of Ust-Luga again. Russia expelled a British diplomat accused of economic espionage. Zelenskyy announced &ldquo;historic&rdquo; security agreements with Saudi Arabia, UAE, and Qatar during a Middle East tour.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 6px;">
            <strong>Euro:</strong> EUR/USD near 1.14, dollar strengthening on safe-haven flows. European defense spending narrative accelerates.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #4ade80;">Winners:</strong> RHM.DE (Rheinmetall), BA.L (BAE Systems), SAF.PA (Safran), AIR.PA (Airbus Defence) &mdash; European rearmament theme &nbsp;|&nbsp;
            <strong style="color: #f87171;">Losers:</strong> European banks (political uncertainty), travel stocks (TUI, IAG, LHA.DE)
          </p>
        </div>
      </div>
    </div>

    <!-- Event 4 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #2563eb; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Economy</span>
          <span style="color: #666; font-size: 11px;">China / Global</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">4. China&rsquo;s Manufacturing Returns to Growth &mdash; PMI Hits 50.4 as Rest of World Slows</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China&rsquo;s official manufacturing PMI rose to 50.4 in March (from 49.0 in Feb), marking the first expansion this year and a rare bright spot in a darkening global economy. The reading suggests Beijing&rsquo;s stimulus measures are gaining traction, even as export-dependent economies in Asia buckle under the oil shock. South Korea is weighing driving restrictions if crude hits $120&ndash;$130/bbl &mdash; its first since the 1991 Gulf War. Australia announced free public transport in two states to ease fuel-cost pain. The OECD raised G20 inflation forecasts to 4% and cut growth to 2.9%.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 6px;">
            <strong>China divergence:</strong> Nikkei 225 &minus;1.6%, Hang Seng &minus;0.3%, Shanghai &minus;0.8% today &mdash; but China&rsquo;s PMI recovery is a medium-term tailwind.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #4ade80;">Winners:</strong> BABA, JD, PDD (China consumer recovery); KWEB (China tech ETF); BHP, RIO, VALE (commodity demand) &nbsp;|&nbsp;
            <strong style="color: #f87171;">Losers:</strong> BSE SENSEX (&minus;15.6% YTD); Korean exporters (005930.KS Samsung, 000660.KS SK Hynix); Japan autos (7203.T Toyota)
          </p>
        </div>
      </div>
    </div>

    <!-- Event 5 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #7c3aed; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Humanitarian</span>
          <span style="color: #666; font-size: 11px;">Haiti / Sudan / Africa</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">5. Haiti Gang Massacre Kills 70+; Sudan Drone Strike Hits Market Near Chad Border</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Violence erupted in central Haiti as a powerful gang warred with vigilante groups in Petite-Rivi&egrave;re de l&rsquo;Artibonite, killing at least 70 people as a UN force prepares to deploy. In Sudan&rsquo;s Darfur, a drone strike hit a market near the Chad border, killing 4 and wounding 24 including 7 children. Meanwhile, 6,000&ndash;8,000 tonnes of Kenyan tea worth $24M sits stranded at Mombasa port as the Middle East war disrupts Red Sea and Hormuz shipping routes &mdash; a microcosm of how the energy crisis is devastating developing economies far from the conflict zone.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 6px;">
            <strong>Shipping:</strong> Container delays at 2M+ TEUs &mdash; worst since COVID. Shipping rates surging on Red Sea/Hormuz diversions.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #4ade80;">Winners:</strong> ZIM, MATX, DAC (container shippers benefiting from rate spikes); ADM, BG (agricultural traders) &nbsp;|&nbsp;
            <strong style="color: #f87171;">Losers:</strong> Emerging market ETFs (EEM, VWO); frontier market bonds; retailers dependent on global supply chains (IKEA, H&amp;M)
          </p>
        </div>
      </div>
    </div>

    <!-- Market Snapshot -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; March 31, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">S&amp;P 500</td>
          <td style="padding: 6px 8px; color: #f87171; text-align: right;">&minus;0.4% (worst month since 2022)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">Nasdaq</td>
          <td style="padding: 6px 8px; color: #f87171; text-align: right;">&minus;0.7%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">Nikkei 225</td>
          <td style="padding: 6px 8px; color: #4ade80; text-align: right;">+6.0% YTD (best performer)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">FTSE 100</td>
          <td style="padding: 6px 8px; color: #4ade80; text-align: right;">+0.2% (10,147)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">BSE SENSEX (India)</td>
          <td style="padding: 6px 8px; color: #f87171; text-align: right;">&minus;15.6% YTD (worst performer)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">Brent Crude</td>
          <td style="padding: 6px 8px; color: #f87171; text-align: right;">~$112/bbl (spike to $116)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">10Y Treasury</td>
          <td style="padding: 6px 8px; color: #4ade80; text-align: right;">4.22% (yields falling)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">EUR/USD</td>
          <td style="padding: 6px 8px; color: #999; text-align: right;">1.14</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">China PMI</td>
          <td style="padding: 6px 8px; color: #4ade80; text-align: right;">50.4 (expansion)</td>
        </tr>
      </table>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Not investment advice.<br/>
        Always consult a qualified financial advisor before making investment decisions.
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #4ade80; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

async function send() {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_KEY}`,
    },
    body: JSON.stringify({
      from: 'World Monitor <noreply@worldmonitor.app>',
      to: [RECIPIENT],
      subject: `[WM Briefing] Top 5 Global Events — March 31, 2026`,
      html,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`Resend API error ${res.status}: ${body}`);
    process.exit(1);
  }

  const data = await res.json();
  console.log(`Email sent successfully to ${RECIPIENT}`);
  console.log('Resend ID:', data.id);
}

send().catch((err) => {
  console.error('Failed to send email:', err);
  process.exit(1);
});
