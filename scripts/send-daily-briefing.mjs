#!/usr/bin/env node
/**
 * World Monitor — Okinawa Regional Intelligence Briefing
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
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa &mdash; 24-Hour Regional Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Security &bull; Government &bull; Regional Threats &bull; Force Posture</p>
    </div>

    <!-- ===================== ITEM 1: HENOKO LANDFILL BREAKING ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">BREAKING</span>
          <span style="color: #666; font-size: 11px;">Government / Base Relocation / Political &mdash; June 17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Henoko Landfill Expands to New Section in Oura Bay; Defense Ministry Advances Futenma Replacement Despite Opposition</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Today (June 17)</strong>, Japan&rsquo;s Defense Ministry notified Okinawa Prefecture that it has begun pouring earth and sand in a <strong>new area east of Cape Henoko</strong> in Oura Bay for the planned MCAS Futenma replacement facility. This new section neighbors the area where full-scale reclamation work began in <strong>November 2025</strong>. The southern landfill area has been largely completed since 2018; the Oura Bay section requires reinforcement of soft undersea ground through approximately <strong>71,000 sand piles</strong> driven into the seabed.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The overall relocation target is <strong>April 2033</strong> with facility transfer taking an additional three years. Critically, the U.S. DOD has stated it will <strong>not return the Futenma site unless a longer runway than currently planned at Henoko is built</strong> &mdash; the current design features two runways shorter than Futenma&rsquo;s existing runway, reducing Marine Corps operational capability. The timing &mdash; three months before the <strong>September 13 gubernatorial election</strong> &mdash; is seen as a deliberate move to demonstrate progress and is expected to draw strong opposition from Governor Tamaki&rsquo;s government.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This development is the <strong>top local story in Okinawa today</strong>. Governor <strong>Denny Tamaki</strong> is seeking a third term on September 13 against <strong>Genta Koja</strong>, who supports the relocation. Despite 30 years since the U.S.-Japan agreement to return Futenma, the site remains unreturned. The runway discrepancy between U.S. requirements and the current Henoko design represents a <strong>potentially irreconcilable friction point</strong> in the bilateral relationship.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 2: RESOLUTE DRAGON 26 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Military / Exercise / Force Posture &mdash; T-minus 3 Days</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Resolute Dragon 26 Launches June 20: 9,600 Troops Across Okinawa &amp; Southwest Islands; First JGSDF Osprey at Futenma</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Exercise Resolute Dragon 26 (June 20&ndash;30)</strong> is the premier annual bilateral field training exercise between <strong>III Marine Expeditionary Force</strong> and the <strong>JGSDF Western Army</strong>. This year: <strong>7,300 Japanese troops and 2,300 U.S. service members</strong>. Joint command centers at <strong>Camp Foster and Camp Kinser</strong>, with operations spanning <strong>Okinawa, Miyako, Ishigaki, and Yonaguni Islands</strong> plus Kyushu.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Notable firsts: <strong>Three JGSDF V-22 Ospreys will operate from MCAS Futenma for the first time ever</strong>, and JGSDF Ospreys will land on <strong>Miyako Island (220 miles from Taiwan) for the first time</strong> to rehearse casualty evacuation. Key U.S. participants include <strong>3rd Marine Division, 12th Marine Littoral Regiment, 3rd Multi-Domain Task Force, 7th Fleet, and 18th Wing (Kadena)</strong>. Systems include <strong>NMESIS anti-ship missiles and MADIS air defense</strong>. Concurrent: <strong>Valiant Shield 2026 (June 22&ndash;July 1)</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Operational Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The exercise rehearses <strong>distributed maritime operations and First Island Chain defense</strong>. The 12th MLR and 3rd MDTF participation signals rehearsal of <strong>anti-access/area denial and stand-in force concepts</strong> designed to counter a potential PRC maritime advance. <strong>Expect elevated military air and ground activity across all Okinawa installations June 20&ndash;30.</strong> The Miyako Island Osprey landing may face local political sensitivity given proximity to Taiwan.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 3: 31st MEU GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific / Deterrence &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">31st MEU Remains in Middle East (Day 96); Commandant: &ldquo;The Gap Is Unfilled&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Okinawa-based <strong>31st MEU (~2,500 Marines)</strong> aboard <strong>USS Tripoli (LHA-7) and USS New Orleans (LPD-18)</strong> has been forward-deployed to the Middle East since <strong>March 13</strong>, supporting <strong>Operation Epic Fury</strong> and enforcing the Iranian port blockade in the Strait of Hormuz. Marines <strong>boarded the Iranian-flagged vessel Touska on April 20</strong>. This is day 96 of the only permanently stationed Indo-Pacific MEU being absent from its home theater.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Commandant <strong>Gen. Eric Smith</strong> testified before HASC: <em>&ldquo;The gap is unfilled. When you move one force from one combatant command theater to another, you don&rsquo;t replace it.&rdquo;</em> The <strong>USS Boxer ARG / 11th MEU</strong> deployed early from California to partially backfill. No return timeline announced. Separately, the Atlantic Council has urged Washington to <strong>reverse the planned Okinawa-to-Guam relocation of 5,000 Marines</strong> ($8.7B program) to preserve forward deterrence.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Deterrence Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The 31st MEU&rsquo;s absence during a period of heightened PRC activity around Taiwan and the Senkakus creates a <strong>measurable deterrence shortfall</strong>. The 11th MEU backfill lacks theater familiarity and bilateral exercise integration. Defense experts warn this gap could <strong>embolden PRC gray-zone operations</strong> in the East China Sea. The Guam relocation debate adds another dimension to the question of adequate Indo-Pacific combat power.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 4: KADENA FIGHTER STATUS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Air Power / Kadena / Fighter Posture &mdash; Current</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Kadena Air Base Fighter Status: F-22s Rotating In; F-15EX Permanent Deployment Delayed to 2027</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>F-22 Raptors</strong> from the 90th Fighter Squadron (Elmendorf, Alaska) and 27th FS (Langley, Virginia) arrived at Kadena in <strong>May 2026</strong> (at least 12 aircraft from Alaska). <strong>F-16 Fighting Falcons</strong> from the Colorado Air National Guard have been on rotation since <strong>January 2026</strong>. The rotational fighter posture continues to fill the gap left by the retirement of Kadena&rsquo;s 48 aging <strong>F-15C/D Eagles</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The permanent <strong>F-15EX Eagle II deployment has been delayed to 2027</strong> (originally spring 2026), due to the <strong>Boeing St. Louis plant strike (August&ndash;November 2025)</strong>. Air Force Secretary <strong>Troy Meink</strong> expects first delivery in 2027 with all <strong>36 aircraft</strong> in place by 2028&ndash;2029. The 18th Wing remains operationally capable through rotational fighters but the delay extends the period of <strong>reduced permanent air superiority capacity</strong> at the Indo-Pacific&rsquo;s most critical forward air base.
        </p>
      </div>
    </div>

    <!-- ===================== ITEM 5: CHINA SENKAKU + TAIWAN ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Security / East China Sea / Taiwan Strait &mdash; Escalating</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PRC Maritime Escalation: 22 Armed Patrol Ships at Senkakus; &ldquo;Special Law Enforcement&rdquo; Operations East of Taiwan</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>22 Chinese patrol ships</strong> (3,000+ tons each) now operate around the Senkaku Islands &mdash; up from 20 in 2024 and double the 2019 count. Eight exceed 5,000 tons; two exceed 10,000 tons. Many are <strong>armed with 76mm naval guns</strong>. Chinese vessels maintained Senkaku contiguous zone presence for <strong>341 consecutive days</strong> through December 2025, and the pattern continues. Three new <strong>oil and gas platforms</strong> were constructed in the East China Sea this year, drawing formal Japanese protests.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Around Taiwan: PRC conducted a <strong>&ldquo;special maritime law enforcement operation&rdquo; east of Taiwan (June 6&ndash;10)</strong> with coast guard and research vessels. A CCG vessel <strong>circled Pratas Island twice</strong> in a 24+ hour patrol (June 5&ndash;6) &mdash; a first. <strong>Two PRC ships intruded near Taiwan&rsquo;s Itu Aba Island (June 11)</strong>, described as the first such incursion. A <strong>Chinese vessel and Philippine supply ship collided near Second Thomas Shoal today (June 17)</strong>. PLA conducted <strong>217 aerial incursions</strong> into Taiwan&rsquo;s ADIZ in May.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Threat Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The PRC is <strong>simultaneously escalating across multiple First Island Chain flashpoints</strong>: Senkakus, Pratas, Itu Aba, Second Thomas Shoal, and the Taiwan eastern seaboard. The Senkaku intrusions occur <strong>170 NM from Okinawa</strong>. Combined with the 31st MEU&rsquo;s absence and the F-15EX delay, this creates an <strong>elevated risk environment for miscalculation</strong>. China&rsquo;s shift from exercise-based to <strong>sustained operational presence</strong> represents a qualitative change in gray-zone strategy.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== ITEM 6: NORTH KOREA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Regional Threat / DPRK / Missile &amp; Nuclear &mdash; June 15</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">North Korea Tests Modular Missile System (June 15); New Nuclear Fuel Plant Unveiled as Kim Pledges &ldquo;Exponential&rdquo; Expansion</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On <strong>June 15</strong> (two days ago), Kim Jong Un oversaw a test of a <strong>new modular TEL and &ldquo;multiple tactical cruise missile&rdquo; system</strong> for border deployment. The launcher swaps between a <strong>nine-tube 240mm MLRS pod and Hwasong-11D CRBM pod</strong>. State media claimed <strong>AI-guided targeting and automated launch</strong>. Kim declared weapons must deliver attacks deemed <strong>&ldquo;impossible to survive.&rdquo;</strong>
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On <strong>June 4</strong>, Pyongyang unveiled a <strong>new facility to produce nuclear bomb fuel</strong>, with Kim announcing plans to bolster nuclear forces <strong>&ldquo;at an exponential rate.&rdquo;</strong> The earlier May 27 test featured the same modular concept with interchangeable pods. Kadena Air Base and MCAS Futenma remain <strong>within range of DPRK medium-range ballistic missiles</strong>. The U.S.-Japan EDD (June 8&ndash;9) reaffirmed the nuclear umbrella commitment in direct response to these developments.
        </p>
      </div>
    </div>

    <!-- ===================== ITEM 7: US-JAPAN DETERRENCE + JAPAN DEFENSE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Alliance / Nuclear / Defense Buildup &mdash; June 8&ndash;9</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">U.S.-Japan Extended Deterrence Dialogue Reaffirms Nuclear Commitment; Japan Accelerates &ldquo;Southern Shield&rdquo; Buildup</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>EDD in Tokyo (June 8&ndash;9)</strong> saw Washington reaffirm Japan&rsquo;s defense using <strong>&ldquo;the full range of U.S. defense capabilities, including nuclear.&rdquo;</strong> Both sides discussed China&rsquo;s <strong>&ldquo;dramatic and opaque nuclear weapons buildup&rdquo;</strong> and DPRK denuclearization. Delegations conducted a tabletop exercise at <strong>Yokosuka Naval Base</strong>. Japan encouraged multilateral strategic stability talks with China and Russia.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan continues accelerating its <strong>independent &ldquo;Southern Shield&rdquo; buildup</strong>: long-range missiles deployed to Kumamoto; <strong>400 Tomahawk cruise missiles</strong> being acquired; electronic warfare and air defense assets positioned across <strong>Miyako, Ishigaki, and Yonaguni Islands</strong>. Defense Minister <strong>Koizumi visited Indonesia</strong> to advance the transfer of retired <strong>Asagiri-class destroyers</strong>. A 2025 survey showed <strong>77% of Japanese doubt U.S. military protection during a crisis</strong> &mdash; driving Japan&rsquo;s counterstrike capability development.
        </p>
      </div>
    </div>

    <!-- ===================== ITEM 8: CAMP HANSEN + LOCAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">7</span>
          <span style="color: #666; font-size: 11px;">Installation / Quality of Life / Local &mdash; June 5&ndash;12</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">$320M Camp Hansen Barracks Opens; Prosecutors Drop Sexual Assault Case Against U.S. Soldier</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>June 5 ribbon-cutting</strong> at Camp Hansen opened three new six-story barracks &mdash; a <strong>$320 million project funded by Japan</strong> under the DPRI. The complex houses <strong>1,096 unaccompanied enlisted Marines</strong> in private 155-sq-ft bedrooms with shared kitchenettes and laundry. <strong>Maj. Gen. Brian Wolford</strong>: <em>&ldquo;This is the first domino that starts falling for the rest of the construction&rdquo;</em> &mdash; 11 more buildings planned for Hansen and Kinser. Move-in begins <strong>July 2026</strong>. Built by 15 local Okinawan firms.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On <strong>June 12</strong>, Naha prosecutors <strong>declined to pursue sexual assault and bodily injury charges</strong> against a U.S. Army soldier (20s) assigned to <strong>Echo Battery, 1-1 ADA, 38th ADA Brigade at Kadena</strong>, who allegedly assaulted a woman in April. He received only a ~$125 fine for a traffic violation. No explanation was given. This continues a pattern of several dropped sexual assault cases against U.S. service members since 2023, a <strong>politically sensitive issue</strong> ahead of the September gubernatorial election.
        </p>
      </div>
    </div>

    <!-- ===================== ITEM 9: PFAS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">8</span>
          <span style="color: #666; font-size: 11px;">Environmental / Health / Community Relations &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PFAS Contamination Near Kadena &amp; Futenma Reaches 56x Japan&rsquo;s Legal Limit; USFJ Denies Base Access for Testing</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Prefecture surveys found PFAS at <strong>28 of 40 groundwater sites</strong>. The highest reading: <strong>2,800 ppt near Kadena Air Base &mdash; 56 times Japan&rsquo;s 50 ppt standard</strong>. MCAS Futenma identified as a likely primary source. Elevated levels also found near <strong>Camp Hansen in Kin town</strong> (220 ppt upstream). PFAS detected in waterways, soil, residents&rsquo; blood, and <strong>drinking water supplied to 450,000 people</strong>. USFJ has denied all four of Okinawa&rsquo;s requests for on-base water sampling since 2016, stating evidence of base-sourced contamination is &ldquo;insufficient.&rdquo;
        </p>
      </div>
    </div>

    <!-- ===================== WEATHER ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">WX</span>
          <span style="color: #666; font-size: 11px;">Weather / Typhoon Season / Seismic</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Rainy Season Active Through ~June 21; Typhoon Season Forecast Above Average; Philippines Quake Triggered Okinawa Tsunami Advisory</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Current:</strong> Okinawa is in the <strong>tsuyu rainy season</strong> (started May 4, ending ~June 21). Today: High 84&deg;F / Low 77&deg;F, humidity 90%+. No active typhoon or severe weather alerts. <strong>Typhoon Jangmi (June 1&ndash;3)</strong> cancelled 400+ flights; peak winds of <strong>80 mph at Futenma</strong>; 9,000+ homes lost power; TCCOR 1-Emergency declared at U.S. bases; all-clear June 2. U.S. bases sustained minimal damage; no military casualties.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>June 7:</strong> A <strong>M7.8 earthquake in the Philippines</strong> triggered a tsunami advisory for Okinawa (3-foot waves expected). Kadena&rsquo;s 18th Wing ordered personnel from coastlines and opened evacuation gates; DoD school students relocated. All-clear at 1:35 PM; no damage. <strong>Season outlook:</strong> ~28 tropical storms forecast (above average of 25.1), with ~14 approaching Japan. Peak season August&ndash;September.
        </p>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Operational Picture</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Today&rsquo;s Henoko landfill expansion is the top local story</strong> and will dominate Okinawa politics through the September election. The runway discrepancy between U.S. requirements and current plans adds uncertainty to the Futenma timeline.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Resolute Dragon 26 is the week&rsquo;s critical military event.</strong> Beginning in three days, it will stress-test distributed operations across the southwest island chain with 9,600 troops. The JGSDF Osprey firsts at Futenma and Miyako signal deepening interoperability. Expect elevated activity across all installations.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The deterrence picture is strained.</strong> The 31st MEU is in the Middle East (day 96, no return date), the F-15EX is delayed to 2027, and PRC gray-zone operations are escalating across the First Island Chain. North Korea tested new missile systems two days ago and is expanding nuclear production. The June 8&ndash;9 EDD was a direct response to this threat convergence.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">72-hour watch items:</strong> Resolute Dragon 26 launch (June 20); Henoko opposition response; DPRK follow-on provocations; PRC operations east of Taiwan; rainy season end (~June 21) transitioning to typhoon vulnerability.
      </p>
    </div>

    <!-- ===================== QUICK REFERENCE ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Quick Reference &mdash; Key Dates</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Resolute Dragon 26</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">Jun 20 &ndash; Jun 30</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Valiant Shield 2026 (JSDF)</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">Jun 22 &ndash; Jul 1</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Tsuyu Rainy Season End (Est.)</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">~Jun 21</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Camp Hansen Barracks Move-In</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">July 2026</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">F-15EX First Delivery (Kadena)</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">2027 (delayed)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Okinawa Governor Election</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">Sep 13, 2026</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Henoko Completion Target</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">April 2033</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Peak Typhoon Season</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">Aug &ndash; Sep 2026</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; Marine Corps Times &bull; USNI News &bull; U.S. State Department &bull; Japan Ministry of Defense &bull; The Japan Times &bull; Al Jazeera &bull; The Diplomat &bull; NK News &bull; NPR &bull; GlobalSecurity.org &bull; SCMP &bull; Atlantic Council &bull; AEI &bull; DVIDSHUB &bull; Military.com &bull; Nikkei Asia &bull; Newsweek &bull; Air &amp; Space Forces Magazine &bull; Naval News &bull; U.S. Embassy Japan &bull; Taiwan News
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
