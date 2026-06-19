#!/usr/bin/env node
/**
 * World Monitor — Okinawa Regional Intelligence Briefing
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-okinawa-briefing.mjs
 */

const RECIPIENTS = [
  'johnmcbride2928@gmail.com',
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
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Regional Intelligence</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Geopolitics &bull; Government &bull; Security &bull; Weather</p>
    </div>

    <!-- ===================== FLASH: CH-53E EMERGENCY LANDING ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">FLASH</span>
          <span style="color: #dc2626; font-size: 11px; font-weight: 700;">Military / Aviation Incident &mdash; June 18</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">USMC CH-53E Conducts Emergency Landing on Farmland Near Cape Hedo, Northern Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A U.S. Marine Corps <strong>CH-53E Super Stallion</strong> transport helicopter conducted an <strong>emergency landing on agricultural land</strong> near Cape Hedo in Kunigami Village, northern Okinawa Prefecture on June 18. No casualties have been reported. The incident is the latest in a series of CH-53 incidents on the island and is expected to generate <strong>local political backlash</strong> ahead of Okinawa Memorial Day (June 23) and the September gubernatorial election.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Assessment:</strong> Governor Tamaki and opposition groups are likely to cite this incident as evidence of the continued burden U.S. military operations place on Okinawan communities. The timing &mdash; days before the Memorial Day ceremonies &mdash; amplifies political sensitivity. Watch for formal protest statements from the prefectural government.
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 1: INDOPACOM RENAMED TO PACOM ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / Command Structure &mdash; June 17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Pentagon Reverts INDOPACOM to PACOM; Allies Process Strategic Signal Amid China Engagement Shift</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Pentagon officially <strong>renamed U.S. Indo-Pacific Command back to U.S. Pacific Command (PACOM)</strong> on June 17, reversing the 2018 decision by then-Defense Secretary Mattis. The mission and area of responsibility remain unchanged. Analysts interpret the move as reflecting <strong>President Trump&rsquo;s preference for diplomatic engagement over competition with China</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Key implication for Okinawa:</strong> Japan and Australia continue to use &ldquo;Indo-Pacific&rdquo; terminology, signaling a potential rhetorical divergence with Washington. The renaming does not alter force posture or basing arrangements, but it signals a shift in how Washington frames its strategic priorities. Operations from Japan and the Philippines remain the core of any Taiwan contingency planning.
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 2: RESOLUTE DRAGON 26 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Military / Joint Exercise &mdash; June 20&ndash;30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Exercise Resolute Dragon 26 Begins Tomorrow: JGSDF Ospreys to Fly from MCAS Futenma for First Time; NMESIS &amp; MADIS to Deploy</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Resolute Dragon 26</strong>, a major U.S.-Japan bilateral exercise, begins June 20 and runs through June 30. For the <strong>first time</strong>, three Japan Ground Self-Defense Force (JGSDF) V-22 Ospreys will operate from <strong>MCAS Futenma</strong> and conduct flights to islands near Taiwan. The exercise spans JGSDF bases across Kyushu (Oita, Saga, Kumamoto, Kagoshima), Tokuno Island, Amami Oshima, and Okinawa Prefecture installations on Miyako Island, Ishigaki Island, and Yonaguni Island, plus JASDF Naha Air Base.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          The exercise will feature advanced Marine Corps systems including the <strong>Navy-Marine Expeditionary Ship Interdiction System (NMESIS)</strong> anti-ship missile and the <strong>Marine Air Defense Integrated System (MADIS)</strong>. These capabilities are central to the Marine Corps&rsquo; Force Design modernization and the island-chain defense concept critical to any Taiwan contingency. Expect increased military air and ground traffic across the Nansei Island chain.
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 3: HENOKO LANDFILL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Government / Base Relocation &mdash; June 17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Henoko Landfill Expands: Japan Defense Ministry Begins New Reclamation Section East of Cape Henoko</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japanese Defense Ministry notified Okinawa Prefecture on June 17 that it has <strong>begun pouring earth and sand in a new area east of Cape Henoko</strong> in Oura Bay, Nago. This section neighbors the area where earth-filling began last November. Reclamation on the <strong>southern side is nearly complete</strong>. Work on the eastern side has been delayed by soft undersea ground, requiring approximately <strong>71,000 sand piles</strong> to be driven into the seabed. Construction is expected to continue <strong>until at least 2033</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>Complicating factor:</strong> The Pentagon has stated it will <strong>not return Futenma</strong> unless Henoko includes a longer runway than currently planned. The two runways at the Henoko Replacement Facility would be shorter than Futenma&rsquo;s existing runway, reducing Marine Corps operational capability. This disagreement could further delay the timeline beyond 2033.
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 4: KADENA FORCE POSTURE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Military / Force Posture &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Kadena Air Base: Record Fighter Surge, F-15EX Delayed to 2027, F-22 Raptors on Rotational Duty</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Kadena Air Base experienced a <strong>record concentration of 32 outside warplanes</strong> on June 1&ndash;2 &mdash; the first time since 2007 that more than 30 external warplanes were observed at the base. Approximately 20 outside warplanes remained parked through June 15. Two squadrons of <strong>F-22 Raptors</strong> from JBER Alaska and JB Langley-Eustis are providing rotational fighter coverage.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>F-15EX Eagle II</strong> permanent basing at Kadena has been <strong>delayed to 2027</strong> (one year behind schedule) due to a Boeing factory strike in St. Louis. Full delivery of 36 aircraft is now expected by 2028. Kadena &mdash; the <strong>closest U.S. air base to Taiwan</strong> &mdash; remains reliant on rotational deployments until permanent fighters arrive.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          <strong>ISR activity:</strong> RC-135 Cobra Ball aircraft (ballistic missile detection capable) have been frequently observed at Kadena, conducting surveillance of the Korean Peninsula and adjacent waters in response to North Korea&rsquo;s unveiling of a new nuclear fuel production facility in early June.
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 5: 31ST MEU DETERRENCE GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Military / Force Deployment &mdash; Ongoing Since March</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">31st MEU Remains Deployed to Middle East; Indo-Pacific Deterrence Gap Persists</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Approximately <strong>2,200 Marines from the 31st Marine Expeditionary Unit</strong> &mdash; the only permanently forward-deployed MEU in the Indo-Pacific &mdash; remain deployed to the Middle East aboard USS Tripoli and its amphibious ready group (USS San Diego, USS New Orleans, homeported at Sasebo). The deployment began in <strong>March 2026</strong> amid Iran-related operations.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Marine Corps Commandant Gen. Eric Smith has acknowledged this creates a <strong>gap in Indo-Pacific deterrence capacity</strong>. Defense analysts warn this deployment plays into China&rsquo;s strategic calculus. Kadena-based airmen were also <strong>sent &ldquo;in harm&rsquo;s way&rdquo;</strong> amid Iran operations (Operation Epic Fury) in April.
        </p>
      </div>
    </div>

    <!-- ===================== EVENT 6: GLOBAL HAWK RELOCATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Military / ISR Assets &mdash; June 18</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">RQ-4B Global Hawks Permanently Relocate from Guam to Yokota Air Base</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Three <strong>RQ-4B Global Hawk</strong> unmanned surveillance aircraft permanently relocated from Andersen AFB, Guam to Yokota Air Base near Tokyo on June 18. Approximately <strong>150 personnel</strong> accompany the move. The relocation enhances ISR support for the Western Pacific theater and <strong>improves weather resilience during typhoon season</strong>. Japan&rsquo;s Ministry of Defense called the move &ldquo;unavoidable.&rdquo; This strengthens persistent surveillance capability across the Nansei Island chain and East China Sea.
        </p>
      </div>
    </div>

    <!-- ===================== REGIONAL SECURITY CONTEXT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #eab308; padding: 20px; margin-bottom: 24px;">
      <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Regional Security Context</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #fff; padding: 8px 0; font-weight: 700; width: 35%;">North Korea</td>
          <td style="color: #bbb; padding: 8px 0;">Unveiled new nuclear fuel production facility in early June. Kim Jong Un announced plans to bolster nuclear forces &ldquo;at an exponential rate.&rdquo; RC-135 Cobra Ball surveillance flights from Kadena intensified.</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #fff; padding: 8px 0; font-weight: 700;">China / Taiwan Strait</td>
          <td style="color: #bbb; padding: 8px 0;">PRC Ministry of Transport conducted &ldquo;special maritime law enforcement operation&rdquo; east of Taiwan. Beijing restricted large swaths of offshore airspace for up to 40 days without explanation. Three new oil/gas platforms constructed in the East China Sea near Senkaku/Diaoyu Islands, drawing formal Japanese protests.</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #fff; padding: 8px 0; font-weight: 700;">East China Sea</td>
          <td style="color: #bbb; padding: 8px 0;">Thousands of Chinese fishing boats assembled in organized formations spanning 200+ miles near major shipping lanes. PLA Navy and Air Force have intensified joint activities with Russia in the Sea of Japan.</td>
        </tr>
        <tr>
          <td style="color: #fff; padding: 8px 0; font-weight: 700;">Camp Hansen</td>
          <td style="color: #bbb; padding: 8px 0;">$320M &ldquo;barracks of the future&rdquo; ribbon-cutting held June 5. Japan-funded facility houses 1,096 Marines with private rooms. First residents move in July. 15 local Okinawan construction firms employed.</td>
        </tr>
      </table>
    </div>

    <!-- ===================== POLITICAL / GOVERNANCE ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Political &amp; Governance Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
        <strong style="color: #fff;">Okinawa Memorial Day (June 23):</strong> Irei no Hi ceremonies at Peace Memorial Park in Itoman begin at 11:50 a.m. A prefecture-wide siren at noon marks one minute of silence. The ceremony typically draws national political attention to base-related issues. With the CH-53E emergency landing on June 18, Governor Tamaki is expected to sharpen anti-base rhetoric.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
        <strong style="color: #fff;">Governor Tamaki Seeks Third Term:</strong> Governor Denny Tamaki (66) has announced his candidacy for a third term in the <strong>September 13, 2026 gubernatorial election</strong>, maintaining opposition to Futenma-to-Henoko relocation. His political support is wavering: the CDP backs Tamaki, but coalition partner Komeito tolerates the base relocation plan.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Sexual Assault Case Dropped:</strong> Japanese prosecutors declined to pursue sexual assault charges against a U.S. Army soldier assigned to the 38th ADA Brigade at Kadena (June 12). At least two other sexual assault cases against service members were dropped in the past two years. A separate Marine&rsquo;s seven-year sentence was finalized in March.
      </p>
    </div>

    <!-- ===================== ECONOMIC / FINANCIAL ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #22c55e; padding: 20px; margin-bottom: 24px;">
      <p style="color: #22c55e; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Economic &amp; Financial</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #fff; padding: 8px 0; font-weight: 700; width: 35%;">Tourism Record</td>
          <td style="color: #bbb; padding: 8px 0;">Okinawa projected to exceed <strong>10 million tourists</strong> for the first time in FY2025/26. Tourism revenue up ~50% over the past decade. Expedia named Okinawa a top global destination for 2026.</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #fff; padding: 8px 0; font-weight: 700;">New Accommodation Tax</td>
          <td style="color: #bbb; padding: 8px 0;">Okinawa introducing a <strong>2% accommodation tax</strong> in FY2026, expected to generate &yen;7.8 billion annually for landscape protection, tourism workforce development, and marine safety.</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #fff; padding: 8px 0; font-weight: 700;">Marubeni Investment</td>
          <td style="color: #bbb; padding: 8px 0;">Major trading house Marubeni acquired a stake in Okinawa Tourist Service Inc., signaling increased corporate investment in the prefecture&rsquo;s tourism sector.</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #fff; padding: 8px 0; font-weight: 700;">OHA Increase</td>
          <td style="color: #bbb; padding: 8px 0;">U.S. service members living off-base on Okinawa receiving <strong>$400&ndash;$500/month increase</strong> in Overseas Housing Allowance, effective May 16.</td>
        </tr>
        <tr>
          <td style="color: #fff; padding: 8px 0; font-weight: 700;">Defense Logistics</td>
          <td style="color: #bbb; padding: 8px 0;">Amentum secured $77M, 60-month contract for AI-powered supply chain solutions for the Pentagon across Japan/PACOM AOR (June 17).</td>
        </tr>
      </table>
    </div>

    <!-- ===================== WEATHER ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #3b82f6; padding: 20px; margin-bottom: 24px;">
      <p style="color: #3b82f6; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Weather &amp; Environment</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
        <strong style="color: #fff;">Current:</strong> No active typhoon warnings for Okinawa as of June 19. The island is in <strong>tsuyu (rainy season)</strong> with average humidity of 84%.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
        <strong style="color: #fff;">Recent:</strong> Typhoon Jangmi (No. 6) struck Okinawa June 1&ndash;2 &mdash; the first major direct hit in nearly three years. Over 400 flights canceled, tens of thousands lost power, 16+ injured. U.S. military bases reported only minor damage.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Forecast:</strong> Japan is projected to face <strong>more typhoons than usual in 2026</strong> (~28 formations, 14 expected to approach Japan). Peak season runs August&ndash;September. Global Hawk relocation from Guam to Yokota was partly motivated by typhoon resilience.
      </p>
    </div>

    <!-- ===================== KEY WATCH ITEMS ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Watch Items &mdash; Next 7 Days</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #dc2626; padding: 8px 0; font-weight: 700; width: 20%; vertical-align: top;">Jun 20&ndash;30</td>
          <td style="color: #bbb; padding: 8px 0;"><strong style="color: #fff;">Resolute Dragon 26 begins.</strong> Increased military air/ground traffic across Nansei Islands. JGSDF Ospreys at Futenma. NMESIS and MADIS deployments to Miyako, Ishigaki, Yonaguni.</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #dc2626; padding: 8px 0; font-weight: 700; vertical-align: top;">Jun 23</td>
          <td style="color: #bbb; padding: 8px 0;"><strong style="color: #fff;">Okinawa Memorial Day.</strong> Peace Memorial Park ceremony at 11:50. Prefecture-wide siren at noon. Expect heightened anti-base political messaging, amplified by CH-53E incident.</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #dc2626; padding: 8px 0; font-weight: 700; vertical-align: top;">Ongoing</td>
          <td style="color: #bbb; padding: 8px 0;"><strong style="color: #fff;">31st MEU gap.</strong> The only forward-deployed MEU remains in the Middle East, leaving the Indo-Pacific without its primary amphibious crisis response capability.</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #dc2626; padding: 8px 0; font-weight: 700; vertical-align: top;">Ongoing</td>
          <td style="color: #bbb; padding: 8px 0;"><strong style="color: #fff;">Kadena fighter gap.</strong> F-15EX delays to 2027 mean continued reliance on rotational fighter deployments at the closest U.S. air base to Taiwan.</td>
        </tr>
        <tr>
          <td style="color: #dc2626; padding: 8px 0; font-weight: 700; vertical-align: top;">Sep 13</td>
          <td style="color: #bbb; padding: 8px 0;"><strong style="color: #fff;">Gubernatorial election.</strong> Governor Tamaki&rsquo;s weakening coalition and anti-base platform could shift Okinawa&rsquo;s political dynamic on base issues.</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; Japan Times &bull; Marine Corps Times &bull; USNI News &bull; The Diplomat &bull; Foreign Policy &bull; CSIS/AMTI &bull; AEI China &amp; Taiwan Update &bull; Defense Post &bull; Air &amp; Space Forces Magazine &bull; Task &amp; Purpose &bull; The Aviationist &bull; NPR &bull; Ryukyu Shimpo &bull; DVIDS &bull; NHK &bull; News on Japan &bull; Breaking Travel News &bull; Tokyo Weekender
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

const subject = `[World Monitor] Okinawa Regional Intelligence Briefing — ${today}`;

for (const recipient of RECIPIENTS) {
  const payload = JSON.stringify({
    from: 'World Monitor <onboarding@resend.dev>',
    to: [recipient],
    subject,
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
      console.error(`[FAILED] ${recipient}: Resend API error ${httpCode}: ${body}`);
    } else {
      const data = JSON.parse(body);
      console.log(`[OK] ${recipient} — Resend ID: ${data.id}`);
    }
  } catch (err) {
    console.error(`[FAILED] ${recipient}: ${err.message}`);
  }
}
