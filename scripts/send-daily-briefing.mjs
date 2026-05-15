#!/usr/bin/env node
/**
 * World Monitor — Global Daily Briefing Email Sender
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs
 */

const RECIPIENTS = [
  'mcbridej675@gmail.com',
  'john.mcbride.mil@usmc.mil',
  'paul.foersch@usmc.mil',
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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Conflict &bull; Health &bull; Climate &bull; Financial Markets &bull; Stock Impact</p>
    </div>

    <!-- ===================== EVENT 1: STRAIT OF HORMUZ SHIP SEIZURES ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Energy / Persian Gulf / Global Trade &mdash; May 14&ndash;15</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Strait of Hormuz Escalation: Iran Seizes Ship Off UAE, Second Vessel Attacked and Sunk Near Oman</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Tensions in the world&rsquo;s most critical energy chokepoint intensified sharply as <strong>Iran seized a commercial vessel</strong> anchored 44 miles northeast of the UAE port of Fujairah, with unauthorized personnel diverting it toward Iranian waters. Simultaneously, a <strong>second ship was attacked and sunk</strong> near the coast of Oman. The UK Maritime Trade Operations center confirmed both incidents.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The seizures come as the Iran-U.S. ceasefire is crumbling. Roughly <strong>20% of the world&rsquo;s oil trade</strong> transits the Strait of Hormuz, and crude flows have declined by nearly <strong>6 million barrels per day</strong> since the conflict began. <strong>Brent crude</strong> surged to <strong>$107.77/barrel</strong>, while <strong>WTI</strong> hit <strong>$102.18</strong>. The IEA has warned the market could remain &ldquo;severely undersupplied until October.&rdquo; This is the single most consequential ongoing disruption to global energy supply chains.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Oil above $100 is the dominant macro force driving global inflation and stagflation risk. 10-year Treasury yields spiked 9bps to <strong>4.55%</strong> (highest in a year). Global equities sold off: <strong>S&amp;P 500 &minus;1.24%</strong>, <strong>Nasdaq &minus;1.54%</strong>, <strong>Dow &minus;1.07%</strong>.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>XOM</strong> (ExxonMobil), <strong>CVX</strong> (Chevron), <strong>SHEL</strong> (Shell), <strong>BP</strong> &mdash; major beneficiaries of elevated crude; XOM and CVX near 52-week highs. <strong>DAL, UAL, AAL</strong> (Delta, United, American Airlines) &mdash; jet fuel costs squeezing margins hard. <strong>HAL</strong> (Halliburton) &mdash; oilfield services demand surging. <strong>GLD/Gold</strong> &mdash; safe-haven flows accelerating. <strong>DANGOTE</strong> (NGX: DANGCEM) &mdash; Nigeria&rsquo;s Dangote Refinery emerging as a critical alternative supplier, exported record 1.66B liters in April.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: RUSSIA-UKRAINE KYIV APARTMENT ATTACK ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Conflict / Europe &mdash; May 14&ndash;15</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Russian Missile Strikes Kyiv Apartment Building: 24 Killed; Council of Europe Approves War Crimes Tribunal</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A Russian missile strike on a <strong>Kyiv residential apartment building</strong> killed <strong>24 people including three children</strong>, President Zelenskyy confirmed. The attack was part of a broader escalatory campaign that has included <strong>800+ drone strikes</strong> across Ukraine in recent days, hitting Kremenchuk, Kharkiv, Sumy, and Odesa. The scale of bombardment represents a new phase of intensified long-range warfare.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a landmark legal development, the <strong>Council of Europe&rsquo;s Committee of Ministers</strong> approved a key agreement to establish a <strong>Special Tribunal for the Crime of Aggression against Ukraine</strong>. Ukrainian Foreign Minister Andrii Sybiha said a &ldquo;point of no return&rdquo; had been passed. This moves the international community closer to formal accountability for Russia&rsquo;s invasion and sets a precedent in international law.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Escalation supports <strong>defense and grain</strong> sectors while pressuring European equities. European natural gas futures ticked higher on renewed supply anxiety. The tribunal decision reinforces that sanctions will persist long-term.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>RTX</strong> (RTX Corp) &mdash; Patriot air defense systems are the backbone of Ukraine&rsquo;s shield; demand accelerates. <strong>LMT</strong> (Lockheed Martin) &mdash; HIMARS, JASSM-ER supplier; NATO replenishment orders growing. <strong>RHM.DE</strong> (Rheinmetall) &mdash; Germany&rsquo;s top defense contractor surging on European rearmament. <strong>NOC</strong> (Northrop Grumman) &mdash; integrated air defense systems. <strong>Wheat futures / WEAT</strong> &mdash; Odesa and Kharkiv are key grain export hubs; disruption bullish for global food prices. <strong>BG</strong> (Bunge) &mdash; Ukrainian grain disruption impacts agricultural trading.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: EBOLA OUTBREAK CONGO ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Global Health / Africa &mdash; May 15</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">New Ebola Outbreak in DR Congo: 246 Suspected Cases, 65 Dead &mdash; No Vaccine for This Strain</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Africa CDC</strong> confirmed a new Ebola outbreak in the <strong>Democratic Republic of Congo&rsquo;s remote Ituri province</strong>, with <strong>246 suspected cases and 65 deaths</strong> recorded in the Mongwalu and Rwampara health zones. The outbreak has also reached <strong>Bunia</strong>, the provincial capital, raising fears of wider urban spread.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Crucially, the outbreak involves the <strong>Bundibugyo strain</strong> of Ebola, for which <strong>no licensed vaccines or treatments exist</strong>. Congo&rsquo;s stockpile of ~2,000 doses of <strong>Ervebo</strong> (the existing Ebola vaccine) is only effective against the Zaire strain. The WHO, UNICEF, and pharmaceutical companies are holding emergency coordination meetings. The remote, conflict-affected terrain of Ituri province &mdash; home to active militia violence &mdash; complicates response efforts significantly.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Ebola outbreaks historically trigger pharma/biotech spikes and weigh on travel and mining sectors with African exposure. The &ldquo;no available vaccine&rdquo; angle amplifies urgency for new development contracts.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>MRK</strong> (Merck) &mdash; manufacturer of Ervebo; even though it targets the Zaire strain, Merck is the lead Ebola vaccine player and will be central to any response. <strong>REGN</strong> (Regeneron) &mdash; developed Inmazeb, the first approved Ebola treatment; potential fast-track for Bundibugyo adaptation. <strong>GOVX</strong> (GeoVax Labs) &mdash; developing next-gen Ebola/Marburg vaccines. <strong>GILD</strong> (Gilead Sciences) &mdash; remdesivir was originally an Ebola candidate. <strong>African mining stocks</strong> (GLNCY/Glencore, Anglo American) &mdash; DRC is a major cobalt/copper producer; outbreak disruptions could tighten supply.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: INDIA DEADLY DUST STORMS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Climate / South Asia &mdash; May 14</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Deadly Dust Storms and Lightning Kill 96 in Northern India; Uttar Pradesh Devastated</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Dust storms, heavy rain, and lightning killed at least <strong>96 people</strong> and injured more than 50 across <strong>Uttar Pradesh</strong>, India&rsquo;s most populous state (240 million people). The storms swept across eastern and central districts, <strong>flattening homes, uprooting trees, and snapping electrical poles</strong>. Bhadohi district recorded 18 deaths, Prayagraj 17, and Mirzapur 15.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Chief Minister Yogi Adityanath ordered <strong>relief operations completed within 24 hours</strong> and emergency compensation for affected families. The disaster underscores the accelerating frequency and intensity of extreme weather events in South Asia, where pre-monsoon storms (March&ndash;June) are becoming more deadly. India experienced multiple record-breaking heatwaves earlier this month, and the interplay between extreme heat and sudden storms is a hallmark of climate-driven atmospheric instability.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Impact is concentrated on Indian domestic markets and agricultural commodities. Uttar Pradesh is India&rsquo;s largest agricultural state. Infrastructure damage to power grids affects rural electrification and crops ahead of monsoon planting.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>NIFTY 50 / SENSEX</strong> &mdash; Indian benchmark indices face short-term pressure from disaster costs and agricultural disruption. <strong>HDFC Bank, ICICI Bank</strong> (HDB, IBN) &mdash; India&rsquo;s largest banks; rural loan portfolios exposed to crop damage. <strong>Tata Power / NTPC</strong> &mdash; power infrastructure rebuilding demand. <strong>Indian re/insurance</strong> (ICICI Lombard, New India Assurance) &mdash; claims exposure from property and crop damage. <strong>Sugar futures</strong> &mdash; UP is India&rsquo;s largest sugar-producing state; crop damage could tighten global supply.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: TRUMP-XI SUMMIT CONCLUDES ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / Trade / Indo-Pacific &mdash; May 15</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Trump-Xi Beijing Summit Ends With No Breakthroughs on Trade, Taiwan, or Iran</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President Trump departed Beijing on Friday after <strong>three days of talks</strong> with Xi Jinping &mdash; the most consequential bilateral meeting of 2026. Despite official statements about reaching &ldquo;important consensus&rdquo; on maintaining stable economic and trade relations, the leaders made <strong>no specific announcements on trade, Taiwan, the war in Iran, or other key friction points</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The summit&rsquo;s mixed signals rattled markets. On the positive side, Washington cleared sales of <strong>Nvidia&rsquo;s H200 AI chips</strong> to 10 Chinese firms including Alibaba, Tencent, and ByteDance. However, <strong>China&rsquo;s credit data collapsed</strong>: new loans fell to <strong>negative 10 billion yuan</strong> in April (first negative reading in years, vs. 320B expected), and total social financing plunged to 620B vs. 1,500B expected &mdash; signaling deep economic weakness beneath the diplomatic surface. Meanwhile, a hot <strong>Japan PPI print</strong> sent global yields surging overnight.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Markets gave back summit optimism. Dow fell 370 pts from its 50,000 recapture. China&rsquo;s credit collapse signals demand weakness that could drag on global growth. Rising global bond yields are the macro risk to watch.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>NVDA</strong> (Nvidia) &mdash; gained 4.4% on H200 China clearance, but broader market headwinds capped upside. <strong>BABA</strong> (Alibaba), <strong>TCEHY</strong> (Tencent), <strong>JD</strong> (JD.com) &mdash; approved H200 buyers, but negative Chinese credit data weighs on the outlook. <strong>TSM</strong> (TSMC) &mdash; Taiwan rhetoric remains a geopolitical risk premium. <strong>BA</strong> (Boeing) &mdash; fell 4.68% despite Trump saying China would buy 200 jets; analysts had expected 500. <strong>CSCO</strong> (Cisco) &mdash; surged 13.4% on &ldquo;networking supercycle&rdquo; guidance, a rare bright spot. <strong>FXI</strong> (China Large-Cap ETF) &mdash; credit collapse data threatens Chinese equity recovery narrative.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The risk map is widening.</strong> The Strait of Hormuz ship seizures signal that the Iran-U.S. confrontation is far from resolved, keeping oil above $100 and driving global inflation. Russia&rsquo;s continued bombardment of Ukrainian cities &mdash; and the Council of Europe&rsquo;s tribunal decision &mdash; ensure the European security crisis has no off-ramp. Meanwhile, a new Ebola strain with no vaccine has emerged in Central Africa, and India suffered one of its deadliest weather events of the year.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The macro picture is stagflationary.</strong> Oil above $100, rising global bond yields (Japan PPI, 10Y at 4.55%), China&rsquo;s credit implosion, and the Trump-Xi summit producing no trade breakthroughs. The S&amp;P 500 gave back 1.24% after briefly hitting all-time highs. Defensive positioning (energy, defense, gold, pharma) is outperforming growth.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Hormuz shipping lane developments &bull; Iran ceasefire deadline &bull; Ebola outbreak containment (Bundibugyo strain spread to Bunia) &bull; India monsoon season preparations post-disaster &bull; China credit data follow-through &bull; Global bond yield trajectory &bull; European defense spending commitments post-Ukraine escalation
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; BBC &bull; CNN &bull; NBC News &bull; NPR &bull; Democracy Now &bull; The Washington Post &bull; Reuters &bull; Euronews &bull; STAT News &bull; PBS News &bull; CIDRAP &bull; TheStreet &bull; Schwab Market Update &bull; Crestwood Advisors &bull; IEA &bull; Africa CDC &bull; Republic World &bull; Morning Star
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Sources verified across multiple outlets where possible.<br/>
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
  subject: `[World Monitor] Global Intelligence Briefing — ${today}`,
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
