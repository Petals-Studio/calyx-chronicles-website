import { inter } from "@/fonts";
import Navbar from "@/components/Navbar";
import { SidebarCloseEvent } from "@/components/Sidebar";
import EventBus from "@/EventBus";
import Link from "next/link";
import homepageContent from "@/cms/home";

export default function PrivacyPolicy() {
  const data = `
<p>This User Agreement (&ldquo;Agreement&rdquo;) governs your access and use of products, content, and services offered by Rivea World Pvt. Ltd. (&ldquo;Petals Studio&rdquo;), such as games published by Petals Studio (&ldquo;Games&rdquo;) and thereto related content, mod tools, upgrades, patches, features, launchers, websites, forums, events hosted by Petals Studio and any other service offered by Petals Studio (collectively &ldquo;Services&rdquo;).</p>
<p>By using the Services, you agree to be bound by this Agreement. If you don&rsquo;t agree to the terms of this Agreement, do not use the Services and instead contact your retailer regarding a possible refund (if applicable).</p>
<p>Below follows a summary of the Agreement. Please note that the summary is only there to help you read the Agreement while the long version actually governs your use of the Services.</p>
<h2>Summary</h2>
<ol>
	<li>
		<p>Using our services means you&rsquo;ve accepted this agreement. Contact your retailer if you want to refund a Service.</p>
	</li>
	<li>
		<p>The Services are licensed to you for non-commercial use and Petals Studio reserves all rights to those Services.</p>
	</li>
	<li>
		<p>You may need a Petals Studio Account to get the full experience of a Service.</p>
	</li>
	<li>
		<p>Violating this Agreement can lead to suspension or termination of a Service!</p>
	</li>
	<li>
		<p>Although we try our best, we don&rsquo;t always get it right the first time, so you agree that the Services may be modified.</p>
	</li>
	<li>
		<p>Unfortunately, stuff happens and our Services may not always be available or receive updates and actions may be taken to protect you or anyone else.</p>
	</li>
	<li>
		<p>UGCs are cool but remember that you&rsquo;re responsible for your UGC, which you give us rights to use. The UGC shall be provided free of charge and only contain materials you are allowed to use.</p>
	</li>
	<li>
		<p>Please go ahead and stream our officially released Games but be aware that some music cannot be included. We hope you make it big!</p>
	</li>
	<li>
		<p>Follow the law and these rules, be nice, and respect our Services and the community.</p>
	</li>
	<li>
		<p>The Agreement is in effect until terminated.</p>
	</li>
	<li>
		<p>The Services will have the features and functionality described in relevant product documentation and we are only liable for direct damages no greater than what you&rsquo;ve paid for the Service.</p>
	</li>
	<li>
		<p>Let&rsquo;s first try to solve disputes informally. If that doesn&rsquo;t work, arbitration or the courts in Stockholm will settle it.</p>
	</li>
	<li>
		<p>The world changes and so will this Agreement when we post updated versions on our website and/or Service.</p>
	</li>
</ol>
<h2>Long Version</h2>
<h3>1. License</h3>
<p>The Services are licensed or otherwise made available to you, not sold. Petals Studio or its licensors own and reserve all rights to the Services, including all rights, title, and interest in the intellectual property rights.</p>
<p>If and as long as you comply with this Agreement, Petals Studio grants you a personal, limited, non-transferable, revocable, and non-exclusive license to use the Services, which you have duly obtained access to, for your non-commercial use (unless stated otherwise herein or specifically agreed between you and Petals Studio).</p>
<h3>2. Petals Studio Account</h3>
<p>Some Services may require you to have a Petals Studio Account. A Petals Studio Account can be created by signing up using a valid email address and providing accurate, truthful, and complete information.</p>
<h3>3. Changes to Services</h3>
<p>Petals Studio may from time to time, patch, update, change or modify a Service (collectively &ldquo;Changes&rdquo;). Such Changes are for example done to improve and re-balance gameplay as well as improve the stability of the Service, or generally to improve the Services. We will inform you of such Changes within the Services, for example in the patch notes. You may be required to install or otherwise implement such Changes in order to continue to use the Services. The Changes may cause irritation (but likely satisfaction), setbacks (but likely progress), or limitations (but likely extensions or expansions) within the relevant Service and may affect gameplay.</p>
<h3>4. Availability</h3>
<p>Petals Studio does not guarantee that any Service or part of Service will be available at all times, in all locations, or at any given time or extent or that we will continue to offer a particular Service or part of Service for any particular length of time, or that a Service will continue to receive Changes.</p>
<h3>5. User Generated Content</h3>
<p>We love when our community creates user-generated content, including mods, and we encourage you to do so! We hereby grant you the right to create, enjoy and make publicly available UGC, for non-commercial purposes. However, you are the creator of and responsible for the UGC that you create, and that UGC shall not contain any material which is unlawful, infringing, inappropriate, or violates any contracts or common sense.</p>
<p>We are not always the owner of the intellectual property for a Game and therefore, we cannot unconditionally allow UGC to all Games. Please contact our support team at support@petals.studio;if you wonder which Games are affected.</p>
<p>&ldquo;UGC&rdquo; includes for example chat and forum posts, Game and character customizations, cinematics, scripts and programs, mods, gameplay, modes, music and sound, animations, and other types of works relating to the Services. For streaming our Games and Services, please see section 6.</p>
<p>Your rights in your UGC only extend to the new, original content you create as part of your UGC and do not extend to or grant any rights to the Services or anything created or made available by third parties, or any content made available by Petals Studio through the Services.</p>
<p>By making your UGC available, you grant us and our affiliates a nonexclusive, royalty-free, sublicensable, irrevocable, and perpetual right to use, develop, reproduce, modify, create derivative works from, distribute, transmit, broadcast, otherwise communicate, publicly display, publicly perform and otherwise commercialise or exploit your UGC in any manner or form and in any medium or forum, whether now known or later devised without attribution or compensation to you or any third party. This right shall survive the termination of this Agreement.</p>
<p>Unless otherwise agreed, the creation and publication of UGC are for strictly non-commercial purposes only. The UGC shall be provided for free and be freely available (for example, you may not place your UGC behind a paywall), but you may accept donations for your time through Patreon, or similar services, or through sponsorships.</p>
<p>Petals Studio is under no obligation to use, distribute or continue to distribute UGC and we may restrict or remove your UGC at our sole discretion.</p>
<p>If you encounter content created by another user that you find offensive, we encourage you to report this content by shooting a mail to our support email. Please provide as much detailed information in the ticket as possible, including but not limited to: what content you find offensive, the user name of the person exposing you to such content, what type of platform you were using, game version number, save game ID/SGID for the multiplayer session (if applicable) and any other form of relevant information that might help us identify the content and/or user.</p>
<h3>6. Streaming Petals Studio Games</h3>
<p>You may make videos, live streams, or artwork that contain gameplay, music, sound, and screenshots from our games (&ldquo;Petals Studio Game Content&rdquo;) and share them on media sharing websites such as Twitch, YouTube, Bilibili, Reddit, etc. provided that your content is freely available to the public (for example you may not place your content behind a paywall). Monetization of such content is allowed only via such websites&rsquo; official affiliate, advertising, or partner programs. Other forms of monetization of Petals Studio Game Content are not permitted.</p>
<p>You may only use Petals Studio Game Content from Games that have been officially released to the public, or from promotional materials officially released (such as product trailers) unless you have been directed in writing by us or our partners to do so.</p>
<p>You must include your own creative input and commentary in Petals Studio Game Content. It is not permitted to make videos and images that just contain mere copies of Petals Studio Game Content without any of your creative input.</p>
<p>If you want to use the intellectual property of a third party (for example music) together with Petals Studio Game Content, you are responsible for obtaining any necessary third-party permissions. Please note that some Game soundtracks or songs included in our Services may not be owned by us. As this varies from Game to Game, be aware that music may trigger content flags and potential removal of the video. In addition, Game soundtracks may never be posted or distributed separately and apart from Game footage. Also, music from the following soundtracks/channels cannot be used:</p>
<ul>
	<li>&ldquo;Europa Universalis IV: Sabaton Soundtrack&rdquo;</li>
	<li>&ldquo;Hearts of Iron IV: Sabaton Soundtrack&rdquo;</li>
	<li>&ldquo;Hearts of Iron IV: Sabaton Soundtrack Vol. II&rdquo;</li>
	<li>Cities: Skylines in-game radio channel &ldquo;Gold FM&rdquo;</li>
</ul>
<p>You are not permitted to imply or state that your videos are officially affiliated with, sponsored, endorsed, or approved by us (unless you have been directed to do so).</p>
<h3>7. Rules of Conduct</h3>
<p>When using the Services you agree that you accept and agree to our Code of Conduct, which in short states that you may not:</p>
<ul>
	<li>break the law (for example commit any intellectual property infringement);</li>
	<li>misuse or take any actions that can harm the Service(s) (for example disrupt or interfere with any service, server or use, develop, distribute, or sell cheats, etc);</li>
	<li>take any actions that negatively affect Petals Studio, your fellow, or anyone else (for example spam the forums, share personal data, harass, troll, necropost, post any NSFW content or any Nazi propaganda or symbols, or disturb the peace); or</li>
	<li>promote, encourage or take part in any prohibited activity described above.</li>
</ul>
<h3>8. Term and Termination</h3>
<p>This Agreement is effective until terminated by you or Petals Studio. Petals Studio may terminate this Agreement if Petals Studio determines that you have failed to comply with the terms and conditions of the Agreement. Petals Studio will, if practical, notify you of its decision to terminate. You shall then immediately cease all use of the Service(s). The termination may result in you losing your Petals Studio Account name, username, achievements, forum badges, and other content associated with your Petals Studio Account or use of the Service.</p>
<p>Prior to terminating the Agreement, Petals Studio may issue you a warning, suspend, or alter your access to a Service, remove or delete any content which violates this Agreement, or ban your account or device from accessing certain Services. You will not be entitled to any refund if such action is taken and nothing will be credited.</p>
<p>You may terminate this Agreement at any point. If you terminate this Agreement, you shall immediately cease to use the Service(s).</p>
<p>Petals Studio may terminate any Service by giving thirty days notice by email or within the affected Service (pop-up or similar). A terminated Service will not receive any updates or Changes and we do not guarantee that the Service will continue to function on newer or updated operating systems or be available for download.</p>
<p>All sections that by their nature would survive termination shall survive termination.</p>
<h3>9. Privacy and Use of Data</h3>
<p>Please read our Privacy Policy to learn more about how we process your personal data in relation to the Services.</p>
<h3>10. Guarantees and Limitations of Liability</h3>
<p>This limited guarantee is in addition to and does not affect your statutory rights which cannot be excluded or limited in any way under applicable law.</p>
<p>Petals Studio guarantees that the Services will provide the features and functions generally described in the latest relevant product documentation at the time of your purchase or use of the Service.</p>
<p>Petals Studio does not guarantee that the service or your ability to use it will be uninterrupted or error-free. To the extent permitted by applicable law, we disclaim any implied warranty of merchantability or fitness for a particular purpose.</p>
<p>To the maximum extent permitted by applicable law, in no event shall Petals Studio, its affiliates, or licensees, be liable for any special, incidental, indirect, or consequential damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or any other pecuniary loss) arising out of the use of or inability to use the Service or defect in or caused by the Service, including but not limited to compromising the security of your unit on which the Services run, operating system or files, or the provision of or failure to provide support services, even if Petals Studio has been advised of the possibility of such damages. You may recover only direct damages in an amount no greater than what you actually paid for the applicable Service if any.</p>
<h3>11. Updates to this Agreement</h3>
<p>We may amend this Agreement from time to time by posting an updated version on our Services. The amendments will come into effect after 30 days so make sure to review the agreement often. Your continued use of the Service after the changes come into effect means that you have accepted them.</p>
  `;

  return (
    <main
      className="w-full flex min-h-screen flex-col items-center bg-white text-black"
      onClick={() => {
        EventBus.getInstance().fireEvent(SidebarCloseEvent);
      }}
    >
      <div className="flex w-[100%] justify-between items-center  p-[1rem] top-0 z-[100]">
        <Link href={"/"}>
          <img
            src={homepageContent.landingPage.content.blacklogo.src}
            style={{
              objectFit: "contain",
              filter: "grayscale(100%)",

              position: "relative",
              width: "120px",
            }}
          />
        </Link>
        <img
          src={homepageContent.landingPage.content.icon.src}
          style={{
            objectFit: "contain",

            position: "relative",
            width: "40px",
          }}
        />
      </div>
      <div className="relative w-full">
        <div className="w-full max-w-8xl mx-auto flex flex-col px-2.5 tablet:pl-5 tablet:pr-12">
          <h1
            className={`${inter.variable} font-inter tablet:text-lg uppercase font-bold tracking-wide mb-4 text-center sm:text-left`}
          >
            Terms of services
          </h1>
          <div
            className={`${inter.variable} font-inter dangerous-content`}
            dangerouslySetInnerHTML={{ __html: data }}
          ></div>
        </div>
      </div>
    </main>
  );
}
