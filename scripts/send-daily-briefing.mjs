#!/usr/bin/env node
/**
 * World Monitor — Global Daily Briefing Email Sender
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs
 */

const RECIPIENTS = ['johnmcbride2928@gmail.com'];

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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Health &bull; Space &bull; Climate &bull; Financial Markets</p>
    </div>

    <!-- ===================== EVENT 1: IRAN-US CEASEFIRE TENSIONS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Geopolitics &mdash; May 27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran-US Ceasefire Negotiations at Critical Juncture as Both Sides Escalate Demands</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Iran and the United States appear to be closing in on an agreement to convert the existing two-week ceasefire into a longer-lasting settlement, but both sides continue raising demands. Iran&rsquo;s IRGC has asserted its <strong>&ldquo;legitimate right&rdquo;</strong> to respond to any ceasefire violations following U.S. <strong>&ldquo;self-defense strikes&rdquo;</strong> targeting Iranian missile launch sites and boats on May 25&ndash;26. Tensions are compounded by Israel&rsquo;s intensified attacks against Hezbollah in Lebanon, including strikes near Lebanon&rsquo;s largest dam, drawing international condemnation.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          At least <strong>16 people were killed</strong> and 21 injured by Israeli drone strikes across southern Lebanon despite the ceasefire framework. Meanwhile, <strong>27 people were killed</strong> in Russian drone and missile attacks on Ukraine, showing no let-up in European theatre hostilities.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #22c55e; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> Brent crude at ~$96/bbl, down ~$4 today as markets cautiously price in a deal. Still +54% year-over-year due to conflict-related supply disruption. A permanent settlement could push Brent toward $80; collapse of talks risks $120+.<br/><br/>
            <strong>Stocks to watch:</strong><br/>
            &bull; <strong>XOM (ExxonMobil)</strong> &amp; <strong>CVX (Chevron)</strong> &mdash; Downside risk if peace holds, as elevated oil prices have boosted margins ~40% YTD.<br/>
            &bull; <strong>LMT (Lockheed Martin)</strong> &amp; <strong>RTX (RTX Corp)</strong> &mdash; Defense primes remain elevated; any de-escalation could trigger profit-taking.<br/>
            &bull; <strong>DAL (Delta)</strong> &amp; <strong>UAL (United)</strong> &mdash; Airlines benefit from lower jet fuel costs if oil falls; potential 8&ndash;12% upside on settlement.<br/>
            &bull; <strong>TECK (Teck Resources)</strong> &mdash; Middle East shipping disruptions have inflated freight costs for bulk commodities.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: EBOLA OUTBREAK ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Africa / Global Health &mdash; May 26&ndash;27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">WHO Declares Ebola PHEIC as Outbreak Spreads from Congo to Uganda &mdash; 10 Countries at Risk</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The World Health Organization declared the Ebola Bundibugyo virus outbreak in the Democratic Republic of Congo a <strong>Public Health Emergency of International Concern (PHEIC)</strong> on May 17. As of May 26, the DRC reports <strong>121 confirmed cases, 17 deaths</strong>, plus <strong>1,077 suspected cases with 238 deaths</strong> across Ituri, North Kivu, and South Kivu provinces. The virus has crossed into <strong>Uganda (7 confirmed cases, 1 death in Kampala)</strong>, and health authorities warn 10 neighboring countries are at risk.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Containment efforts face severe challenges: attacks on health workers by residents, armed conflict in eastern DRC limiting access, and rapid urban spread into Kampala. The U.S. CDC and DHS announced enhanced travel screening and entry restrictions on May 18.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #22c55e; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            If containment fails and the outbreak reaches major African trade hubs (Nairobi, Dar es Salaam), expect travel and commodity disruptions. Mining operations in eastern DRC (cobalt, coltan) could be directly affected.<br/><br/>
            <strong>Stocks to watch:</strong><br/>
            &bull; <strong>MRNA (Moderna)</strong> &amp; <strong>JNJ (Johnson &amp; Johnson)</strong> &mdash; Both have Ebola vaccine candidates. JNJ&rsquo;s Zabdeno/Mvabea regimen is already deployed. Upside on emergency procurement contracts.<br/>
            &bull; <strong>GILD (Gilead Sciences)</strong> &mdash; Remdesivir showed some efficacy in prior Ebola outbreaks; potential stockpile orders.<br/>
            &bull; <strong>GLEN.L (Glencore)</strong> &mdash; Major DRC cobalt/copper producer; mine shutdowns = supply squeeze = higher prices.<br/>
            &bull; <strong>ALB (Albemarle)</strong> &mdash; DRC cobalt disruption benefits alternative battery material suppliers.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: CHINA SHENZHOU 23 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">China / Space / Technology &mdash; May 24&ndash;25</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China Launches Shenzhou 23 with First Year-Long Space Mission &mdash; Hong Kong&rsquo;s First Astronaut Aboard</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China successfully launched <strong>Shenzhou 23</strong> on May 24 from Jiuquan Satellite Launch Center, sending three astronauts to the Tiangong space station. Commander <strong>Zhu Yangzhu</strong> is set to remain in orbit for <strong>one full year</strong> &mdash; China&rsquo;s first attempt at a year-long mission to study human adaptability in long-duration spaceflight. <strong>Lai Ka-ying</strong> became the first astronaut from Hong Kong to travel to space.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The mission signals China&rsquo;s accelerating ambitions toward a lunar base (targeted 2030) and demonstrates Beijing&rsquo;s space program and industrial policy moving in lockstep. The supply chain spillovers span batteries, semiconductors, life-support systems, and advanced materials.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #22c55e; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            China&rsquo;s space industrial complex is now investable. The mission validates supply chains across multiple sectors. Geopolitically, it intensifies the space race narrative, benefitting both Chinese and Western space equities.<br/><br/>
            <strong>Stocks to watch:</strong><br/>
            &bull; <strong>688256.SS (Cambricon)</strong> &mdash; AI chip maker; +160% YoY revenue in Q1 2026 as domestic compute localizes.<br/>
            &bull; <strong>JKS (JinkoSolar)</strong> &mdash; Space-grade solar tech spillover; 68 GW panel exports in March 2026.<br/>
            &bull; <strong>RKLB (Rocket Lab)</strong> &amp; <strong>ASTS (AST SpaceMobile)</strong> &mdash; Western space equities rise on renewed space race narrative.<br/>
            &bull; <strong>LMT (Lockheed)</strong> &amp; <strong>BA (Boeing)</strong> &mdash; NASA/DoD funding pressure to match Chinese cadence in cislunar operations.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: EUROPE HEAT WAVE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Europe / Climate / Energy &mdash; May 25&ndash;27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Record-Breaking May Heat Wave Sweeps Northwest Europe &mdash; London Hits 95&deg;F, Power Prices Go Negative</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          An unprecedented May heat wave has shattered temperature records across <strong>northwest Europe</strong>. London recorded <strong>95&deg;F (35&deg;C)</strong> for two consecutive days &mdash; the earliest such temperature ever recorded in the UK. Governments across France, Germany, the Netherlands, and Belgium issued emergency health warnings. Water shortages are emerging in southeast England.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The extreme heat has <strong>sent European power prices into negative territory</strong> as solar generation surged beyond grid capacity. Europe&rsquo;s massive renewable buildout means the grid now frequently produces more power than it can absorb during peak solar hours, creating both opportunities and instability. Agricultural concerns are rising with crop stress in France and Germany threatening wheat and barley yields.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #22c55e; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Negative power prices crush utility margins but benefit energy storage and demand-response companies. Agricultural commodities are moving on crop damage concerns. If the heat persists, wheat futures could spike 10&ndash;15%.<br/><br/>
            <strong>Stocks to watch:</strong><br/>
            &bull; <strong>ENPH (Enphase Energy)</strong> &amp; <strong>SEDG (SolarEdge)</strong> &mdash; Solar inverter demand accelerates as Europe doubles down on distributed generation.<br/>
            &bull; <strong>FLNC (Fluence Energy)</strong> &amp; <strong>STEM (Stem Inc)</strong> &mdash; Grid-scale battery storage becomes critical to absorb excess solar.<br/>
            &bull; <strong>ADM (Archer Daniels Midland)</strong> &amp; <strong>BG (Bunge)</strong> &mdash; Wheat/barley crop stress in France and Germany = grain price inflation.<br/>
            &bull; <strong>UU.L (United Utilities)</strong> &mdash; UK water companies face infrastructure strain and regulatory scrutiny from drought conditions.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: HAJJ PILGRIMAGE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Saudi Arabia / Religion / Economy &mdash; May 26&ndash;27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">1.5 Million Pilgrims Arrive in Saudi Arabia for Hajj Amid Regional War and Extreme Heat Concerns</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          More than <strong>1.5 million pilgrims</strong> have arrived in Saudi Arabia for the annual <strong>Hajj pilgrimage</strong>, one of the Five Pillars of Islam. This year&rsquo;s Hajj takes place against an extraordinarily tense geopolitical backdrop &mdash; the fragile Iran-US ceasefire, active Israeli operations in Lebanon, and Houthi disruption of Red Sea shipping have all complicated travel routes and security planning.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Saudi authorities have deployed record security personnel and heat-mitigation infrastructure after last year&rsquo;s deadly heat-related deaths. The Hajj represents a <strong>$12+ billion annual revenue injection</strong> into Saudi Arabia&rsquo;s economy and is a centerpiece of Vision 2030&rsquo;s tourism diversification strategy. Airlines across the Middle East, South Asia, and Southeast Asia report full load factors on Hajj routes.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #22c55e; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Hajj is a seasonal GDP driver for Saudi Arabia and Gulf economies. Successful execution despite regional tensions reinforces Saudi soft power and Vision 2030 credibility. Any security incident would have outsized market impact given current tensions.<br/><br/>
            <strong>Stocks to watch:</strong><br/>
            &bull; <strong>1810.HK (Xiaomi)</strong> &amp; <strong>Samsung</strong> &mdash; Hajj-related consumer electronics demand spike across Muslim-majority markets.<br/>
            &bull; <strong>ABNB (Airbnb)</strong> &amp; <strong>4689.T (LY Corp/Yahoo Japan)</strong> &mdash; Accommodation platforms see Hajj-season booking surges in Mecca/Medina.<br/>
            &bull; <strong>SAUDIA (Tadawul)</strong> &amp; <strong>EK (Emirates Group)</strong> &mdash; Gulf carriers at peak capacity on pilgrimage routes.<br/>
            &bull; <strong>2222.SR (Saudi Aramco)</strong> &mdash; Barometer of Saudi economic confidence; Hajj success supports broader Vision 2030 narrative.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== MARKET OVERVIEW ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #22c55e; padding: 20px; margin-bottom: 24px;">
      <p style="color: #22c55e; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Financial Markets Overview &mdash; Key Levels</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px; color: #ccc;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 8px 0; color: #888;">Brent Crude</td>
          <td style="padding: 8px 0; text-align: right; color: #ef4444;">~$96/bbl (&darr; $4 today)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 8px 0; color: #888;">Brent YoY</td>
          <td style="padding: 8px 0; text-align: right; color: #ef4444;">+54% (conflict premium)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 8px 0; color: #888;">Key Risk</td>
          <td style="padding: 8px 0; text-align: right; color: #f59e0b;">Iran talks collapse &rarr; $120+ oil</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 8px 0; color: #888;">Key Opportunity</td>
          <td style="padding: 8px 0; text-align: right; color: #22c55e;">Iran deal &rarr; airlines, consumer</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #888;">Sector Rotation Signal</td>
          <td style="padding: 8px 0; text-align: right; color: #7c3aed;">Defense &rarr; Renewables / Health</td>
        </tr>
      </table>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The dominant market force remains the Iran ceasefire binary.</strong> Oil at $96 is pricing in ~60% probability of a deal. Long airlines/consumer discretionary vs. short energy is the consensus trade if you believe de-escalation is coming. But be aware: any provocation from Iran, Israel, or Houthis could reverse this violently within hours.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Ebola PHEIC is an underpriced tail risk.</strong> Markets are not pricing in a pandemic scenario. If the outbreak reaches Nairobi or Lagos, expect flight-to-safety trades (gold, USD, treasuries) and a hit to frontier market ETFs (FM, EZA). Pharma names with Ebola exposure (JNJ, MRNA, GILD) offer asymmetric upside.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Europe&rsquo;s climate transition is accelerating faster than expected.</strong> Negative power prices in May were unthinkable 3 years ago. Energy storage is the structural winner (FLNC, STEM). Agricultural commodity traders should watch French wheat closely &mdash; any further heat damage could trigger a 2022-style grain shock.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CNN &bull; NPR &bull; Al Jazeera &bull; Reuters &bull; Bloomberg &bull; WHO &bull; CDC &bull; Euronews &bull; BBC &bull; Global Times &bull; Fortune &bull; Trading Economics &bull; Investing.com &bull; Wikipedia &bull; NBC News &bull; Washington Post &bull; CBS News &bull; Relief Web
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Not financial advice. Sources verified across multiple outlets where possible.<br/>
        Generated ${today}
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
