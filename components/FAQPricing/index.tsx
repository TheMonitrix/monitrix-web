import React from "react";
import Card from "./Card";

const FAQs = [
  {
    body: "You can self-host and manage the community edition yourself. You should choose Monitrix Cloud if you don’t want to worry about managing the Monitrix cluster. There are some exclusive features like SSO & SAML support, which come with Monitrix cloud offering. Our team also offers support on the initial configuration of dashboards & alerts and advises on best practices for setting up your observability stack in the Monitrix cloud offering.",
    title: "What is the difference between Monitrix Cloud(Teams) and Community Edition?"

  },
  {
    body: "If a timeseries sends data every 30s, then it will generate 2 samples per min. So, if you have 10,000 time series sending data every 30s then you will be sending 20,000 samples per min to Monitrix. This will be around 864 mn samples per month and would cost 86.4 USD/month. Here's an explainer video on how metrics pricing is calculated - <a href='https://vimeo.com/973012522' target='_blank' className='mx-0 rounded px-0 py-0.5 text-primary-400' > Link </a>  ",
    title: "How are number of samples calculated for metrics pricing?",
  },
  {
    body: "Yes, feel free to reach out to us on <a mailto='aurobindolife888@gmail.com'>aurobindolife888@gmail.com</a> if you need a dedicated support plan or paid support for setting up your initial Monitrix setup",
    title: "Do you offer enterprise support plans?",
  },
  {
    body: "Teams which need enterprise support or features like SSO, Audit logs, etc. may find our enterprise plans valuable",
    title: "Who should use Enterprise plans?",
  },
];

const FAQBody = () => (
  <>
    {FAQs.map((faq, idx) => (
      <Card body={faq.body} idx={idx} title={faq.title} key={`${idx}${faq.title}`} />
    ))}
  </>
);

export default FAQBody;
