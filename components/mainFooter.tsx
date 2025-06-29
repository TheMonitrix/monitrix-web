/* eslint-disable @next/next/no-img-element */
'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { Github, Linkedin, Slack, Twitter, Youtube } from '@/components/social-icons/SolidIcons'
import { usePathname } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { ONBOARDING_SOURCE } from '../constants/globals'
import { QUERY_PARAMS } from '../constants/queryParams'

function Footer() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const source = searchParams.get(QUERY_PARAMS.SOURCE)
  const isLoginRoute = pathname === '/login/'
  const isOnboardingRoute = source === ONBOARDING_SOURCE

  if (isLoginRoute || isOnboardingRoute) {
    return null
  }

  return (
    <div className="z-[10] flex flex-col justify-center border-t border-solid border-gray-900 bg-signoz_ink-500 bg-opacity-70 backdrop-blur-md">
      <div className="flex w-full items-center justify-center bg-opacity-70 px-16 py-14 max-md:max-w-full max-md:px-5">
        <div className="container w-full max-w-[1200px] justify-between max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex w-3/12 flex-col max-md:ml-0 max-md:w-full">
              <div className="flex flex-col pb-2.5 text-sm tracking-wide text-stone-300 max-md:mt-10">
                <div className="text-sm font-semibold uppercase leading-5 tracking-wide">Docs</div>
                <Link href="/docs/" className="mt-5 hover:underline">
                  Introduction
                </Link>
                <Link href="/docs/contributing/" className="mt-5 hover:underline">
                  Contributing
                </Link>
                <Link href="/docs/migration/migrate-from-datadog" className="mt-5 hover:underline">
                  Migrate from Datadog
                </Link>
                <Link href="/api_reference/" className="mt-5 hover:underline">
                  Monitrix API
                </Link>
              </div>
            </div>
            <div className="ml-5 flex w-3/12 flex-col max-md:ml-0 max-md:w-full">
              <div className="flex grow flex-col self-stretch pb-20 text-sm tracking-wide text-stone-300 max-md:mt-10">
                <div className="text-sm font-semibold uppercase leading-5 tracking-wide">
                  Community
                </div>

                <div className="mt-5 flex items-center gap-2 pr-7 hover:underline max-md:pr-5">
                  <Link href="/support">Support</Link>
                </div>

                
                <div className="mt-5 flex items-center gap-2 whitespace-nowrap pr-8 hover:underline max-md:pr-5">
                  <Link href="https://x.com/ezeslucky" target="_blank">
                    Twitter
                  </Link>
                  <ArrowUpRight size={16} />
                </div>

                 <div className="mt-5 flex items-center gap-2 whitespace-nowrap pr-8 hover:underline max-md:pr-5">
                  <Link href="https://github.com/ezeslucky/monitrix.git" target="_blank">
                    Github
                  </Link>
                  <ArrowUpRight size={16} />
                </div>

                <div className="mt-5 flex items-center gap-2 whitespace-nowrap pr-8 hover:underline max-md:pr-5">
                  <Link href="/launch-week/" target="_blank">
                    Launch Week
                  </Link>
                  <ArrowUpRight size={16} />
                </div>
                <div className="mt-5 flex items-center gap-2 pr-7 hover:underline max-md:pr-5">
                  <Link href="/changelog">Changelog</Link>
                </div>
                <div className="mt-5 flex items-center gap-2 whitespace-nowrap pr-8 hover:underline max-md:pr-5">
                  <Link href="/dashboards" target="_blank">
                    Dashboard Templates
                  </Link>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
            <div className="ml-5 flex w-3/12 flex-col max-md:ml-0 max-md:w-full">
              <div className="flex grow flex-col self-stretch pb-20 text-sm tracking-wide text-stone-300 max-md:mt-10">
                <div className="text-sm font-semibold uppercase leading-5 tracking-wide">More</div>

                <Link
                  href="/product-comparison/signoz-vs-datadog/"
                  className="mt-5 hover:underline"
                >
                  Monitrix vs Datadog
                </Link>
                <Link
                  href="/product-comparison/signoz-vs-newrelic/"
                  className="mt-5 hover:underline"
                >
                  Monitrix vs New Relic
                </Link>
                <Link
                  href="/product-comparison/signoz-vs-grafana/"
                  className="mt-5 hover:underline"
                >
                  Monitrix vs Grafana
                </Link>
                <Link
                  href="/product-comparison/signoz-vs-dynatrace/"
                  className="mt-5 hover:underline"
                >
                  Monitrix vs Dynatrace
                </Link>

                

                <Link href="/about-us" className="mt-5 hover:underline ">
                  About
                </Link>
                <Link href="/terms-of-service" className="mt-5 hover:underline">
                  Terms
                </Link>
                <Link href="/privacy" className="mt-5 hover:underline">
                  Privacy
                </Link>

                <Link
                  href="https://trust.signoz.io/"
                  target="_blank"
                  className="mt-5 hover:underline"
                >
                  Security & Compliance
                </Link>
              </div>
            </div>
            <div className="ml-5 flex w-3/12 flex-col max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-end shadow-sm max-md:mt-10">
                <div className="flex items-center justify-between gap-2 self-end whitespace-nowrap text-center text-lg font-medium leading-5 text-white">
                  <Image
                    className="h-5 w-auto"
                    src="/img/SigNozLogo-orange.svg"
                    width={50}
                    height={50}
                    alt=""
                  />
                  <div className="font-satoshi-bold font-medium">Monitrix</div>
                </div>
                <div className="mt-5 items-end justify-center rounded text-sm leading-5 text-emerald-300">
                  <Link href="#/" target="_blank">
                    All systems operational
                  </Link>
                </div>
                <div className="footer-icons mt-5 flex items-end justify-between gap-4 py-2">
                  <Link
                    href={'https://github.com/ezeslucky/monitrix.git'}
                    target="_blank"
                    aria-label=" Github URL"
                  >
                    <Github />
                  </Link>

                  <Link
                    href={'https://www.linkedin.com/in/ezeslucky/'}
                    target="_blank"
                    aria-label=" LinkedIN URL"
                  >
                    <Linkedin />
                  </Link>

                  

                  <Link
                    href={'https://x.com/ezeslucky'}
                    target="_blank"
                    aria-label=" Twitter URL"
                  >
                    <Twitter />
                  </Link>

                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
