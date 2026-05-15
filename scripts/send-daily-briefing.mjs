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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Okinawa Regional Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Geopolitics &bull; Government &bull; Financial &bull; Environment</p>
    </div>

    <!-- ===================== BANNER: 54TH REVERSION ANNIVERSARY ===================== -->
    <div style="background: linear-gradient(135deg, #1e1b4b, #312e81); border: 1px solid #4338ca; padding: 16px 20px; margin-bottom: 24px; text-align: center;">
      <p style="font-size: 11px; color: #a5b4fc; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 6px;">Today&rsquo;s Date in History</p>
      <p style="font-size: 16px; font-weight: 700; color: #fff; margin: 0;">May 15 &mdash; 54th Anniversary of Okinawa&rsquo;s Reversion to Japan (1972)</p>
      <p style="color: #c7d2fe; font-size: 12px; margin: 8px 0 0;">After 27 years of U.S. administration, Okinawa was formally returned to Japanese sovereignty on this date. U.S. military bases remained under the bilateral security alliance.</p>
    </div>

    <!-- ===================== SECTION 1: TRUMP-XI SUMMIT — OKINAWA IMPLICATIONS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / Indo-Pacific / Taiwan &mdash; May 14</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Trump-Xi Beijing Summit: Xi Warns of &ldquo;Conflict&rdquo; Over Taiwan &mdash; Direct Implications for Okinawa&rsquo;s Defense Posture</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President Trump landed in Beijing for a two-day summit with President Xi Jinping. Xi issued his sharpest Taiwan warning yet, stating mishandling the issue risks &ldquo;collision or conflict&rdquo; and calling it &ldquo;the most important issue in U.S.-China relations.&rdquo; Xi is reportedly pressing Trump to <strong>limit arms sales to Taiwan, curtail security cooperation</strong>, and distance the U.S. from Japanese PM Takaichi&rsquo;s stance that a Taiwan contingency could be a &ldquo;survival-threatening situation&rdquo; for Japan.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Okinawa relevance:</strong> Any shift in U.S. Taiwan policy directly impacts the strategic calculus for III MEF and the <strong>12th Marine Littoral Regiment</strong> on Okinawa. China has already imposed punishing sanctions on Japan and condemned Tokyo&rsquo;s military buildup in the Nansei Islands, comparing it to pre-WWII expansionism. Analysts warn a tacit U.S. concession of a Chinese sphere of influence over Taiwan could destabilize the Indo-Pacific security architecture that <strong>Okinawa-based forces are designed to uphold</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Nikkei 225 fell 0.98%</strong> as Xi&rsquo;s Taiwan rhetoric rattled Japanese defense stocks. <strong>TSM</strong> (TSMC) faces elevated geopolitical risk premium. <strong>NVDA</strong> jumped on cleared H200 chip sales to China. <strong>Nikkei defense names</strong> (Mitsubishi Heavy Industries 7011.T, Kawasaki Heavy 7012.T, IHI 7013.T) &mdash; watch for volatility as summit Day 2 outcomes emerge.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== SECTION 2: NANSEI ISLANDS MILITARY EXERCISE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Military / Exercise / First Island Chain &mdash; May 17&ndash;22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Historic First: Japan&rsquo;s Ground Component Command to Drill in Nansei Islands Near Taiwan with 12th MLR Marines</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The JGSDF&rsquo;s <strong>Ground Component Command</strong> &mdash; Japan&rsquo;s highest army operational headquarters &mdash; will conduct its <strong>first-ever exercise focused on the Nansei (Ryukyu) Islands</strong> from May 17&ndash;22. Approximately <strong>300 Japanese soldiers</strong> from all regional armies will deploy to <strong>Ishigaki, Yonaguni, and Miyakojima</strong>, with command post training alongside <strong>20 Marines from the Okinawa-based 12th Marine Littoral Regiment</strong> (May 17&ndash;20).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Key assets include the deployment of a <strong>Type-88 surface-to-ship missile launcher</strong> to Ishigaki and <strong>two ScanEagle II UAVs</strong> to Yonaguni. A <strong>first-ever U.S.-Japan coordination center</strong> will be established on Miyakojima. Nine ports across the islands will be used for logistics. The exercise represents a significant escalation in allied readiness for a <strong>Taiwan contingency scenario</strong> and signals Japan&rsquo;s growing willingness to operationalize its southwestern island defenses.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This exercise directly tests the <strong>Stand-In Force concept</strong> that the 12th MLR was designed for &mdash; distributed operations within the First Island Chain to enable sea denial. The first-ever U.S.-Japan coordination center on Miyakojima marks a new milestone in bilateral interoperability. <strong>Beijing has already condemned</strong> Japan&rsquo;s Nansei buildup, with China&rsquo;s Eastern Theater Command warning Tokyo to &ldquo;step back from the brink.&rdquo;
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== SECTION 3: FORCE POSTURE — 31ST MEU DEPLOYMENT & KISHABA RETURN ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Base Realignment &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">31st MEU Deployed to Middle East; Kishaba Housing Area Return Finalized at Camp Foster</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>31st MEU Deployment:</strong> More than <strong>2,200 Okinawa-based Marines</strong> of the 31st Marine Expeditionary Unit and the amphibious assault ship <strong>USS Tripoli</strong> (homeported Sasebo) have deployed to the Middle East amid the ongoing Iran crisis. This represents a significant drawdown of Okinawa&rsquo;s rapid-response capability during a period of heightened Indo-Pacific tensions, leaving the <strong>12th MLR as the primary Marine combat element</strong> on the island.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Kishaba Housing Return:</strong> The Japan-U.S. Joint Committee finalized an agreement (April 17) for the return of approximately <strong>12 acres of the Kishaba Housing Area</strong> along Camp Foster&rsquo;s southeastern fenceline. The area contains 32 housing units; the Marine Corps estimates return by <strong>late fall 2026</strong>. The land will be used to widen <strong>Prefectural Road 81 from two to four lanes</strong>, alleviating chronic east-west traffic congestion. Approximately 200 replacement housing units are under construction in northern Kishaba.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Force Posture Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The 31st MEU&rsquo;s Middle East deployment creates a temporary <strong>amphibious capability gap</strong> in the Western Pacific. The 12th MLR&rsquo;s Nansei exercise (above) partially offsets this by demonstrating distributed lethality within the island chain. The Kishaba return is part of the broader 2013 Consolidation Plan and signals continued progress on Okinawa burden reduction.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== SECTION 4: GOVERNMENT & POLITICS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Government / Politics / Intelligence Reform &mdash; May 14&ndash;15</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Gov. Tamaki Seeks Third Term on Anti-Base Platform; Tokyo Pushes National Intelligence Agency by July</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Okinawa Gubernatorial Race:</strong> Governor <strong>Denny Tamaki</strong> (66) has formally announced he will seek a third term in the <strong>September 13 election</strong>. Running on the &ldquo;All Okinawa&rdquo; anti-base platform, he called the Henoko relocation plan &ldquo;absolutely unacceptable,&rdquo; arguing it would lead to &ldquo;permanent consolidation&rdquo; of the U.S. base presence. However, his support is <strong>wavering</strong> following the February general election. LDP-backed challenger <strong>Genta Koja</strong> (42), former deputy mayor of Naha, supports the Futenma-to-Henoko relocation plan.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>National Intelligence Reform:</strong> The Japanese government is accelerating plans to establish a <strong>National Intelligence Agency</strong> as early as July, consolidating intelligence functions previously dispersed across ministries into a centralized bureau under the Kantei. A companion <strong>anti-espionage law</strong> will introduce mandatory registration for foreign agents operating in Japan. The reforms are driven by concerns over Chinese and Russian influence operations, cyber threats, and the rapidly deteriorating regional security environment. This has direct implications for <strong>counterintelligence operations around Okinawa&rsquo;s military installations</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The Sep. 13 gubernatorial election is the most consequential Okinawa vote since 2018. A <strong>Tamaki loss</strong> would remove the primary political obstacle to the Henoko relocation and could accelerate Marine Corps base consolidation timelines. A <strong>Tamaki win</strong> ensures continued legal and political resistance. Watch polling closely as the LDP challenger gains ground.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== SECTION 5: PFAS CONTAMINATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Environment / Community Relations &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PFAS Contamination Near U.S. Bases Hits Record Levels: 56x Japan&rsquo;s Safety Standard at Kadena</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Prefecture&rsquo;s latest annual groundwater surveys have recorded <strong>new record PFAS contamination levels</strong> near U.S. military installations. The highest reading &mdash; <strong>2,800 parts per trillion at Yara Hijaga in Kadena town</strong> &mdash; is <strong>56 times Japan&rsquo;s water quality standard</strong> of 50 ppt. Elevated levels were detected at <strong>12 sites around Kadena Air Base, 13 sites downstream of MCAS Futenma</strong>, and additional sites near Camps Hansen, Courtney, McTureous, and Foster.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Of <strong>44 sampling sites around U.S. bases, 31 exceeded Japan&rsquo;s standard</strong>. Unidentified foam has also been reported near base perimeters. The contamination stems from <strong>AFFF firefighting foam</strong> historically used at U.S. and Japanese military airfields. U.S. Forces Japan incinerated its last AFFF stockpiles in 2024, but legacy contamination persists in groundwater. The prefecture has sought base access for water sampling <strong>four times since 2016</strong>; USFJ denied the most recent request in December, citing insufficient evidence.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Community Relations Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            PFAS contamination remains the <strong>most potent local grievance</strong> against U.S. base presence on Okinawa, feeding directly into Gov. Tamaki&rsquo;s anti-base platform and the broader reversion anniversary narrative. USFJ&rsquo;s continued denial of base access for sampling erodes trust and provides ammunition for base-opposition candidates ahead of the Sep. 13 election.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== SECTION 6: FINANCIAL & ECONOMIC ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Financial / Economy / Monetary Policy &mdash; May 13&ndash;15</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">BOJ Holds at 0.75% as Stagflation Risk Grows; Yen Under Pressure; Okinawa Tourism Resilient</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>BOJ &amp; Yen:</strong> The Bank of Japan held its policy rate at <strong>0.75%</strong> (highest since 1995) in a <strong>6&ndash;3 split vote</strong>, with three members dissenting in favor of a hike to 1.0%. The BOJ raised its FY2026 core inflation forecast to <strong>2.8%</strong> (from 1.9%) on elevated oil prices, while <strong>trimming GDP growth to 0.5%</strong> (from 1.0%). Japan&rsquo;s Finance Ministry may have spent up to <strong>&yen;5.48 trillion ($35B)</strong> on yen intervention on April 30 alone. The U.S.-Japan rate gap stands at <strong>~300 basis points</strong> (Fed at 3.50&ndash;3.75%), keeping persistent downward pressure on the yen.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Okinawa Economy:</strong> Despite national headwinds, Okinawa shows <strong>relative economic resilience</strong>. The Finance Ministry upgraded its assessment for Okinawa&rsquo;s personal consumption and tourism sector. However, Japan&rsquo;s broader economy faces a &ldquo;very light stagflation-like situation&rdquo; with real disposable incomes negative for an extended period. Energy costs remain the primary drag, as Japan imports nearly all its petroleum and LNG &mdash; the Iran crisis and $107 Brent crude are directly squeezing Japanese households and businesses. The OECD projects BOJ rates reaching <strong>2% by end-2027</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>USD/JPY</strong> remains elevated above &yen;155 despite intervention; further yen weakness raises cost-of-living concerns on Okinawa for both locals and SOFA-status personnel. <strong>Nikkei 225</strong> fell 0.98% on Xi&rsquo;s Taiwan rhetoric. <strong>Energy importers</strong> (JERA, TEPCO 9501.T) face margin pressure from $107 Brent. <strong>Okinawa tourism stocks</strong> remain a relative bright spot. <strong>Japanese defense stocks</strong> (MHI 7011.T, KHI 7012.T) may see continued momentum from Nansei exercise headlines.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa sits at the intersection of every major Indo-Pacific pressure point right now.</strong> The Trump-Xi summit is testing the Taiwan commitment that justifies Okinawa&rsquo;s force posture; the 31st MEU is deployed to the Middle East, creating a temporary capability gap; and the historic Nansei Islands exercise starting May 17 demonstrates the 12th MLR&rsquo;s Stand-In Force concept for the first time at the operational level.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Politically, the September 13 gubernatorial race is shaping up as a referendum on the U.S. base presence.</strong> Gov. Tamaki&rsquo;s wavering support, combined with record PFAS contamination and today&rsquo;s 54th reversion anniversary, keep base politics at a boil. Tokyo&rsquo;s intelligence reform push adds a new counterintelligence dimension around the installations.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Trump-Xi summit Day 2 outcomes on Taiwan language &bull; Nansei Islands exercise (May 17&ndash;22) &bull; China&rsquo;s military response to the Nansei drill &bull; Sep. 13 gubernatorial election polling &bull; 31st MEU return timeline from Middle East &bull; PFAS access negotiations between USFJ and Okinawa Prefecture &bull; BOJ next rate decision and yen intervention signals &bull; Iran ceasefire impact on Japan energy costs
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; CNBC &bull; Foreign Policy &bull; CSIS &bull; Nikkei Asia &bull; Military.com &bull; The Defense Post &bull; Marine Corps Times &bull; DVIDSHUB &bull; South China Morning Post &bull; Asian Military Review &bull; AEI &bull; IMF &bull; Deloitte &bull; Oxford Economics &bull; PBS News &bull; Nippon.com &bull; Japan Today &bull; Democracy Now
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
  subject: `[World Monitor] Okinawa Regional Intelligence Briefing — ${today}`,
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
