#!/usr/bin/env node
/**
 * World Monitor — Okinawa Daily Briefing Email Sender
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
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Regional Briefing</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Government &bull; Regional Security &bull; Force Posture &bull; Local Affairs</p>
    </div>

    <!-- ===================== EVENT 1: MCIPAC CHANGE OF COMMAND ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #eab308; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">TODAY</span>
          <span style="color: #666; font-size: 11px;">Okinawa / USMC / Leadership &mdash; June 12</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">MCIPAC Change of Command: BGen Rizzo Assumes Command at MCAS Futenma Ceremony</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Brig. Gen. Ralph Rizzo Jr.</strong> assumed command of Marine Corps Installations Pacific (MCIPAC) from <strong>Maj. Gen. Brian Wolford</strong> at a ceremony at MCAS Futenma attended by over 500 personnel. <strong>Lt. Gen. Roger Turner</strong>, III MEF commanding general, presided and stated: <em>&ldquo;We face unprecedented challenges with contested sea space, contested airspace, contested cyberspace.&rdquo;</em>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          MajGen Wolford departs Okinawa for the Pentagon, where he will lead <strong>Marine Corps Installations Command</strong>. BGen Rizzo, a former enlisted Marine, now oversees all USMC installation operations across the Pacific, including Camp Butler and its subordinate installations on Okinawa.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Leadership Transition:</strong> MCIPAC oversees all Marine installations in the Pacific theater. The change of command occurs during a period of significant infrastructure investment ($320M Camp Hansen barracks), ongoing Futenma relocation negotiations, and the 31st MEU&rsquo;s Middle East deployment. LtGen Turner&rsquo;s remarks underscore III MEF&rsquo;s focus on contested-domain readiness.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: SEXUAL ASSAULT CASE DROPPED ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Okinawa / Legal / SOFA &mdash; June 11&ndash;12</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japanese Prosecutors Drop Sexual Assault Case Against U.S. Soldier at Kadena Air Base</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Naha Public Prosecutors Office</strong> on June 11 declined to pursue sexual assault and bodily injury charges against a soldier assigned to <strong>Echo Battery, 1st Battalion, 1st Air Defense Artillery Regiment, 38th Air Defense Artillery Brigade</strong> at Kadena Air Base. The unidentified male soldier in his 20s was alleged to have sexually assaulted a woman older than 18 and injured her arm outdoors in April 2026. He received a fine of approximately <strong>$125 for a Road Traffic Act violation</strong> (hitting a roadside barrier while fleeing the scene).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The prosecutors&rsquo; office did not publicly address its reasoning for the dismissal. This marks <strong>at least the third sexual assault case</strong> involving U.S. service members on Okinawa to be dropped by prosecutors in the past two years. The case follows the <strong>finalized seven-year prison sentence</strong> of a U.S. Marine in a separate sexual assault case in March 2026, which fueled renewed local protests and prompted <strong>U.S. Forces Japan to implement stricter liberty rules</strong> in October 2024.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Community Relations:</strong> Dismissed cases risk fueling local perception that the SOFA framework shields U.S. personnel from accountability. With the Okinawa gubernatorial election approaching on September 13, this issue could be politically weaponized by anti-base candidates. Service members should maintain heightened awareness of liberty policies and off-base conduct standards.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: CAMP HANSEN BARRACKS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Okinawa / Infrastructure / USMC &mdash; June 5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">$320M &ldquo;Barracks of the Future&rdquo; Opens at Camp Hansen; 1,096 Marines to Receive Private Rooms</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          U.S. Marine Corps and Japanese officials held a <strong>ribbon-cutting ceremony on June 5</strong> for three new six-story barracks buildings (Buildings 2302, 2303, 2304) at Camp Hansen near Kin Bay. The <strong>$320 million complex</strong>, which broke ground in March 2022, will house <strong>1,096 Marines and sailors</strong> &mdash; 368 per building.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Each service member receives a <strong>private 155-square-foot bedroom</strong> with personal sink, while sharing a 710-square-foot unit that includes a kitchen, restroom, shower, and in-unit washer and dryer. The complex replaces six older barracks as part of the <strong>Defense Policy Review Initiative (DPRI)</strong>, the long-running U.S.-Japan effort to consolidate and modernize military facilities on Okinawa. First residents begin moving in <strong>July 2026</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Quality of Life:</strong> This is a flagship project in the DoD&rsquo;s broader barracks improvement initiative. Private rooms directly address retention and welfare concerns flagged after multiple barracks scandals across the services. The DPRI-funded construction also signals continued long-term U.S. commitment to Okinawa basing despite ongoing force restructuring discussions.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: TSUNAMI ADVISORY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Okinawa / Natural Disaster / Force Protection &mdash; June 7&ndash;8</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Magnitude 7.8 Philippines Earthquake Triggers Tsunami Advisory Across Okinawa; 195,000+ Evacuated</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>magnitude 7.8 earthquake</strong> off Mindanao, Philippines (epicenter: Sarangani province) on June 7 triggered tsunami advisories spanning Japan&rsquo;s Pacific coast from Okinawa to Ibaraki. The <strong>Japan Meteorological Agency (JMA)</strong> issued warnings for multiple prefectures, with potential wave heights estimated up to one metre. Over <strong>195,000 residents were evacuated</strong> from coastal areas.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          U.S. and Japanese military authorities urged Okinawa residents to <strong>avoid all coastal areas</strong>. The advisory was lifted on June 8 after waves remained within manageable levels. In the Philippines, <strong>at least 46 people died, 688 were injured, and 38 remain missing</strong> &mdash; primarily from collapsed buildings and landslides. The event tested coordination between JMA, U.S. military emergency management, and prefectural authorities.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Force Protection:</strong> Okinawa&rsquo;s coastal military installations &mdash; including White Beach Naval Facility, Camp Schwab, and MCAS Futenma &mdash; face recurring seismic and tsunami risk from the Philippine Sea plate boundary. This event reinforced the need for standing evacuation plans and inter-base emergency coordination protocols.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: GUBERNATORIAL ELECTION / FUTENMA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Okinawa / Politics / Base Relocation &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Governor Tamaki&rsquo;s Third-Term Bid Faces Fracturing Coalition; Futenma Relocation Remains Central Issue</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Governor <strong>Denny Tamaki</strong> faces wavering support ahead of the <strong>September 13 gubernatorial election</strong> as his political coalition fractures over the Futenma base relocation. The <strong>Centrist Reform Alliance (CRA)</strong> remains divided on the Henoko relocation plan. The LDP plans to field <strong>Genta Koja</strong>, 42, a former internal affairs ministry official and ex-Naha deputy mayor, seeking to regain control of the prefecture for the first time in 12 years.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The U.S. has stated it <strong>will not return the Futenma site unless a full-length runway is secured at Henoko</strong>. Futenma&rsquo;s current runway is ~2,700 meters; the planned Henoko V-shaped runways are only 1,800 meters each. A recent <strong>compromise allows Marines to use a private-sector airport</strong> when a longer runway is needed. Construction at Henoko is expected to continue <strong>until at least 2033</strong>. Japan&rsquo;s defense minister pledged in January to reduce the U.S. military footprint on Okinawa during his first official visit to the prefecture.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Force Posture:</strong> The September election outcome will directly impact the political environment for U.S. basing on Okinawa. A Tamaki re-election would continue official prefectural opposition to the Henoko project. The runway length dispute adds a technical obstacle on top of political ones. MCAS Futenma remains operationally critical until a replacement is finalized.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: REGIONAL SECURITY / CHINA-TAIWAN ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Indo-Pacific / Regional Security / Defense &mdash; June 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China-Taiwan Tensions: PLA ADIZ Incursions Shift Patterns; Japan Deploys Type-12 Missiles to Southwestern Islands</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Approximately <strong>100 Chinese vessels</strong> were operating near the First Island Chain as of May 2026. PLA ADIZ incursions have decreased from the 300+/month average seen after President Lai Ching-te&rsquo;s 2024 election, though analysts assess the fluctuations as deliberate unpredictability to degrade Taiwan&rsquo;s threat awareness. The <strong>China Coast Guard</strong> made four incursions near Kinmen and one near Pratas Island in May. The PLA Eastern Theater Command <strong>tracked a Dutch frigate (HNLMS De Ruyter)</strong> during a Taiwan Strait transit and launched <strong>combat readiness patrols in the East China Sea</strong>, dispatching warships near Okinawa. Foreign Policy assessed in April: <em>&ldquo;Japan and China Are Edging Dangerously Close to Conflict.&rdquo;</em>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan continues its <strong>&ldquo;southern shield&rdquo; buildup</strong> along the Nansei/Ryukyu island chain. The <strong>5th Surface-to-Ship Missile Regiment</strong> (upgraded Type-12 anti-ship missiles) at Camp Kengun, Kumamoto achieved <strong>full operational capability</strong> by end of March 2026. Japan plans to deploy <strong>upgraded Type-03 SAMs on Yonaguni Island</strong> (110 km from Taiwan) and an <strong>electronic warfare unit</strong> capable of disrupting enemy radar by 2026. FY2026 defense budget: record <strong>&yen;8.9 trillion (~$58 billion)</strong>. <strong>North Korea</strong> conducted multiple launches in 2026 &mdash; including 10 ballistic missiles in March and three days of major weapons tests in April. A U.S. defense official testified NK missile forces can now strike Japan with nuclear or conventional warheads.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Strategic Context:</strong> Okinawa sits at the heart of the First Island Chain. The 31st MEU&rsquo;s March deployment of ~2,200 Marines to the Middle East has temporarily reduced forward-deployed Marine capacity. <strong>Resolute Dragon 26</strong> (June 20&ndash;30) will exercise USMC-JGSDF interoperability across Okinawa and Kyushu, featuring the <strong>first-ever JGSDF V-22 Osprey operations from a U.S. base</strong> (MCAS Futenma to Miyako/Ishigaki), plus NMESIS and MADIS weapons systems. PLA warship activity near Okinawa and North Korean IRBM capabilities make the exercise particularly timely.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 7: ECONOMIC UPDATE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">7</span>
          <span style="color: #666; font-size: 11px;">Okinawa / Economy / Development &mdash; 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Okinawa Economy on Expansion Trend; Record Tourism Expected; New 2% Accommodation Tax in Effect</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s <strong>Finance Ministry upgraded its economic assessment</strong> for Okinawa in January 2026. Okinawa visitors are expected to exceed <strong>10 million in FY2025</strong> for the first time ever, with tourism revenue up approximately 50% over the past decade. A new <strong>2% prefectural accommodation tax</strong> took effect in April 2026 &mdash; the first of its kind in Japan &mdash; projected to generate <strong>&yen;7.8 billion/year (~$50M USD)</strong> for landscape preservation, tourism workforce development, and maritime safety. <strong>Marubeni Corporation</strong> acquired a stake in Okinawa Tourist Service Inc., signaling growing corporate investment.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The government approved <strong>&yen;264.7 billion in Okinawa development funds</strong> for FY2026 &mdash; the first increase in 10 years. <strong>Junglia Okinawa</strong> theme park attracted 650,000 visitors in its first six months, generating a <strong>&yen;32.2 billion economic ripple effect</strong>. Despite Chinese government advisories discouraging group travel to Japan, hotel industry officials reported no significant impact on Okinawa tourism. Shuri Castle restoration continues to boost Okinawa&rsquo;s cultural tourism profile.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Economic Environment:</strong> A growing local economy generally supports positive community-military relations, as base-related spending becomes proportionally less dominant. However, Chinese travel restrictions to Japan bear monitoring &mdash; if Okinawa&rsquo;s tourism revenue dips, base burden narratives could intensify ahead of the September election. The accommodation tax signals Okinawa&rsquo;s growing fiscal independence.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Commander&rsquo;s Summary</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Community relations remain the top near-term risk.</strong> The dropped sexual assault case compounds a pattern that local media and anti-base activists will amplify heading into the September gubernatorial election. Liberty policy compliance and good-order-and-discipline messaging should be reinforced across all commands.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The regional threat environment continues to intensify.</strong> Japan&rsquo;s record defense budget and Nansei Islands missile deployments reflect growing concern over a Taiwan contingency. With the 31st MEU deployed to the Middle East, forward-deployed Marine capacity on Okinawa is temporarily reduced. The PLA&rsquo;s shifting ADIZ patterns and gray-zone operations in the Taiwan Strait require sustained vigilance.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Infrastructure modernization signals long-term commitment.</strong> The $320M Camp Hansen barracks and ongoing DPRI investments demonstrate that the U.S.-Japan alliance is investing in Okinawa for the long haul, despite political headwinds around the Futenma relocation. The Henoko runway dispute adds a new technical complication that could further delay the project.
      </p>
    </div>

    <!-- ===================== QUICK REFERENCE ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Quick Reference &mdash; Key Dates</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">June 20&ndash;30</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">Resolute Dragon 26 (USMC-JGSDF, Okinawa/Kyushu)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">June 23</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">Okinawa Memorial Day (Irei no Hi)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">July 2026</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">Camp Hansen barracks first residents move in</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">September 13</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">Okinawa gubernatorial election (Tamaki vs. Koja)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">FY2026</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">Japan defense budget: &yen;8.9T (~$58B record)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Ongoing</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">31st MEU deployed to Middle East (~2,200 Marines)</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; Marine Corps Times &bull; The Japan Times &bull; DVIDSHUB &bull; AEI China &amp; Taiwan Update &bull; Atlantic Council &bull; Al Jazeera &bull; Military.com &bull; Military Times &bull; ORF Online &bull; Indo-Pacific Defense Forum &bull; CSIS &bull; USNI News &bull; Foreign Policy &bull; UNESCO IOC &bull; Nippon.com &bull; Travel and Tour World
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only and is compiled from open-source reporting. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR OFFICIAL USE ONLY
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
