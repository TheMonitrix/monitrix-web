import React from 'react'
import Image from 'next/image'
import TrackingLink from '@/components/TrackingLink'

export default function GetStartedSigNoz() {
  return (
    <div className="get-started-signoz">
      <p>
        Monitrix cloud is the easiest way to run Monitrix.{' '}
        <TrackingLink 
          href="https://signoz.io/teams/" 
          clickType="Nav Click"
          clickName="Sign Up Link"
          clickLocation="Get Started Monitrix Card"
          clickText="Sign up"
          className="text-blue-600 hover:underline font-medium"
        >
          Sign up
        </TrackingLink>{' '}
        for a free account and get 30 days of unlimited access to all features.
      </p>

      <TrackingLink 
        href="/teams/" 
        clickType="Card Click"
        clickName="Get Started Monitrix"
        clickLocation="Get Started Monitrix Card"
        clickText="Start Your Free Trial"
        className="block w-full"
      >
        <Image 
          src="/img/launch_week/try-signoz-cloud-blog-cta.png" 
          alt="Get Started - Free CTA"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          style={{ maxWidth: '100%' }}
        />
      </TrackingLink>

      <p>
        You can also install and self-host Monitrix yourself since it is open-source. With 20,000+ GitHub stars,{' '}
        <TrackingLink 
          href="https://github.com/ezeslucky/monitrix.git/signoz" 
          clickType="External Click"
          clickName="GitHub Repository Link"
          clickLocation="Get Started Monitrix Card"
          clickText="open-source Monitrix"
          className="text-blue-600 hover:underline font-medium"
        >
          open-source Monitrix
        </TrackingLink>{' '}
        is loved by developers. Find the{' '}
        <TrackingLink 
          href="/docs/install/" 
          clickType="Nav Click"
          clickName="Docs Link"
          clickLocation="Get Started Monitrix Card"
          clickText="instructions"
          className="text-blue-600 hover:underline font-medium"
        >
          instructions
        </TrackingLink>{' '}
        to self-host Monitrix.
      </p>
    </div>
  )
}
