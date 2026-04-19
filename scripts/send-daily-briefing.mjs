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
  <div style="background: linear-gradient(90deg, #dc2626, #ffffff); height: 4px;"></div>
  <div style="padding: 32px 28px;">

    <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 28px;">
      <tr>
        <td style="width: 36px; height: 36px; border-radius: 50%; border: 1px solid #222; text-align: center; vertical-align: middle; background: #111;">
          <span style="font-size: 18px; color: #dc2626;">&#9678;</span>
        </td>
        <td style="padding-left: 10px;">
          <div style="font-size: 15px; font-weight: 800; color: #fff; letter-spacing: -0.5px;">WORLD MONITOR</div>
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Okinawa Regional Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Intelligence &bull; Government &bull; Financial</p>
    </div>

    <!-- THREAT ENVIRONMENT -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Current Threat Environment &mdash; Okinawa AOR</p>
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Force Posture</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">DEGRADED &mdash; 31st MEU + Kadena airmen in CENTCOM; ceasefire failed Apr 11; naval blockade active</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">PRC Activity Level</td>
          <td style="padding: 6px 0; color: #ea580c; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">ELEVATED &mdash; Y-9FQ ASW patrols near Okinawa; carrier drills near SW Japan</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">China-Japan Relations</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">CRISIS &mdash; 40 entities banned; rare earth controls on 7 categories; diplomatic downgrade</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Japan Defense Posture</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">SURGE &mdash; Type 25 missiles live; Balikatan 2026 launches tomorrow (Apr 20)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">SDF Power Projection</td>
          <td style="padding: 6px 0; color: #ea580c; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">EXPANDING &mdash; 1,400 SDF combat troops + Type 88 missiles deploying to Philippines tomorrow</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Arms Export Policy</td>
          <td style="padding: 6px 0; color: #ea580c; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">HISTORIC SHIFT &mdash; Category limits to be scrapped; frigate sales to PHL</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Liberty Status</td>
          <td style="padding: 6px 0; color: #ea580c; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">RESTRICTED &mdash; Solo patrols paused; orientation briefing under review</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">DPRK Posture</td>
          <td style="padding: 6px 0; color: #ea580c; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">PROVOCATIVE &mdash; Condemns Japan Type 25 deployments</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Nikkei 225</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">58,886 (-1.06%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px;">USD/JPY</td>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; font-weight: 700; text-align: right;">159.06</td>
        </tr>
      </table>
    </div>

    <!-- Event 1: Japan Joins Balikatan 2026 -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Military / Power Projection &mdash; REPORTED APR 16</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">1. Japan Deploys Combat Units to Philippines for First Time Since WWII &mdash; 1,400 SDF Troops Join Balikatan 2026</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan will deploy <strong>1,400 combat-capable SDF personnel</strong> with warships, aircraft, and <strong>Type 88 anti-ship missile systems</strong> to the US-Philippines Balikatan exercises (April 20&ndash;May 8). This is the <strong>first time since WWII</strong> that Japanese combat troops will set foot on Philippine soil. Japan will be the third-largest troop contributor to the biggest-ever iteration of the drills, with 17,000 total personnel from multiple nations.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japanese units will participate in defensive operations while carrying weapons and will <strong>fire a missile in a ship-sinking exercise</strong> in northwestern Philippine waters facing the disputed South China Sea. Personnel drawn from GSDF, MSDF, ASDF, plus cyber and medical units. Enabled by the Japan-Philippines visiting-forces agreement that entered force September 2025.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This represents a seismic shift in Japan&rsquo;s security posture. Deploying combat units with offensive weapons to the South China Sea signals Tokyo&rsquo;s intent to actively deter PRC aggression beyond its own territory. The timing &mdash; while 31st MEU is in CENTCOM and Trump wavers on alliance commitments &mdash; shows Japan filling a regional security vacuum. Directly relevant to First Island Chain defense and Taiwan contingency planning.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 2: Japan Arms Export Revolution -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Government / Defense Industry &mdash; REPORTED APR 15</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">2. Japan&rsquo;s Biggest Arms Export Opening Since WWII &mdash; Takaichi Government to Scrap Export Category Limits</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          PM Takaichi&rsquo;s ruling party has recommended <strong>scrapping the five-category limits</strong> that currently confine arms sales to transport, rescue, early warning, surveillance, and mine clearance equipment. The changes, expected to be approved <strong>this month</strong>, would maintain a ban on conflict zone exports except in extraordinary cases. First expected deal: <strong>used frigates to the Philippines</strong>, followed by missile defense systems.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Interest from Warsaw to Manila has surged as Trump wavers on security commitments and US weapons supplies are strained by Iran and Ukraine conflicts. Mitsubishi Electric&rsquo;s defense unit SVP Masahiko Arai: <strong>&ldquo;Offers are coming from everywhere.&rdquo;</strong> Defense contractors Toshiba and Mitsubishi Electric hiring staff and adding capacity in London and Singapore.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Japan is positioning itself as an alternative defense supplier for US allies uncertain about Washington&rsquo;s reliability. Frigate sales to Manila would deepen the Japan-Philippines security axis and create interoperability in the South China Sea. This transformation &mdash; from near-total arms export prohibition to active defense exporter &mdash; is one of the most consequential strategic shifts in the Indo-Pacific.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 3: Futenma 30-Year Anniversary -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Government / Base Politics &mdash; REPORTED APR 13</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">3. Futenma Air Station Return Passes 30-Year Mark &mdash; No Concrete Date Set; Government Says It Takes Delay &ldquo;Seriously&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Thirty years have passed since Japan and the United States agreed to return MCAS Futenma in Ginowan to local control. The original timeline promised return within 5&ndash;7 years. Chief Cabinet Secretary <strong>Minoru Kihara</strong> stated the government takes the delay &ldquo;seriously&rdquo; but reiterated that <strong>relocation to Henoko is &ldquo;the only viable solution.&rdquo;</strong>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Governor <strong>Denny Tamaki</strong> plans to seek a third term with Futenma as his central campaign issue. The base remains in a densely populated area surrounded by houses and schools &mdash; described as <strong>&ldquo;the most dangerous base in the world.&rdquo;</strong> Strong local opposition to Henoko construction continues.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The 30-year milestone is a political flashpoint. Gov. Tamaki will leverage this for his reelection campaign. The Futenma impasse remains the single most divisive issue in US-Japan alliance management on Okinawa and continues to fuel anti-base sentiment across the prefecture.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 4: Marines Refuse Okinawa Meeting -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Military / Community Relations &mdash; REPORTED APR 14</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">4. Marine Corps Refuses Meeting with Okinawa Officials Over Helicopter Incident &mdash; Formal Protest Pending</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Marine Corps rejected a request from Okinawa Prefectural Assembly representatives to meet regarding a <strong>UH-1Y Venom precautionary landing near Kyoda Baseball Field</strong> in Nago that disrupted a youth baseball practice. Assembly members planned to hand-deliver a <strong>formal protest letter adopted March 27</strong> urging the US military to disclose the cause, indicate preventive measures, and ensure safety.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The refusal to meet with local officials on a flight safety incident compounds existing community friction. Combined with the ongoing sexual assault investigations, solo patrol suspension, and orientation briefing review, the US military&rsquo;s relationship with the Okinawa prefectural government remains under significant strain.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 5: Chinese ASW Aircraft -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Intelligence / PRC Military Activity</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">5. China Deploys New Y-9FQ Anti-Submarine Warfare Aircraft Near Okinawa &mdash; JASDF Scrambles Fighters</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japanese fighter pilots from the Southwestern Air Command intercepted an improved variant of China&rsquo;s Y-9 maritime patrol aircraft operating over the East China Sea approximately <strong>160 miles northeast of Okinawa</strong>. Identified as the <strong>Y-9FQ</strong>, a next-generation ASW platform first observed at a Chinese factory in 2022, officially unveiled during Beijing&rsquo;s Victory Day parade September 2025.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Features redesigned nose with AESA radar, advanced electro-optical sensors, upgraded ELINT systems. Paint scheme suggests <strong>full operational capability</strong>, likely PLA Naval Air Force units from Zhejiang province. Japan Joint Staff confirmed &ldquo;visible differences including the shape of the aircraft&rsquo;s nose and additional antennas.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            China is actively improving its ability to detect and track US and allied submarine activity near Okinawa. The timing &mdash; coinciding with the 31st MEU&rsquo;s departure and reduced US force posture &mdash; suggests deliberate intelligence collection during a window of diminished US presence.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 6: 31st MEU Departure -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Military / Force Posture</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">6. 31st MEU &amp; USS Tripoli Operating in CENTCOM &mdash; ~3,500 Marines and Sailors Now in Middle East</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The USS Tripoli ARG and 31st MEU (approximately <strong>3,500 Marines and Sailors</strong>) remain in CENTCOM waters after arriving March 27 from Sasebo. The force includes F-35B Lightning IIs from VMFA-121, MV-22B Ospreys, and MH-60S Seahawks. Deployed to support Strait of Hormuz operations amid the US-Iran conflict.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This removes one of the <strong>primary ground combat elements</strong> in the Pacific capable of rapid crisis response involving China, North Korea, or Taiwan. The US Navy lacks sufficient amphibious ships to backfill.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The simultaneous deployment to CENTCOM and increased Chinese ASW activity near Okinawa represents a <strong>strategic vulnerability</strong>. Japan&rsquo;s record defense budget, new Type 25 missiles, and Balikatan deployment partially offset the gap, but cannot substitute for the expeditionary strike capability the MEU provides.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 7: Kadena Airmen in CENTCOM -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Military / Force Posture &mdash; REPORTED APR 6</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">7. Kadena Air Base Airmen Serving &ldquo;In Harm&rsquo;s Way&rdquo; in Operation Epic Fury &mdash; 18th Wing Personnel Deployed to CENTCOM</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Brig. Gen. <strong>John Gallemore</strong> confirmed the 18th Wing at Kadena Air Base has personnel deployed in support of US Central Command operations against Iran as part of <strong>Operation Epic Fury</strong>. In an April 4 AFN interview, Gallemore stated: <strong>&ldquo;We do absolutely have families that have loved ones in harm&rsquo;s way.&rdquo;</strong> Specific locations remain classified. CENTCOM lists 26 aircraft varieties in the operation, including B-1 Lancers and LUCAS one-way attack drones.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          As of April 19, total US service member casualties in Operation Epic Fury stand at <strong>381 wounded and 13 killed</strong>. Ceasefire negotiations in Islamabad <strong>failed on April 11</strong>; the US has since initiated a <strong>naval blockade</strong> of Iranian commercial ports. This further compounds the strain on Okinawa-based forces already diminished by the 31st MEU&rsquo;s departure.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Kadena&rsquo;s 18th Wing is the largest combat wing in the Pacific. Any significant draw on its personnel and assets for Middle East operations directly reduces the US ability to respond to contingencies in the Taiwan Strait, East China Sea, and Korean Peninsula. Combined with the 31st MEU absence, Okinawa&rsquo;s force posture is at its lowest point in years.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 8: Fatal Boat Incident Investigation -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #2563eb; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Notable</span>
          <span style="color: #666; font-size: 11px;">Civilian / Safety &mdash; REPORTED APR 16</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">7. Fatal Henoko Boat Capsize Investigation Continues One Month On &mdash; Coast Guard Probes Negligence</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          One month after two boats (Heiwamaru and Fukutsu) capsized off <strong>Henoko, Nago City</strong> on March 16, killing <strong>17-year-old Doshisha student Tomoka Takeishi</strong> and <strong>71-year-old captain Hajime Kanai</strong>, the Japan Coast Guard&rsquo;s 11th Regional HQ in Naha continues its investigation. Boats were carrying 21 people, including 18 students from Doshisha International High School on a &ldquo;peace study&rdquo; trip near the Henoko base construction site.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Boats seized on suspicions of <strong>professional negligence resulting in death</strong>. MEXT stepping up scrutiny of Doshisha Educational Corporation, finding safety protocols and teacher supervision inadequate. On April 17, both <strong>LDP and Japan Innovation Party</strong> submitted formal recommendations to the PM&rsquo;s office demanding comprehensive safety reforms. Government plans to issue guidance by mid-2026. The school&rsquo;s anti-base &ldquo;peace study&rdquo; curriculum is now under national debate.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This incident adds a new dimension to the Henoko/base politics debate. The fatalities during an anti-base educational trip have sparked national controversy over the politicization of school trips to Okinawa. Conservative media is using the incident to push back against anti-base activism.
          </p>
        </div>
      </div>
    </div>

    <!-- Event 8: Newcomers Orientation Review -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #2563eb; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Notable</span>
          <span style="color: #666; font-size: 11px;">Military / SOFA &mdash; REPORTED APR 14</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">8. US Military Newcomers Orientation on Okinawa May Change After Prefectural Feedback</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          US military officials are considering changes to the SOFA newcomers briefing given to all arriving service members after the <strong>Okinawa prefectural government reviewed the Okinawa Orientation Overview</strong> and provided formal input. The prefecture proposed changes to sections addressing incidents and accidents involving service members and to descriptions of <strong>Irei No Hi</strong> (June 23 memorial day) and Okinawans&rsquo; desire for peace.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Part of a broader response to sexual assault cases on the island. Any orientation changes that incorporate Okinawan perspectives could improve community relations, but the underlying issues &mdash; liberty restrictions, assault investigations, and helicopter incidents &mdash; will continue to drive tension regardless of briefing content.
          </p>
        </div>
      </div>
    </div>

    <!-- Additional Items -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Additional Items of Note</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Type 25 Missiles Operational (Mar 31):</strong> JGSDF deployed <strong>Type 25 SSM</strong> (1,000km range) at Camp Kengun, Kumamoto and <strong>Type 25 HGP</strong> (hypersonic gliding projectile) at Camp Fuji, Shizuoka. Japan&rsquo;s first domestically developed long-range strike capability. Ship- and air-launched variants planned FY2027.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">USMC First Live-Fire Maritime Drone Strike (Apr 3):</strong> III Expeditionary Operations Training Group and Naval Special Warfare Command executed the USMC&rsquo;s first live-fire drone strike against a maritime vessel at Naval Base White Beach, Okinawa. Marines trained to build unmanned systems from locally available materials.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">DPRK Condemnation (Apr 4):</strong> KCNA published commentary denouncing Japan&rsquo;s &ldquo;dangerous military attempt,&rdquo; specifically targeting Type 25 missile deployments and the new Pacific Defense Planning Office. Pyongyang warned Japan&rsquo;s missile expansion could &ldquo;push the region into danger.&rdquo;
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">SDF Weapons Protection Missions (Apr 4):</strong> Defense Ministry disclosed SDF conducted 11 weapons protection missions in 2025 for foreign military assets &mdash; 4 for US warships (ISR/ballistic missile), 5 for US ships/aircraft (joint training), and 2 for <strong>UK warships (first ever)</strong>.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Japan Evacuation Drill Planned (Apr 3):</strong> First field evacuation drill for Sakishima Islands (Ishigaki, Miyakojima, Yonaguni, Taketomi, Tarama) scheduled January 2027. Plan: evacuate 120,000 residents within 6 days. Signals operationalization of Taiwan contingency planning.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Space Operations Elevated (Apr 1):</strong> JASDF Space Operations Group upgraded to Squadron; ASDF to be renamed Aerospace Self-Defense Force. Further elevation to Space Operations Corps planned later this year.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">China-Japan Diplomatic Crisis:</strong> 40 Japanese defense entities banned (incl. Mitsubishi Shipbuilding, IHI Corp, JAXA); Apr 4 rare earth controls on 7 categories targeting Japan&rsquo;s 71.9% import dependency; Diplomatic Bluebook downgrade. China rejected Japan&rsquo;s protest over sanctions. Defense supply chain vulnerabilities mounting.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Solo Patrols Remain Paused:</strong> Solo military patrols in Okinawa nightlife districts remain suspended pending investigation into assault incident. MP retraining ongoing. Two Marines under investigation for alleged rapes.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">BOJ Rate Watch (Apr 9):</strong> BOJ Governor Ueda says real rates remain &ldquo;clearly negative&rdquo; and financial conditions accommodative. Slim chance of rate hike at Apr 27&ndash;28 meeting. Record &yen;122.3T FY2026 budget (+6.3%) now in effect.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Okinawa Tourism:</strong> Finance Ministry upgraded Okinawa tourism and personal consumption assessments. No significant impact from Chinese government advisories discouraging visits to Japan.
      </p>
    </div>

    <!-- Outlook -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Okinawa Outlook &mdash; Key Watch Items</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Balikatan 2026 begins April 20.</strong> Japan&rsquo;s first-ever combat deployment to the Philippines is the most consequential near-term event. Watch for PRC reaction to SDF missile fire exercises in South China Sea waters. 1,400 SDF troops with Type 88 anti-ship missiles will operate alongside 17,000 US and Philippine personnel through May 8.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Japan becoming an arms exporter.</strong> The imminent scrapping of export category limits represents Japan&rsquo;s biggest defense industry shift since WWII. Frigate sales to the Philippines would create a new Japan-PHL defense axis. Demand from Warsaw to Manila signals Japan is positioning as an alternative to unreliable US supply.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Force posture remains degraded.</strong> The 31st MEU&rsquo;s continued absence in CENTCOM creates the most significant gap in US forward presence in years. Ceasefire failure on April 11 and the new naval blockade mean no near-term return of forces. China&rsquo;s Y-9FQ ASW patrols near Okinawa suggest deliberate intelligence collection during diminished US presence. US casualties now at 13 KIA, 381 WIA.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Japan&rsquo;s military transformation accelerating.</strong> Type 25 missiles, Balikatan combat deployment, arms export revolution, Space Operations elevation, UK weapons protection firsts, record &yen;9T+ defense budget, Pacific Defense Planning Office, and field evacuation drills &mdash; all within weeks &mdash; signal the most fundamental shift in Japan&rsquo;s defense identity since 1945.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Local political dynamics volatile.</strong> Futenma 30-year milestone, helicopter incident refusal, fatal Henoko boat probe (LDP/JIP safety recommendations submitted Apr 17), assault investigations, liberty restrictions, and orientation review all driving community friction. Gov. Tamaki&rsquo;s reelection campaign (Sep 13) will amplify anti-base sentiment.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Financial watch.</strong> Nikkei closed at 58,475.90 (-1.75%) on Apr 17, retreating from record highs. BOJ Apr 27&ndash;28 meeting approaching with slim rate hike prospects. Yen at ~158.63/USD. Record FY2026 &yen;122.3T budget now in effect. China&rsquo;s April 4 rare earth export controls on 7 categories (samarium, gadolinium, terbium, dysprosium, lutetium, scandium, yttrium) compound supply chain risks &mdash; China accounts for 71.9% of Japan&rsquo;s rare earth imports.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; Naval News &bull; Naval Today &bull; Military.com &bull; Military Times &bull; Nippon.com &bull; Japan Ministry of Defense / Joint Staff &bull; The Diplomat &bull; Reuters &bull; AP News &bull; Al Jazeera &bull; South China Morning Post &bull; Defense News &bull; USNI News &bull; Rappler &bull; Vision Times &bull; The Mainichi &bull; Asahi Shimbun &bull; NHK World &bull; IMF &bull; Bank of Japan &bull; KCNA &bull; Trading Economics &bull; PBS News
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Not financial advice. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR GENERAL DISTRIBUTION
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #dc2626; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

import { execSync } from 'node:child_process';

const payload = JSON.stringify({
  from: 'World Monitor <onboarding@resend.dev>',
  to: RECIPIENTS,
  subject: `[World Monitor] Okinawa Regional Intelligence Briefing \u2014 ${today}`,
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
