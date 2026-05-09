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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Daily Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Markets &bull; Defense &bull; Health &bull; Commodities</p>
    </div>

    <!-- ===================== EVENT 1: RUSSIA-UKRAINE CEASEFIRE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Eastern Europe &mdash; May 9</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Russia &amp; Ukraine Agree to 3-Day Victory Day Ceasefire &mdash; But Skepticism Runs High</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Moscow and Kyiv have agreed to a <strong>three-day ceasefire from May 9&ndash;11</strong>, coinciding with Russia&rsquo;s Victory Day celebrations. The truce includes a suspension of all military activity and a reciprocal exchange of <strong>1,000 prisoners</strong> from each side. However, credibility is low: previous ceasefire attempts collapsed almost immediately &mdash; Russia launched <strong>108 combat drones and 3 missiles</strong> overnight on May 5&ndash;6 during the last proposed pause, and Zelenskyy reported <strong>1,820 violations</strong> within hours.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Russia&rsquo;s annual Victory Day celebrations in Moscow&rsquo;s Red Square have been <strong>scaled back considerably</strong> due to fears of Ukrainian drone attacks &mdash; a symbolic indicator of the war&rsquo;s toll on Russian confidence. Peace talks remain stalled over territorial disputes and security guarantees.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>European defense stocks have already sold off on ceasefire speculation:</strong> Rheinmetall &minus;5.9%, BAE Systems (BA.L) &minus;3.3%, Saab (SAAB-B.ST) &minus;2.2%, Hensoldt (HAG.DE) &minus;5.9%, Renk (RENK.DE) &minus;3.9%. However, analysts view this as a <strong>buying opportunity</strong> &mdash; NATO defense budgets remain on an upward trajectory regardless of ceasefire outcomes. European natural gas futures (TTF) could ease if a durable truce takes hold. <strong>Ukrainian reconstruction plays</strong> like HeidelbergCement, Holcim (HOLN.SW), and CRH (CRH) could rally on any peace progress. European wheat futures on Euronext may soften if Black Sea shipping routes reopen.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: IRAN &amp; STRAIT OF HORMUZ ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Middle East / Gulf &mdash; May 8&ndash;9</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Strait of Hormuz Escalation Continues &mdash; Iran Vows Retaliation as Oil Whipsaws</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Tensions in the Strait of Hormuz &mdash; through which <strong>~20% of global oil trade</strong> passes &mdash; have escalated further. Fire was exchanged between Iranian and coalition forces, with two Iranian oil tankers hit. Iran launched missiles and drones at UAE shipping targets for a <strong>second consecutive day</strong> and vowed to retaliate if further ships are attacked. The IEA has called this the <strong>&ldquo;largest supply disruption in the history of the global oil market.&rdquo;</strong>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Brent crude has seesawed between <strong>$100&ndash;$114/barrel</strong> this week, settling at ~$102 on Friday. The April 8 ceasefire remains fragile. CNBC warns of a potential <strong>&ldquo;sleepwalking into recession&rdquo;</strong> scenario if the oil shock persists.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Energy majors are net beneficiaries:</strong> Shell (SHEL), BP (BP.L), TotalEnergies (TTE.PA), and Saudi Aramco (2222.SR) see elevated revenue at $100+ crude. Tanker/shipping stocks &mdash; Frontline (FRO), Hafnia (HAFNI.OL) &mdash; benefit from rerouting premiums. <strong>Airlines are the biggest losers:</strong> Ryanair (RYA.L), Lufthansa (LHA.DE), Air India, and Singapore Airlines face margin compression from jet fuel costs. Asian markets fell broadly as import-heavy economies (Japan, South Korea, India) face inflation headwinds. S&amp;P 500 hit 7,399 (+0.84%) as earnings momentum absorbs the shock &mdash; but the key risk is whether sustained energy costs <strong>reprice growth expectations</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: TURKEY ICBM ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">T&uuml;rkiye / NATO &mdash; May 7</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">T&uuml;rkiye Unveils &ldquo;Y&#305;ld&#305;r&#305;mhan&rdquo; ICBM &mdash; 6,000 km Range Puts Europe, Africa &amp; Asia in Reach</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Turkey unveiled the <strong>Y&#305;ld&#305;r&#305;mhan</strong> (&ldquo;Lightning&rdquo;), its first domestically developed intercontinental ballistic missile, at the SAHA 2026 Defence Exhibition in Istanbul. Specifications include a <strong>6,000 km range, Mach 25 speed, and 3,000 kg payload</strong>. If launched from Turkey, it could reach targets across all of Europe, most of Africa, and deep into Asia.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The missile remains a <strong>mock-up with no confirmed flight tests</strong>. Turkey plans to test-fire it in Somalia later this year. The announcement reshapes the NATO power balance &mdash; Turkey is the first NATO member besides the US, UK, and France to develop an ICBM-class weapon. Greece, Israel, and European allies are closely watching the implications.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Turkish defense stocks rallied:</strong> ASELSAN (ASELS.IS) and Turkish Aerospace Industries (TAI) are direct beneficiaries. Globally, missile defense contractors stand to gain as neighboring nations accelerate procurement &mdash; watch Raytheon/RTX (RTX), L3Harris (LHX), and Israel&rsquo;s Rafael Advanced Defense via Elbit Systems (ESLT). The Borsa Istanbul 100 (BIST-100) is near all-time highs on defense-sector momentum. <strong>Greek defense spending</strong> is likely to increase in response, benefiting Hellenic Aerospace Industry suppliers.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: GLOBAL FOOD PRICES ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Global Commodities &mdash; May 8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">FAO: Global Food Prices Hit 3-Year High &mdash; Vegetable Oil +5.9%, Meat at Record</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The FAO Food Price Index averaged <strong>130.7 points in April 2026</strong>, up 1.6% from March and marking the <strong>highest level since February 2023</strong>. This is the third consecutive monthly increase. The FAO Vegetable Oil Price Index surged <strong>5.9% to its highest since July 2022</strong>, driven by palm, soy, sunflower, and rapeseed oil prices. The FAO Meat Price Index hit a <strong>new all-time record</strong> of 129.4 points, led by Brazilian bovine prices amid herd rebuilding.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Key drivers include: rising energy and transport costs from the Hormuz crisis, surging biofuel demand in the US and EU competing for vegetable oils, drought conditions affecting wheat in multiple regions, and rising fertilizer prices linked to Middle East instability. The food price shock disproportionately impacts <strong>emerging markets in Africa, South Asia, and the Middle East</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Agricultural giants benefit:</strong> Archer-Daniels-Midland (ADM), Bunge (BG), and Cargill see wider margins on commodity processing. Palm oil producers Wilmar International (F34.SI) and IOI Corp (IOI.KL) are at multi-year highs. Fertilizer makers Nutrien (NTR), Mosaic (MOS), and Yara International (YAR.OL) benefit from elevated pricing. <strong>On the losing side:</strong> consumer staples companies face margin pressure &mdash; Nestl&eacute; (NESN.SW), Unilever (ULVR.L), and Mondelez (MDLZ) will likely pass costs to consumers, risking demand destruction. <strong>Emerging market ETFs</strong> (EEM, VWO) face headwinds as food inflation erodes consumer spending power.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: HANTAVIRUS CRUISE SHIP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Spain / Global Health &mdash; May 8&ndash;9</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Hantavirus-Stricken Cruise Ship MV Hondius Nears Canary Islands &mdash; 3 Dead, WHO Monitoring</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Spanish authorities are preparing emergency evacuations as the <strong>MV Hondius</strong>, carrying <strong>140+ passengers and crew</strong>, approaches Tenerife in the Canary Islands. <strong>Three people have died</strong> and five confirmed infected with the <strong>Andes strain of hantavirus</strong> &mdash; a rare variant known for limited person-to-person transmission. The ship is expected to arrive Sunday.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Passengers will be evacuated in <strong>isolated, guarded vehicles</strong> with airport areas cordoned off. The US and UK have agreed to send repatriation flights. The <strong>WHO chief personally reassured Tenerife residents</strong>, underscoring the global significance of this outbreak. The WHO issued a formal Disease Outbreak News (DON) bulletin. Tourism-dependent Canary Islands face economic anxiety.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Cruise line stocks are under immediate pressure:</strong> Carnival (CCL), Royal Caribbean (RCL), and Norwegian Cruise Line (NCLH) face sentiment drag &mdash; any hantavirus cases in disembarked passengers could accelerate selling. Travel/tourism ETFs (JETS, AWAY) are exposed. <strong>On the upside:</strong> diagnostic and biosafety companies could see interest &mdash; bioM&eacute;rieux (BIM.PA) and Hologic (HOLX) produce relevant assays. If the outbreak is contained quickly, this may be a short-lived overhang. Watch for <strong>WHO escalation signals</strong> &mdash; any upgrade to a Public Health Emergency of International Concern (PHEIC) would amplify the market reaction significantly.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #eab308; padding: 20px; margin-bottom: 24px;">
      <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; May 9, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px; color: #ccc;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 0; color: #888;">S&amp;P 500</td>
          <td style="padding: 6px 0; text-align: right; color: #22c55e;">7,398.93 (+0.84%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 0; color: #888;">Nasdaq</td>
          <td style="padding: 6px 0; text-align: right; color: #22c55e;">26,247.08 (+1.71%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 0; color: #888;">Dow Jones</td>
          <td style="padding: 6px 0; text-align: right; color: #22c55e;">49,609.16 (+0.02%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 0; color: #888;">Brent Crude</td>
          <td style="padding: 6px 0; text-align: right; color: #dc2626;">~$102/bbl (volatile)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="padding: 6px 0; color: #888;">USD/JPY</td>
          <td style="padding: 6px 0; text-align: right; color: #ccc;">&yen;156.5</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #888;">FAO Food Index</td>
          <td style="padding: 6px 0; text-align: right; color: #dc2626;">130.7 (3-yr high)</td>
        </tr>
      </table>
    </div>

    <!-- ===================== WATCHLIST ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">What to Watch Next</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Russia-Ukraine:</strong> Whether the May 9&ndash;11 ceasefire holds beyond 24 hours. Any prisoner exchange would be a genuine confidence-building measure. European defense and reconstruction stocks will move on headlines.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Iran/Hormuz:</strong> Iran&rsquo;s response to renewed diplomatic proposals. If Brent sustains above $110, recession probabilities rise materially. Central banks in import-heavy economies may be forced into rate action.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Food inflation:</strong> The May FAO report (early June) will show whether Hormuz-driven cost pressures are accelerating. Social instability risk in North Africa and the Middle East rises with every month of elevated food prices.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Hantavirus:</strong> WHO decision on PHEIC status. Any confirmed person-to-person transmission outside the ship would be a major escalation for travel stocks globally.
      </p>
    </div>

    <!-- ===================== ALSO ON THE RADAR ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Also on the Radar</p>
      <p style="color: #bbb; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
        <strong style="color: #ccc;">North Korea</strong> &mdash; Pyongyang announced deployment of new 155mm long-range artillery (60+ km range) targeting Seoul&rsquo;s capital region and will commission its first naval destroyer by mid-June. South Korean defense stocks (Hanwha Aerospace, LIG Nex1) and K-defense ETFs may see movement.
      </p>
      <p style="color: #bbb; font-size: 12px; line-height: 1.6; margin: 0;">
        <strong style="color: #ccc;">US Trade Court</strong> &mdash; A US trade court declared Trump&rsquo;s latest 10% tariffs unlawful. If upheld on appeal, tariff-sensitive sectors (importers, retailers, auto) could see relief rallies.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; NPR &bull; CNN &bull; Bloomberg &bull; CNBC &bull; Euronews &bull; Reuters &bull; FAO &bull; WHO &bull; Defense News &bull; Breaking Defense &bull; The Moscow Times &bull; Benzinga &bull; Yahoo Finance &bull; Patronus Partners &bull; Anadolu Agency &bull; ABC News &bull; STAT News
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
