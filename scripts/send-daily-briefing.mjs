#!/usr/bin/env node
/**
 * World Monitor — Okinawa Daily Intelligence Briefing Email Sender
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs
 */

const VERIFIED_RECIPIENTS = [
  'johnmcbride2928@gmail.com',
];

const ALL_RECIPIENTS = [
  'mcbridej675@gmail.com',
  'john.mcbride.mil@usmc.mil',
  'paul.foersch@usmc.mil',
];

const useTestingMode = !process.env.RESEND_DOMAIN_VERIFIED;
const RECIPIENTS = useTestingMode ? VERIFIED_RECIPIENTS : ALL_RECIPIENTS;

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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Okinawa Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Geopolitics &bull; Regional Security &bull; Base Operations &bull; Weather</p>
    </div>

    <!-- ===================== ITEM 1: MADIS/NMESIS DELIVERY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Military / Force Posture / Indo-Pacific &mdash; June 23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12th Marine Littoral Regiment Receives First NMESIS &amp; MADIS Platforms on Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>12th Marine Littoral Regiment, 3rd Marine Division</strong> formally received Okinawa&rsquo;s first <strong>Navy-Marine Expeditionary Ship Interdiction System (NMESIS)</strong> and <strong>Marine Air Defense Integrated System (MADIS)</strong> on June 23. NMESIS is a ground-based anti-ship platform featuring a <strong>Naval Strike Missile mounted on a Joint Light Tactical Vehicle (JLTV)</strong>, enabling semi-autonomous and fully autonomous launches for coastal sea-denial operations.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          MADIS is a highly mobile dual-vehicle system on JLTVs: one vehicle provides <strong>360-degree radar and electronic warfare</strong> for counter-UAS detection; the second carries <strong>multi-Stinger missiles, a 30mm cannon, and EW systems</strong> to engage helicopters, fixed-wing aircraft, and small drones. In May 2026, the 3rd MLR deployed NMESIS across multiple Philippine islands during <strong>Balikatan 26</strong>, conducting dry-fire missions in the Batanes Islands while demonstrating MADIS against quadcopters and fixed-wing drones in Zambales.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This delivery represents a <strong>major milestone in the Marine Corps&rsquo; Force Design 2030 transformation</strong>, giving Okinawa-based forces stand-off anti-ship and layered air defense capability for the first time. These systems are purpose-built for contested island-chain warfare in the First Island Chain. The 12th MLR is the second unit service-wide (after Hawaii&rsquo;s 3rd MLR) to receive these platforms, underscoring the Indo-Pacific&rsquo;s priority status.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 2: CHINA CARRIER TAIWAN STRAIT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / Regional Security / Taiwan Strait &mdash; June 23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China&rsquo;s Newest Aircraft Carrier Transits Taiwan Strait During Taiwan Military Exercises</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China&rsquo;s newest and most powerful aircraft carrier <strong>sailed through the Taiwan Strait on June 23</strong>, the Taiwanese defense ministry confirmed. The transit came <strong>one day after Taiwan began a five-day military exercise</strong> simulating response to a Chinese attack &mdash; a provocative show of force that escalates already heightened cross-strait tensions.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This follows a pattern of intensifying PRC maritime operations around Taiwan. In early June (June 5&ndash;6), <strong>a China Coast Guard ship and PRC research vessel coordinated patrols</strong> near Taiwan&rsquo;s Pratas Island for the first time, with the CCG vessel circling Pratas twice during a 24-hour patrol. On June 11, two PRC government ships intruded into the waters of Taiwan&rsquo;s Itu Aba island in the South China Sea. Taiwan condemned both incidents as sovereignty violations.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Okinawa Relevance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Any escalation in the Taiwan Strait directly impacts Okinawa-based forces. MCAS Futenma, Kadena AB, and Camp Schwab would be critical staging points in a contingency. The carrier transit reinforces the urgency of the 12th MLR&rsquo;s NMESIS/MADIS fielding and Japan&rsquo;s own missile deployments on the southwestern islands. Okinawa is approximately <strong>400 miles from Taiwan</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 3: PRC BLOCKADE REHEARSAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Intelligence / Maritime / A2AD &mdash; June 6&ndash;10</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PRC Conducts &ldquo;Special Maritime Law Enforcement Operation&rdquo; East of Taiwan &mdash; Assessed as Blockade Rehearsal</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The PRC Ministry of Transport conducted a <strong>&ldquo;special maritime law enforcement operation east of Taiwan&rdquo;</strong> from June 6&ndash;10, involving at least <strong>three Maritime Safety Administration (MSA) vessels and one search-and-rescue ship</strong>, escorted by two China Coast Guard ships that had been patrolling since June 1. Ship tracking data showed PRC vessels asserting an EEZ extending <strong>200 nautical miles from Taiwan</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          An MSA vessel <strong>hailed three passing commercial ships by radio</strong> during the operation to request voyage and crew information &mdash; behavior consistent with quarantine enforcement practice. Two PRC research ships (<em>Jia Geng</em> and <em>Da Yang Hao</em>) simultaneously conducted <strong>surveys of the Gagua Ridge east of Taiwan</strong>, continuing dual-use undersea mapping that supports PLA submarine operations and navigation.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            AEI analysts assess this operation as <strong>practice for potential blockade enforcement</strong>, with civilian MSA ships being used alongside armed CCG and PLA Navy vessels. The PRC is rehearsing a quarantine model using civilian agencies for legal cover. This directly threatens sea lines of communication critical to Japan and Okinawa&rsquo;s logistical sustainment.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 4: TYPHOON MEKKHALA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #f59e0b; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Weather / Force Protection / Operations &mdash; June 24&ndash;28</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Typhoon Mekkhala (No. 7) Bearing Down on Okinawa &mdash; 126 kph Winds, 7-Meter Seas Expected</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Typhoon Mekkhala (No. 7)</strong> is located south of Okinawa and moving slowly northward toward the Nansei Islands. The storm carries a central pressure of <strong>975 hPa</strong>, maximum sustained winds of <strong>126 kph (78 mph)</strong>, and gusts up to <strong>180 kph (112 mph)</strong>. It is expected to remain strong as it approaches Okinawa from Thursday through Saturday. Seas around Okinawa are forecast to reach <strong>7 meters (23 feet)</strong> by Thursday and Friday with accompanying swells.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This is the <strong>second typhoon to strike Okinawa in June</strong>. Typhoon No. 6 battered the island on June 1, grounding <strong>400+ flights</strong>, shutting down the Okinawa Urban Monorail, and suspending all ferry services between Okinawa Island, Miyakojima, and surrounding islands. Japan&rsquo;s 2026 typhoon season is forecast to produce <strong>~28 storms (above average)</strong>, with roughly 14 expected to approach the country. The U.S. Consulate in Naha issued a weather alert on May 31.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Force Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Expect <strong>TCCOR conditions</strong> to be set across Okinawa installations. Outdoor training, flight operations, and port calls may be suspended. Personnel should monitor base weather channels and secure outdoor equipment. This is the beginning of what forecasters predict will be an <strong>exceptionally active typhoon season</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 5: CAMP HANSEN BARRACKS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Base Operations / Infrastructure / QoL &mdash; June 5</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">$320M &ldquo;Barracks of the Future&rdquo; Complex Opens at Camp Hansen &mdash; 1,096 Marines to Get Private Rooms</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A ribbon-cutting ceremony was held on June 5 for Camp Hansen&rsquo;s new <strong>$320 million bachelor enlisted quarters complex</strong>, funded by the Japanese government under the Defense Policy Review Initiative (DPRI). The three barracks buildings will house <strong>1,096 unaccompanied enlisted Marines through the rank of sergeant</strong>. Each resident receives a <strong>private 155-square-foot bedroom</strong> with personal sink; roommates share a 710-sq-ft unit with kitchen, restroom, shower, and washer/dryer.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Maj. Gen. Brian Wolford</strong> (MCIPAC Commander), <strong>Col. Joshua Mayoral</strong> (Camp Hansen CO), and <strong>Okinawa Defense Bureau Director Masaru Murai</strong> attended with approximately 80 guests. Construction began March 2022 and involved 15 local Okinawan construction companies. This replaces six older barracks, with <strong>11 additional buildings planned</strong> at Hansen and Camp Kinser. Marines are expected to begin moving in next month.
        </p>
      </div>
    </div>

    <!-- ===================== ITEM 6: KADENA SNORKELING DEATH ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Force Protection / Safety / Kadena AB &mdash; June 24</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Kadena Air Base Civilian Employee Dies in Snorkeling Incident at Odo Coast, Itoman</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>male civilian employee in his 40s</strong> deployed to Kadena Air Base died following a snorkeling incident at <strong>Odo Coast in Itoman city</strong>, southern Okinawa, on Tuesday, June 24. The individual was swept away while snorkeling with three companions in conditions including 8-foot waves. He was recovered by helicopter after 1.5 hours. The incident was reported at <strong>4:36 p.m.</strong>; he was pronounced dead at a local medical facility at <strong>6:58 p.m.</strong>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Brig. Gen. John Gallemore</strong>, 18th Wing Commander, stated: &ldquo;The 18th Wing is deeply saddened by this loss and our thoughts remain with the family and loved ones.&rdquo; Name withheld pending family notification. Japan Coast Guard is investigating. <strong>Note:</strong> With Typhoon Mekkhala approaching and increasingly rough seas, heightened water safety awareness is critical.
        </p>
      </div>
    </div>

    <!-- ===================== ITEM 7: JAPAN MISSILE DEPLOYMENTS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">7</span>
          <span style="color: #666; font-size: 11px;">Defense / Japan SDF / Southwest Islands &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Accelerating Missile Deployments on Southwestern Islands &mdash; Yonaguni SAMs by 2030, Type 12 on Kyushu</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Defense Minister <strong>Shinjiro Koizumi</strong> confirmed Japan will deploy <strong>Type 03 Chu-SAM medium-range surface-to-air missiles</strong> to Yonaguni Island &mdash; just <strong>110 km east of Taiwan</strong> &mdash; by fiscal 2030. Additionally, the upgraded <strong>Type 12 surface-to-ship missile</strong> (range extended from ~100 km to ~1,000 km) deployed to <strong>Camp Kengun on Kyushu on March 31</strong>. From Kyushu, the weapon can reach parts of China&rsquo;s coastline and North Korea.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China condemned the deployments as <strong>&ldquo;extremely dangerous&rdquo;</strong> and &ldquo;a deliberate move that creates regional tensions.&rdquo; PM Sanae Takaichi previously stated Tokyo could use military force in the event of a Chinese attack on Taiwan. These deployments complement U.S. Marine NMESIS/MADIS capabilities, creating a <strong>layered allied anti-access network across the Nansei Islands chain</strong>.
        </p>
      </div>
    </div>

    <!-- ===================== ITEM 8: NORTH KOREA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">8</span>
          <span style="color: #666; font-size: 11px;">Regional Threat / DPRK / WMD &mdash; June 4</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">North Korea Unveils New Nuclear Fuel Production Plant; Kim Pledges &ldquo;Exponential&rdquo; Nuclear Expansion</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Kim Jong Un visited a <strong>newly constructed facility to produce nuclear weapon fuel</strong> on June 3, with state media announcing plans to bolster the DPRK&rsquo;s nuclear forces <strong>&ldquo;at an exponential rate.&rdquo;</strong> This follows a live-fire test of a <strong>modular missile system on June 2</strong> and multiple missile launches earlier in 2026 (January and April), including ballistic missiles fired toward the Sea of Japan.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Okinawa Relevance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Okinawa falls within range of DPRK medium- and intermediate-range ballistic missiles. Kadena AB and USMC installations would be key response nodes in a Korean Peninsula contingency. The nuclear fuel plant expansion increases the urgency of theater missile defense posture across the Nansei Islands.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 9: FUTENMA/HENOKO ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">9</span>
          <span style="color: #666; font-size: 11px;">Base Operations / Government / Infrastructure &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Futenma Relocation Stalled: Pentagon Won&rsquo;t Return Base Without Long Runway at Henoko</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The U.S. Department of Defense maintains it <strong>will not return MCAS Futenma&rsquo;s site</strong> unless a long runway is secured at the replacement facility. Futenma&rsquo;s runway is <strong>~2,700 meters</strong>; the two planned V-shaped Henoko runways will be only <strong>~1,800 meters each</strong>. Japan and the U.S. agreed the Marines would use a private-sector airport when a longer runway is needed, but the gap remains a key friction point. Construction continues with completion projected no earlier than <strong>2033</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Additionally, <strong>~2,200 Okinawa-based Marines were deployed to the Middle East</strong> in March 2026 amid ongoing Iran operations. Kadena-based airmen are also deployed &ldquo;in harm&rsquo;s way&rdquo; as part of operations against Iran, per 18th Wing Commander Brig. Gen. Gallemore. These deployments draw down Okinawa&rsquo;s operational readiness for Indo-Pacific contingencies.
        </p>
      </div>
    </div>

    <!-- ===================== ITEM 10: F-15EX UPDATE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">10</span>
          <span style="color: #666; font-size: 11px;">Air Force / Kadena / Modernization &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">F-15EX Eagle II Delivery to Kadena Confirmed for 2027; Full Fleet by 2028&ndash;2029</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Air Force Secretary confirmed the <strong>first operational F-15EX Eagle II fighters will arrive at Kadena Air Base in 2027</strong>, with the full complement expected by 2028&ndash;2029. The Eagles will replace the aging F-15C/D fleet that has been drawn down, leaving Kadena without a permanently assigned fighter wing &mdash; a gap filled by rotational deployments. The F-15EX will restore Kadena&rsquo;s <strong>permanent air superiority capability</strong> in the Western Pacific.
        </p>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Operational Assessment</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa&rsquo;s deterrence posture is being substantially upgraded.</strong> The NMESIS/MADIS delivery to the 12th MLR gives Okinawa-based Marines organic anti-ship and air defense capability for the first time, directly addressing the PLAN&rsquo;s growing maritime assertiveness. Combined with Japan&rsquo;s Type 12 deployments on Kyushu and planned Yonaguni SAMs, a layered allied denial network is taking shape across the Nansei Island chain.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">China is intensifying gray-zone operations around Taiwan.</strong> The carrier transit, Pratas patrols, and the &ldquo;maritime law enforcement operation&rdquo; east of Taiwan &mdash; assessed as a blockade rehearsal &mdash; represent a coordinated escalation using military, coast guard, and civilian maritime agencies. This multi-domain approach complicates attribution and response.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Near-term readiness concerns persist.</strong> The Middle East deployments of ~2,200 Marines and Kadena aircrews create a readiness gap for Indo-Pacific contingencies. Typhoon Mekkhala will further constrain operations this week. The Futenma relocation impasse and Kadena&rsquo;s fighter gap (until F-15EX arrives in 2027) remain unresolved structural vulnerabilities.
      </p>
    </div>

    <!-- ===================== WEATHER OUTLOOK ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Okinawa Weather Outlook</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Typhoon Mekkhala (No. 7)</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">Approaching &mdash; 126 kph sustained</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Wave Height (Thu&ndash;Fri)</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">7 meters (23 ft)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Wind Gusts</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">Up to 180 kph (112 mph)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Temperature Range</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">25&ndash;30&deg;C (77&ndash;86&deg;F)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">2026 Season Forecast</td>
          <td style="color: #f59e0b; text-align: right; padding: 6px 0;">~28 storms (above average)</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Military Times &bull; Stars and Stripes &bull; Washington Times &bull; AEI China-Taiwan Update &bull; Japan Times &bull; Defense News &bull; NPR &bull; U.S. Embassy Japan &bull; News on Japan &bull; USNI News &bull; Newsweek &bull; The Diplomat &bull; Responsible Statecraft &bull; Tokyo Weekender &bull; PACOM Media
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR OFFICIAL USE ONLY
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
  subject: `[World Monitor] Okinawa Intelligence Briefing — ${today}`,
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
