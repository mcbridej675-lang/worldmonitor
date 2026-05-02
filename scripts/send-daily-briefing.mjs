#!/usr/bin/env node
/**
 * World Monitor — Okinawa Daily Briefing Email Sender
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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Okinawa Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Government &bull; Financial &bull; Environmental</p>
    </div>

    <!-- ===================== MILITARY SECTION ===================== -->
    <div style="margin-bottom: 8px;">
      <p style="color: #dc2626; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Military &amp; Defense</p>
    </div>

    <!-- EVENT 1: Nansei Islands Exercise -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Force Posture / Indo-Pacific &mdash; May 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JSDF Announces First-Ever Exercise Focused on Islands Near Taiwan &mdash; 12th MLR to Participate</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Japan Ground Self-Defense Force&rsquo;s <strong>Ground Component Command</strong> will conduct its first-ever exercise focused on the remote Nansei (Ryukyu) island chain from <strong>May 17&ndash;22, 2026</strong>. Approximately <strong>300 JGSDF soldiers</strong> from all regional armies will participate in mobile deployment and material transportation drills across <strong>nine ports</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>20 Marines from the 12th Marine Littoral Regiment</strong> (Camp Butler, Okinawa) will join command post training in <strong>Miyakojima city</strong> from May 17&ndash;20, establishing the <strong>first-ever U.S.-Japan coordination center</strong> on the island. Key deployments include a <strong>Type-88 surface-to-ship guided missile launcher</strong> to Ishigaki (150 mi east of Taiwan) and <strong>two ScanEagle II UAVs</strong> to Yonaguni (70 mi east of Taiwan).
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Marks a major escalation in Japan&rsquo;s southwestern defense posture. The exercise signals deepening US-Japan interoperability in a potential Taiwan contingency. No U.S. units will operate on Ishigaki or Yonaguni, maintaining political sensitivities, but the bilateral command center on Miyakojima is a significant first. Watch for PRC reaction via diplomatic statements or PLA naval activity in the East China Sea.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 2: Kadena / Operation Epic Fury -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Operations / Middle East &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Kadena 18th Wing Personnel Deployed to Operation Epic Fury &mdash; 31st MEU Departed Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Brig. Gen. John Gallemore</strong>, 18th Wing Commander at Kadena Air Base, confirmed that Kadena airmen are deployed &ldquo;in harm&rsquo;s way&rdquo; supporting CENTCOM operations against Iran under <strong>Operation Epic Fury</strong> (Day 61+). Specific locations were not disclosed. The general stated personnel are &ldquo;as ready as they possibly could be going out the door.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Separately, <strong>2,500 Marines of the 31st Marine Expeditionary Unit</strong> departed Okinawa aboard <strong>USS Tripoli</strong> in mid-March bound for the Middle East. As of early April, U.S. military casualties across all branches stood at <strong>365 wounded and 13 killed</strong>; Air Force specifically reported <strong>36 wounded, 6 KIA</strong>. The Iran naval blockade has cost approximately <strong>$25 billion</strong> to date. Brent crude remains elevated at <strong>$118/bbl</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Deployments from Okinawa-based units to the Middle East reduce local force availability in the Indo-Pacific. With the 31st MEU forward-deployed and Kadena assets committed, Okinawa&rsquo;s rapid-response capability in a regional contingency (Taiwan, Korean Peninsula) is temporarily diminished. This comes as Japan simultaneously increases its own southwestern island defense posture.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 3: 12th MLR Activities -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Force Development / USMC &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">12th Marine Littoral Regiment Expands Capabilities on Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>12th Marine Littoral Regiment</strong> (&ldquo;The Ryukyu Regiment&rdquo;), based at Camp Smedley Butler under 3rd Marine Division, continues to expand its operational capabilities across Okinawa. Recent milestones include:
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 6px;">
          &bull; <strong>12th Littoral Combat Team</strong> (Camp Hansen) executed the <strong>first-ever overhead live-fire range</strong> at Camp Schwab on Jan 28, followed by crew-served weapons ranges in March<br/>
          &bull; <strong>12th Littoral Anti-Air Battalion</strong> (Camp Hansen) unveiled a <strong>new dedicated facility</strong> on Mar 6<br/>
          &bull; Regiment to participate in upcoming <strong>Nansei Islands exercise</strong> with JSDF (May 17&ndash;20)
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The 12th MLR represents the Marine Corps&rsquo; force design transformation for distributed maritime operations in the First Island Chain. The new anti-air facility and live-fire milestones indicate the unit is rapidly maturing toward full operational capability. Integration with JSDF in the Nansei exercise validates the regiment&rsquo;s core mission of island defense and sea denial.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 4: SOFA Orientation Changes -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Community Relations / SOFA &mdash; Apr 14</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">U.S. Military Revising Newcomer Orientation on Okinawa After Local Feedback</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          U.S. military officials are revising the mandatory <strong>Okinawa Orientation Overview</strong> &mdash; required for all SOFA-status personnel within <strong>72 hours of arrival</strong> &mdash; following feedback from the Okinawa prefectural government. Changes address content on <strong>incidents involving service members</strong> and updated descriptions of <strong>Irei No Hi</strong> (June 23 memorial for the Battle of Okinawa). The review follows a series of sexual assault convictions involving U.S. service members, including an Air Force airman (Dec 2024) and a Marine Lance Corporal (Jun 2026), with two additional cases pending in Naha District Court.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Feedback from <strong>Maj. Gen. Brian Wolford</strong> and <strong>Lt. Gen. Roger Turner</strong> is being translated for implementation at Wednesday orientation sessions.
        </p>
      </div>
    </div>

    <!-- ===================== GOVERNMENT & POLITICAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #1e40af; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Government &amp; Political</p>
    </div>

    <!-- EVENT 5: Governor Tamaki -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Election / Domestic Politics &mdash; Apr 25&ndash;27</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Governor Tamaki Announces Third-Term Bid &mdash; Anti-Base Coalition Faces Collapse</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Governor <strong>Denny Tamaki</strong> (66) announced he will seek a third term in the <strong>September 13 gubernatorial election</strong>, running on opposition to the Futenma-to-Henoko relocation. Tamaki called the new base &ldquo;absolutely unacceptable,&rdquo; arguing it would lead to <strong>permanent base consolidation</strong> on the island.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          However, Tamaki faces a <strong>weakened political position</strong>. His anti-base coalition <strong>lost all four Okinawa single-seat constituencies</strong> in the February 8 lower house election, with all seats going to PM Sanae Takaichi&rsquo;s LDP. His likely opponent is <strong>Genta Koja</strong> (42), former deputy mayor of Naha, running as a de facto LDP candidate who <strong>supports the Henoko relocation</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            A Tamaki loss in September would represent a <strong>seismic shift in Okinawa base politics</strong>. An LDP-backed governor supporting the Henoko relocation could accelerate the Futenma replacement facility timeline and reduce political friction for U.S. force realignment. The February election results suggest momentum has shifted toward pro-relocation candidates. This is the most consequential Okinawa election for U.S. basing in a decade.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 6: Futenma 30 Years -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Base Realignment / Bilateral &mdash; Apr 13</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Futenma Return Hits 30-Year Mark &mdash; Pentagon Sets Runway Condition</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>30th anniversary</strong> of the 1996 US-Japan agreement to return MCAS Futenma passed with <strong>no concrete return date in sight</strong>. The Department of Defense stated in its FY2026 budget report that Futenma <strong>will not be returned until Japan finalizes selection of an alternative runway</strong>. The current Futenma runway is ~2,700m; the two planned Henoko runways are only ~1,800m each, creating an operational gap.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Japan&rsquo;s defense minister called the delay a matter the government takes &ldquo;seriously.&rdquo; The US and Japan have agreed Marines could use a civilian airport if a longer runway is needed, but no facility has been designated. Henoko construction is expected to continue <strong>until at least 2033</strong>.
        </p>
      </div>
    </div>

    <!-- EVENT 7: US-Japan Cost Sharing -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Bilateral / Cost-Sharing &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">US-Japan Base Cost-Sharing Agreement Due for Renegotiation in FY2026</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          The current <strong>US-Japan Host Nation Support (HNS) agreement expires at end of FY2026</strong>, requiring renegotiation. Discussions are expected to address redistribution of Marine units from Okinawa to Guam and Australia, enhanced capabilities at <strong>Kadena Air Base</strong> and Yokosuka Naval Base, and a shift toward a <strong>distributed force posture</strong>. PM Takaichi&rsquo;s Defense Minister <strong>Shinjiro Koizumi</strong> pledged during a January visit to Okinawa to <strong>reduce the U.S. military footprint</strong> on the island. Outcomes will directly impact troop levels, family support, and base operations across Okinawa.
        </p>
      </div>
    </div>

    <!-- ===================== ENVIRONMENTAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #22c55e; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Environmental &amp; Health</p>
    </div>

    <!-- EVENT 8: PFAS -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Environmental / Health &mdash; Mar&ndash;Apr 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PFAS Contamination Near Kadena &amp; Futenma Hits Record Levels &mdash; 56x Japan&rsquo;s Safety Standard</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Okinawa Prefecture&rsquo;s annual groundwater survey found <strong>PFAS &ldquo;forever chemicals&rdquo; at dangerous levels at 31 of 44 sites</strong> near U.S. military installations. The highest contamination &mdash; <strong>2,800 parts per trillion</strong> at Yara Hijaga near Kadena &mdash; is <strong>56 times Japan&rsquo;s 50 ppt safety standard</strong> and surpasses the previous 2022 record of 2,100 ppt. Elevated levels were also detected near <strong>MCAS Futenma, Camp Hansen, Camps Courtney/McTureous, and Camp Foster</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The U.S. EPA states <strong>no level of PFAS is considered safe</strong> in drinking water. The American Cancer Society links exposure to increased risk of liver, breast, testicular, and pancreatic tumors. <strong>USFJ denied prefecture access to bases for water sampling</strong>, citing insufficient evidence. USFJ incinerated its last firefighting foam stockpile in 2024. The prefecture plans to reapply for access, citing an expert committee report indicating Futenma as the likely source.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            PFAS contamination is a growing flashpoint in US-Okinawa community relations. USFJ&rsquo;s refusal to grant base access for sampling fuels local opposition to the U.S. military presence. This issue has potential to become a central campaign theme in the September gubernatorial election. Service members and families living near affected bases should monitor water advisories.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== FINANCIAL SECTION ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #eab308; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Financial &amp; Economic</p>
    </div>

    <!-- EVENT 9: Economy -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #22c55e; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">LOW</span>
          <span style="color: #666; font-size: 11px;">Economy / Regional &mdash; Q1 2026</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan MOF Upgrades Okinawa Economic Outlook &mdash; Tourism &amp; Consumption Strengthen</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s <strong>Ministry of Finance upgraded its economic assessment</strong> for the Okinawa region, citing strengthened <strong>personal consumption and tourism</strong>. Despite Chinese government advisories discouraging group travel to Japan, a hotel industry official reported <strong>no significant impact</strong> on Okinawa&rsquo;s tourism sector.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
          Broader Japan economic context: GDP growth projected at <strong>0.8% for 2026</strong> (down from stronger 2025), weighed by the Iran conflict and energy costs. <strong>Shunto wage negotiations</strong> delivered a third straight year of ~5% wage hikes, supporting domestic consumption. The <strong>Nikkei 225</strong> sits at 59,284 (-1.06%). Elevated energy prices ($118/bbl Brent) remain a headwind for Japan&rsquo;s import-dependent economy.
        </p>
      </div>
    </div>

    <!-- KEY TAKEAWAY -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa sits at the intersection of two competing strategic demands.</strong> The Iran conflict (Operation Epic Fury) is pulling Okinawa-based forces &mdash; including the 31st MEU and Kadena assets &mdash; toward the Middle East, while the growing China-Taiwan threat is driving unprecedented US-Japan military integration in the Nansei Islands. The May 17&ndash;22 exercise with the 12th MLR represents a milestone in First Island Chain defense posture.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Politically, Okinawa faces a turning point.</strong> Governor Tamaki&rsquo;s anti-base coalition collapsed in February&rsquo;s elections. If LDP-backed Genta Koja wins in September, expect accelerated Henoko construction and reduced political friction for U.S. force realignment. The PFAS contamination crisis and SOFA orientation changes will continue to shape community relations.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> PRC reaction to Nansei exercise &bull; September 13 gubernatorial election polls &bull; HNS cost-sharing renegotiation outcomes &bull; PFAS water sampling access requests &bull; 31st MEU deployment updates from CENTCOM
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; The Japan Times &bull; Taiwan News &bull; DVIDSHUB &bull; Military.com &bull; Nippon.com &bull; Ryukyu Shimpo &bull; Naval News &bull; The Diplomat &bull; Air &amp; Space Forces Magazine &bull; IMF &bull; Japan Ministry of Finance &bull; South China Morning Post &bull; CBS News
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
