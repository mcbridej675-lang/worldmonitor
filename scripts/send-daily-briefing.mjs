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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Government &bull; Intelligence &bull; Financial &bull; Regional Security</p>
    </div>

    <!-- ===================== EVENT 1: TYPHOON JANGMI ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">CRITICAL</span>
          <span style="color: #666; font-size: 11px;">Weather / TCCOR / Force Protection &mdash; May 31</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Typhoon Jangmi (06W) Bearing Down on Okinawa &mdash; Bases at TCCOR 1-C; Closest Approach ~7 Miles West of Kadena at 1900L June 1</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Typhoon Jangmi</strong> is making a near-direct approach to Okinawa&rsquo;s main island. Okinawa was elevated to <strong>TCCOR 3 at 1600L May 30</strong>, advanced to <strong>TCCOR 2 on May 31</strong>, and entered <strong>TCCOR 1-C (Caution)</strong> as damaging winds of 40+ mph began occurring on base. The storm is currently positioned approximately <strong>622 km (386 mi) south of Kadena Air Base</strong>, tracking north-northwest at 15 km/h with <strong>maximum sustained winds of 130 km/h (80 mph) and gusts to 160 km/h (100 mph)</strong> &mdash; a Category 1 typhoon. Central pressure is 975 hPa.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The forecast track projects closest approach approximately <strong>7 miles west of Kadena Air Base around 1900L (7:00 PM) Monday, June 1</strong>. Sustained winds of <strong>70+ mph with gusts to 90+ mph</strong> are expected at the storm center. Up to <strong>200 mm (8 inches) of rainfall</strong> is forecast June 1&ndash;2, with cumulative totals reaching 300 mm by June 2 noon. The rainy season (active since May 4) has saturated the ground, significantly elevating landslide risk. <strong>All flights at Naha, Miyako, and Ishigaki airports are canceled</strong> &mdash; over 290 flights grounded May 31 through June 2. The U.S. Consulate General Naha issued a formal Weather Alert on May 31. After Okinawa, Jangmi will recurve toward mainland Japan, potentially impacting Yokosuka Naval Base by mid-afternoon Wednesday (June 3).
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9888; Action Required</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            All non-essential personnel remain indoors. Secure all outdoor items. Top off vehicle fuel and ensure emergency supplies are ready. Commissary and AAFES facilities will close at TCCOR 1-C. Monitor JTWC at metoc.navy.mil and the Kadena Air Base page on the Air Force Connect app. Consult the Kadena Typhoon Guide for TCCOR-specific required actions. Sasebo Naval Base and MCAS Iwakuni have set TCCOR 4 as a precaution.<br/><br/>
            <strong>Typhoon Season Outlook:</strong> TSR forecasts <strong>27 tropical storms and 18 typhoons</strong> for 2026, above average. Peak season (July&ndash;October) has not yet arrived. Sakurajima volcano (600 km north) also issued a Volcanic Ash Advisory on May 30 &mdash; ash to FL080; may affect aviation routes near Kagoshima.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: KOIZUMI-HEGSETH DEFENSE MINISTERIAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">U.S.-Japan Alliance / Shangri-La Dialogue &mdash; May 30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Koizumi-Hegseth Defense Ministerial Launches &ldquo;Operation Supercharge&rdquo; &mdash; Accelerated Missile Co-Production, TRISHIP Architecture, and Typhon Deployment to Japan</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Defense Minister <strong>Shinjiro Koizumi</strong> and Secretary of War <strong>Pete Hegseth</strong> met for approximately 60 minutes on the sidelines of the IISS Shangri-La Dialogue in Singapore on <strong>May 30</strong>. The ministers endorsed <strong>&ldquo;Operation Supercharge&rdquo;</strong> &mdash; a new initiative to accelerate co-development and co-production of missiles including <strong>SM-3 Block IIA interceptors and AMRAAM</strong>. They also established <strong>TRISHIP</strong>, a Japan-U.S.-Australia trilateral networked air and missile defense information-sharing architecture for the Indo-Pacific.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The ministers approved <strong>temporary deployment of Typhon mid-range missile systems and HIMARS</strong> at Kanoya Air Base (Kagoshima Prefecture) during Valiant Shield and Orient Shield exercises (June&ndash;September), with systems potentially stored permanently in Japan post-exercise. Both sides reaffirmed the <strong>&ldquo;vital importance&rdquo; of the Okinawa Consolidation Plan</strong>, including Henoko construction and MCAS Futenma&rsquo;s eventual return. Hegseth&rsquo;s keynote at Shangri-La emphasized burden-sharing: <strong>&ldquo;The era of the United States subsidising the defence of wealthy nations is over.&rdquo;</strong> Koizumi responded that Japan&rsquo;s commitment is strong and welcomed Japan&rsquo;s April 2026 revision of the Three Principles on Defense Equipment Transfer, now permitting lethal weapons exports.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Strategic Significance</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Operation Supercharge deepens the alliance&rsquo;s industrial base integration, moving beyond joint exercises into joint weapons production. The Typhon deployment to Kanoya &mdash; approximately 600 km north of Okinawa &mdash; places ground-based Tomahawk and SM-6 missiles within range of the Taiwan Strait, a first for U.S. ground-launched intermediate-range missiles in Japan. Hegseth&rsquo;s burden-sharing rhetoric raises questions about future host-nation support negotiations as the Special Measures Agreement expires in FY2026.<br/><br/>
            <strong>Watch:</strong> Whether Typhon systems are stored permanently in Japan post-exercise &bull; Special Measures Agreement renegotiation timeline &bull; F-15EX delivery delay (now 2027, pushed from spring 2026 due to Boeing strike) &bull; Quad Indo-Pacific Maritime Surveillance Cooperation Initiative launched May 26 in New Delhi.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: REGIONAL SECURITY ESCALATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">PLAN / Taiwan Strait / North Korea / Russia &mdash; May 25&ndash;31</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Multi-Axis Regional Threat Escalation: Liaoning CSG in Philippine Sea, 60 Chinese Aircraft Near Taiwan in 72 Hours, North Korea Tests AI-Guided Missiles, Japan Warns of Dual-Front Risk</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>China:</strong> The <strong>Liaoning carrier strike group</strong> &mdash; including the first-ever Type 054B frigate deployment beyond the First Island Chain &mdash; was detected <strong>880 km southwest of Okinotorishima</strong> on May 25, conducting repeated fixed-wing and rotary-wing flight operations. JMSDF destroyer <em>JS Asahi</em> is shadowing the group. China conducted <strong>four &ldquo;joint combat readiness patrols&rdquo; around Taiwan in May</strong> (May 1, 6, 19, 25). Between May 24&ndash;26 alone, China deployed nearly <strong>60 military aircraft, helicopters, and drones</strong> in Taiwan&rsquo;s ADIZ, with <strong>24 of 29 sorties crossing the Taiwan Strait median line</strong> on May 26. A Taiwanese F-16 intercepted a <strong>YY-20A tanker actively refueling J-16s</strong> &mdash; Taiwan released infrared imagery of the operation. A <strong>33-hour CCG standoff at Pratas Islands</strong> (May 23&ndash;25) and continued Senkaku intrusions (92-hour record earlier in May) signal intensifying gray-zone pressure.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>North Korea:</strong> On <strong>May 26</strong>, Pyongyang test-fired a <strong>newly developed lightweight multi-purpose missile launching system</strong> including Hwasong-11D tactical ballistic missiles, 240mm precision-guided rockets, and <strong>AI-guided tactical cruise missiles</strong> with terminal guidance for ultra-precision strikes &mdash; the <strong>eighth North Korean missile launch of 2026</strong>. South Korea responded by announcing the <strong>Chang Bogo N Project</strong> to build domestically produced nuclear-powered attack submarines.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Russia:</strong> Defense Minister <strong>Koizumi visited Chitose Air Base (May 23)</strong> to observe scramble drills and warned of a <strong>&ldquo;serious defense concern&rdquo;</strong> from Sino-Russian coordination, explicitly citing dual-front risk. JASDF scrambled <strong>595 times in FY2025</strong> (366 vs. China, 214 vs. Russia). Russia conducted anti-submarine warfare exercises near the Kuril Islands and a warship transited Tsugaru Strait.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Intelligence Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The convergence of PLAN carrier operations in the Philippine Sea, record-tempo Taiwan Strait patrols, the Pratas standoff, and Senkaku intrusions represents a coordinated multi-axis pressure campaign that exploits the 31st MEU&rsquo;s absence. North Korea&rsquo;s AI-guided munitions represent a qualitative upgrade in its tactical strike capability. Japan&rsquo;s explicit acknowledgment of dual-front (China + Russia) risk reflects growing concern that adversaries may coordinate actions. USS George Washington (CVN-73) departed Yokosuka May 23 for a six-month Indo-Pacific patrol, providing partial carrier coverage.<br/><br/>
            <strong>Watch:</strong> Liaoning CSG duration in Western Pacific &bull; Chinese response to Typhon deployment announcement &bull; Whether North Korea tests an ICBM next &bull; Resolute Dragon 26 (June 20&ndash;30) as a deterrence signal.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: COMMUNITY RELATIONS & CONDUCT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">USFJ / Community Relations / Conduct &mdash; May 27&ndash;29</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Army Soldier Charged with Sexual Assault at Kadena; Community Partnership Forum Reviews Joint Patrols and Liberty Enforcement</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japanese police on May 22 referred a sexual assault charge to the Naha Public Prosecutors Office against a soldier (male, 20s) assigned to <strong>Echo Battery, 1st Battalion, 1st Air Defense Artillery Regiment, 38th ADA Brigade, Kadena Air Base</strong>. The soldier allegedly assaulted an adult woman outdoors on Okinawa&rsquo;s main island in late April, causing arm injuries, then fled by car and struck a roadside barrier without reporting the crash. <strong>Governor Tamaki&rsquo;s office</strong> called it &ldquo;extremely regrettable&rdquo; and requested stronger preventive measures. This is the latest in a series of cases since late 2023, including convictions of Senior Airman Washington (Dec 2024) and Lance Cpl. Clayton (June 2025), with trials pending for Pfc. Wedington and LCpl. Hofmaster.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Separately, the <strong>Okinawa Community Partnership Forum</strong> convened at Ocean Breeze, Camp Foster, on <strong>May 28</strong> with 19 U.S. military/consulate representatives and 18 Japanese officials. Key takeaways: joint patrols in nightlife areas (ongoing since April 2025) were reviewed positively, but <strong>solo military police patrols remain halted</strong> since November following the body-slam incident. The Japanese side proposed adding sexual offense and DUI prevention content to mandatory newcomer briefings. The <strong>1 a.m.&ndash;5 a.m. off-base drinking ban</strong> (effective since October 2024) enforcement was also discussed. Additionally, <strong>Cpl. David Rodrigues, 21</strong> (MASS-2, MACG-18, MCAS Futenma) was killed in a motorcycle-taxi collision on Route 58, Urasoe, on April 26.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Impact on Personnel</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Expect potential tightening of liberty restrictions and additional command-directed safety stand-downs across services on Okinawa. The continued suspension of solo MP patrols reduces U.S. law enforcement visibility off-base. These incidents fuel the anti-base narrative ahead of the September gubernatorial election. Five airmen received AF Achievement Medals on May 28 for aiding an injured 79-year-old Japanese man at Ikei Island beach &mdash; a positive counterpoint.<br/><br/>
            <strong>Watch:</strong> Solo MP patrol resumption timeline &bull; Additional liberty restrictions &bull; Campaign-season exploitation of conduct incidents &bull; MCAS Futenma Flight Line Fair drew 8,150 attendees May 9&ndash;10, reflecting continued community engagement efforts.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: GOVERNMENT & POLITICS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Government / Election / Base Relations &mdash; May 24&ndash;31</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Governor Tamaki Receives Death Threat; September Election Race Intensifies; Futenma Runway Dispute Unresolved at 30-Year Mark</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          An email threatening to <strong>&ldquo;kill Denny Tamaki&rdquo;</strong> was received on <strong>May 24</strong> before a supporters&rsquo; meeting in Naha. Security was enhanced and the meeting proceeded without incident. The threat underscores escalating political tensions ahead of Okinawa&rsquo;s <strong>September 13 gubernatorial election</strong>. Tamaki (66, &ldquo;All Okinawa&rdquo; coalition) announced his third-term bid on April 25, running on opposition to the Futenma-to-Henoko relocation. Challenger <strong>Genta Koja</strong> (42, former Naha deputy mayor, de facto LDP candidate) supports the relocation plan. Tamaki&rsquo;s support is wavering after the February 2026 general election reshuffled the political landscape.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>MCAS Futenma relocation</strong> passed its 30th anniversary in April with no resolution. The Pentagon has stated it <strong>will not return Futenma unless Japan agrees to a longer runway at Henoko</strong> (current V-shaped plan provides 1,800m vs. Futenma&rsquo;s 2,700m). Construction continues but completion is not expected until <strong>at least 2033</strong>. An education ministry ruling (May 22) found that a high school study trip about Henoko violated the Basic Education Law&rsquo;s political neutrality mandate &mdash; the first such finding in the law&rsquo;s history. <strong>PFAS contamination</strong> remains a flashpoint: 31 of 44 sites around U.S. bases exceeded Japan&rsquo;s 50 ppt standard, with the highest reading at <strong>2,800 ppt (56x the limit)</strong> downstream from Kadena. USFJ has denied all base access requests for water sampling.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Political Outlook</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The September 13 election is a referendum on the U.S. military presence. A Koja victory would be the first pro-relocation governor in 8 years, potentially accelerating Henoko construction but increasing community friction. The death threat against Tamaki and the education ministry ruling signal an increasingly polarized information environment around base issues. The PFAS issue will intensify as a campaign issue. The Kishaba Housing Area return (~12 acres of Camp Foster) was finalized by the Joint Committee, expected fall 2026 &mdash; a goodwill measure.<br/><br/>
            <strong>Watch:</strong> Polling data as the September race takes shape &bull; PFAS litigation or diplomatic escalation &bull; III MEF leadership transition (Turner to MARFORPAC, Watson to III MEF) &bull; Special Measures Agreement renegotiation as FY2026 expiration approaches.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: FINANCIAL SNAPSHOT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Financial / Markets / Economy &mdash; May 29&ndash;31</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Nikkei Hits Record 66,424 on Iran Ceasefire Hopes; USD/JPY at 159.26; BOJ Rate Hike Expected June&ndash;July; OHA Increase for Okinawa</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Nikkei 225 surged to a record closing high of 66,424</strong> on May 29, up 2.5% on the session and <strong>+11.88% for May</strong>, driven by reports of a tentative U.S.-Iran 60-day ceasefire extension and nuclear negotiations. The deal would lift tolls on Strait of Hormuz shipping and gradually reduce the sea blockade on Iranian ports &mdash; critically important for Japan, which imports <strong>94% of crude oil and 93% of LNG</strong> through the Strait. Oil remains elevated at Brent <strong>$92.58/barrel</strong>. Japan&rsquo;s Q1 2026 GDP grew at an annualized <strong>2.1%</strong>, beating consensus of 1.7%. Retail sales expanded at the fastest pace in a year (+2.1% YoY). Industrial production unexpectedly rose 0.8% with manufacturers projecting a further 5.1% increase in May.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>USD/JPY stands at 159.26</strong> &mdash; the strong dollar significantly favors U.S. service members, with Japan&rsquo;s cost of living roughly <strong>47&ndash;55% lower</strong> than the U.S. at current rates. The yen has weakened 10.54% over the past 12 months. The <strong>BOJ held rates at 0.75%</strong> in April (6&ndash;3 split, three dissenters wanting 1.0%) and is expected to hike as early as <strong>June or July</strong> &mdash; which could strengthen the yen and reduce purchasing power. Japan&rsquo;s defense budget hit a record <strong>10.6 trillion yen (~$66.5B, 1.9% of GDP)</strong>, targeting 2% by FY2027. <strong>Overseas Housing Allowance (OHA) rates increased effective May 16</strong> for all ranks on Okinawa: E-1 to E-4 (+$396/mo), O-1/O-2/E-5 (+$504/mo), O-3/E-6 to E-8 (+$450/mo), addressing landlord price-matching that left service members ~$300/mo out of pocket.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Financial Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The Iran ceasefire extension is the single most important financial variable for Japan. If approved, expect oil prices to decline further and markets to rally; if it fails, energy cost spikes will hit Japan hard. The OHA increase provides meaningful relief for off-base personnel. U.S. tariffs on Japanese imports currently stand at 10% under Section 122, which <strong>expires approximately July 24, 2026</strong> &mdash; unknown what replaces it. Steel/aluminum face 50% Section 232 tariffs. The 25% auto tariff has been repeatedly threatened but not enacted.<br/><br/>
            <strong>Watch:</strong> Iran ceasefire vote (Trump approval pending) &bull; BOJ June/July rate decision &bull; Section 122 tariff expiration (~July 24) &bull; Okinawa tourism exceeding 10 million visitors (named world&rsquo;s #2 top destination by Expedia).
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 7: 31ST MEU & FORCE POSTURE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">USMC / Force Posture / Exercises &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">31st MEU Gap Remains &ldquo;Unfilled&rdquo;; 12 F-22s at Kadena; F-15EX Delayed to 2027; Resolute Dragon 26 Approaches June 20</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>31st MEU (~2,500 Marines aboard USS Tripoli)</strong> remains in CENTCOM AOR supporting <strong>Operation Epic Fury</strong> against Iran, with no return timeline announced. Commandant <strong>Gen. Eric Smith</strong> testified May 18: <strong>&ldquo;The gap is unfilled. When you move an ARG/MEU, you simply don&rsquo;t replace it.&rdquo;</strong> USS Boxer ARG / 11th MEU is drilling in the 7th Fleet area but is not a permanent Indo-Pacific asset. III MEF remains &ldquo;postured, lethal, and ready to fight tonight.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          At Kadena, <strong>12 F-22 Raptors arrived May 5&ndash;6</strong> from the 90th and 27th EFS, joining F-16s from the 120th EFS. <strong>F-15EX Eagle II delivery has been delayed to 2027</strong> (originally spring 2026) due to a Boeing strike; the full fleet of 36 is expected 2028&ndash;2029. <strong>Resolute Dragon 26</strong> (June 20&ndash;30) will involve III MEF, 3rd Marine Division, 12th MLR, Army 3rd MDTF, Navy 7th Fleet, and Air Force 18th Wing across Camp Foster, Camp Kinser, Naha Air Base, Miyako, Ishigaki, and Yonaguni. A GSDF V-22 Osprey may land at MCAS Futenma for the first time. Separately, 3rd Battalion, 12th Marines fired <strong>12 HIMARS rounds at East Fuji Maneuver Area</strong> on May 20 in a live-fire demonstration.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Force Posture Assessment</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The Indo-Pacific force posture gap remains the most significant since the 31st MEU&rsquo;s establishment. The F-22 rotation at Kadena maintains air superiority capability, but the permanent F-15EX replacement is now over a year behind schedule. Resolute Dragon 26 will be a major deterrence signal, demonstrating distributed operations across the Nansei chain with heavy Okinawa-based participation. Expect increased military traffic and operational tempo across multiple installations starting mid-June. The 12th MLR&rsquo;s first-ever NMESIS anti-ship missile capability is also entering service on Okinawa in FY2026.<br/><br/>
            <strong>Watch:</strong> 31st MEU return timeline &bull; Resolute Dragon 26 scope and execution &bull; Typhon/HIMARS deployment to Kanoya (June&ndash;September) &bull; Any 12th MLR NMESIS operational milestones.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== SEISMIC ACTIVITY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #f59e0b; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">SEIS</span>
          <span style="color: #666; font-size: 11px;">Seismic / Natural Hazards &mdash; May 20</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">M5.9 Earthquake Near Okinawa (May 20); M6.7 Off Sanriku Coast (May 15); No Active Tsunami Warnings</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A <strong>magnitude 5.9 earthquake</strong> struck the East China Sea on <strong>May 20 at 11:46 AM local</strong>, 167 km northeast of Naha at 42 km depth. Approximately 1.4 million people may have felt the quake, with reports from <strong>Chatan</strong> (adjacent to Camp Foster and Kadena), Okinawa city, and Naha. No damage or injuries reported. A stronger <strong>M6.7 earthquake</strong> struck off the Sanriku Coast (Miyagi Prefecture) on May 15, the strongest in Japan in May 2026, felt by an estimated 7 million people and halting bullet trains. No active tsunami warnings. JMA has issued a rare special advisory urging vigilance for a potentially larger follow-on earthquake in the Nankai Trough zone.
        </p>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Immediate priority: Typhoon Jangmi.</strong> With TCCOR 1-C in effect and closest approach expected 7 miles west of Kadena at 1900L June 1, all personnel must shelter in place. The typhoon&rsquo;s passage over already rain-saturated ground from the rainy season (active since May 4) creates compounding landslide and flooding risk. Operations will be disrupted across all Okinawa installations through at least June 2.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The strategic paradox deepens.</strong> The Koizumi-Hegseth ministerial produced concrete alliance-strengthening outcomes (Operation Supercharge, TRISHIP, Typhon deployment), but these are medium-term investments against an immediate-term threat environment. China is sustaining multi-axis pressure &mdash; carrier operations in the Philippine Sea, record Taiwan Strait patrols, Pratas standoff, Senkaku intrusions &mdash; while the 31st MEU remains &ldquo;unfilled&rdquo; in the Middle East. North Korea&rsquo;s AI-guided munitions represent a qualitative upgrade. Japan&rsquo;s defense minister has explicitly warned of dual-front (China + Russia) risk.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">On the ground:</strong> The sexual assault case and upcoming gubernatorial election create a sensitive environment for U.S.-Okinawa relations. The OHA increase and strong dollar (159 yen) provide financial relief, but a BOJ rate hike in June/July could reverse the exchange rate advantage. Resolute Dragon 26 (June 20&ndash;30) will be the next major operational milestone. The Iran ceasefire extension vote is the key global variable &mdash; its outcome will shape energy costs, market direction, and the 31st MEU&rsquo;s return timeline.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; USNI News &bull; The Japan Times &bull; The Diplomat &bull; Naval News &bull; Defence Blog &bull; CNBC &bull; Fortune &bull; Washington Post &bull; Al Jazeera &bull; CNN &bull; CSIS &bull; AEI &bull; Japan Ministry of Defense &bull; Kadena Air Base &bull; U.S. Consulate General Naha &bull; JTWC &bull; JMA &bull; Nippon.com &bull; GlobalSecurity.org &bull; NK News &bull; Trading Economics &bull; DVIDS &bull; Xinhua &bull; Ryukyu Shimpo
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
