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

const DEFAULT_RECIPIENTS = [
  'mcbridej675@gmail.com',
  'john.mcbride.mil@usmc.mil',
  'paul.foersch@usmc.mil',
];
const RECIPIENTS = process.argv.length > 2
  ? process.argv.slice(2)
  : DEFAULT_RECIPIENTS;
const RESEND_KEY = process.env.RESEND_API_KEY;

if (!RESEND_KEY) {
  console.error('Error: RESEND_API_KEY environment variable is required.');
  console.error('Usage: RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs [email1 email2 ...]');
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
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">March 29, 2026</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &amp; Market Impact</p>
    </div>

    <!-- Event 1 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Middle East</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">1. US-Israel War on Iran: Day 29 &mdash; Houthis Enter Conflict, Strait of Hormuz Choked</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The US-Israel military campaign against Iran (since Feb 28) has widened dramatically. Houthis launched missiles at Israel in support of Iran. Iran struck Saudi Arabia, UAE, and Bahrain &mdash; Turkey/NATO intercepted an Iranian ballistic missile violating Turkish airspace. 12 US personnel wounded at a Saudi airbase. Pakistan is mediating, hosting foreign ministers from Turkey, Egypt, and Saudi Arabia. A US envoy expects peace talks &ldquo;this week&rdquo; on a 15-point plan.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Iran effectively closed the Strait of Hormuz on March 4, choking 20% of global oil supply. The OECD cut global growth to 2.9%. S&amp;P Global warns Japan, Germany, and the UK could enter recession.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 6px;">
            <strong>Oil:</strong> Brent surged from ~$72 pre-war to $108&ndash;114/bbl. Analysts warn $200 if war extends to June.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 6px;">
            <strong>Equities:</strong> Nasdaq and Dow in correction territory. Nikkei 225 &minus;5%. VIX doubled from ~13 to 27+.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #4ade80;">Winners:</strong> LMT (+40% YTD, ATH $676), RTX (+68% 12mo), NOC, LHX, XOM, CVX &nbsp;|&nbsp;
            <strong style="color: #f87171;">Losers:</strong> DAL, UAL, AAL, LHA.DE (&minus;11% YTD)
          </p>
        </div>
      </div>
    </div>

    <!-- Event 2 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">UAE / Bahrain</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">2. Iranian Strikes Hit Gulf Aluminum Smelters &mdash; Global Industrial Metals Crisis</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Iranian missile/drone strikes hit Emirates Global Aluminium&rsquo;s Al Taweelah smelter in Abu Dhabi (one of the world&rsquo;s largest) causing &ldquo;significant damage.&rdquo; Aluminium Bahrain (Alba) also damaged. Gulf states produce ~8% of global primary aluminum, nearly all exported through the now-restricted Strait of Hormuz. This marks a direct escalation into attacking civilian industrial infrastructure.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 6px;">
            <strong>Aluminum:</strong> LME prices surged past $3,500/tonne (was ~$2,500 pre-war). Analysts warn $4,000 before summer.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #4ade80;">Winners:</strong> RIO (record $350/t premium), CENX, KALU (US-based, supply crunch beneficiaries) &nbsp;|&nbsp;
            <strong style="color: #f87171;">Losers:</strong> AA (&minus;11% Mar 20, volatile), NHY/NHYDY (&minus;3.5%), BA, F, GM, BALL (rising input costs)
          </p>
        </div>
      </div>
    </div>

    <!-- Event 3 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Global</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">3. Historic IEA Strategic Reserve Release Fails to Tame Oil Markets</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          All 32 IEA member countries released 400 million barrels of oil &mdash; the largest coordinated release in IEA&rsquo;s 50-year history (more than double the 2022 Ukraine release). The US contributed 172M barrels (43%), depleting 41% of its remaining Strategic Petroleum Reserve. The US Treasury also issued a 30-day waiver allowing ~100M barrels of sanctioned Russian oil already at sea.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Despite this, Brent crude <strong>rose 9.2%</strong> the day of the announcement and kept climbing. JPMorgan stated &ldquo;policy measures may have limited impact unless safe passage through the Strait of Hormuz is assured.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 6px;">
            <strong>Oil:</strong> Brent $108&ndash;114 despite the release. &ldquo;Risk off&rdquo; environment: investors fleeing to gold. Bond yields rising, dollar weakening.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #4ade80;">Winners:</strong> XOM (ATH), CVX (+23% YTD), OXY (+30% YTD), SHEL, COP, EPD, ET, MPLX, GOLD, NEM &nbsp;|&nbsp;
            <strong style="color: #f87171;">Losers:</strong> DAL, UAL, AAL, FDX, UPS (fuel costs crushing margins)
          </p>
        </div>
      </div>
    </div>

    <!-- Event 4 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #2563eb; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Trade</span>
          <span style="color: #666; font-size: 11px;">India / EU</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">4. EU-India Free Trade Agreement &mdash; World&rsquo;s Largest Free Trade Zone Takes Shape</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          After 20 years of negotiations, India and the EU finalized a landmark FTA on Jan 27, 2026. It creates the world&rsquo;s largest free trade zone: 2 billion people, ~25% of global GDP. Removes/reduces tariffs on 90%+ of traded goods, saving &euro;4B annually. Expected to take effect ~2027. Gains renewed significance as both blocs diversify supply chains amid the Middle East crisis.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 6px;">
            <strong>Indices:</strong> Indian Sensex rose 2.5% on the announcement. Long-term boost to India&rsquo;s export sectors.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #4ade80;">Winners:</strong> Sun Pharma, Dr. Reddy&rsquo;s, Cipla (pharma); KPR Mill, Welspun (textiles); VOW3.DE, BMW.DE, LVMH &nbsp;|&nbsp;
            <strong style="color: #f87171;">Losers:</strong> Maruti Suzuki (&minus;1.5%), Tata Motors (&minus;1.3%), M&amp;M (&minus;4.2%), Hyundai India (&minus;3.6%)
          </p>
        </div>
      </div>
    </div>

    <!-- Event 5 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #7c3aed; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Humanitarian</span>
          <span style="color: #666; font-size: 11px;">Cuba / Caribbean</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">5. Cuba&rsquo;s Cascading Energy Collapse &mdash; Third Nationwide Blackout in March</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Cuba suffered its third nationwide power grid collapse in March (Mar 4, 16, 21&ndash;22). Daily blackouts of 15+ hours in Havana, worse in rural areas. Root cause: zero fuel imports for 3 months after US intervention in Venezuela cut off Cuba&rsquo;s oil supply. Cuba produces only 40% of its fuel needs. Hospitals suspended operations, schools closed, water pumps stopped. Air France suspended all Cuba flights through at least June 15. Diplomatic talks underway: Cuba agreed to release 51 political prisoners for sanctions relief.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 6px;">
            <strong>Direct impact limited</strong> (Cuba is isolated from global capital markets), but serves as a bellwether for how the energy crisis hits vulnerable nations.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #4ade80;">If sanctions ease:</strong> RCL, CCL, NCLH (cruise lines); MAR, HLT (hotels); ENPH, FSLR (solar) &nbsp;|&nbsp;
            <strong style="color: #f87171;">Losers:</strong> AF.PA (Air France &mdash; route suspensions)
          </p>
        </div>
      </div>
    </div>

    <!-- Market Snapshot -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #4ade80; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Weekly Market Snapshot (Mar 28)</p>
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">Dow Jones</td>
          <td style="padding: 6px 8px; color: #f87171; text-align: right;">-1.73% (45,167)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">S&amp;P 500</td>
          <td style="padding: 6px 8px; color: #f87171; text-align: right;">-2.1% weekly</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">Nasdaq</td>
          <td style="padding: 6px 8px; color: #f87171; text-align: right;">-3.2% weekly</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">STOXX Europe 600</td>
          <td style="padding: 6px 8px; color: #4ade80; text-align: right;">+0.35%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">CSI 300 (China)</td>
          <td style="padding: 6px 8px; color: #f87171; text-align: right;">-1.41%</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">Brent Crude</td>
          <td style="padding: 6px 8px; color: #f87171; text-align: right;">$108&ndash;114/bbl</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">LME Aluminum</td>
          <td style="padding: 6px 8px; color: #f87171; text-align: right;">&gt;$3,500/t</td>
        </tr>
        <tr>
          <td style="padding: 6px 8px; color: #999; font-weight: 600;">VIX</td>
          <td style="padding: 6px 8px; color: #f87171; text-align: right;">27+ (doubled)</td>
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

async function sendToRecipient(email) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_KEY}`,
    },
    body: JSON.stringify({
      from: 'World Monitor <noreply@worldmonitor.app>',
      to: [email],
      subject: `[WM Briefing] Top 5 Global Events — ${today}`,
      html,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend API error ${res.status} for ${email}: ${body}`);
  }

  const data = await res.json();
  console.log(`Sent to ${email} — Resend ID: ${data.id}`);
}

async function sendAll() {
  console.log(`Sending briefing to ${RECIPIENTS.length} recipient(s)...`);
  const results = await Promise.allSettled(RECIPIENTS.map(sendToRecipient));
  let failed = 0;
  for (const r of results) {
    if (r.status === 'rejected') {
      console.error(r.reason.message);
      failed++;
    }
  }
  if (failed) {
    console.error(`${failed}/${RECIPIENTS.length} sends failed.`);
    process.exit(1);
  }
  console.log(`All ${RECIPIENTS.length} emails sent successfully.`);
}

sendAll().catch((err) => {
  console.error('Failed to send emails:', err);
  process.exit(1);
});
